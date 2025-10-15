import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const whatsappNumber = "5577988500087"; // Substitua pelo número real
  const whatsappMessage = "Olá! Vim pelo site e quero saber mais sobre as landing pages!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Button
      onClick={() => window.open(whatsappUrl, "_blank")}
      size="lg"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.7)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.9)] transition-all duration-300 animate-float p-0"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};

export default WhatsAppFloat;
