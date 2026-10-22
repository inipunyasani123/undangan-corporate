// ============================================================
//  KONFIGURASI SITUS ACARA — Corporate / Konferensi
//  Ubah seluruh isi situs dari satu tempat ini saja.
//
//  Ini situs acara CONTOH: nama acara, pembicara, tempat, dan
//  sponsor fiktif. Potret pembicara adalah ilustrasi buatan
//  sendiri (tokoh fiktif), foto aula adalah foto CC0 (sumber di
//  public/images/SUMBER.md), dan sponsor berupa wordmark teks
//  bernama fiktif — ganti semuanya dengan materi asli (potret
//  persegi, logo sponsor).
// ============================================================

// -- Agenda dua hari (ubah sesi di sini; statistik dihitung otomatis) --
const agenda = [
  {
    id: 'hari-1',
    label: 'Hari 1',
    date: 'Rabu, 8 Desember 2027',
    sessions: [
      { time: '08.30', title: 'Registrasi & Kopi Pagi', speaker: '', track: 'Umum' },
      { time: '09.30', title: 'Keynote: AI yang Bisa Dipertanggungjawabkan', speaker: 'Dr. Ardian Wijaya', track: 'Panggung Utama' },
      { time: '11.00', title: 'Panel: Membangun Startup yang Tahan Lama', speaker: 'Rina Kusuma, dkk.', track: 'Panggung Utama' },
      { time: '13.30', title: 'Workshop: Arsitektur Cloud untuk Tim Kecil', speaker: 'Bayu Saputra', track: 'Ruang A' },
      { time: '15.00', title: 'Bincang Santai: Budaya Developer yang Sehat', speaker: 'Maya Hartanti', track: 'Ruang B' },
      { time: '16.30', title: 'Jejaring & Pameran Startup', speaker: '', track: 'Umum' },
    ],
  },
  {
    id: 'hari-2',
    label: 'Hari 2',
    date: 'Kamis, 9 Desember 2027',
    sessions: [
      { time: '09.00', title: 'Keynote: Produk Digital untuk UMKM', speaker: 'Laksmi Anindita', track: 'Panggung Utama' },
      { time: '10.30', title: 'Workshop: Aksesibilitas di Aplikasi Seluler', speaker: 'Yoga Pramudya', track: 'Ruang A' },
      { time: '10.30', title: 'Studi Kasus: Pembayaran untuk Toko Kecil', speaker: 'Rina Kusuma', track: 'Ruang B' },
      { time: '13.30', title: 'Panel: Data, Privasi, dan Kepercayaan Pengguna', speaker: 'Dr. Ardian Wijaya, dkk.', track: 'Panggung Utama' },
      { time: '15.00', title: 'Demo Day: 8 Tim Hackathon', speaker: '', track: 'Panggung Utama' },
      { time: '16.30', title: 'Penutupan', speaker: '', track: 'Umum' },
    ],
  },
];

// -- Pembicara (organisasi ditulis generik; ganti dengan nama lembaga asli) --
const speakers = [
  { name: 'Dr. Ardian Wijaya', role: 'Peneliti AI', org: 'Lembaga riset swasta', photo: '/images/pembicara-1.webp' },
  { name: 'Rina Kusuma', role: 'CEO & Pendiri', org: 'Startup pembayaran', photo: '/images/pembicara-2.webp' },
  { name: 'Bayu Saputra', role: 'Principal Engineer', org: 'Penyedia layanan cloud', photo: '/images/pembicara-3.webp' },
  { name: 'Maya Hartanti', role: 'VP Engineering', org: 'Marketplace UMKM', photo: '/images/pembicara-4.webp' },
  { name: 'Laksmi Anindita', role: 'Kepala Produk', org: 'Perusahaan perangkat lunak', photo: '/images/pembicara-5.webp' },
  { name: 'Yoga Pramudya', role: 'Desainer Aksesibilitas', org: 'Studio desain produk', photo: '/images/pembicara-6.webp' },
];

const jumlahSesi = agenda.reduce((n, h) => n + h.sessions.filter((s) => s.speaker).length, 0);
const jumlahRuang = new Set(agenda.flatMap((h) => h.sessions.map((s) => s.track)).filter((t) => t !== 'Umum')).size;

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'Temu Rekayasa Nusa 2027',
    description: 'Konferensi teknologi dua hari: keynote, workshop, dan jejaring untuk developer dan pembuat produk digital.',
  },

  brand: {
    name: 'Rekayasa Nusa',
    full: 'Temu Rekayasa Nusa 2027',
  },

  nav: [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Pembicara', href: '#pembicara' },
    { label: 'Lokasi', href: '#lokasi' },
  ],

  hero: {
    badge: 'Konferensi Teknologi Tahunan',
    title: 'Temu Rekayasa Nusa 2027',
    subtitle: 'Dua hari keynote, workshop, dan jejaring untuk developer, desainer, dan pembuat produk digital.',
    dateLabel: '8 – 9 Desember 2027',
    venueLabel: 'Balai Sidang Cakrawala, Jakarta',
  },

  // -- Tanggal mulai (ISO) untuk countdown --
  mainDate: '2027-12-08T08:30:00+07:00',

  calendar: {
    name: 'Temu Rekayasa Nusa 2027',
    date: '8 – 9 Desember 2027',
    time: '08.30 – 17.00 WIB',
    start: '2027-12-08T08:30:00+07:00',
    end: '2027-12-09T17:00:00+07:00',
  },

  // -- Statistik dihitung dari agenda & pembicara di atas --
  stats: [
    { value: String(jumlahSesi), label: 'Sesi' },
    { value: String(speakers.length), label: 'Pembicara' },
    { value: String(jumlahRuang), label: 'Ruang' },
    { value: String(agenda.length), label: 'Hari' },
  ],

  about: {
    heading: 'Tentang Acara',
    body: 'Temu Rekayasa Nusa mempertemukan developer, desainer, dan pendiri produk digital dari berbagai kota. Dua hari berisi keynote, workshop praktik langsung, studi kasus, dan waktu jejaring yang cukup untuk benar-benar berkenalan.',
    points: [
      'Keynote dari praktisi riset dan industri',
      'Workshop praktik langsung & studi kasus',
      'Pameran startup dan Demo Day hackathon',
    ],
  },

  agenda,
  speakers,

  // -- Sponsor per tingkat. Contoh: wordmark TEKS bernama fiktif (bukan merek sungguhan).
  //    `gaya` memilih perlakuan tipografi di components/Sponsors.jsx; ganti dengan logo asli saat dipakai. --
  sponsors: {
    Platinum: [
      { name: 'Gentaraya', bidang: 'Layanan cloud', gaya: 'lebar' },
      { name: 'Kasbara', bidang: 'Pembayaran digital', gaya: 'rapat' },
    ],
    Gold: [
      { name: 'Lumbung Kode', bidang: 'Perangkat pengembang', gaya: 'tumpuk' },
      { name: 'Teluk Komputa', bidang: 'Pusat data', gaya: 'tipis' },
      { name: 'Garda Sinyal', bidang: 'Keamanan jaringan', gaya: 'miring' },
    ],
    Silver: [
      { name: 'Kriya Antarmuka', bidang: 'Studio desain', gaya: 'kontras' },
      { name: 'Ranah Piksel', bidang: 'Media digital', gaya: 'lebar' },
      { name: 'Selasar Data', bidang: 'Analitik', gaya: 'rapat' },
      { name: 'Pustaka Rakit', bidang: 'Kursus daring', gaya: 'kontras' },
    ],
  },

  location: {
    venue: 'Balai Sidang Cakrawala',
    address: 'Kebayoran Baru, Jakarta Selatan',
    note: 'Peta contoh menunjukkan area Kebayoran Baru.',
    // Foto suasana venue (lanskap 16:10). Kosongkan bila tidak ada.
    photo: '/images/venue-aula.webp',
    photoAlt: 'Deretan kursi biru melengkung di aula konferensi yang masih kosong',
    mapEmbed: 'https://www.google.com/maps?q=Kebayoran+Baru,+Jakarta+Selatan&output=embed',
    mapLink: 'https://maps.google.com/?q=Kebayoran+Baru,+Jakarta+Selatan',
  },

  tickets: ['Early Bird', 'Reguler', 'VIP', 'Pelajar & Mahasiswa'],

  footer: {
    org: 'Temu Rekayasa Nusa',
    email: 'halo@temurekayasa.example',
    note: 'Situs acara contoh: nama acara, pembicara, tempat, dan sponsor fiktif.',
  },
};

export default config;
