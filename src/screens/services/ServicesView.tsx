import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ServiceDescriptionSection } from "@/screens/services/sections/ServiceDescriptionSection";
import { TerritorialCoverageSection } from "@/screens/services/sections/TerritorialCoverageSection";

export default function ServicesView(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ServiceDescriptionSection />
        <TerritorialCoverageSection />
      </main>
      <Footer />
    </div>
  );
}
