import ContactView from "@/screens/contact/ContactView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato - FT Ramatis",
  description:
    "Entre em contato conosco. Estamos prontos para responder suas dúvidas e ajudar você a fazer parte do nosso projeto.",
};

export default function ContatoPage(): React.JSX.Element {
  return <ContactView />;
}
