import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Tentang acara.
export default function About() {
  const { about } = config;
  return (
    <section id="tentang" className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-rose">Sekilas</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">{about.heading}</h2>
          <p className="mt-5 leading-relaxed text-muted">{about.body}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <ul className="space-y-4">
            {about.points.map((p, i) => (
              <li key={p} className="flex items-baseline gap-4 border-b border-blush pb-4 last:border-0">
                <span className="font-display text-sm font-bold tabular-nums text-rose" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-lg font-medium leading-snug text-ink">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
