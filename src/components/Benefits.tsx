import { Rocket, Target, Smartphone, Zap, TrendingUp, Shield } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Entrega Rápida",
    description: "Sua landing page pronta em até 48 horas, sem burocracia."
  },
  {
    icon: Target,
    title: "Focado em Conversão",
    description: "Design estratégico para transformar visitantes em clientes reais."
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Perfeito em qualquer dispositivo: celular, tablet ou desktop."
  },
  {
    icon: Zap,
    title: "Carregamento Rápido",
    description: "Performance otimizada para não perder nenhuma venda."
  },
  {
    icon: TrendingUp,
    title: "SEO Otimizado",
    description: "Configurado para aparecer no Google e atrair mais clientes."
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Certificado SSL e proteção contra ataques inclusos."
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Por Que Escolher Nossas{" "}
            <span className="text-primary">Landing Pages?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Cada detalhe pensado para maximizar suas vendas online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
