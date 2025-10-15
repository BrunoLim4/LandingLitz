import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Design profissional e moderno",
  "Entrega em até 48 horas",
  "Responsivo para todos os dispositivos",
  "Otimizado para conversão",
  "SEO configurado",
  "Suporte completo"
];

const CTA = () => {
  const whatsappNumber = "5577988500087"; // Substitua pelo número real
  const whatsappMessage = "Quero criar minha landing page agora! Vamos começar?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border-2 border-primary/30 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_hsl(var(--primary)/0.3)] animate-fade-in">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Pronto para{" "}
                <span className="text-primary">Aumentar suas Vendas?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Não perca mais clientes por falta de uma landing page profissional
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-secondary/50 rounded-xl px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                onClick={() => window.open(whatsappUrl, "_blank")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-7 shadow-[0_0_40px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_60px_hsl(var(--primary)/0.9)] transition-all duration-300 animate-glow"
              >
                Começar Agora pelo WhatsApp
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              
              <p className="text-sm text-muted-foreground mt-6">
                ⚡ Resposta em até 1 hora • 💰 Planos a partir de R$ 497
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
