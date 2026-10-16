import Link from 'next/link';

export const metadata = { title: 'Halaman tidak ditemukan — Temu Rekayasa Nusa 2027', robots: { index: false }, alternates: { canonical: null } };

export default function NotFound() {
  return (
    <main className="hero-grid flex min-h-screen flex-col items-center justify-center bg-rose-deep px-5 text-center text-cream">
      <p className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold">Error 404</p>
      <h1 className="mt-6 font-display text-4xl font-bold sm:text-5xl">Sesi ini tidak ada di agenda</h1>
      <p className="mt-4 max-w-md text-cream/80">Halaman yang Anda cari tidak ditemukan. Agenda, pembicara, dan pendaftaran ada di halaman utama.</p>
      <Link href="/" className="mt-8 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition hover:brightness-95">
        Kembali ke halaman utama
      </Link>
    </main>
  );
}
