import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Toaster } from 'react-hot-toast';
import MarqueeBanner from "@/components/common/MarqueeBanner";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MarketVisa",
  description: "Transform your financial future with expert-led courses",
  openGraph: {
    title: 'MarketVisa',
    description: 'Transform your financial future with expert-led courses',
    url: 'https://www.marketvisa.in',
    siteName: 'MarketVisa',
    images: [
      {
        url: '/og-image.jpg',  // 1200x630px image
        width: 1200,
        height: 630,
        alt: 'MarketVisa Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // Optional specific platform customizations
  facebook: {
    appId: 'your-fb-app-id', // if you have one
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MarketVisa',
    description: 'Transform your financial future with expert-led courses',
    images: ['/og-image.jpg'],
  },
  other: {
    'whatsapp-catalog-message': 'Transform your financial future with expert-led courses'
  },
  icons: {
     icon: '/favicon.ico',
    shortcut: '/favicon.ico'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        {/* Optionally add different sizes/formats */}
        <link rel="icon" href="/mk_visa_icon.ico" />
        {/* Move Meta Pixel Code inside Script component */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '8684248018341312');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <MarqueeBanner />
        <main className="min-h-screen pt-1">
          {children}
          <Analytics />
        </main>
       
        {/* <Footer /> */}
        <Header />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
