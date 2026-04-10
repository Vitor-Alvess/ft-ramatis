import type { Metadata } from "next";
import DonationView from "@/screens/donation/DonationView";

export const metadata: Metadata = {
  title: "Doe - FT Ramatis",
  description:
    "Faça sua doação e ajude a continuar nosso trabalho social com crianças e adolescentes. Aceitamos doações via PIX.",
};

export default function DoePage(): React.JSX.Element {
  return <DonationView />;
}

