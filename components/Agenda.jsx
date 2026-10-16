'use client';
import { useState } from 'react';
import { Clock, User } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Warna penanda per ruang: garis kiri kartu + titik di label ruang (teks tetap gelap agar terbaca).
const RUANG = {
  'Panggung Utama': { garis: 'border-l-rose', titik: 'bg-rose' },
  'Ruang A': { garis: 'border-l-gold', titik: 'bg-gold' },
  'Ruang B': { garis: 'border-l-[#a855f7]', titik: 'bg-[#a855f7]' },
};
const UMUM = { garis: 'border-l-muted/30', titik: 'bg-muted/50' };

// Agenda dua hari dengan tab (pola tablist yang bisa dioperasikan papan ketik).
export default function Agenda() {
  const { agenda } = config;
  const [aktif, setAktif] = useState(agenda[0].id);
  const hari = agenda.find((h) => h.id === aktif);

  const pindah = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const j = (i + (e.key === 'ArrowRight' ? 1 : agenda.length - 1)) % agenda.length;
    setAktif(agenda[j].id);
    document.getElementById(`tab-${agenda[j].id}`)?.focus();
  };

  return (
    <section id="agenda" className="bg-blush/40 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose">Jadwal</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl">Agenda Acara</h2>
        </Reveal>

        <div role="tablist" aria-label="Pilih hari" className="mx-auto mt-8 grid max-w-sm grid-cols-2 gap-2 rounded-full bg-cream p-1.5 shadow-sm">
          {agenda.map((h, i) => (
            <button
              key={h.id}
              id={`tab-${h.id}`}
              role="tab"
              type="button"
              aria-selected={aktif === h.id}
              aria-controls={`panel-${h.id}`}
              tabIndex={aktif === h.id ? 0 : -1}
              onClick={() => setAktif(h.id)}
              onKeyDown={(e) => pindah(e, i)}
              className={`min-h-11 rounded-full px-4 py-2.5 text-sm font-semibold transition ${aktif === h.id ? 'bg-rose text-cream shadow' : 'text-muted hover:text-ink'}`}
            >
              {h.label}
            </button>
          ))}
        </div>

        <div id={`panel-${hari.id}`} role="tabpanel" aria-labelledby={`tab-${hari.id}`} className="mt-6">
          <p className="text-center text-sm text-muted">{hari.label} — {hari.date}</p>
          <ul className="mt-6 space-y-3">
            {hari.sessions.map((a) => {
              const r = RUANG[a.track] || UMUM;
              return (
                <li
                  key={`${hari.id}-${a.time}-${a.title}`}
                  className={`grid grid-cols-[auto_1fr] items-baseline gap-x-4 gap-y-1 rounded-2xl border border-l-4 border-blush bg-cream px-5 py-4 sm:grid-cols-[5.5rem_1fr_auto] sm:items-center ${r.garis}`}
                >
                  <p className="flex items-center gap-1.5 font-display text-lg font-bold tabular-nums text-rose">
                    <Clock size={15} aria-hidden="true" /> {a.time}
                  </p>
                  <p className="inline-flex items-center gap-1.5 justify-self-end text-xs font-semibold text-muted sm:order-last">
                    <span className={`h-2 w-2 rounded-full ${r.titik}`} aria-hidden="true" /> {a.track}
                  </p>
                  <div className="col-span-2 min-w-0 sm:col-span-1">
                    <h3 className="font-semibold text-ink">{a.title}</h3>
                    {a.speaker && (
                      <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm text-muted">
                        <User size={13} aria-hidden="true" /> {a.speaker}
                      </p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
