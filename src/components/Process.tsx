import { MessageCircle, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Conte seu Objetivo",
    description: "Conversamos no WhatsApp sobre seu negócio e objetivos de venda."
  },
  {
    icon: Palette,
    number: "02",
    title: "Criamos sua Landing",
    description: "Nossa equipe desenvolve uma página única e otimizada para você."
  },
  {
    icon: Rocket,
    number: "03",
    title: "Lance e Venda",
    description: "Publicamos sua página e você começa a receber clientes!"
  }
];

const Process = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simples e <span className="text-primary">Rápido</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Do primeiro contato até sua landing page no ar em apenas 3 passos
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Connecting line (hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent opacity-30" />
                  )}
                  
                  <div className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
                    {/* Number badge */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground font-black text-xl flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
