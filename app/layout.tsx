import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    </header>
        {children}
        <footer>
            <p>&copy; 2024 Sample Website. All rights reserved.</p>
            <p>Contact us at <a href="mailto:info@samplewebsite.com">info@samplewebsite.com</a></p>
        </footer>
        </body>
    </html>
  );
}
