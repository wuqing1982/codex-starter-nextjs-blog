import Head from 'next/head';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function Layout({ children, title = 'Codex Starter Blog', description = 'A minimal Next.js blog starter' }: LayoutProps) {
  const metaTitle = `${title} | Codex Starter`;

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-6">
            <div>
              <Link href="/" className="font-semibold tracking-tight text-slate-900">
                Codex Starter
              </Link>
              <p className="text-sm text-slate-500">A tiny blog for thoughtful makers.</p>
            </div>
            <Link
              href="https://nextjs.org/docs"
              target="_blank"
              className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
            >
              Docs
            </Link>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-4 py-10">{children}</main>
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-6 text-sm text-slate-500">
            <span>© {new Date().getFullYear()} Codex Starter.</span>
            <span>Built with Next.js 13.</span>
          </div>
        </footer>
      </div>
    </>
  );
}
