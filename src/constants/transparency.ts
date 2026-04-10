export interface IPdfDocument {
  name: string;
  file: string;
  year?: string;
}

export interface IDirector {
  position: string;
  name: string;
}

export const ataDocuments: IPdfDocument[] = [
  { name: "ATA-2021.pdf", file: "/documents/ATA-2021.pdf", year: "2021" },
  { name: "ATA-2024.pdf", file: "/documents/ATA-2024.pdf", year: "2024" },
];

export const balanceDocuments: IPdfDocument[] = [
  { name: "Balanço e DRE 2021.pdf", file: "/documents/Balanço-e-DRE-2021.pdf", year: "2021" },
  { name: "Balanço e DRE 2023.pdf", file: "/documents/Balanço-e-DRE-2023.pdf", year: "2023" },
  { name: "BALANÇO 2024.pdf", file: "/documents/BALANÇO-2024.pdf", year: "2024" },
];

export const statuteDocuments: IPdfDocument[] = [
  { name: "ESTATUTO-2021.pdf", file: "/documents/ESTATUTO-2021.pdf", year: "2021" },
  { name: "ESTATUTO-2024.pdf", file: "/documents/ESTATUTO-2024.pdf", year: "2024" },
];

export const workPlanDocuments: IPdfDocument[] = [
  { name: "PLANO DE TRABALHO 2022", file: "/documents/PLANO-DE-TRABALHO-2022.pdf", year: "2022" },
  { name: "PLANO DE TRABALHO 2023 - 2025", file: "/documents/PLANO-DE-TRABALHO-2023-2025.pdf", year: "2023-2025" },
];

export const activityReportDocuments: IPdfDocument[] = [
  { name: "RELATÓRIO DE CUMPRIMENTO DE OBJETO 2021", file: "/documents/RELATÓRIO-DE-CUMPRIMENTO-DE-OBJETO-2021.pdf", year: "2021" },
  { name: "RELATÓRIO DE CUMPRIMENTO DE OBJETO 2024", file: "/documents/RELATÓRIO-DE-CUMPRIMENTO-DE-OBJETO-2024.pdf", year: "2024" },
];

export const directors: IDirector[] = [
  { position: "Presidenta", name: "Maria Emília dos Santos" },
  { position: "Vice-Presidente", name: "Evaldo Luiz Santos Lucca" },
  { position: "1ª Secretária", name: "Sônia Regina Santos de Lucca" },
  { position: "2ª Secretária", name: "Marly Teresinha Roland Fuganholli" },
  { position: "1ª Tesoureira", name: "Gisele Ap. Domingues" },
  { position: "2ª Tesoureira", name: "Vera Lúcia Moreira Satalino" },
];

export const transparencyPortalUrl = "https://sgtseescam.org.br/";

