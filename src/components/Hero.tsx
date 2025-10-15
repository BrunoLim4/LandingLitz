import { ArrowRight, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const whatsappNumber = "5577988500087"; // Substitua pelo número real
  const whatsappMessage = "Quero uma landing page que converte! Vamos conversar?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-semibold animate-glow">
            <Zap className="h-4 w-4" />
            Landing Pages que Convertem
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Transforme Visitantes em{" "}
            <span className="text-primary drop-shadow-[0_0_30px_hsl(var(--primary)/0.8)]">
              Clientes
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Landing pages profissionais e otimizadas para conversão. 
            Criadas sob medida para o seu negócio em até 48 horas.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-primary">+300%</div>
                <div className="text-sm text-muted-foreground">Mais Conversões</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold text-primary">48h</div>
                <div className="text-sm text-muted-foreground">Entrega Rápida</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() => window.open(whatsappUrl, "_blank")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-[0_0_30px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.9)] transition-all duration-300 animate-glow"
            >
              Criar Minha Landing Page
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Badge */}
          <p className="text-sm text-muted-foreground pt-4">
            ✓ Sem mensalidades • ✓ Responsivo • ✓ Otimizado para Google
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </section>
  );
};

export default Hero;
