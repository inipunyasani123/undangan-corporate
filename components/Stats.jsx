import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Bar statistik acara.
export default function Stats() {
  const { stats } = config;
  return (
    <section aria-label="Angka acara" className="border-b border-blush bg-cream px-5">
      <dl className="mx-auto grid max-w-5xl grid-cols-4 divide-x divide-blush">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="flex flex-col items-center py-6 text-center md:py-9">
            <dt className="order-2 mt-1 text-xs font-medium text-muted md:text-sm">{s.label}</dt>
            <dd className="order-1 font-display text-3xl font-bold tabular-nums text-rose md:text-5xl">{s.value}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
