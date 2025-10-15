import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/litz-removebg-preview.png";

const Navbar = () => {
  const whatsappNumber = "5577988500087"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de criar uma landing page profissional.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-25 w-24 object-contain" />
            <span className="text-2xl font-bold text-primary">LandingLitz</span>
          </div>
          
          <Button
            onClick={() => window.open(whatsappUrl, "_blank")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] transition-all duration-300"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar no WhatsApp
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
