import './globals.css';
import { Space_Grotesk, Inter } from 'next/font/google';
import config from '@/lib/data';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space',
  display: 'swap',
});
const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Temu Rekayasa Nusa 2027 — situs acara contoh","url":"https://undangan-corporate.pintuweb.id","description":"Contoh situs acara korporat: agenda dua hari, pembicara, slot sponsor, lokasi, dan pendaftaran peserta.","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://undangan-corporate.pintuweb.id"),
  title: "Situs Acara Korporat Digital — Temu Rekayasa Nusa 2027",
  description: "Undangan acara korporat & konferensi digital profesional. Agenda, pembicara, lokasi, dan registrasi peserta dalam satu halaman modern.",
  applicationName: "Undangan Digital",
  keywords: ["undangan acara perusahaan", "undangan konferensi digital", "undangan event korporat", "undangan seminar"],
  authors: [{ name: "Undangan Digital" }],
  creator: "Undangan Digital",
  publisher: "Undangan Digital",
  alternates: { canonical: "https://undangan-corporate.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://undangan-corporate.pintuweb.id",
    siteName: "Undangan Digital",
    title: "Situs Acara Korporat Digital — Temu Rekayasa Nusa 2027",
    description: "Undangan acara korporat & konferensi digital profesional. Agenda, pembicara, lokasi, dan registrasi peserta dalam satu halaman modern.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Situs Acara Korporat Digital — Temu Rekayasa Nusa 2027" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Situs Acara Korporat Digital — Temu Rekayasa Nusa 2027",
    description: "Undangan acara korporat & konferensi digital profesional. Agenda, pembicara, lokasi, dan registrasi peserta dalam satu halaman modern.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: '#1e1b4b',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body className="antialiased">
        <noscript><style>{'.muncul{opacity:1;transform:none}'}</style></noscript>
        {children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=corporate" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
