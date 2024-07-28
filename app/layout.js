import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "שאלון חברות",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        </body>
    </html>
  );
}
