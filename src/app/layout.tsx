import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";
export const metadata: Metadata = {
  title: "Car ShowRoom",
  description: "Author : Akshay Thakur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
