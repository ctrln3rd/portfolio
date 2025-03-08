import type { Metadata } from "next";
import { Space_Grotesk,  Orbitron} from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const grotesk = Space_Grotesk({subsets: ['latin'], variable: '--font-grotesk'});
const orbitron = Orbitron({subsets : ['latin'], variable: '--font-orbitron'});

export const metadata: Metadata = {
  title: {
    default: 'Austine Mark | The Developer',
    template: '%s | Austine Mark - The Developer'
  },
  description: "A developer using AI and tech enthusiast from Kenya. Love creating futuristic software experiences that work",
  keywords: ['web development', 'AI', 'Machine learning', 'cloud computing', 
    'best portfolio website', 'frontend developer', 'tech enthusiast', 'computer science', 'muranga university', 'young coder'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png'
  },
  openGraph:{
    title: 'Austine Mark | The Developer',
    description: 'A developer using AI and tech enthusiast from Kenya. Love creating futuristic software experiences that work',
    url: 'https://austinemark.netlify.app',
    siteName: 'Austine Mark',
    type: 'website',
    images: ['https://austinemark.netlify.app/preview.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austine Mark | The Developer',
    description: 'A developer using AI and tech enthusiast from Kenya. Love creating futuristic software experiences that work',
    images :  ['https://austinemark.netlify.app/preview.jpg']
  },
  alternates: {
    canonical: 'https://austinemark.netlify.app'
  },
  other: {
    'google-site-verification': "LUkKqWSPj-9G4-wQcv2ohaT20kb7pKJqAv9eM24m2H8"
  }
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en" className={`${grotesk.variable} ${orbitron.variable}`}>
      <body> 
        <div className="w-[97dvw] h-[97dvh] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
         rounded-lg max-sm:h-[98dvh] bg-background_secondary">
        <Header/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
