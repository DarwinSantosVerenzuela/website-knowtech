
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

    <html lang="es" suppressHydrationWarning>
      <body className={poppins.className} suppressHydrationWarning>
        <Header />



        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}