"use client";

import { Button } from "@/components/Button";
import { contactInfo } from "@/constants/contacts";

export const RegistrationHeroSection = (): React.JSX.Element => {
  const handleContact = (): void => {
    window.location.href = `tel:${contactInfo.phone.replace(/\s/g, "")}`;
  };

  const handleWhatsApp = (): void => {
    window.open(
      `https://wa.me/55${contactInfo.whatsapp.replace(/[^\d]/g, "")}`,
      "_blank"
    );
  };

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-primary/10 via-background to-secondary/10 px-4 py-20">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex flex-col items-center gap-3">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Matrículas Abertas 2026
            </div>
            <div className="text-secondary font-bold text-sm uppercase tracking-wider">
              100% Gratuito
            </div>
          </div>
          <h1 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Venha fazer parte do projeto{" "}
            <span className="text-primary">Exercendo Nossa Cidadania</span>
          </h1>
          <p className="mb-8 text-lg text-foreground/70 md:text-xl">
            Oferecemos oficinas de dança, circo, flauta, grafitti, capoeira,
            canto e violão, escolinha de futebol, criatividade e expressão e
            atividades socioeducativas para crianças e adolescentes.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              text="Fazer Matrícula"
              onClick={() => (window.location.href = "/matricula")}
              size="lg"
              variant="primary"
            />
            <Button
              text="WhatsApp"
              onClick={handleWhatsApp}
              size="lg"
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

