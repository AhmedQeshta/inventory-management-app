import type { Metadata } from 'next';
import { StackProvider, StackTheme } from '@stackframe/stack';
import { stackClientApp } from '../stack/client';
import './globals.css';

export const metadata: Metadata = {
  title: 'Smart Inventory Management',
  description: 'Smart Inventory Management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <StackProvider app={stackClientApp}>
          <StackTheme>{children}</StackTheme>
        </StackProvider>
      </body>
    </html>
  );
}
