import Image from 'next/image';
import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Grid pembicara.
export default function Speakers() {
  const { speakers } = config;
  return (
    <section id="pembicara" className="bg-cream px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose">Narasumber</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">Pembicara</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3">
          {speakers.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.08}>
              <div className="group overflow-hidden rounded-2xl border border-blush bg-cream shadow-sm transition hover:shadow-md">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image src={s.photo} alt={`Potret ilustrasi ${s.name}`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-display font-bold text-ink">{s.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-rose">{s.role}</p>
                  <p className="text-xs text-muted">{s.org}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
