/* app/layout.tsx */
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* AGREGADO: suppressHydrationWarning para evitar errores de extensiones */
    <html lang="es" suppressHydrationWarning>
      <body className={poppins.className} suppressHydrationWarning>
        <Header />

        {/* CORRECCIÓN: Quitamos TODOS los estilos inline que estorban. */}
        {/* Dejamos el main limpio. La page.tsx se encargará del resto. */}
        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}