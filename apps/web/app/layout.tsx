import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Horizon AI",
  description: "The AI operating layer for Horizon Works",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
