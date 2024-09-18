import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";


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
      <body className="bg-white 100vw">
        <Header></Header>
        <div className="max-w-[1040px] mx-auto">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
