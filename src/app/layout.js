import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Blogify",
    template: "%s | Blogify",
  },
  description: "Blogify is a blogs collection website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
