import type { Metadata } from 'next';
import './globals.css';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'SaaS AI Test Web',
  description: 'Monorepo web application scaffolded with Next.js and TailwindCSS.'
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <main className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
