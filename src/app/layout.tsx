import type { Metadata } from "next";
import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dale Alerta — Front-End Developer",
  description:
    "Dale Alerta is a Computer Science student and front-end developer based in Dubai, UAE, blending code and design to build interfaces with real character.",
  metadataBase: new URL("https://dalealerta.dev"),
  openGraph: {
    title: "Dale Alerta — Front-End Developer",
    description:
      "Computer Science student & front-end developer based in Dubai, UAE.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
