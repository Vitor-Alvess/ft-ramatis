export interface IUnit {
  id: string;
  name: string;
  location?: string;
  courses: string[];
  isMain?: boolean;
}

export const units: IUnit[] = [
  {
    id: "nucleus",
    name: "Núcleo Central (Sede)",
    location: "Jardim Caieras",
    isMain: true,
    courses: [
      "Dança",
      "Circo",
      "Flauta",
      "Grafitti",
      "Capoeira",
      "Canto",
      "Violão",
      "Escolinha de Futebol",
      "Criatividade e Expressão",
      "Atividades Socioeducativas",
    ],
  },
  {
    id: "dores",
    name: "Polo C.C Dores I",
    courses: ["Capoeira", "Jogos e brincadeiras", "Socioeducativa", "Flauta"],
  },
  {
    id: "geada",
    name: "Polo CEU Geada / C.C Belinha Ometto",
    courses: ["Capoeira"],
  },
];
