"use client";

import { useState } from "react";
import Image from "next/image";
import image1 from "@/assets/Images/image1.jpg";
import image2 from "@/assets/Images/image2.jpg";
import image3 from "@/assets/Images/image3.jpg";
import image4 from "@/assets/Images/image4.jpg";
import image5 from "@/assets/Images/image5.jpg";

const galleryImages = [image1, image2, image3, image4, image5];

export const GallerySection = (): React.JSX.Element => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="bg-background px-4 py-12">
        <div className="container mx-auto">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-foreground mb-8 text-center text-3xl font-bold md:text-4xl">
              Galeria de Fotos
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`Foto ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal para visualização ampliada */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Fechar"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                selectedImage > 0 ? selectedImage - 1 : galleryImages.length - 1
              );
            }}
            className="absolute left-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Anterior"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                selectedImage < galleryImages.length - 1
                  ? selectedImage + 1
                  : 0
              );
            }}
            className="absolute right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Próxima"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
          <div
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage]}
              alt={`Foto ${selectedImage + 1}`}
              width={1200}
              height={1200}
              className="max-h-[90vh] w-auto rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

