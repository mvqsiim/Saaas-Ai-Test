import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">SaaS AI Test</h1>
      <p className="text-slate-300">
        This is the starter Next.js 14 application inside the monorepo. TailwindCSS is already
        configured and ready for rapid UI development.
      </p>
      <p>
        Explore the Express API health check at{' '}
        <Link className="text-sky-400 underline" href="http://localhost:4000/healthz">
          http://localhost:4000/healthz
        </Link>
        .
      </p>
    </section>
  );
}
