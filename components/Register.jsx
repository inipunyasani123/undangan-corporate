'use client';
import { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Form registrasi peserta. Ini undangan contoh: data tidak dikirim ke mana pun.
const PESAN_URL =
  'https://wa.me/6285190931399?text=' +
  encodeURIComponent('Halo PintuWeb, saya mau pesan situs acara korporat seperti contoh Temu Rekayasa Nusa.');

export default function Register() {
  const { tickets } = config;
  const [form, setForm] = useState({ name: '', email: '', company: '', ticket: tickets[0] });
  const [done, setDone] = useState(false);
  const pesanSukses = useRef(null);

  // Form hilang setelah dikirim; pindahkan fokus ke pesan sukses supaya tidak jatuh ke <body>.
  useEffect(() => {
    if (done) pesanSukses.current?.focus();
  }, [done]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setDone(true);
  };

  const field = 'w-full rounded-xl border border-muted/30 bg-cream px-4 py-3 text-sm outline-none focus:border-rose';
  const lab = 'mb-1.5 block text-sm font-medium text-ink';

  return (
    <section id="daftar" className="bg-rose-deep px-5 py-20 text-cream md:py-28">
      <div className="mx-auto max-w-xl">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">Registrasi</p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">Amankan Tiketmu</h2>
          <p className="mt-3 text-sm text-cream/80">Isi formulir di bawah untuk mendaftar sebagai peserta.</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          {done ? (
            <div className="rounded-2xl bg-cream p-8 text-center text-ink" role="status">
              <CheckCircle2 size={48} className="mx-auto text-rose" aria-hidden="true" />
              <p ref={pesanSukses} tabIndex={-1} className="mt-4 font-display text-xl font-bold">Terima kasih, {form.name.trim()}!</p>
              <p className="mt-2 text-sm text-muted">
                Ini undangan contoh, jadi pendaftaran tidak diproses dan tidak ada email yang dikirim.
                Pada acara sungguhan, peserta langsung menerima konfirmasi dan e-tiket.
              </p>
              <a
                href={PESAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-rose underline underline-offset-4 hover:text-ink"
              >
                Pesan situs acara seperti ini
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4 rounded-2xl bg-cream p-6 text-ink md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="daftar-nama" className={lab}>Nama lengkap</label>
                  <input id="daftar-nama" name="name" autoComplete="name" maxLength={80} value={form.name} onChange={handle} placeholder="Nama sesuai KTP" className={field} required />
                </div>
                <div>
                  <label htmlFor="daftar-email" className={lab}>Email</label>
                  <input id="daftar-email" type="email" name="email" autoComplete="email" value={form.email} onChange={handle} placeholder="nama@kantor.com" className={field} required />
                </div>
              </div>
              <div>
                <label htmlFor="daftar-instansi" className={lab}>Perusahaan / institusi <span className="font-normal text-muted">(opsional)</span></label>
                <input id="daftar-instansi" name="company" autoComplete="organization" maxLength={80} value={form.company} onChange={handle} className={field} />
              </div>
              <div>
                <label htmlFor="daftar-tiket" className={lab}>Jenis tiket</label>
                <select id="daftar-tiket" name="ticket" value={form.ticket} onChange={handle} className={field}>
                  {tickets.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <button type="submit" className="min-h-12 w-full rounded-full bg-rose py-3.5 text-sm font-semibold text-cream transition hover:bg-ink">
                Daftar Sekarang
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
