export const RegulationsSection = (): React.JSX.Element => {
  return (
    <section className="bg-background px-4 py-12">
      <div className="container mx-auto">
        <div className="mx-auto">
          <h3 className="text-foreground mb-8 text-center text-3xl font-bold md:text-4xl">
            Regulamentos
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-foreground/10 bg-background p-6 shadow-sm">
              <h4 className="mb-4 text-xl font-bold text-foreground">
                Regulamento de compras
              </h4>
              <p className="mb-4 text-foreground/70">
                Normas e procedimentos para aquisição de bens e serviços pela OSC FT Ramatis.
              </p>
              <a
                href="/documents/Regulamento-de-compras.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <span>Ver documento</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
            <div className="rounded-lg border border-foreground/10 bg-background p-6 shadow-sm">
              <h4 className="mb-4 text-xl font-bold text-foreground">
                Regulamento de contratações
              </h4>
              <p className="mb-4 text-foreground/70">
                Normas e procedimentos para contratação de profissionais pela OSC FT Ramatis.
              </p>
              <a
                href="/documents/Regulamento-de-contratacoes.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <span>Ver documento</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

