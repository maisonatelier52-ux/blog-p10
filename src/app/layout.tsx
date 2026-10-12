import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julio Herrera Velutini | International Banking & Finance",
  description: "Explore the multigenerational banking tradition and international financial landscape navigated by Julio Herrera Velutini.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
