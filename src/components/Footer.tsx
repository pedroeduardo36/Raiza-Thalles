import { Heart } from "lucide-react";
import { cn } from "../lib/utils";

export default function Footer() {
  return (
    <footer className={cn('w-full', 'bg-card', 'border-t', 'py-6')}>
      <div className={cn('container', 'flex', 'flex-col', 'items-center', 'justify-center', 'gap-2', 'text-center', 'text-sm', 'text-muted-foreground')}>
        <div className={cn('flex', 'items-center', 'gap-2')}>
          <span>Feito com</span>
          <Heart className={cn('h-4', 'w-4', 'fill-primary', 'text-primary')} />
          <span>por</span>
        </div>
        <p className={cn('font-headline', 'text-lg', 'font-semibold', 'text-foreground')}>
          Pedro Eduardo • Vilamargo ©
          <br />
          (Raiza & Thalles)
        </p>
        <p>© 2026</p>
      </div>
    </footer>
  );
}
