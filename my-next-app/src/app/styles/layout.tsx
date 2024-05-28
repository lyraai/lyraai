import './globals.css';

import { CssBaseline, GeistProvider } from '@geist-ui/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GeistProvider>
        <CssBaseline />
        <body className={inter.className}>{children}</body>
      </GeistProvider>
    </html>
  );
}