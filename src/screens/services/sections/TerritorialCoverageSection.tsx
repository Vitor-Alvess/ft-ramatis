import { neighborhoods } from "@/constants/neighborhoods";
import { units } from "@/constants/units";

export const TerritorialCoverageSection = (): React.JSX.Element => {
  const mainUnit = units.find((u) => u.isMain);
  const poles = units.filter((u) => !u.isMain);

  return (
    <section className="bg-background flex min-h-[60vh] items-center px-4 py-16">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-foreground mb-6 text-center text-3xl font-bold md:text-4xl">
            Abrangência territorial e atividades oferecidas
          </h3>
          <div className="space-y-8 text-lg leading-relaxed">
            {mainUnit && (
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <h4 className="text-primary mb-3 text-xl font-bold">{mainUnit.location}</h4>
                <div className="flex items-center gap-2 text-foreground/80 font-medium mb-4">
                  {mainUnit.name}
                </div>
                <div className="mt-4">
                  <ul className="text-foreground/70 text-base grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc ml-5">
                    {mainUnit.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="grid gap-6 md:grid-cols-2">
              {poles.map((pole) => (
                <div key={pole.id} className="bg-secondary/5 rounded-2xl p-6 border border-secondary/10">
                  <h4 className="text-secondary mb-3 text-xl font-bold">{pole.name}</h4>
                  <ul className="text-foreground/70 text-base list-disc ml-5 space-y-1">
                    {pole.courses.map((course) => (
                      <li key={course}>{course}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-foreground mb-4 text-xl font-semibold">Bairros atendidos:</h4>
              <ul className="text-foreground/80 grid grid-cols-2 gap-2 text-base md:grid-cols-3">
                {neighborhoods.map((neighborhood) => (
                  <li key={neighborhood} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                    {neighborhood}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-foreground/60 text-sm italic text-center">
              Não havendo impedimento para atendimento à outros bairros da cidade de Limeira SP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
