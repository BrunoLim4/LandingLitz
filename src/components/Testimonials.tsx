import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    business: "Academia Fit Plus",
    text: "Depois da landing page, minhas matrículas aumentaram 280%! O investimento se pagou na primeira semana.",
    rating: 5
  },
  {
    name: "Marina Costa",
    business: "Consultoria Financeira",
    text: "Profissionalismo impecável. A página ficou linda e os leads não param de chegar. Recomendo demais!",
    rating: 5
  },
  {
    name: "Roberto Almeida",
    business: "Curso de Marketing",
    text: "Triplicamos as vendas do curso. A landing page é uma máquina de conversão. Valeu cada centavo!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resultados que{" "}
            <span className="text-primary">Falam por Si</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja o que nossos clientes têm a dizer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-border">
                <div className="font-bold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.business}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
