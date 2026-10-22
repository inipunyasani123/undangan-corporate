import Reveal from './ui/Reveal';
import config from '@/lib/data';

const ukuran = {
  Platinum: { kotak: 'h-20 w-44 md:h-24 md:w-56', teks: 'text-xl md:text-2xl' },
  Gold: { kotak: 'h-16 w-40 md:h-20 md:w-48', teks: 'text-base md:text-lg' },
  Silver: { kotak: 'h-14 w-36 md:h-16 md:w-40', teks: 'text-sm md:text-base' },
};

// Wordmark sponsor CONTOH: hanya tipografi (tanpa simbol/ikon), satu warna, nama fiktif.
// Tiap `gaya` = perlakuan huruf berbeda supaya dinding sponsor terasa seperti kumpulan merek.
function Wordmark({ name, gaya }) {
  const [a, ...rest] = name.split(' ');
  const b = rest.join(' ');
  switch (gaya) {
    case 'lebar':
      return <span className="font-display font-bold uppercase tracking-[0.18em]">{name}</span>;
    case 'rapat':
      return <span className="font-body font-extrabold lowercase tracking-[-0.04em]">{name}</span>;
    case 'tumpuk':
      return (
        <span className="flex flex-col items-center font-display leading-none">
          <span className="text-[0.55em] font-medium uppercase tracking-[0.35em]">{a}</span>
          <span className="mt-1 font-bold tracking-tight">{b}</span>
        </span>
      );
    case 'tipis':
      return <span className="font-display font-light uppercase tracking-[0.28em]">{name}</span>;
    case 'miring':
      return (
        <span className="font-body italic tracking-tight">
          <span className="font-extrabold">{a}</span> <span className="font-normal">{b}</span>
        </span>
      );
    default:
      return (
        <span className="font-display lowercase tracking-tight [word-spacing:-0.2em]">
          <span className="font-bold">{a}</span> <span className="font-light">{b}</span>
        </span>
      );
  }
}

export default function Sponsors() {
  const { sponsors } = config;
  return (
    <section className="bg-blush/40 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose">Didukung Oleh</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">Sponsor &amp; Partner</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">Situs contoh: nama sponsor di bawah fiktif dan hanya menunjukkan tata letak logo per tingkat.</p>
        </Reveal>

        <div className="mt-12 space-y-10">
          {Object.entries(sponsors).map(([tingkat, daftar]) => (
            <Reveal key={tingkat}>
              <h3 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">{tingkat}</h3>
              <ul className="mt-4 flex flex-wrap items-center justify-center gap-4">
                {daftar.map((s) => (
                  <li
                    key={s.name}
                    title={`${s.name} — ${s.bidang} (fiktif)`}
                    className={`flex items-center justify-center rounded-xl border border-rose-deep/10 bg-cream px-3 text-center text-muted shadow-sm ${ukuran[tingkat]?.kotak || 'h-14 w-36'} ${ukuran[tingkat]?.teks || 'text-sm'}`}
                  >
                    <Wordmark name={s.name} gaya={s.gaya} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
