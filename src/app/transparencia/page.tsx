import type { Metadata } from "next";
import TransparencyView from "@/screens/transparency/TransparencyView";

export const metadata: Metadata = {
  title: "Transparência - FT Ramatis",
  description:
    "Acompanhe todas as informações sobre nossa organização, documentos, balanços e relatórios.",
};

export default function TransparenciaPage(): React.JSX.Element {
  return <TransparencyView />;
}

