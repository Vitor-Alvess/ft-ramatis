import { directors } from "@/constants/transparency";

export const DirectorsSection = (): React.JSX.Element => {
  return (
    <section className="bg-background px-4 py-12">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-foreground mb-8 text-center text-3xl font-bold md:text-4xl">
            Relação nominal dos dirigentes
          </h3>
          <div className="border-foreground/10 bg-background rounded-lg border p-8 shadow-sm">
            {directors.map((director) => (
              <div key={director.position} className="mb-4 last:mb-0">
                <p className="text-foreground text-lg">
                  <span className="font-bold">{director.position}:</span> {director.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
