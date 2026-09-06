// For adding custom fonts with other frameworks, see:
// https://tailwindcss.com/docs/font-family
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navBar";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "njb profile",
  description: "Norman John Bandibas' e-portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'light') {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${fontSans.variable} font-sans antialiased w-full min-h-screen flex flex-col items-center`}>
        <ScrollToTop />
        <NavBar />
        <main className="w-full flex-1 flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}