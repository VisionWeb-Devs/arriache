import Header from "@/components/Header";
import "./globals.css";
import { LanguageProvider } from "@/public/context/LanguageContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Arriache Travel",
  description:
    "Arriache Travel is a travel agency that offers the best travel experiences in the world.",
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
