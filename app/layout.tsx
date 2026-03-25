import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Management Backend",
  description: "Backend API for managing sales with admin authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
