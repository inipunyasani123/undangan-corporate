# Situs Acara — Temu Rekayasa Nusa 2027

Situs konferensi, bukan undangan bersampul: navbar sticky, hero dengan hitung mundur, agenda dua hari bertab, pembicara, slot logo sponsor per tingkat, venue, dan formulir pendaftaran.

**Demo live:** https://undangan-corporate.pintuweb.id

![Tangkapan layar](public/og.jpg)

> Contoh dengan data fiktif: nama, tempat, dan nomor rekening tidak sungguhan. Formulir hanya demo dan mengatakannya terus terang. Foto adalah placeholder berlabel yang siap diganti.

## Fitur

- Agenda dua hari (tab yang bisa dioperasikan papan ketik)
- Statistik dihitung otomatis dari agenda & pembicara
- Pembicara, slot sponsor berlabel, lokasi
- Pendaftaran peserta — mode demo, terus terang tidak memproses data
- Halaman 404 bergaya sendiri

## Mengganti isi

Seluruh isi ada di satu file: `lib/data.js` (nama, tanggal, acara, galeri, musik, agenda, pembicara, sponsor). Komponen tidak perlu disentuh.

- **Tanggal:** ubah teks tanggal *dan* nilai ISO (`mainDate`, `start`, `end`) — hitung mundur dan tombol kalender memakai nilai ISO.
- **Peta:** contoh menunjuk area kota; ganti `q=` di `location.mapEmbed` dan `mapLink` dengan nama tempat atau koordinat.
- **Foto:** timpa berkas di `public/images/` dengan nama yang sama (potret 3:4, atau persegi untuk berkas yang memang persegi).

## Gambar & kredit

- `public/images/*.webp` — placeholder berlabel buatan sendiri (bukan foto stok), digambar ulang dari SVG agar tidak bergantung pada layanan luar.


## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4 (token tema di `app/globals.css`)
- Framer Motion, lucide-react
- Font: Space Grotesk, Inter (next/font)
- SEO: metadata, Open Graph, JSON-LD (WebSite), sitemap.xml, robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

---

Bagian dari koleksi 8 undangan digital di [PortalUndangan](https://www.pintuweb.id/undangan-digital). Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
