import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HowToHelpSection } from "@/screens/donation/sections/HowToHelpSection";

export default function DonationView(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HowToHelpSection />
      </main>
      <Footer />
    </div>
  );
}

