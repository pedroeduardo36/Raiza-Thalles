import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import GiftListSection from "@/components/sections/GiftListSection";
import Footer from "@/components/Footer";
import PasswordGate from "@/components/PasswordGate";
import { cn } from "../lib/utils";

export default function Home() {
  return (
    <PasswordGate>
      <div className={cn('flex', 'flex-col', 'min-h-[100dvh]', 'bg-background')}>
        <Header />
        <main className="flex-1">
          <HeroSection />
          <GiftListSection />
        </main>
        <Footer />
      </div>
    </PasswordGate>
  );
}
