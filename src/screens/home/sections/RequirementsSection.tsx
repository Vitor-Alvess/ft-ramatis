import { registrationRequirements } from "@/constants/requirements";

export const RequirementsSection = (): React.JSX.Element => {
  return (
    <section className="bg-gradient-to-br from-secondary/5 to-primary/5 px-4 py-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              Requisitos para Matrícula
            </h2>
            <p className="text-lg text-foreground/60">
              Prepare os documentos necessários para realizar sua matrícula
            </p>
          </div>
          <div className="rounded-lg border border-foreground/10 bg-background p-8 shadow-lg">
            <ul className="space-y-4">
              {registrationRequirements.map((requirement) => (
                <li key={requirement} className="flex items-start gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-foreground">
                    {requirement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

