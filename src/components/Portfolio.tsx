import portfolioImage from "@/assets/portfolio.jpg";

const niches = [
  "E-commerce",
  "Serviços",
  "Consultoria",
  "Infoprodutos",
  "Saúde & Fitness",
  "Imóveis",
  "Educação",
  "Tecnologia"
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Landing Pages para{" "}
            <span className="text-primary">Qualquer Nicho</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experiência comprovada em diversos segmentos de mercado
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Portfolio Image */}
          <div className="relative mb-12 animate-slide-up">
            <div className="rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_hsl(var(--primary)/0.3)]">
              <img 
                src={portfolioImage} 
                alt="Exemplos de Landing Pages" 
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>

          {/* Niches Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {niches.map((niche, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl px-6 py-4 text-center font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {niche}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
