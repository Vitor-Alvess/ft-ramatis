import { IPdfDocument } from "@/constants/transparency";

interface IDocumentsSectionProps {
  title: string;
  documents: IPdfDocument[];
}

export const DocumentsSection = ({
  title,
  documents,
}: IDocumentsSectionProps): React.JSX.Element => {
  return (
    <section className="bg-background px-4 py-12">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-foreground mb-8 text-center text-3xl font-bold md:text-4xl">
            {title}
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <a
                key={doc.file}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center rounded-lg border border-foreground/10 bg-background p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="mb-2 text-center text-sm font-semibold text-foreground">
                  PDF
                </p>
                <p className="text-center text-xs text-foreground/70">
                  {doc.name}
                </p>
                {doc.year && (
                  <p className="mt-2 text-center text-xs text-foreground/50">
                    {doc.year}
                  </p>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

