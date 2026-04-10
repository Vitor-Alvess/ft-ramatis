import Image from "next/image";
import pixQRCode from "@/assets/pix.png";

export const HowToHelpSection = (): React.JSX.Element => {
  const cnpj = "03.678.218/0001-98";

  return (
    <section className="bg-background flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 mx-auto max-w-4xl">
            <h2 className="text-foreground text-4xl mb-10 font-bold md:text-5xl">
              Como Ajudar
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80 text-center">
              <p>
                Sua doação é fundamental para continuarmos desenvolvendo nosso trabalho social
                voltado para crianças e adolescentes em situação de vulnerabilidade social.
              </p>
              <p>
                Com sua contribuição, podemos oferecer oficinas lúdicas, culturais, esportivas e
                socioeducativas, proporcionando um ambiente seguro e acolhedor para o desenvolvimento
                integral desses jovens.
              </p>
              <p>
                Todas as doações são utilizadas exclusivamente para manter e ampliar nossos projetos
                sociais, garantindo que mais crianças e adolescentes tenham acesso a atividades
                que contribuem para seu crescimento pessoal e social.
              </p>
            </div>
          <h2 className="text-foreground mt-20 mb-10 text-4xl font-bold md:text-5xl">
              Faça sua Doação via PIX
            </h2>
            <div className="mx-auto max-w-md space-y-6">
              <div className="rounded-lg border border-foreground/10 bg-background p-6 shadow-lg">
                <div className="mb-6 flex justify-center">
                  <div className="relative h-64 w-64 overflow-hidden rounded-lg border-2 border-primary/20">
                    <Image
                      src={pixQRCode}
                      alt="QR Code PIX"
                      fill
                      className="object-contain"
                      sizes="256px"
                    />
                  </div>
                </div>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-foreground/60">
                      CNPJ:
                    </p>
                    <p className="text-xl font-bold text-foreground">{cnpj}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/70">
                    Escaneie o QR Code acima com o aplicativo do seu banco para fazer sua doação
                    via PIX de forma rápida e segura.
                  </p>
                </div>
              </div>
            </div>
    </section>
  );
};

