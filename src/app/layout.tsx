import type { Metadata } from "next";
import { Space_Grotesk,  Orbitron,} from "next/font/google";
import "./globals.css";
const grotesk = Space_Grotesk({subsets: ['latin'], variable: '--font-grotesk'});
const orbitron = Orbitron({subsets : ['latin'], variable: '--font-orbitron'});

export const metadata: Metadata = {
  title: 'Austine | ctrlN3rd Developer'
  ,
  description: "A developer using AI and tech enthusiast from Kenya. Love creating futuristic software experiences that work",
  keywords: ['web development', 'AI', 'Machine learning', 'cloud computing', 'austine mark', 'nextjs developer', 'ctrln3rd', 'ctrl nerd',
    'control',  'nerd', 'best portfolio website', 'frontend developer', 'tech enthusiast', 
    'computer science', 'muranga university', 'young coder'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png'
  },
  openGraph:{
    title: 'Austine | ctrlN3rd Developer',
    description: 'A developer using AI and tech enthusiast from Kenya. Love creating futuristic software experiences that work',
    url: 'https://austinemark.vercel.app',
    siteName: 'Austine Mark',
    type: 'website',
    images: ['https://austinemark.vercel.app/preview.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austine | ctrlN3rd Developer',
    description: 'A developer using AI and tech enthusiast from Kenya. Love creating futuristic software experiences that work',
    images :  ['https://ctrln3rd.vercel.app/preview.jpg']
  },
  alternates: {
    canonical: 'https://austinemark.vercel.app'
  },
  other: {
    'google-site-verification': "kIqMIUYkSdHooeSR7HbDCtxEpSPSkqaY-ycMluEo6v0"
  }
};


export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${grotesk.variable} ${orbitron.variable}`}>
      <body> 
        {children}
      </body>
    </html>
  );
}
