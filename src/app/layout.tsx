import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../Components/Header";
const inter = Inter({ subsets: ["latin"] });
import Provider from "./Providers";
import NavBar from "../Components/NavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
