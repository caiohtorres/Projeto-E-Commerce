import type { Metadata } from "next";
import "./globals.css";
import Nabvar from "./components/Navbar";
import clsx from "clsx";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Criando um E-Commerce com Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    <html lang="en">
      <body className={clsx(`bg-slate-700`)}>
        <Nabvar />
        <main className=" h-screen p-16">{children}</main>
      </body>
    </html>
    // </ClerkProvider>
  );
}
