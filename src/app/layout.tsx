import SessionProvider from "@/components/SessionProvider";

import localFont from 'next/font/local'
import { Metadata } from 'next';

import "./globals.css";

const geistFont = localFont({
  src: './fonts/GeistVF.woff',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CALculator',
  description: 'Uma calculadora moderna e eficiente',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  // Adicione outros metadados conforme necessário
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={geistFont.className}>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
