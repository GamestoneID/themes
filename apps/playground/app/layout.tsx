import * as React from 'react';
import './globals.css';
import './custom.css';
import '@gamestone/themes/styles.css';

export const metadata = {
  title: 'Radix Themes playground',
  description: 'A playground of Radix Themes components',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
