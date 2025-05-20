import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/summit/components/Nav/HeaderNav";
import SummitFooter from "./summit/components/SummitFooter";

// 👇 import your context provider
import { AuthProvider } from "@/context/AuthContext";
import AuthModal from "@/components/AuthModal";

export const metadata: Metadata = {
  title: "Atinuda Summit",
  description: "Leading African Wedding Summit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* 👇 Now your entire site has access to auth context */}
        <AuthProvider>
          <Navbar />
          <AuthModal />
          {children}
          <SummitFooter />
        </AuthProvider>
      </body>
    </html>
  );
}
