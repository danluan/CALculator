import localFont from "next/font/local";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

import SessionProvider from "@/components/SessionProvider";
import Sidebar from "@/app/app/_components/Sidebar";

import './../globals.css'

const geistFont = localFont({
  src: './../fonts/GeistVF.woff',
  display: 'swap',
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={geistFont.className}>
      <body>
        <SessionProvider>
          <div className="flex">
            <Sidebar/>
            <div className="w-full h-full">
                {children}
            </div>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
