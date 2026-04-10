import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Loading from "@/components/Loading";

export const metadata: Metadata = {
  title: "FT Ramatis - Organização de Sociedade Civil",
  description:
    "Projeto Exercendo Nossa Cidadania oferece oficinas de dança, circo, flauta, grafitti, capoeira, canto e violão, escolinha de futebol, criatividade e expressão e atividades socioeducativas para crianças e adolescentes de 06 a 15 anos.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "48x48", type: "image/png" }],
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`antialiased`}>
        <Loading minDelay={1000}>{children}</Loading>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}