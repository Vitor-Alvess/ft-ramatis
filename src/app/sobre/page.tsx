import AboutView from "@/screens/about/AboutView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre - FT Ramatis",
  description:
    "Conheça a história da Fraternidade do Triângulo Ramatis e nosso trabalho social de 21 anos.",
};

export default function SobrePage(): React.JSX.Element {
  return <AboutView />;
}
