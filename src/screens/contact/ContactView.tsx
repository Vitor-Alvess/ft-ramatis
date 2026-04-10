import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import { ContactSection } from "@/screens/contact/sections/ContactSection";

export default function ContactView(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
