import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'One Prompt Portfolio — AI Coding Experiment',
  description: 'We gave the exact same prompt to Gemini 3 Pro, Gemini 3 Flash, Claude Sonnet 4.5, and Claude Opus 4.6. See how each AI model built a complete portfolio landing page — unedited.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  );
}
