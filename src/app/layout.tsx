import type { Metadata } from "next";
import "./globals.css";
import { SearchContextProvider } from "@/context/SearchContextProvider";
import { outfit } from "@/lib/fonts";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Coloured Icons",
  description:
    "Coloured Icons is a collection of coloured icons for web developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-y-scroll">
      <body className={`px-8 ${outfit.className} antialiased`}>
        <SearchContextProvider>
          <section className="max-w-7xl mx-auto">
            <Navbar />
          </section>
          {children}
        </SearchContextProvider>
      </body>
    </html>
  );
}
