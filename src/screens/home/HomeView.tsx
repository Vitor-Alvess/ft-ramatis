import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RegistrationHeroSection } from "@/screens/home/sections/RegistrationHeroSection";
import { ProgramsSection } from "@/screens/home/sections/ProgramsSection";
import { RequirementsSection } from "@/screens/home/sections/RequirementsSection";

export default function HomeView(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <RegistrationHeroSection />
        <ProgramsSection />
        <RequirementsSection />
      </main>
      <Footer />
    </div>
  );
}