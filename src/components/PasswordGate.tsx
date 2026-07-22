"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const auth = sessionStorage.getItem("site_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "rt#2026") {
      sessionStorage.setItem("site_auth", "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  // Previne hidratação incorreta
  if (!isMounted) {
    return null; 
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className={cn("min-h-screen flex items-center justify-center bg-background p-4")}>
      <Card className="w-full max-w-md shadow-lg border-primary/20">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="font-headline text-3xl text-primary">Acesso Restrito</CardTitle>
          <CardDescription className="text-base mt-2">
            Por favor, insira a senha para acessar o site.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Digite a senha"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={cn(error && "border-destructive focus-visible:ring-destructive")}
              />
              {error && (
                <p className="text-xs text-destructive font-medium">Senha incorreta. Tente novamente.</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full text-md">
              Acessar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
