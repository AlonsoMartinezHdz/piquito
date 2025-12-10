import type { Metadata } from "next";
import { Geist, Geist_Mono, Inria_Serif } from "next/font/google";
import "./globals.css";
import SocialButtons from "../components/SocialButtons";

const geistSans = Geist({variable: "--font-geist-sans",subsets: ["latin"],});
const geistMono = Geist_Mono({variable: "--font-geist-mono",subsets: ["latin"],});
const inria= Inria_Serif({variable: "--font-inria", weight: ["300", "400", "700"], subsets: ["latin"], })

export const metadata: Metadata = {title: "Piquito", description: "granja avicola jerez,Zac",};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${inria.variable} antialiased min-h-screen`}>
        <SocialButtons />
        {children}
      </body>
    </html>
  );
}
