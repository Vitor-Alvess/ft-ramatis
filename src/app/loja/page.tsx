import type { Metadata } from "next";
import StoreView from "@/screens/store/StoreView";

export const metadata: Metadata = {
  title: "Loja - FT Ramatis",
  description: "Nossa loja está em construção. Em breve você poderá encontrar produtos e itens exclusivos aqui.",
};

export default function LojaPage(): React.JSX.Element {
  return <StoreView />;
}

