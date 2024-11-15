import type { Metadata } from "next";
import "./globals.css";
import { Sen } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/Header";
import Footer from "@/components/main/Footer";
import BannerUpdate from "@/components/alert/BannerUpdate";
import Head from "next/head";
import MobileInstallPopup from "@/components/MobileInstallPopup";
import Script from "next/script";

// Font configuration
const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
  weight: "400",
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://aomworld.pro/"),
  title: {
    default: "AoM World Live Leaderboard",
    template: "%s | AoM World",
  },
  description:
    "View real-time leaderboard rankings for Age of Mythology World. Track top players and their stats.",
  keywords: [
    "Age of Mythology",
    "AoM World",
    "live leaderboard",
    "RTS game",
    "competitive gaming",
    "player rankings",
    "AoM stats",
    "AoM Leaderboard",
    "Aom",
  ],
  openGraph: {
    title: "AoM World Live Leaderboard",
    description:
      "Real-time rankings and stats for Age of Mythology World players.",
    type: "website",
    url: "https://aomworld.pro/",
    // TODO: Add actual image URL
    images: [
      {
        url: "/images/logo-portrait.png",
        width: 1200,
        height: 630,
        alt: "AoM World Leaderboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AoM World Live Leaderboard",
    description: "Track top players and their stats in Age of Mythology World.",
    // TODO: Add actual image URL
    images: ["/images/logo-portrait.png"],
  },
};

// Root Layout Component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#0e0e10" />

        <script
          defer
          data-domain="aomworld.pro"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <body className={`${sen.variable} antialiased font-sen`}>
        <MobileInstallPopup />
        <BannerUpdate />
        <Header />
        <NextUIProvider>
          <main className="container mx-auto dark text-foreground bg-background">
            <Toaster position="bottom-right" />
            <div className="mx-4 sm:mx-2 md:mx-0">{children}</div>
          </main>
        </NextUIProvider>
        <Footer />
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
          `}
        </Script>
      </body>
    </html>
  );
}
