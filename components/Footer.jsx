import { Mail } from 'lucide-react';
import config from '@/lib/data';

// Footer korporat: brand, kontak, sosial, copyright.
export default function Footer() {
  const { brand, footer, nav } = config;

  return (
    <footer className="bg-ink px-5 py-14 text-cream">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold">{brand.name}<span className="text-gold">.</span></p>
            <p className="mt-2 max-w-xs text-sm text-cream/75">{brand.full}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream/80">Navigasi</p>
            <ul className="mt-2 space-y-1">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="inline-block py-1 text-sm text-cream/75 transition hover:text-gold">{n.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-cream/80">Kontak</p>
            <a href={`mailto:${footer.email}`} className="mt-2 inline-flex items-center gap-2 py-2 text-sm text-cream/75 transition hover:text-gold">
              <Mail size={14} aria-hidden="true" /> {footer.email}
            </a>
            <p className="mt-4 max-w-xs text-xs text-cream/70">{footer.note}</p>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/70">
          © 2027 {footer.org}. Hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}
