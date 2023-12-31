import "@/assets/css/globals.css";
import "@/assets/css/cursor.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProvider } from "@/AppProvider";
import Navigation from "@/Navigation";
import Footer from "@/Footer";
import Scroller from "@/Scroller";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <Scroller>
            <Navigation />
            {children}
            <Footer />
          </Scroller>
        </AppProvider>
      </body>
    </html>
  );
}
