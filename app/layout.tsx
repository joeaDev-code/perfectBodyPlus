import type { Metadata, Viewport } from "next";
import { Montserrat, Roboto_Condensed } from "next/font/google";
import "./global.css";
import SalesHeader from "./components/SalesHeader";

// Polices optimisées
const fontMain = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-montserrat",
  display: 'swap', 
});

const fontSecondary = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto-condensed",
  display: 'swap',
});

// Configuration de l'affichage mobile (PWA)
export const viewport: Viewport = {
  themeColor: "#ff4d00",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Recommandé pour une expérience "App" fluide
};

export const metadata: Metadata = {
  title: {
    default: "PerfectBody+ | Dépassez vos limites",
    template: "%s | PerfectBody+" // Utile pour tes pages /blog/article/1
  },
  description: "Plateforme premium de fitness et bien-être. Programmes personnalisés, nutrition et coaching.",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png", // Icône spécifique pour iPhone
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PerfectBody+",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        {/* Balise pour forcer l'installation PWA sur certains navigateurs */}
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`
          ${fontMain.variable} 
          ${fontSecondary.variable} 
          antialiased 
          bg-bg-dark 
          text-white 
          selection:bg-primary selection:text-white
          min-h-screen
          overflow-x-hidden
        `}
      >
      <SalesHeader />
        {children}
      </body>
    </html>
  );
}