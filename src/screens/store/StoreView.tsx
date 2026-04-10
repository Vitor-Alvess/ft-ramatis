import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function StoreView(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 flex min-h-[70vh] items-center px-4 py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-foreground mb-10 text-4xl font-bold md:text-5xl lg:text-6xl">
                Em breve
              </h2>
              <p className="mb-8 text-lg text-foreground/70 md:text-xl">
                Nossa loja está em construção. Em breve você poderá encontrar produtos e itens
                exclusivos aqui.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

