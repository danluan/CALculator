"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <html lang="pt-BR">
        <body>{children}</body>
      </html>
    </SessionProvider>
  );
}
