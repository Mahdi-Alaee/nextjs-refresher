import Header from "@/components/Header/Header";
import type { Metadata } from "next";
import "./globals.css";
import AppContextProvider from "@/context/AppContext";

export const metadata: Metadata = {
  title: {
    template: "Mahdi | %s",
    default: "Mahdi",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppContextProvider>
          <Header />
          {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
