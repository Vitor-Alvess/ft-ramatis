import { transparencyPortalUrl } from "@/constants/transparency";

export const PortalSection = (): React.JSX.Element => {
  return (
    <section className="bg-background px-4 py-12">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-foreground mb-6 text-3xl font-bold md:text-4xl">
            Portal da transparência
          </h3>
          <p className="mb-8 text-lg leading-relaxed text-foreground/80">
            Clique no botão abaixo para ser redirecionado ao portal da transparência (Sistema
            SGTS/ESCAM).
          </p>
          <a
            href={transparencyPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Portal da transparência
          </a>
        </div>
      </div>
    </section>
  );
};

