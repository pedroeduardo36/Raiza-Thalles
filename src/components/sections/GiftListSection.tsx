"use client";

import { useState, useEffect } from "react";
import { Filter, ArrowUpDown, Plus } from "lucide-react";
import GiftCard from "@/components/GiftCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { allGifts } from "@/lib/gifts";
import { supabase } from "@/lib/supabase";
import type { Gift } from "@/lib/gifts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function GiftListSection() {
  const [gifts, setGifts] = useState<Gift[]>(
    allGifts.filter((g) => g.category === "casamento"),
  );
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("available");
  const [sortOrder, setSortOrder] = useState("");
  const [visibleCount, setVisibleCount] = useState(32);

  // Estados para o Modal de Novo Presente
  const [isNewGiftModalOpen, setIsNewGiftModalOpen] = useState(false);
  const [newGiftName, setNewGiftName] = useState("");
  const [newGiftImage, setNewGiftImage] = useState("");
  const [newGiftGoal, setNewGiftGoal] = useState("");
  const [newGiftDesc, setNewGiftDesc] = useState("");
  const [newGiftStore, setNewGiftStore] = useState("");
  const [isSavingNewGift, setIsSavingNewGift] = useState(false);

  useEffect(() => {
    fetchGiftsData();

    const channel = supabase
      .channel("realtime_contributions")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "contributions" },
        (payload) => {
          console.log("Nova doação recebida em tempo real:", payload);
          fetchGiftsData();
        },
      )
      .subscribe();

    const overridesChannel = supabase
      .channel("realtime_overrides")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "gift_overrides" },
        () => {
          fetchGiftsData();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
      supabase.removeChannel(overridesChannel);
    };
  }, []);

  const fetchGiftsData = async () => {
    try {
      const [contribResponse, overridesResponse] = await Promise.all([
        supabase.from("contributions").select("gift_id, amount"),
        supabase.from("gift_overrides").select("*")
      ]);

      if (contribResponse.error) throw contribResponse.error;
      if (overridesResponse.error && overridesResponse.error.code !== "42P01") {
        throw overridesResponse.error;
      }

      const totalPorPresente: Record<number, number> = {};
      if (contribResponse.data) {
        contribResponse.data.forEach((item) => {
          totalPorPresente[item.gift_id] =
            (totalPorPresente[item.gift_id] || 0) + Number(item.amount);
        });
      }

      const overridesMap: Record<number, any> = {};
      const newGifts: any[] = [];
      
      if (overridesResponse.data) {
        overridesResponse.data.forEach((item) => {
          if (item.is_new) {
            newGifts.push(item);
          } else {
            overridesMap[item.gift_id] = item;
          }
        });
      }

      const staticGifts = allGifts
        .filter((g) => g.category === "casamento")
        .map((gift) => {
          const override = overridesMap[gift.id];
          return {
            ...gift,
            name: override?.name || gift.name,
            image: override?.image || gift.image,
            goal: override?.goal ? Number(override.goal) : gift.goal,
            description: override?.description || gift.description,
            storeUrl: override?.store_url || gift.storeUrl,
            current: totalPorPresente[gift.id] || 0,
          };
        });

      const mappedNewGifts = newGifts.map((newItem) => ({
        id: newItem.gift_id,
        name: newItem.name || "Novo Presente",
        image: newItem.image || "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80",
        goal: newItem.goal ? Number(newItem.goal) : 0,
        description: newItem.description || "Descrição do presente.",
        storeUrl: newItem.store_url || "",
        category: "casamento" as const,
        current: totalPorPresente[newItem.gift_id] || 0,
      }));

      setGifts([...staticGifts, ...mappedNewGifts]);
    } catch (error) {
      console.error(error);
      // Fallback em caso de erro no Supabase
      setGifts(allGifts.filter((g) => g.category === "casamento"));
    } finally {
      setIsLoading(false);
    }
  };

  const handleContribute = async (
    giftId: number,
    giftName: string,
    amount: number,
    name: string,
    message: string,
  ) => {
    // Atualização otimista (UI)
    setGifts((prevGifts) =>
      prevGifts.map((gift) =>
        gift.id === giftId ? { ...gift, current: gift.current + amount } : gift,
      ),
    );

    // Salvar no Banco
    const { error } = await supabase.from("contributions").insert([
      {
        gift_id: giftId,
        gift_name: giftName,
        amount: amount,
        guest_name: name,
        message: message,
      },
    ]);

    if (error) {
      console.error("Erro ao salvar doação:", error);
      alert("Erro ao processar a doação. Tente novamente.");
      fetchGiftsData();
    }
  };

  const handleEdit = async (
    giftId: number,
    updates: {
      image?: string;
      goal?: number;
      description?: string;
      store_url?: string;
    }
  ) => {
    // Atualização otimista
    setGifts((prevGifts) =>
      prevGifts.map((gift) =>
        gift.id === giftId
          ? {
              ...gift,
              image: updates.image || gift.image,
              goal: updates.goal || gift.goal,
              description: updates.description || gift.description,
              storeUrl: updates.store_url || gift.storeUrl,
            }
          : gift
      )
    );

    // Salvar no Banco
    const { error } = await supabase.from("gift_overrides").upsert({
      gift_id: giftId,
      ...updates,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Erro ao salvar edições:", error);
      alert("Erro ao salvar edições. Tente novamente.");
      fetchGiftsData();
    }
  };

  const handleOpenNewGiftModal = () => {
    setNewGiftName("");
    setNewGiftImage("");
    setNewGiftGoal("");
    setNewGiftDesc("");
    setNewGiftStore("");
    setIsNewGiftModalOpen(true);
  };

  const handleSaveNewGift = async () => {
    if (!newGiftName) return alert("O nome do presente é obrigatório.");

    setIsSavingNewGift(true);
    // Gera um ID negativo aleatório seguro para o tipo INTEGER do Postgres
    const newGiftId = -Math.floor(Math.random() * 1000000);
    
    const { error } = await supabase.from("gift_overrides").insert({
      gift_id: newGiftId,
      name: newGiftName,
      image: newGiftImage || null,
      goal: newGiftGoal ? Number(newGiftGoal) : null,
      description: newGiftDesc || null,
      store_url: newGiftStore || null,
      is_new: true,
      updated_at: new Date().toISOString(),
    });

    setIsSavingNewGift(false);

    if (error) {
      console.error("Erro ao criar novo presente:", error);
      alert(`Erro ao criar novo presente: ${error.message}`);
    } else {
      setIsNewGiftModalOpen(false);
      fetchGiftsData();
    }
  };

  const processedGifts = gifts
    .filter((gift) => {
      if (filter === "available") return gift.current < gift.goal;
      if (filter === "gifted") return gift.current >= gift.goal;
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === "price-asc") return a.goal - b.goal;
      if (sortOrder === "price-desc") return b.goal - a.goal;
      return a.id - b.id;
    });

  return (
    <section
      id="presentes"
      className="w-full py-12 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4 md:px-6">
        {/* Cabeçalho */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
              Lista de Presentes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Como funciona nossa lista: Você pode nos{" "}
              <strong>presentear de duas formas!</strong> Ao clicar em um item,{" "}
              <strong>
                use o QR Code para contribuir com o valor total ou uma cota via
                Pix.
              </strong>{" "}
              <strong>Se preferir dar o produto físico</strong>, basta usar o
              link da loja (disponível em alguns itens) e mandar{" "}
              <strong>entregar no nosso endereço.</strong>{" "}
              Escolha a opção mais confortável para você; o que realmente
              importa é o seu carinho!
            </p>
          </div>
        </div>
        <Separator className="my-8" />

        {/* Barra de Filtros e Ordenação */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-muted/30 rounded-lg border shadow-sm items-center">
          <div className="flex items-center gap-2 flex-1 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-muted-foreground hidden sm:block" />
            <span className="text-sm font-medium whitespace-nowrap hidden sm:block">
              Exibir:
            </span>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full sm:w-[200px] bg-background">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os presentes</SelectItem>
                <SelectItem value="available">Disponíveis</SelectItem>
                <SelectItem value="gifted">Presenteados</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator orientation="vertical" className="hidden sm:block h-8" />

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <ArrowUpDown className="w-4 h-4 text-muted-foreground hidden sm:block" />
            <span className="text-sm font-medium hidden sm:block">Ordenar:</span>
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-full sm:w-[180px] bg-background">
                <SelectValue placeholder="Ordem" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Padrão</SelectItem>
                <SelectItem value="price-desc">Decrescente</SelectItem>
                <SelectItem value="price-asc">Crescente</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Separator orientation="vertical" className="hidden sm:block h-8" />

          <Button onClick={handleOpenNewGiftModal} variant="default" className="w-full sm:w-auto">
            <Plus className="w-4 h-4 mr-2" />
            Novo Presente
          </Button>
        </div>

        {/* Modal de Adicionar Novo Presente */}
        <Dialog open={isNewGiftModalOpen} onOpenChange={setIsNewGiftModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-primary">Adicionar Novo Presente</DialogTitle>
              <DialogDescription>
                Crie um novo presente para a sua lista.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label>Nome do Presente *</Label>
                <Input
                  value={newGiftName}
                  onChange={(e) => setNewGiftName(e.target.value)}
                  placeholder="Ex: Jogo de Panelas"
                />
              </div>
              <div className="space-y-2">
                <Label>Imagem (URL)</Label>
                <Input
                  value={newGiftImage}
                  onChange={(e) => setNewGiftImage(e.target.value)}
                  placeholder="https://..."
                />
              </div>
              <div className="space-y-2">
                <Label>Valor Total (Meta)</Label>
                <Input
                  type="number"
                  value={newGiftGoal}
                  onChange={(e) => setNewGiftGoal(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-2">
                <Label>Link da Loja (Opcional)</Label>
                <Input
                  value={newGiftStore}
                  onChange={(e) => setNewGiftStore(e.target.value)}
                  placeholder="https://..."
                />
              </div>
              <div className="space-y-2">
                <Label>Descrição (Opcional)</Label>
                <Textarea
                  value={newGiftDesc}
                  onChange={(e) => setNewGiftDesc(e.target.value)}
                  placeholder="Descrição detalhada do presente..."
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleSaveNewGift} disabled={isSavingNewGift}>
                {isSavingNewGift ? "Salvando..." : "Salvar Presente"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Grade de Presentes */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-muted-foreground animate-pulse">
              Carregando lista de presentes...
            </p>
          </div>
        ) : processedGifts.length > 0 ? (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-12">
              {processedGifts.slice(0, visibleCount).map((gift) => (
                <GiftCard
                  key={gift.id}
                  gift={gift}
                  onContribute={handleContribute}
                  onEdit={handleEdit}
                />
              ))}
            </div>
            {visibleCount < processedGifts.length && (
              <div className="flex justify-center mt-8 pb-12">
                <Button 
                  onClick={() => setVisibleCount((prev) => prev + 32)}
                  variant="outline"
                  size="lg"
                  className="font-semibold px-8 py-6"
                >
                  Ver mais presentes
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-lg border border-dashed">
            <p className="text-muted-foreground mb-4">
              Nenhum presente encontrado com os filtros selecionados.
            </p>
            <Button variant="outline" onClick={() => setFilter("all")}>
              Ver todos os presentes
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
