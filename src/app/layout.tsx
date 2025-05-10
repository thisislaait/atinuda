import type { Metadata } from "next";
import "./globals.css"; 


export const metadata: Metadata = {
  title: "Atinuda Summit",
  description: "Leading African Wedding Summit",
};

// Updated import paths to match your structure
import Navbar from "@/app/summit/components/Nav/HeaderNav";
import SummitFooter from "./summit/components/SummitFooter";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <Navbar />
        
        {/* Other sections go here */}
        {children}

        <SummitFooter />
      </body>
    </html>
  );
}
