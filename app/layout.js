import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Arya Engineering works",
  description: "Quality Products and On-time Delivery of products",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
