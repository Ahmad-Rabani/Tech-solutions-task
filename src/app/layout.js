import {
  Geist,
  Geist_Mono,
  Bebas_Neue,
  Libre_Franklin,
  Lato,
  Roboto,
  Abhaya_Libre,
} from "next/font/google";
import "./globals.css";

const abhaya = Abhaya_Libre({
  weight: '800',
  subsets: ['latin'],
});

// Roboto: All common weights
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
});

// Bebas Neue: Only supports 400, no change
const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bebas',
});

// Lato: Adding all common weights
const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

// Geist Sans: Adding all weights
const geistSans = Geist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-geist-sans',
});

// Geist Mono: Adding all weights
const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-geist-mono',
});

// Libre Franklin: Adding all available weights
const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-libre-franklin',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${abhaya.variable} ${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${libreFranklin.variable} ${lato.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
