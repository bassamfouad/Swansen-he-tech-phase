import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Swenson He Test",
  description: "Front-End (React/Next)-Swenson He",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
