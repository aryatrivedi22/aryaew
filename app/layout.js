import { montserrat } from "@/lib/fonts";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Nunito } from "next/font/google";
import RootGate from "@/components/system/root-gate"; // 👈 NEW
import UnstableWrapper from "@/components/system/unstable-wrapper";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Arya Engineering Works",
  icons: { icon: "/favicon.ico" },
  description:
    "Quality products and on-time delivery from Arya Engineering Works.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className={nunito.className}>
        <Header />

        {/* 🔻 CLIENT SIDE INSTABILITY */}
        <RootGate>
          <main id="main">
            <UnstableWrapper>{children}</UnstableWrapper>
          </main>
        </RootGate>

        <Footer />
      </body>
    </html>
  );
}
