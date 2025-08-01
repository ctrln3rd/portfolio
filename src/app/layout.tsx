import type { Metadata } from "next";
import { Space_Grotesk,  Orbitron,} from "next/font/google";
import "./globals.css";
const grotesk = Space_Grotesk({subsets: ['latin'], variable: '--font-grotesk'});
const orbitron = Orbitron({subsets : ['latin'], variable: '--font-orbitron'});

export const metadata: Metadata = {
  title: 'ctrlN3rd — Building Tomorrow’s Web'
  ,
  description: "Futuristic full stack developer based in Kenya, building intelligent, user-focused web and AI solutions for global impact. Explore sleek, scalable apps by ctrlN3rd.",
  keywords: ['web development', 'AI', 'Machine learning', 'cloud computing', 'austine mark', 'nextjs developer', 'ctrln3rd', 'ctrl nerd',
    'control',  'nerd', 'best portfolio website', 'frontend developer', 'tech enthusiast', 
    'computer science', 'muranga university', 'young coder'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png'
  },
  openGraph:{
    title: 'ctrlN3rd — Building Tomorrow’s Web',
    description: 'Futuristic full stack developer based in Kenya, building intelligent, user-focused web and AI solutions for global impact. Explore sleek, scalable apps by ctrlN3rd.',
    url: 'https://austinemark.vercel.app',
    siteName: 'Austine Mark',
    type: 'website',
    images: ['https://austinemark.vercel.app/preview.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ctrlN3rd — Building Tomorrow’s Web',
    description: 'Futuristic full stack developer based in Kenya, building intelligent, user-focused web and AI solutions for global impact. Explore sleek, scalable apps by ctrlN3rd.',
    images :  ['https://austinemark.vercel.app/preview.jpg']
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
