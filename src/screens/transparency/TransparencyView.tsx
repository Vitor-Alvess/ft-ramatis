import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ataDocuments,
  balanceDocuments,
  statuteDocuments,
  workPlanDocuments,
  activityReportDocuments,
} from "@/constants/transparency";
import { DocumentsSection } from "@/screens/transparency/sections/DocumentsSection";
import { PortalSection } from "@/screens/transparency/sections/PortalSection";
import { DirectorsSection } from "@/screens/transparency/sections/DirectorsSection";
import { RegulationsSection } from "@/screens/transparency/sections/RegulationsSection";

export default function TransparencyView(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col max-w-7xl mx-auto">
      <Header />
      <main className="flex-1">
        <section className="bg-background px-4 py-16">
          <div className="container mx-auto">
            <div className="mx-auto text-center">
              <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Transparência
              </h1>
              <p className="mx-auto text-lg text-foreground/70">
                Acompanhe todas as informações sobre nossa organização, documentos, balanços e
                relatórios.
              </p>
            </div>
          </div>
        </section>

        <PortalSection />
        <DirectorsSection />
        <DocumentsSection title="Ata" documents={ataDocuments} />
        <DocumentsSection title="Balanços" documents={balanceDocuments} />
        <DocumentsSection title="Estatuto" documents={statuteDocuments} />
        <DocumentsSection title="Plano de trabalho" documents={workPlanDocuments} />
        <DocumentsSection
          title="Relatório de atividades"
          documents={activityReportDocuments}
        />
        <RegulationsSection />
      </main>
      <Footer />
    </div>
  );
}

