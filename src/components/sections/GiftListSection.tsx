"use client";

import { useState, useEffect } from "react";
import { Filter, ArrowUpDown } from "lucide-react";
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
import { cn } from "../../lib/utils";

export default function GiftListSection() {
  const [gifts, setGifts] = useState<Gift[]>(
    allGifts.filter((g) => g.category === "casamento"),
  );
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("available");
  const [sortOrder, setSortOrder] = useState("");
  const [visibleCount, setVisibleCount] = useState(32);



  useEffect(() => {
    fetchGiftsData();

    if (!supabase) return;

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
      if (supabase) {
        supabase.removeChannel(channel);
        supabase.removeChannel(overridesChannel);
      }
    };
  }, []);

  const fetchGiftsData = async () => {
    if (!supabase) {
      setGifts(allGifts.filter((g) => g.category === "casamento"));
      setIsLoading(false);
      return;
    }
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
            if (!item.is_deleted) newGifts.push(item);
          } else {
            overridesMap[item.gift_id] = item;
          }
        });
      }

      const staticGifts = allGifts
        .filter((g) => g.category === "casamento")
        .filter((gift) => !overridesMap[gift.id]?.is_deleted)
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
    if (!supabase) return;
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
      className={cn('w-full', 'py-12', 'md:py-24', 'lg:py-32', 'bg-background')}
    >
      <div className={cn('container', 'px-4', 'md:px-6')}>
        {/* Cabeçalho */}
        <div className={cn('flex', 'flex-col', 'items-center', 'justify-center', 'space-y-4', 'text-center')}>
          <div className="space-y-2">
            <h2 className={cn('text-3xl', 'font-bold', 'font-headline', 'tracking-tighter', 'sm:text-5xl', 'text-primary')}>
              Lista de Presentes
            </h2>
            <p className={cn('max-w-[900px]', 'text-muted-foreground', 'md:text-xl/relaxed', 'lg:text-base/relaxed', 'xl:text-xl/relaxed')}>
              Como funciona nossa lista: Você pode nos{" "}
              <strong>presentear de duas formas!</strong> Ao clicar em um item,{" "}
              <strong>
                use o QR Code para contribuir com o valor total ou uma cota via
                Pix.
              </strong>{" "}
              <strong>Se preferir dar o produto físico</strong>, basta usar o
              link da loja (disponível em alguns itens).
              Escolha a opção mais confortável para você; o que realmente
              importa é o seu carinho!
            </p>
          </div>
        </div>
        <Separator className="my-8" />

        {/* Barra de Filtros e Ordenação */}
        <div className={cn('flex', 'flex-col', 'sm:flex-row', 'gap-4', 'mb-8', 'p-4', 'bg-muted/30', 'rounded-lg', 'border', 'shadow-sm', 'items-center')}>
          <div className={cn('flex', 'items-center', 'gap-2', 'flex-1', 'w-full', 'sm:w-auto')}>
            <Filter className={cn('w-4', 'h-4', 'text-muted-foreground', 'hidden', 'sm:block')} />
            <span className={cn('text-sm', 'font-medium', 'whitespace-nowrap', 'hidden', 'sm:block')}>
              Exibir:
            </span>
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className={cn('w-full', 'sm:w-[200px]', 'bg-background')}>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os presentes</SelectItem>
                <SelectItem value="available">Disponíveis</SelectItem>
                <SelectItem value="gifted">Presenteados</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator orientation="vertical" className={cn('hidden', 'sm:block', 'h-8')} />

          <div className={cn('flex', 'items-center', 'gap-2', 'w-full', 'sm:w-auto')}>
            <ArrowUpDown className={cn('w-4', 'h-4', 'text-muted-foreground', 'hidden', 'sm:block')} />
            <span className={cn('text-sm', 'font-medium', 'hidden', 'sm:block')}>Ordenar:</span>
            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className={cn('w-full', 'sm:w-[180px]', 'bg-background')}>
                <SelectValue placeholder="Ordem" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Padrão</SelectItem>
                <SelectItem value="price-desc">Decrescente</SelectItem>
                <SelectItem value="price-asc">Crescente</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>


        {/* Grade de Presentes */}
        {isLoading ? (
          <div className={cn('flex', 'justify-center', 'items-center', 'py-20')}>
            <p className={cn('text-muted-foreground', 'animate-pulse')}>
              Carregando lista de presentes...
            </p>
          </div>
        ) : processedGifts.length > 0 ? (
          <div className="space-y-8">
            <div className={cn('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'xl:grid-cols-4', 'gap-4', 'pb-12')}>
              {processedGifts.slice(0, visibleCount).map((gift) => (
                <GiftCard
                  key={gift.id}
                  gift={gift}
                  onContribute={handleContribute}
                />
              ))}
            </div>
            {visibleCount < processedGifts.length && (
              <div className={cn('flex', 'justify-center', 'mt-8', 'pb-12')}>
                <Button
                  onClick={() => setVisibleCount((prev) => prev + 32)}
                  variant="outline"
                  size="lg"
                  className={cn('font-semibold', 'px-8', 'py-6')}
                >
                  Ver mais presentes
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className={cn('text-center', 'py-20', 'bg-muted/20', 'rounded-lg', 'border', 'border-dashed')}>
            <p className={cn('text-muted-foreground', 'mb-4')}>
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
