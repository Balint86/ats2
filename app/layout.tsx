import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./components/LanguageProvider";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main className="container">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
