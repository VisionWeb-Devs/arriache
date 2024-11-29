import "./globals.css";

export const metadata = {
  title: "Arriache Travel",
  description:
    "Arriache Travel is a travel agency that offers the best travel experiences in the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
