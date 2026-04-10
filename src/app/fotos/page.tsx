import type { Metadata } from "next";
import PhotosView from "@/screens/photos/PhotosView";

export const metadata: Metadata = {
  title: "Fotos - FT Ramatis",
  description: "Confira os momentos e atividades do nosso projeto através da nossa galeria de fotos.",
};

export default function FotosPage(): React.JSX.Element {
  return <PhotosView />;
}

