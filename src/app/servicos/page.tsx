import ServicesView from "@/screens/services/ServicesView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços e Oficinas - FT Ramatis",
  description:
    "Conheça nossas oficinas e serviços oferecidos para crianças e adolescentes de 06 a 15 anos.",
};

export default function ServicosPage(): React.JSX.Element {
  return <ServicesView />;
}
