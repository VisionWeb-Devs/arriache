import "./globals.css";
import { LanguageProvider } from "@/public/context/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rubik } from "next/font/google";

export const metadata = {
  title: "Arriache Travels",
  description:
    "Arriache Travels is a travel agency that offers the best travel experiences in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
