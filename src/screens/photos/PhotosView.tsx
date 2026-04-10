import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/screens/photos/sections/GallerySection";

export default function PhotosView(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="from-primary/10 via-background to-secondary/10 bg-gradient-to-br px-4 py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Fotos
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-foreground/70">
                Confira os momentos e atividades do nosso projeto
              </p>
            </div>
          </div>
        </section>
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}

