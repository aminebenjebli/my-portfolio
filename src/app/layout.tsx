import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amine Ben Jebli - Portfolio",
  description:
    "Engineer Full Stack Mobile Developer portfolio showcasing projects and skills",
  keywords: ["Next.js", "React", "TypeScript", "Full Stack Developer"],
  authors: [{ name: "Amine Ben Jebli" }],
  openGraph: {
    title: "Amine Ben Jebli - Portfolio",
    description:
      "Full Stack Developer portfolio showcasing projects and skills",
    url: "https://your-domain.com",
    siteName: "Amine Ben Jebli Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children} {/* This is where page.tsx renders */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
