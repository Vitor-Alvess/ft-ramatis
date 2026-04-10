import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { AboutSection } from "@/screens/about/sections/AboutSection";

export default function AboutView(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
