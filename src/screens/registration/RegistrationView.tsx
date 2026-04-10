import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RegistrationFormSection } from "@/screens/registration/sections/RegistrationFormSection";
import { RequirementsSection } from "@/screens/home/sections/RequirementsSection";

export default function RegistrationView(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-background to-primary/5">
        <div className="pt-10 text-center container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Matrícula 2025</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Vagas abertas para nossas oficinas! Faça sua pré-inscrição agora e aguarde nosso contato.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-semibold">
            <span>✨</span> 100% Gratuito
          </div>
        </div>
        <RegistrationFormSection />
        <RequirementsSection />
      </main>
      <Footer />
    </div>
  );
}
