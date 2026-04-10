"use client";

import { Carousel } from "@/components/Carousel";
import { courses } from "@/constants/courses";
import Image from "next/image";
import { Button } from "@/components/Button";
import { contactInfo } from "@/constants/contacts";

export const ProgramsSection = (): React.JSX.Element => {
  return (
    <section className="bg-background px-4 py-16 ">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold md:text-4xl">Nossas Oficinas</h2>
          <p className="text-foreground/60 mx-auto max-w-2xl text-lg">
            Oferecemos uma variedade de atividades para crianças e adolescentes de 06 a 15 anos de
            idade
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <Carousel autoPlay={true} autoPlayInterval={4000} showDots={true} showArrows={true}>
            {courses.map((course) => (
              <div
                key={course.id}
                className="border-foreground/10 bg-background mx-4 overflow-hidden rounded-xl border shadow-lg transition-all hover:shadow-xl"
              >
                <div className="relative h-100 w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-foreground mb-2 text-2xl font-bold">{course.name}</h3>
                  {course.ageRange && (
                    <p className="text-foreground/70 text-base">
                      <span className="font-semibold">Faixa etária:</span> {course.ageRange}
                    </p>
                  )}
                  {course.description && (
                    <p className="text-foreground/60 mt-3 text-sm">{course.description}</p>
                  )}
                </div>
              </div>
            ))}
          </Carousel>
          <div className="mt-16 text-center">
            <p className="text-foreground/60 mb-6 text-lg">
              Quer ver mais do que acontece em nossas oficinas e acompanhar nossos eventos?
            </p>
            <Button
              text="Veja mais no Instagram"
              onClick={() => window.open(contactInfo.instagram, "_blank")}
              size="lg"
              variant="outline"
              className="group"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
