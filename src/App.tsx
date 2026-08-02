import { useState, useEffect, useRef } from 'react'
import imgKKN from './imports/Penerimaan_KKN_Aparat-1.jpeg'
import imgKepDes from './imports/Pertemuan_bersama_Kepala_Desa-1.jpeg'
import imgProker from './imports/Pembahasan_Proker_Bersama_Aparat-1.jpeg'
import imgAvatar from './imports/avatar_default.jpg'
import imgGallery2 from './imports/Penerimaan_2.jpeg'
import imgGallery3 from './imports/Penerimaan_3.jpeg'
import imgGallery4 from './imports/Penerimaan_4.jpeg'
import imgCengkeh from './imports/Cengkeh.jpeg'

// ── Initial Mock Data ──────────────────────────────────────────────────────────

const INITIAL_DISCOVER_ITEMS = [
  {
    id: 1,
    title: 'Ekowisata Hutan Mangrove Padaleu',
    category: 'Alam',
    location: 'Pesisir Timur Desa',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&auto=format&fit=crop',
    description: 'Menyusuri jembatan kayu terapung sepanjang 500 meter di tengah rimbunnya pohon bakau pusaka. Destinasi yang menenangkan jiwa sekaligus menjaga ekosistem pesisir Lembo.',
    facilities: ['Jembatan Kayu Swafoto', 'Menara Pandang', 'Gazebo Istirahat', 'Penyewaan Perahu Tradisional'],
    hours: '07:30 - 17:30 WITA',
    contact: '+62 812-4455-6677 (Pokdarwis Desa)',
    lat: -2.8620,
    lng: 122.2490
  },
  {
    id: 2,
    title: 'Pantai Pasir Putih Teluk Lembo',
    category: 'Alam',
    location: 'Kawasan Pesisir Selatan',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop',
    description: 'Garis pantai pasir putih halus sepanjang 1 km dengan ombak tenang yang sangat aman untuk berenang, snorkeling, dan bersantai menikmati matahari terbenam.',
    facilities: ['Penyewaan Ban Renang', 'Kios Kuliner Ikan Bakar', 'Kamar Bilas Umum', 'Area Camping Ground'],
    hours: '24 Jam Terbuka',
    contact: '+62 812-4455-6677',
    lat: -2.8590,
    lng: 122.2510
  },
  {
    id: 3,
    title: 'Air Terjun Bertingkat Puncak Lembo',
    category: 'Alam',
    location: 'Hutan Barat Desa',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop',
    description: 'Air terjun tersembunyi dengan tiga tingkatan alami yang menawarkan kolam pemandian menyegarkan dengan air pegunungan yang jernih dan asri.',
    facilities: ['Jalur Trekking Berbatu', 'Spot Foto Alami', 'Warung Makan Khas', 'Toilet Umum'],
    hours: '08:00 - 17:00 WITA',
    contact: '+62 812-8899-0011 (Komunitas Pecinta Alam)',
    lat: -2.8510,
    lng: 122.2430
  },
  {
    id: 4,
    title: 'Homestay Nyaman Pesisir Indah',
    category: 'Penginapan',
    location: 'Dusun II Pantai',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
    description: 'Penginapan berkonsep ramah lingkungan yang menghadap langsung ke pantai. Dikelola langsung oleh warga setempat untuk memberikan pengalaman menginap otentik.',
    facilities: ['AC & Kamar Mandi Dalam', 'Sarapan Masakan Lokal', 'Sewa Sepeda Gratis', 'Wi-Fi Area'],
    hours: 'Check-in: 14:00 WITA',
    contact: '+62 821-3344-5566 (Pak Wayan)',
    lat: -2.8560,
    lng: 122.2535
  },
  {
    id: 5,
    title: 'Warung Kuliner Ikan Bakar Aroma Laut',
    category: 'Kuliner',
    location: 'Jalan Dermaga Pantai',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop',
    description: 'Menyajikan hidangan laut segar tangkapan nelayan lokal hari ini, dibakar dengan bumbu rempah kelapa tradisional khas Konawe Utara.',
    facilities: ['Area Duduk Lesehan Pantai', 'Live Music Akhir Pekan', 'Parkiran Luas', 'Mushola'],
    hours: '11:00 - 22:00 WITA',
    contact: '+62 812-7788-9900 (Warung Aroma Laut)',
    lat: -2.8580,
    lng: 122.2520
  },
  {
    id: 6,
    title: 'Pesta Adat Panen Rempah Cengkeh',
    category: 'Budaya',
    location: 'Lapangan Utama Desa',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop',
    description: 'Syukuran tahunan masyarakat Desa Padaleu atas keberhasilan panen cengkeh melimpah. Diisi tarian tradisional, pameran hasil kebun, dan makan bersama warga.',
    facilities: ['Panggung Pertunjukan Adat', 'Pasar Malam UMKM', 'Pameran Kerajinan Tangan'],
    hours: 'Setiap Bulan September',
    contact: '+62 812-3456-7890 (Sekretariat Adat)',
    lat: -2.8540,
    lng: 122.2540
  }
]

const INITIAL_BERITA = [
  {
    id: 1,
    title: 'Penerimaan KKN Mahasiswa UHO di Kantor Desa Padaleu',
    category: 'Kegiatan',
    excerpt: 'Pemerintah Desa Padaleu menyambut kedatangan mahasiswa Kuliah Kerja Nyata (KKN) Universitas Halu Oleo Kendari untuk melaksanakan program pengabdian masyarakat.',
    content: 'Pemerintah Desa Padaleu secara resmi menerima rombongan mahasiswa Kuliah Kerja Nyata (KKN) Reguler Universitas Halu Oleo (UHO) Kendari. Penerimaan ini berlangsung khidmat di aula Kantor Desa, dihadiri oleh Kepala Desa Padaleu, segenap aparat desa, tokoh adat, serta perwakilan masyarakat.\n\nDalam sambutannya, Kepala Desa menyampaikan harapan agar para mahasiswa dapat berkolaborasi aktif dengan pemerintah desa dan masyarakat setempat untuk merancang serta menyukseskan program kerja (proker) yang menyasar pengembangan potensi lokal, administrasi digital, dan kebersihan lingkungan. Mahasiswa diharapkan dapat beradaptasi dengan adat istiadat setempat dan memberikan dampak positif nyata selama 40 hari masa pengabdian.',
    date: '2026-07-28',
    image: imgKKN,
    author: 'Operator Desa'
  },
  {
    id: 2,
    title: 'Musyawarah Perencanaan Pembangunan (Musrenbang) Desa 2026',
    category: 'Pemerintahan',
    excerpt: 'Pemerintah Desa bersama masyarakat merumuskan rencana pembangunan infrastruktur pertanian dan peningkatan kapasitas UMKM lokal.',
    content: 'Musyawarah Perencanaan Pembangunan Desa (Musrenbangdes) dalam rangka penyusunan Rencana Kerja Pemerintah Desa (RKPDes) Tahun Anggaran 2027 sukses diselenggarakan. Pertemuan yang diadakan di Kantor Desa Padaleu ini memprioritaskan pemanfaatan anggaran untuk sektor ketahanan pangan, terutama irigasi persawahan, jalan usaha tani, serta stimulus modal bagi UMKM pengolah komoditas cengkeh dan madu hutan.\n\nKepala Desa menekankan pentingnya partisipasi aktif dari perwakilan RT/RW dan tokoh pemuda agar arah pembangunan tepat sasaran dan selaras dengan program prioritas kabupaten.',
    date: '2026-07-20',
    image: imgProker,
    author: 'Sekretaris Desa'
  },
  {
    id: 3,
    title: 'Pertemuan Rutin Pembahasan Program Kerja Aparat Desa',
    category: 'Pengumuman',
    excerpt: 'Rapat koordinasi bulanan aparat Desa Padaleu guna mengevaluasi kinerja pelayanan publik dan persiapan sistem digitalisasi data.',
    content: 'Aparat Desa Padaleu mengadakan pertemuan koordinasi bulanan guna membahas efisiensi pelayanan administrasi kependudukan. Dalam pertemuan ini, disepakati penerapan sistem pencatatan digital untuk mempermudah permohonan surat keterangan bagi warga.\n\nEvaluasi berkala menunjukkan peningkatan kecepatan pelayanan administrasi hingga 40% setelah beberapa modul pelayanan disederhanakan. Kepala Desa menghimbau seluruh jajarannya untuk tetap mengedepankan keramahan dan kedisiplinan.',
    date: '2026-07-15',
    image: imgKepDes,
    author: 'Kepala Desa'
  }
]

const INITIAL_UMKM = [
  {
    id: 1,
    name: 'Cengkeh Kering Super Padaleu',
    category: 'Pertanian',
    price: 'Rp 115.000 / Kg',
    seller: 'Koperasi Tani Makmur',
    phone: '628123456789',
    image: imgCengkeh,
    description: 'Cengkeh asli hasil perkebunan Desa Padaleu. Dipetik langsung dari pohon pilihan, disortir dengan ketat, dan dikeringkan secara alami di bawah sinar matahari untuk menjaga aroma khas dan kualitas minyak atsiri yang tinggi.'
  },
  {
    id: 2,
    name: 'Madu Hutan Asli Lembo',
    category: 'Kuliner',
    price: 'Rp 140.000 / Botol',
    seller: 'Pak Suprianto (Kelompok Tani Hutan)',
    phone: '628123456789',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&h=350&fit=crop',
    description: 'Madu murni yang dipanen langsung dari sarang lebah Apis Dorsata di pedalaman hutan Lembo. Tanpa campuran bahan pengawet atau pemanis buatan. Sangat baik untuk menjaga daya tahan tubuh.'
  },
  {
    id: 3,
    name: 'Kerajinan Anyaman Rotan Khas',
    category: 'Kerajinan',
    price: 'Rp 75.000 - Rp 250.000',
    seller: 'Ibu Aminah (UMKM Anyaman Kreatif)',
    phone: '628123456789',
    image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=500&h=350&fit=crop',
    description: 'Tas belanja, keranjang buah, dan perabot rumah tangga estetik yang dianyam secara manual menggunakan rotan hutan pilihan yang awet dan kokoh.'
  }
]

const INITIAL_MAP_MARKERS = [
  { id: 1, title: 'Kantor Desa Padaleu', lat: -2.8540, lng: 122.2530, category: 'Fasilitas', description: 'Pusat pelayanan administrasi dan pemerintahan Desa Padaleu.', image: imgKepDes },
  { id: 2, title: 'Puskesmas Pembantu (Pustu) Lembo', lat: -2.8562, lng: 122.2515, category: 'Fasilitas', description: 'Fasilitas layanan kesehatan dasar masyarakat desa.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=300&fit=crop' },
  { id: 3, title: 'SD Negeri 1 Lembo', lat: -2.8515, lng: 122.2545, category: 'Pendidikan', description: 'Fasilitas pendidikan sekolah dasar negeri terakreditasi.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&h=300&fit=crop' },
  { id: 4, title: 'Masjid Al-Muhajirin', lat: -2.8550, lng: 122.2560, category: 'Ibadah', description: 'Rumah ibadah dan pusat kegiatan keagamaan umat Islam.', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&h=300&fit=crop' },
  { id: 5, title: 'Ekowisata Hutan Mangrove', lat: -2.8620, lng: 122.2490, category: 'Wisata', description: 'Kawasan konservasi hutan mangrove pesisir pantai dengan jembatan kayu estetik.', image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=500&h=300&fit=crop' },
  { id: 6, title: 'Pantai Pasir Putih Teluk Lembo', lat: -2.8590, lng: 122.2510, category: 'Wisata', description: 'Garis pantai berpasir putih halus, sangat ideal untuk rekreasi dan snorkeling.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=300&fit=crop' },
  { id: 7, title: 'Air Terjun Bertingkat Lembo', lat: -2.8510, lng: 122.2430, category: 'Wisata', description: 'Keindahan air terjun tiga tingkat alami dengan air pegunungan segar.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop' }
]

const INITIAL_APB_DES = {
  tahun: '2026',
  pendapatan: {
    total: 1250000000,
    items: [
      { nama: 'Dana Desa (APBN)', nilai: 780000000, color: '#1b4620' },
      { nama: 'Alokasi Dana Desa (ADD)', nilai: 380000000, color: '#4a7c59' },
      { nama: 'Pendapatan Asli Desa (PAD)', nilai: 55000000, color: '#aa8c2c' },
      { nama: 'Bagi Hasil Pajak & Retribusi', nilai: 35000000, color: '#d4af37' }
    ]
  },
  belanja: {
    total: 1210000000,
    items: [
      { nama: 'Penyelenggaraan Pemerintahan', nilai: 390000000, color: '#1e293b' },
      { nama: 'Pembangunan Infrastruktur Desa', nilai: 520000000, color: '#1b4620' },
      { nama: 'Pembinaan Kemasyarakatan', nilai: 130000000, color: '#aa8c2c' },
      { nama: 'Pemberdayaan Masyarakat & UMKM', nilai: 170000000, color: '#d4af37' }
    ]
  },
  pembiayaan: {
    total: 40000000,
    items: [
      { nama: 'SILPA (Sisa Lebih Anggaran)', nilai: 40000000, color: '#64748b' }
    ]
  }
}

const INITIAL_STATISTIK_PENDUDUK = {
  total: 1420,
  lakiLaki: 728,
  perempuan: 692,
  kepalaKeluarga: 412,
  usia: [
    { label: 'Balita (0-5 thn)', jumlah: 140, pct: 10 },
    { label: 'Anak-Anak (6-12 thn)', jumlah: 180, pct: 13 },
    { label: 'Remaja (13-18 thn)', jumlah: 210, pct: 15 },
    { label: 'Dewasa Produktif (19-59 thn)', jumlah: 710, pct: 50 },
    { label: 'Lansia (60+ thn)', jumlah: 180, pct: 12 }
  ],
  pendidikan: [
    { label: 'Tidak/Belum Sekolah', jumlah: 240 },
    { label: 'SD / Sederajat', jumlah: 410 },
    { label: 'SMP / Sederajat', jumlah: 380 },
    { label: 'SMA / Sederajat', jumlah: 310 },
    { label: 'Diploma / Sarjana (S1+)', jumlah: 80 }
  ],
  pekerjaan: [
    { label: 'Petani / Pekebun', jumlah: 480 },
    { label: 'Nelayan', jumlah: 120 },
    { label: 'Wiraswasta / UMKM', jumlah: 210 },
    { label: 'Karyawan Swasta', jumlah: 160 },
    { label: 'PNS / TNI / POLRI', jumlah: 45 },
    { label: 'Pelajar / Mahasiswa', jumlah: 290 },
    { label: 'Tidak Bekerja', jumlah: 115 }
  ],
  agama: [
    { label: 'Islam', jumlah: 1310 },
    { label: 'Kristen Protestan', jumlah: 85 },
    { label: 'Katolik', jumlah: 15 },
    { label: 'Hindu', jumlah: 10 }
  ]
}

const INITIAL_PPID = [
  { id: 1, title: 'Peraturan Desa Padaleu No. 3 Tahun 2025 tentang Ketertiban Umum', type: 'Peraturan Desa', size: '1.2 MB', date: '2025-11-12' },
  { id: 2, title: 'Laporan Realisasi APBDes Padaleu Semester II TA 2025', type: 'Laporan Keuangan', size: '2.4 MB', date: '2026-01-15' },
  { id: 3, title: 'SK Kepala Desa No. 14 tentang Pengangkatan Pengurus BUMDes 2026', type: 'Surat Keputusan', size: '840 KB', date: '2026-02-05' },
  { id: 4, title: 'Rencana Pembangunan Jangka Menengah Desa (RPJMDes) 2022-2028', type: 'Perencanaan', size: '5.8 MB', date: '2022-08-20' },
  { id: 5, title: 'Peraturan Desa No. 1 Tahun 2026 tentang Anggaran Pendapatan & Belanja Desa', type: 'Peraturan Desa', size: '1.8 MB', date: '2026-01-08' }
]

const INITIAL_AGENDA = [
  { id: 1, title: 'Gotong Royong Kebersihan Saluran Irigasi Persawahan Dusun I', date: '2026-08-05', time: '07:30 - Selesai', loc: 'Irigasi Sawah Dusun I', desc: 'Dihimbau warga Dusun I membawa alat parang dan cangkul untuk normalisasi saluran air sawah.' },
  { id: 2, title: 'Rapat Pleno BPD Desa Padaleu Evaluasi Program Triwulan II', date: '2026-08-12', time: '09:00 - 12:00', loc: 'Aula Kantor Desa', desc: 'Rapat koordinasi bersama Badan Permusyawaratan Desa untuk meninjau perkembangan fisik proyek semenisasi jalan.' },
  { id: 3, title: 'Posyandu Balita & Imunisasi Rutin KIA', date: '2026-08-18', time: '08:00 - 11:30', loc: 'Gedung Posyandu Kasih Ibu', desc: 'Pelayanan timbang berat badan, imunisasi campak dan polio, serta pemberian makanan tambahan bernutrisi.' },
  { id: 4, title: 'Pelatihan Pemasaran Digital & E-Commerce untuk UMKM Desa', date: '2026-08-24', time: '13:00 - 17:00', loc: 'Ruang Multimedia Kantor Desa', desc: 'Pendampingan langsung pembuatan toko online WhatsApp Business dan teknik foto produk bagi pelaku usaha mikro.' }
]

// ── Icons Helper (optimized SVG) ──────────────────────────────────────────────

function IconFileText() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
    </svg>
  )
}
function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}
function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
function IconDownload() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
function IconPlus() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}
function IconTrash() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />
    </svg>
  )
}
function IconLogOut() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}

// ── App Component ─────────────────────────────────────────────────────────────

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'discover' | 'profil' | 'peta' | 'kependudukan' | 'berita' | 'agenda' | 'potensi' | 'wisata' | 'umkm' | 'galeri' | 'apbdes' | 'ppid' | 'kontak' | 'admin'>('home')
  
  // App States (manipulated by mock admin panel)
  const [discoverItems, setDiscoverItems] = useState(INITIAL_DISCOVER_ITEMS)
  const [berita, setBerita] = useState(INITIAL_BERITA)
  const [umkmList, setUmkmList] = useState(INITIAL_UMKM)
  const [mapMarkers, setMapMarkers] = useState(INITIAL_MAP_MARKERS)
  const [apbdes, setApbdes] = useState(INITIAL_APB_DES)
  const [statistik, setStatistik] = useState(INITIAL_STATISTIK_PENDUDUK)
  const [agendas] = useState(INITIAL_AGENDA)
  const [ppidDocs] = useState(INITIAL_PPID)

  // Interactive Overlays/Detail page states
  const [selectedDiscoverId, setSelectedDiscoverId] = useState<number | null>(null)
  const [selectedBeritaId, setSelectedBeritaId] = useState<number | null>(null)
  const [discoverFilter, setDiscoverFilter] = useState<'Semua' | 'Alam' | 'Budaya' | 'Kuliner' | 'Penginapan'>('Semua')
  const [lang, setLang] = useState<'id' | 'en'>('id')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const triggerToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 3000)
  }

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedBeritaId(null)
    setSelectedDiscoverId(null)
  }, [currentPage])

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-slate-800 bg-[#f8f9fa] selection:bg-[#d4af37]/30">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1e4620] border-l-4 border-[#d4af37] text-white px-5 py-4.5 rounded-xl shadow-2xl animate-bounce flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping" />
          <p className="font-semibold text-sm">{toastMessage}</p>
        </div>
      )}

      {/* ── Floating Header & Navigation (Mürren Inspired) ─────────────────── */}
      <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Info Bar */}
        <div className="bg-[#0f2811] text-[#f1f6f1]/80 text-[11px] font-medium tracking-wide py-1.5 px-6 flex items-center justify-between border-b border-[#1e4620]/40">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">📍 Lembo, Konawe Utara</span>
            <span>📞 (+62) 812-3456-789</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">Website Resmi Sistem Informasi Desa Padaleu</span>
            <div className="flex items-center gap-1.5 bg-[#1e4620] px-2 py-0.5 rounded border border-[#d4af37]/20">
              <button onClick={() => setLang('id')} className={`font-bold transition-colors ${lang === 'id' ? 'text-[#d4af37]' : 'text-white/60'}`}>ID</button>
              <span className="text-white/30 text-[9px]">|</span>
              <button onClick={() => setLang('en')} className={`font-bold transition-colors ${lang === 'en' ? 'text-[#d4af37]' : 'text-white/60'}`}>EN</button>
            </div>
          </div>
        </div>

        {/* Main Glassmorphic Navbar */}
        <nav className="bg-white/95 backdrop-blur-md border-b border-[#1e4620]/10 shadow-sm transition-all duration-300 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            {/* Swiss-inspired Badge/Shield Logo */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1e4620] to-[#0f2811] border border-[#d4af37] flex items-center justify-center shadow-md">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#d4af37" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#f1f6f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h1 className="font-extrabold text-base leading-tight tracking-tight text-[#0f2811]">DESA PADALEU</h1>
              <p className="text-[10px] uppercase font-bold tracking-widest text-[#d4af37]">Lembo • Konawe Utara</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1">
            {[
              { id: 'home', label: 'Beranda' },
              { id: 'discover', label: 'Discover' },
              { id: 'profil', label: 'Profil Desa' },
              { id: 'peta', label: 'Peta Digital' },
              { id: 'kependudukan', label: 'Kependudukan' },
              { id: 'berita', label: 'Berita' },
              { id: 'agenda', label: 'Agenda' },
              { id: 'potensi', label: 'Potensi & Wisata' },
              { id: 'umkm', label: 'UMKM' },
              { id: 'apbdes', label: 'Transparansi APBDes' },
              { id: 'ppid', label: 'PPID' },
              { id: 'kontak', label: 'Hubungi Kami' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id as any)}
                className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  currentPage === item.id 
                    ? 'text-[#1e4620] bg-[#f1f6f1] border-b-2 border-[#d4af37]' 
                    : 'text-[#0f2811]/70 hover:text-[#1e4620] hover:bg-[#f1f6f1]/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setCurrentPage('admin')}
              className={`px-4.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 ${
                currentPage === 'admin'
                  ? 'bg-[#d4af37] text-[#0f2811] ring-2 ring-[#d4af37]/30'
                  : 'bg-[#1e4620] hover:bg-[#0f2811] text-white hover:shadow-md'
              }`}
            >
              🔒 Admin Panel
            </button>
          </div>
        </nav>

        {/* Mobile Submenu Helper - Horizontal Scrolling */}
        <div className="xl:hidden bg-white border-b border-[#1e4620]/10 flex gap-2 overflow-x-auto px-4 py-2 scrollbar-none">
          {[
            { id: 'home', label: 'Beranda' },
            { id: 'discover', label: 'Discover' },
            { id: 'profil', label: 'Profil' },
            { id: 'peta', label: 'Peta GIS' },
            { id: 'kependudukan', label: 'Statistik' },
            { id: 'berita', label: 'Berita' },
            { id: 'agenda', label: 'Agenda' },
            { id: 'potensi', label: 'Wisata' },
            { id: 'umkm', label: 'UMKM' },
            { id: 'apbdes', label: 'APBDes' },
            { id: 'ppid', label: 'PPID' },
            { id: 'kontak', label: 'Kontak' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id as any)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all ${
                currentPage === item.id
                  ? 'bg-[#1e4620] text-white'
                  : 'bg-[#f1f6f1] text-[#0f2811]/80 hover:bg-[#1e4620]/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </header>

      {/* ── Main Content Container ──────────────────────────────────────────── */}
      <main className="flex-grow">
        
        {/* Halaman: HOME (Beranda) */}
        {currentPage === 'home' && (
          <div className="animate-fade-in">
            {/* Immersive Parallax-like Hero Section */}
            <section className="relative h-[95vh] min-h-[600px] bg-[#0f2811] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1800&auto=format&fit=crop&q=90" 
                  alt="Desa Pesisir Padaleu Landscape" 
                  className="w-full h-full object-cover opacity-50 scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2811] via-transparent to-[#0f2811]/55" />
              </div>

              {/* Centered Minimalist Typography */}
              <div className="relative z-10 text-center px-6 max-w-5xl">
                <div className="inline-flex items-center gap-2 bg-[#d4af37]/25 border border-[#d4af37]/50 text-[#d4af37] px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-widest mb-8 backdrop-blur-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-ping" />
                  Ekowisata Pesisir Konawe Utara
                </div>
                
                <h1 className="text-white text-5xl md:text-8xl font-extrabold font-swiss-title tracking-tight leading-none mb-6">
                  Jelajahi Surga<br />
                  Tersembunyi <span className="text-[#d4af37] italic">Padaleu</span>
                </h1>
                
                <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                  Nikmati perpaduan asri ekowisata mangrove, deburan ombak pantai berpasir putih teluk Lembo, dan kehangatan tradisi lokal masyarakat desa.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button 
                    onClick={() => setCurrentPage('discover')}
                    className="px-9 py-4 bg-[#d4af37] hover:bg-[#aa8c2c] text-[#0f2811] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform hover:-translate-y-1"
                  >
                    Mulai Eksplorasi (Discover)
                  </button>
                  <button 
                    onClick={() => setCurrentPage('peta')}
                    className="px-9 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-xs uppercase tracking-wider rounded-xl backdrop-blur-sm transition-transform hover:-translate-y-1"
                  >
                    Peta Trekking & POI
                  </button>
                </div>
              </div>
            </section>

            {/* Teaser Destinations Section (Discover Cards) */}
            <section className="max-w-7xl mx-auto px-6 py-24">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Daya Tarik Utama</p>
                <h2 className="text-3xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">Destinasi Pilihan Wisatawan</h2>
                <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {discoverItems.slice(0, 3).map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => { setSelectedDiscoverId(item.id); setCurrentPage('discover') }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg border border-[#1e4620]/5 cursor-pointer hover-lift group"
                  >
                    <div className="h-64 overflow-hidden relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <span className="absolute bottom-4 left-4 bg-[#d4af37] text-[#0f2811] text-[9px] font-extrabold uppercase px-3 py-1 rounded-full">{item.category}</span>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-400 text-[10px] font-bold uppercase">{item.location}</p>
                      <h3 className="font-extrabold text-lg text-[#0f2811] mt-1.5 line-clamp-1">{item.title}</h3>
                      <p className="text-slate-500 text-xs mt-2 line-clamp-2 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Halaman: DISCOVER (Eksplorasi Pariwisata) */}
        {currentPage === 'discover' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            {selectedDiscoverId === null ? (
              <>
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Eksplorasi Desa</p>
                  <h1 className="text-4xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">Discover Padaleu</h1>
                  <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                  {['Semua', 'Alam', 'Budaya', 'Kuliner', 'Penginapan'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setDiscoverFilter(filter as any)}
                      className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                        discoverFilter === filter
                          ? 'bg-[#1e4620] text-white shadow-sm'
                          : 'bg-white text-[#0f2811]/70 hover:bg-green-light'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                {/* Discover Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {discoverItems
                    .filter(item => discoverFilter === 'Semua' || item.category === discoverFilter)
                    .map(item => (
                      <div 
                        key={item.id} 
                        onClick={() => setSelectedDiscoverId(item.id)}
                        className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-[#1e4620]/5 cursor-pointer hover-lift group"
                      >
                        <div className="h-60 overflow-hidden relative">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <span className="absolute top-4 left-4 bg-[#1e4620] text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-full">{item.category}</span>
                        </div>
                        <div className="p-6">
                          <p className="text-slate-400 text-[10px] font-bold uppercase">{item.location}</p>
                          <h3 className="font-extrabold text-base text-[#0f2811] mt-1.5 leading-snug">{item.title}</h3>
                          <p className="text-slate-500 text-xs mt-3 line-clamp-3 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </>
            ) : (
              /* Discover Detail Page / Overlay */
              (() => {
                const item = discoverItems.find(d => d.id === selectedDiscoverId)
                if (!item) return null
                return (
                  <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
                    <button 
                      onClick={() => setSelectedDiscoverId(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e4620] hover:text-[#d4af37] uppercase tracking-wider mb-8"
                    >
                      &larr; Kembali ke Discover
                    </button>

                    <div className="h-96 overflow-hidden rounded-2xl mb-8 relative">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      <span className="absolute top-4 left-4 bg-[#d4af37] text-[#0f2811] text-xs font-extrabold uppercase px-4 py-1.5 rounded-full">{item.category}</span>
                    </div>

                    <p className="text-xs font-bold text-[#d4af37] uppercase tracking-widest mb-1">{item.location}</p>
                    <h1 className="text-3xl sm:text-4xl font-bold font-swiss-title text-[#0f2811] tracking-tight leading-none mb-6">{item.title}</h1>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-8">{item.description}</p>

                    <div className="grid md:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
                      <div>
                        <h4 className="font-bold text-xs uppercase text-[#0f2811] mb-3">Fasilitas & Layanan</h4>
                        <ul className="text-xs space-y-2 text-slate-500">
                          {item.facilities.map((fac, idx) => <li key={idx}>✓ {fac}</li>)}
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <p className="text-xs"><span className="font-bold text-[#0f2811] block mb-1">Jam Operasional:</span> <span className="text-slate-500">{item.hours}</span></p>
                        <p className="text-xs"><span className="font-bold text-[#0f2811] block mb-1">Kontak Informasi:</span> <span className="text-slate-500">{item.contact}</span></p>
                        <button 
                          onClick={() => { setCurrentPage('peta'); triggerToast(`Menampilkan lokasi ${item.title} di peta...`) }}
                          className="px-6 py-2.5 bg-[#f1f6f1] hover:bg-[#1e4620] hover:text-white text-[#1e4620] font-bold text-xs rounded-xl uppercase transition-all"
                        >
                          Tampilkan di Peta Digital
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })()
            )}
          </div>
        )}

        {/* Halaman: PROFIL DESA */}
        {currentPage === 'profil' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Tentang Padaleu</p>
              <h1 className="text-4xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">Sejarah & Profil Desa</h1>
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
            </div>

            {/* Grid Sejarah & Visi Misi */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1e4620]/5">
                <h2 className="text-xl font-bold font-swiss-title text-[#0f2811] swiss-border pb-3 mb-4">Sejarah Singkat Desa</h2>
                <div className="prose prose-slate text-slate-600 text-sm leading-relaxed space-y-4">
                  <p>
                    Desa Padaleu didirikan pada awal dekade 1980-an yang mulanya berawal dari pemukiman transmigran lokal dan petani komoditas perkebunan di Kecamatan Lembo. Nama "Padaleu" sendiri diambil dari bahasa daerah setempat yang melambangkan kesuburan tanah dan keteduhan daerah pesisir.
                  </p>
                  <p>
                    Seiring dibentuknya pemekaran Kabupaten Konawe Utara, Desa Padaleu terus berbenah secara administratif dan bergotong royong membangun infrastruktur. Dari sentra pertanian tadah hujan tradisional, Padaleu kini bertransformasi menjadi salah satu desa percontohan digitalisasi informasi serta lumbung cengkeh unggulan di wilayah Lembo.
                  </p>
                </div>
              </div>

              <div className="bg-[#0f2811] text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
                <h2 className="text-xl font-bold font-swiss-title text-[#d4af37] border-b border-white/20 pb-3 mb-4">Visi & Misi Desa</h2>
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">Visi</p>
                  <p className="text-sm font-semibold italic mt-1 text-[#f1f6f1]">
                    "Mewujudkan Desa Padaleu yang Sejahtera, Mandiri, Transparan, Berbasis Sektor Perkebunan Unggul dan Pemanfaatan Teknologi Informasi."
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#d4af37] font-bold mb-2">Misi Utama</p>
                  <ul className="text-xs space-y-2 text-[#f1f6f1]/80 leading-relaxed">
                    <li>1. Mewujudkan pelayanan prima yang berbasis teknologi informasi (E-Government).</li>
                    <li>2. Mengakselerasi infrastruktur jalan tani dan irigasi guna mempermudah hasil panen cengkeh.</li>
                    <li>3. Membina kemandirian ekonomi pemuda dan UMKM lokal melalui penyaluran stimulus BUMDes.</li>
                    <li>4. Meningkatkan keterbukaan penggunaan APBDes secara akuntabel dan transparan kepada masyarakat.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Struktur Organisasi & Aparatur */}
            <div className="mb-20">
              <h2 className="text-2xl font-bold text-center text-[#0f2811] mb-12">Pemerintahan & Perangkat Desa</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { nama: 'Suprianto, S.Sos.', jabatan: 'Kepala Desa', desk: 'Bertanggung jawab penuh atas penyelenggaraan pemerintahan dan pembangunan fisik/non-fisik desa.', img: imgKepDes },
                  { nama: 'Hardiansyah, A.Md.', jabatan: 'Sekretaris Desa', desk: 'Mengkoordinasikan administrasi umum, pelayanan data publik, kearsipan, serta penyusunan draf APBDes.', img: imgKKN },
                  { nama: 'Nurlina, S.E.', jabatan: 'Bendahara Desa', desk: 'Mengelola siklus pembukuan, realisasi dana anggaran desa, perpajakan, serta pelaporan SPJ APBDes.', img: imgAvatar },
                  { nama: 'Rahmat Hidayat', jabatan: 'Kaur Pembangunan', desk: 'Melakukan monitoring lapangan, pemeliharaan infrastruktur jalan desa, jembatan tani, dan sarana umum.', img: imgProker }
                ].map((aparat, i) => (
                  <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover-lift text-center p-6">
                    <img src={aparat.img} alt={aparat.nama} className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-2 border-[#d4af37]" />
                    <h3 className="font-extrabold text-sm text-[#0f2811]">{aparat.nama}</h3>
                    <p className="text-[11px] text-[#d4af37] font-bold uppercase tracking-wider mb-3">{aparat.jabatan}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{aparat.desk}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Halaman: PETA DIGITAL DESA (Leaflet.js) */}
        {currentPage === 'peta' && (
          <div className="animate-fade-in">
            <div className="grid lg:grid-cols-12 h-[calc(100vh-140px)] min-h-[500px]">
              
              {/* Sidebar Menu */}
              <div className="lg:col-span-4 bg-white border-r border-[#1e4620]/10 flex flex-col p-6 overflow-y-auto">
                <h1 className="text-xl font-bold font-swiss-title text-[#0f2811] mb-2">Peta Digital Pesisir</h1>
                <p className="text-slate-500 text-xs leading-relaxed mb-6">Navigasi titik penting (POI) geografis Desa Padaleu, Kecamatan Lembo, Konawe Utara.</p>

                {/* Categories */}
                <div className="mb-6">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#d4af37] mb-3">Filter Kategori</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Semua', 'Fasilitas', 'Ibadah', 'Pendidikan', 'Wisata', 'UMKM'].map((cat) => (
                      <button
                        key={cat}
                        className="py-2.5 px-4 bg-[#f1f6f1] hover:bg-[#1e4620]/15 text-[#0f2811] text-xs font-bold rounded-xl transition-colors border border-transparent hover:border-[#1e4620]/10"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* POI List */}
                <div className="flex-grow">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#d4af37] mb-3">Daftar Titik Lokasi ({mapMarkers.length})</p>
                  <div className="space-y-3">
                    {mapMarkers.map((marker) => (
                      <div 
                        key={marker.id} 
                        className="bg-[#f8f9fa] border border-[#1e4620]/5 p-3 rounded-xl hover:bg-white hover:border-[#d4af37] hover:shadow-md transition-all cursor-pointer flex gap-3"
                      >
                        <img src={marker.image} alt={marker.title} className="w-12 h-12 object-cover rounded-lg" />
                        <div>
                          <h4 className="font-extrabold text-[#0f2811] text-xs leading-tight">{marker.title}</h4>
                          <span className="text-[9px] font-bold text-[#d4af37] uppercase tracking-wider">{marker.category}</span>
                          <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{marker.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Leaflet GIS Map Container */}
              <div className="lg:col-span-8 bg-slate-200 relative">
                <LeafletMapComponent markers={mapMarkers} />
              </div>
            </div>
          </div>
        )}

        {/* Halaman: DATA KEPENDUDUKAN (Dashboard) */}
        {currentPage === 'kependudukan' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Sistem Informasi Kependudukan</p>
              <h1 className="text-4xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">Dashboard Demografi Warga</h1>
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#1e4620]/5 text-center">
                <p className="text-4xl font-extrabold text-[#1e4620]">{statistik.total}</p>
                <p className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mt-1">Total Penduduk</p>
                <p className="text-[10px] text-slate-400">Jiwa terdata</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#1e4620]/5 text-center">
                <p className="text-4xl font-extrabold text-[#1e4620]">{statistik.lakiLaki}</p>
                <p className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mt-1">Laki-Laki</p>
                <p className="text-[10px] text-slate-400">{Math.round((statistik.lakiLaki / statistik.total) * 100)}% Rasio</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#1e4620]/5 text-center">
                <p className="text-4xl font-extrabold text-[#1e4620]">{statistik.perempuan}</p>
                <p className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mt-1">Perempuan</p>
                <p className="text-[10px] text-slate-400">{Math.round((statistik.perempuan / statistik.total) * 100)}% Rasio</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#1e4620]/5 text-center">
                <p className="text-4xl font-extrabold text-[#1e4620]">{statistik.kepalaKeluarga}</p>
                <p className="text-xs font-bold text-[#d4af37] uppercase tracking-wider mt-1">Kepala Keluarga</p>
                <p className="text-[10px] text-slate-400">KK Aktif</p>
              </div>
            </div>

            {/* Demographics Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1e4620]/5">
                <h2 className="text-base font-bold text-[#0f2811] mb-6 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <span>🎓</span> Tingkat Pendidikan Terakhir
                </h2>
                <div className="space-y-5">
                  {statistik.pendidikan.map((edu, idx) => {
                    const pct = Math.round((edu.jumlah / statistik.total) * 100)
                    return (
                      <div key={idx} className="text-xs">
                        <div className="flex justify-between font-bold mb-1">
                          <span className="text-slate-600">{edu.label}</span>
                          <span className="text-[#1e4620]">{edu.jumlah} Jiwa ({pct}%)</span>
                        </div>
                        <div className="w-full bg-[#f1f6f1] h-2.5 rounded-full overflow-hidden">
                          <div className="bg-[#1e4620] h-full rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1e4620]/5">
                <h2 className="text-base font-bold text-[#0f2811] mb-6 border-b pb-3 border-slate-100 flex items-center gap-2">
                  <span>⏳</span> Kelompok Kelompok Umur
                </h2>
                <div className="space-y-5">
                  {statistik.usia.map((age, idx) => (
                    <div key={idx} className="text-xs">
                      <div className="flex justify-between font-bold mb-1">
                        <span className="text-slate-600">{age.label}</span>
                        <span className="text-[#d4af37]">{age.jumlah} Jiwa ({age.pct}%)</span>
                      </div>
                      <div className="w-full bg-[#f1f6f1] h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#d4af37] h-full rounded-full" style={{ width: `${age.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Halaman: BERITA DESA */}
        {currentPage === 'berita' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            {selectedBeritaId === null ? (
              <>
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Media Publikasi</p>
                  <h1 className="text-4xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">Kabar Berita Desa</h1>
                  <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {berita.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => setSelectedBeritaId(item.id)}
                      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-[#1e4620]/5 cursor-pointer hover-lift flex flex-col justify-between"
                    >
                      <div>
                        <div className="h-52 overflow-hidden relative">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          <span className="absolute top-4 left-4 bg-[#1e4620] text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">{item.category}</span>
                        </div>
                        <div className="p-6">
                          <p className="text-slate-400 text-[10px] font-medium mb-1">📅 {item.date}</p>
                          <h3 className="font-extrabold text-[#0f2811] text-base leading-snug line-clamp-2 hover:text-[#d4af37] transition-colors">{item.title}</h3>
                          <p className="text-slate-500 text-xs mt-3 line-clamp-3 leading-relaxed">{item.excerpt}</p>
                        </div>
                      </div>
                      <div className="p-6 pt-0 flex justify-between items-center text-[10px] font-bold text-[#1e4620] uppercase tracking-wider border-t border-slate-50 mt-4 pt-4">
                        <span>Baca Selengkapnya</span>
                        <IconArrowRight />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              (() => {
                const article = berita.find(b => b.id === selectedBeritaId)
                if (!article) return null
                return (
                  <article className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100">
                    <button 
                      onClick={() => setSelectedBeritaId(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1e4620] hover:text-[#d4af37] uppercase tracking-wider mb-8"
                    >
                      ← Kembali ke Daftar Berita
                    </button>
                    
                    <span className="bg-[#d4af37]/20 text-[#0f2811] text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full">{article.category}</span>
                    <h1 className="text-3xl sm:text-4xl font-bold font-swiss-title text-[#0f2811] tracking-tight leading-tight mt-4 mb-4">{article.title}</h1>
                    
                    <div className="flex items-center justify-between text-xs text-slate-400 border-b pb-6 border-slate-100 mb-8">
                      <span>Tanggal: <b>{article.date}</b></span>
                      <span>Oleh: <b>{article.author}</b></span>
                    </div>

                    <img src={article.image} alt={article.title} className="w-full h-96 object-cover rounded-2xl shadow-md mb-8" />
                    
                    <div className="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-6 whitespace-pre-line">
                      {article.content}
                    </div>
                  </article>
                )
              })()
            )}
          </div>
        )}

        {/* Halaman: AGENDA DESA */}
        {currentPage === 'agenda' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Jadwal Agenda Warga</p>
              <h1 className="text-4xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">Kalender Kegiatan Desa</h1>
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Calendar Grid View */}
              <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-[#1e4620]/5">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-extrabold text-[#0f2811] text-base uppercase tracking-wider">Agustus 2026</h3>
                </div>

                <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-bold text-slate-400 uppercase mb-4">
                  <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {[1, 2, 3, 4, 5].map((e) => <div key={`empty-${e}`} className="h-16 sm:h-20 bg-slate-50/40 rounded-xl" />)}
                  {Array.from({ length: 31 }).map((_, dIdx) => {
                    const dayNum = dIdx + 1
                    const paddedDay = dayNum < 10 ? `0${dayNum}` : `${dayNum}`
                    const fullDateStr = `2026-08-${paddedDay}`
                    const hasEvent = agendas.find(a => a.date === fullDateStr)

                    return (
                      <div 
                        key={dayNum} 
                        className={`h-16 sm:h-20 p-2 rounded-xl flex flex-col justify-between transition-all border ${
                          hasEvent 
                            ? 'bg-[#f1f6f1] border-[#d4af37]' 
                            : 'bg-white border-slate-100 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`text-xs font-bold ${hasEvent ? 'text-[#1e4620]' : 'text-slate-500'}`}>{dayNum}</span>
                        {hasEvent && (
                          <div 
                            onClick={() => triggerToast(`Detail: ${hasEvent.title}`)}
                            className="bg-[#d4af37] text-[#0f2811] text-[8px] font-extrabold uppercase px-1 py-0.5 rounded truncate cursor-pointer"
                          >
                            📍 {hasEvent.title}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* List */}
              <div className="lg:col-span-4 space-y-6">
                <h3 className="font-extrabold text-[#0f2811] text-base uppercase tracking-wider mb-6">Daftar Rincian Agenda</h3>
                {agendas.map((item) => (
                  <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <span className="bg-[#d4af37] text-[#0f2811] text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">📅 {item.date}</span>
                    <h4 className="font-extrabold text-sm text-[#0f2811] mt-2">{item.title}</h4>
                    <p className="text-[11px] text-[#1e4620] font-bold mt-1">📍 {item.loc}</p>
                    <p className="text-slate-500 text-xs mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Halaman: POTENSI DESA & WISATA */}
        {currentPage === 'potensi' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Potensi Perekonomian</p>
              <h1 className="text-4xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">Komoditas & Potensi Desa</h1>
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                <img src={imgCengkeh} alt="Perkebunan Cengkeh" className="w-full md:w-44 h-44 object-cover rounded-2xl" />
                <div>
                  <span className="bg-[#1e4620]/10 text-[#1e4620] text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">Komoditas Utama</span>
                  <h3 className="font-extrabold text-base text-[#0f2811] mt-2">Cengkeh Lembo</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2">
                    Sektor perkebunan cengkeh merupakan tulang punggung perekonomian utama Desa Padaleu yang menyuplai komoditas rempah-rempah berkualitas prima ke pasar nasional.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6 items-center">
                <img src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&h=350&fit=crop" alt="Madu Hutan" className="w-full md:w-44 h-44 object-cover rounded-2xl" />
                <div>
                  <span className="bg-[#1e4620]/10 text-[#1e4620] text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">Hasil Hutan</span>
                  <h3 className="font-extrabold text-base text-[#0f2811] mt-2">Madu Hutan Liar</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2">
                    Madu liar murni yang dipanen dari pohon-pohon besar di pedalaman hutan Lembo, dikemas secara tradisional dan sehat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Halaman: UMKM DESA */}
        {currentPage === 'umkm' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Produk Unggulan</p>
              <h1 className="text-4xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">Katalog UMKM Desa</h1>
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {umkmList.map((umkm) => (
                <div key={umkm.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#1e4620]/5 flex flex-col justify-between">
                  <div>
                    <div className="h-56 overflow-hidden relative">
                      <img src={umkm.image} alt={umkm.name} className="w-full h-full object-cover" />
                      <span className="absolute top-4 left-4 bg-[#1e4620] text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">{umkm.category}</span>
                    </div>
                    <div className="p-6">
                      <p className="text-[#d4af37] text-[10px] font-extrabold uppercase tracking-wider">{umkm.seller}</p>
                      <h3 className="font-extrabold text-[#0f2811] text-base leading-snug mt-1 mb-2">{umkm.name}</h3>
                      <p className="text-[#1e4620] font-extrabold text-base mb-3">{umkm.price}</p>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{umkm.description}</p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-4">
                    <a
                      href={`https://wa.me/${umkm.phone}?text=Halo%20penjual%20di%20Web%20Desa%20Padaleu%2C%20saya%20tertarik%20untuk%20membeli%20produk%20"${encodeURIComponent(umkm.name)}".%20Mohon%20info%20ketersediaan%20barang.%20Terima%20kasih.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#1b5e20] hover:bg-[#123c14] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-md"
                    >
                      <span>💬 Hubungi via WhatsApp</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Halaman: APBDES (Transparansi) */}
        {currentPage === 'apbdes' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Keterbukaan Anggaran</p>
              <h1 className="text-4xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">Laporan Anggaran APBDes {apbdes.tahun}</h1>
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#1e4620]/5">
                <p className="text-xs font-bold text-slate-400 uppercase">Total Pendapatan Desa</p>
                <p className="text-3xl font-extrabold text-[#1e4620] mt-1">Rp {apbdes.pendapatan.total.toLocaleString('id-ID')}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#1e4620]/5">
                <p className="text-xs font-bold text-slate-400 uppercase">Total Belanja / Realisasi</p>
                <p className="text-3xl font-extrabold text-[#d4af37] mt-1">Rp {apbdes.belanja.total.toLocaleString('id-ID')}</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#1e4620]/5">
                <p className="text-xs font-bold text-slate-400 uppercase">Pembiayaan / SILPA</p>
                <p className="text-3xl font-extrabold text-[#1e293b] mt-1">Rp {apbdes.pembiayaan.total.toLocaleString('id-ID')}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1e4620]/5">
                <h3 className="font-extrabold text-base text-[#0f2811] mb-6 flex justify-between border-b pb-3 border-slate-100">
                  <span>💰 Pos Pendapatan Desa</span>
                </h3>
                <div className="space-y-4">
                  {apbdes.pendapatan.items.map((item: any, idx: number) => {
                    const pct = Math.round((item.nilai / apbdes.pendapatan.total) * 100)
                    return (
                      <div key={idx} className="text-xs">
                        <div className="flex justify-between font-bold mb-1">
                          <span className="text-slate-600">{item.nama}</span>
                          <span className="text-[#1e4620]">Rp {item.nilai.toLocaleString('id-ID')} ({pct}%)</span>
                        </div>
                        <div className="w-full bg-[#f1f6f1] h-2.5 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ backgroundColor: item.color, width: `${pct}%` }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#1e4620]/5">
                <h3 className="font-extrabold text-base text-[#0f2811] mb-6 flex justify-between border-b pb-3 border-slate-100">
                  <span>🛒 Rincian Alokasi Belanja</span>
                </h3>
                <div className="space-y-4">
                  {apbdes.belanja.items.map((item: any, idx: number) => {
                    const pct = Math.round((item.nilai / apbdes.belanja.total) * 100)
                    return (
                      <div key={idx} className="text-xs">
                        <div className="flex justify-between font-bold mb-1">
                          <span className="text-slate-600">{item.nama}</span>
                          <span className="text-[#d4af37]">Rp {item.nilai.toLocaleString('id-ID')} ({pct}%)</span>
                        </div>
                        <div className="w-full bg-[#f1f6f1] h-2.5 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ backgroundColor: item.color, width: `${pct}%` }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Halaman: PPID */}
        {currentPage === 'ppid' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Informasi Dokumen</p>
              <h1 className="text-4xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">PPID & Regulasi Publik</h1>
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left text-slate-600">
                  <thead className="bg-[#f1f6f1] text-[#0f2811] font-bold uppercase tracking-wider border-b border-slate-100">
                    <tr>
                      <th className="p-4 rounded-l-xl">Nama Dokumen</th>
                      <th className="p-4">Kategori</th>
                      <th className="p-4">Tanggal Rilis</th>
                      <th className="p-4 rounded-r-xl text-center">Unduh</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ppidDocs.map((doc) => (
                      <tr key={doc.id} className="border-b border-slate-100 hover:bg-[#f1f6f1]/20 transition-colors">
                        <td className="p-4 font-bold text-[#0f2811] flex items-center gap-2">
                          <IconFileText />
                          <span>{doc.title}</span>
                        </td>
                        <td className="p-4">{doc.type}</td>
                        <td className="p-4">{doc.date}</td>
                        <td className="p-4 text-center">
                          <button 
                            onClick={() => triggerToast(`Mengunduh ${doc.title}...`)}
                            className="p-2 bg-[#f1f6f1] hover:bg-[#1e4620] hover:text-white rounded-lg transition-colors text-[#1e4620]"
                          >
                            <IconDownload />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Halaman: GALERI DESA */}
        {currentPage === 'galeri' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Galeri Dokumentasi</p>
              <h1 className="text-4xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">Kegiatan & Pembangunan Desa</h1>
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Penyambutan KKN UHO', img: imgKKN, count: 12, desc: 'Pemerimaan dan pemaparan program pengabdian.' },
                { title: 'Pembahasan Rencana Kerja', img: imgProker, count: 8, desc: 'Rapat aparat merumuskan arah pembangunan.' },
                { title: 'Sosialisasi Bantuan Tani', img: imgGallery2, count: 6, desc: 'Pemberian pupuk dan arahan penyuluh.' },
                { title: 'Penerimaan Studi Banding', img: imgGallery3, count: 5, desc: 'Studi banding dari desa tetangga di Konawe Utara.' },
                { title: 'Kerja Bakti Masal Dusun II', img: imgGallery4, count: 15, desc: 'Kerja bakti pembersihan jembatan.' }
              ].map((album, idx) => (
                <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover-lift group">
                  <div className="h-64 overflow-hidden relative">
                    <img src={album.img} alt={album.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-4 right-4 bg-[#d4af37] text-[#0f2811] text-xs font-extrabold px-3 py-1 rounded-full">{album.count} Foto</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-extrabold text-base text-[#0f2811]">{album.title}</h3>
                    <p className="text-slate-500 text-xs mt-2">{album.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Halaman: HUBUNGI KAMI */}
        {currentPage === 'kontak' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#d4af37] text-xs font-extrabold uppercase tracking-widest mb-3">Hubungi Kami</p>
              <h1 className="text-4xl md:text-5xl font-bold font-swiss-title text-[#0f2811]">Kontak & Alamat</h1>
              <div className="w-16 h-1 bg-[#d4af37] mx-auto mt-4" />
            </div>

            <div className="grid md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-[#1e4620]/5">
                <h3 className="font-extrabold text-base text-[#0f2811] mb-6">✉ Kirim Pesan Aspirasi</h3>
                <form onSubmit={(e) => { e.preventDefault(); triggerToast('Pesan aspirasi Anda terkirim!') }} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Nama Lengkap" className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required />
                    <input type="email" placeholder="Email" className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required />
                  </div>
                  <input type="text" placeholder="Subjek" className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required />
                  <textarea rows={5} placeholder="Pesan Anda..." className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required></textarea>
                  <button type="submit" className="w-full py-3 bg-[#1e4620] hover:bg-[#0f2811] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all">Kirim Aspirasi</button>
                </form>
              </div>

              <div className="md:col-span-5 bg-[#0f2811] text-white p-8 rounded-3xl shadow-lg space-y-6">
                <h3 className="font-extrabold text-base text-[#d4af37]">Kantor Desa Padaleu</h3>
                <p className="text-xs text-[#f1f6f1]/80 leading-relaxed font-light">
                  Jalan Raya Trans Sulawesi No. 12, Pesisir Timur Lembo, Konawe Utara, Sulawesi Tenggara, Indonesia.
                </p>
                <div className="border-t border-white/10 pt-4 space-y-3 text-xs">
                  <p className="flex justify-between"><span className="text-[#d4af37] font-bold">Hari Layanan</span> <span>Senin - Jumat</span></p>
                  <p className="flex justify-between"><span className="text-[#d4af37] font-bold">Jam Kerja</span> <span>08:00 - 15:30 WITA</span></p>
                  <p className="flex justify-between"><span className="text-[#d4af37] font-bold">Email Kantor</span> <span>desa.padaleu@konaweutarakab.go.id</span></p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Halaman: ADMIN DASHBOARD PANEL */}
        {currentPage === 'admin' && (
          <div className="max-w-7xl mx-auto px-6 py-16 animate-fade-in">
            <AdminPanelDashboard 
              berita={berita} setBerita={setBerita}
              umkmList={umkmList} setUmkmList={setUmkmList}
              mapMarkers={mapMarkers} setMapMarkers={setMapMarkers}
              apbdes={apbdes} setApbdes={setApbdes}
              statistik={statistik} setStatistik={setStatistik}
              discoverItems={discoverItems} setDiscoverItems={setDiscoverItems}
              triggerToast={triggerToast}
            />
          </div>
        )}

      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0f2811] text-white pt-16 pb-8 border-t border-[#1e4620]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1e4620] border border-[#d4af37] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#d4af37" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#f1f6f1" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <p className="font-extrabold text-sm tracking-tight text-white">DESA PADALEU</p>
                <p className="text-[9px] uppercase font-bold text-[#d4af37]">Lembo • Konawe Utara</p>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Sistem pariwisata terpadu dan portal informasi transparansi Desa Padaleu. Dikelola oleh pokdarwis dan perangkat desa.
            </p>
          </div>
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-xs uppercase text-[#d4af37] tracking-wider">Navigasi</h4>
            <ul className="text-xs space-y-2 text-white/70">
              <li><button onClick={() => setCurrentPage('discover')} className="hover:text-[#d4af37]">Discover Desa</button></li>
              <li><button onClick={() => setCurrentPage('peta')} className="hover:text-[#d4af37]">Peta POI & Trekking</button></li>
              <li><button onClick={() => setCurrentPage('profil')} className="hover:text-[#d4af37]">Struktur Pemerintahan</button></li>
              <li><button onClick={() => setCurrentPage('kependudukan')} className="hover:text-[#d4af37]">Demografi Warga</button></li>
            </ul>
          </div>
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-xs uppercase text-[#d4af37] tracking-wider">Dokumen Regulasi</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              Hak Cipta Dilindungi. Seluruh informasi disajikan transparan sesuai dengan peraturan keterbukaan informasi publik (PPID).
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-[#1e4620]/30 pt-8 text-center text-xs text-white/50">
          <p>© 2026 Pemerintah Desa Padaleu, Lembo, Konawe Utara. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}

// ── Leaflet GIS Map Sub-Component ─────────────────────────────────────────────

function LeafletMapComponent({ markers }: { markers: any[] }) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapErr, setMapErr] = useState<string | null>(null)

  useEffect(() => {
    if (!mapRef.current) return
    
    const L = (window as any).L
    if (!L) {
      setMapErr('Memuat Peta Geografis Desa...')
      return
    }
    
    setMapErr(null)

    // Center Map on Padaleu coordinates
    const map = L.map(mapRef.current).setView([-2.855, 122.253], 14)

    // OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map)

    // Draw Boundaries (Polygon)
    const boundsPolygon = L.polygon([
      [-2.8450, 122.2450],
      [-2.8420, 122.2580],
      [-2.8550, 122.2640],
      [-2.8650, 122.2520],
      [-2.8610, 122.2420]
    ], {
      color: '#d4af37',
      fillColor: '#1e4620',
      fillOpacity: 0.08,
      weight: 3
    }).addTo(map)

    boundsPolygon.bindTooltip('Batas Administrasi Desa Padaleu', { sticky: true })

    // Draw Trekking Routes (Polylines)
    const trekkingPath = L.polyline([
      [-2.8620, 122.2490], // Mangrove
      [-2.8590, 122.2510], // Beach
      [-2.8540, 122.2530], // Office
      [-2.8510, 122.2430]  // Waterfall
    ], {
      color: '#aa8c2c',
      weight: 4,
      dashArray: '8, 8',
      opacity: 0.85
    }).addTo(map)

    trekkingPath.bindTooltip('Jalur Trekking Wisata Padaleu', { sticky: true })

    // Load Markers
    markers.forEach(item => {
      const pinIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color:#1e4620; color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid #d4af37; box-shadow:0 2px 5px rgba(0,0,0,0.3); font-weight:bold; font-size:10px;">📍</div>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      })

      const popupContent = `
        <div style="font-family: 'Inter', sans-serif; width: 220px; padding: 4px;">
          <img src="${item.image}" style="width:100%; height:95px; object-fit:cover; border-radius:8px; margin-bottom:8px;" />
          <h4 style="font-weight:bold; font-size:12px; color:#0f2811; margin-bottom:2px;">${item.title}</h4>
          <span style="font-weight:bold; font-size:9px; color:#d4af37; text-transform:uppercase;">${item.category}</span>
          <p style="font-size:10.5px; color:#64748b; margin-top:4px; line-height:1.4;">${item.description}</p>
        </div>
      `

      L.marker([item.lat, item.lng], { icon: pinIcon })
        .addTo(map)
        .bindPopup(popupContent)
    })

    return () => {
      map.remove()
    }
  }, [markers])

  return (
    <div className="w-full h-full relative">
      {mapErr && (
        <div className="absolute inset-0 bg-[#0f2811]/90 z-20 flex flex-col items-center justify-center text-[#f1f6f1] p-4 text-center">
          <span className="w-10 h-10 rounded-full border-4 border-t-[#d4af37] border-white/20 animate-spin mb-4" />
          <p className="text-sm font-semibold">{mapErr}</p>
        </div>
      )}
      <div ref={mapRef} className="w-full h-full z-10" />
    </div>
  )
}

// ── Admin Dashboard Panel Sub-Component ───────────────────────────────────────

interface AdminPanelProps {
  berita: any[]
  setBerita: React.Dispatch<React.SetStateAction<any[]>>
  umkmList: any[]
  setUmkmList: React.Dispatch<React.SetStateAction<any[]>>
  mapMarkers: any[]
  setMapMarkers: React.Dispatch<React.SetStateAction<any[]>>
  apbdes: any
  setApbdes: React.Dispatch<React.SetStateAction<any>>
  statistik: any
  setStatistik: React.Dispatch<React.SetStateAction<any>>
  discoverItems: any[]
  setDiscoverItems: React.Dispatch<React.SetStateAction<any[]>>
  triggerToast: (msg: string) => void
}

function AdminPanelDashboard({
  berita, setBerita,
  umkmList, setUmkmList,
  mapMarkers, setMapMarkers,
  apbdes, setApbdes,
  statistik, setStatistik,
  discoverItems, setDiscoverItems,
  triggerToast
}: AdminPanelProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'Administrator' | 'Operator' | 'Kepala Desa'>('Operator')

  // Tabs: 'berita', 'umkm', 'peta', 'apbdes', 'discover', 'statistik'
  const [adminTab, setAdminTab] = useState<'berita' | 'umkm' | 'peta' | 'apbdes' | 'discover' | 'statistik'>('berita')

  // Form states for creating news
  const [newTitle, setNewTitle] = useState('')
  const [newCat, setNewCat] = useState('Kegiatan')
  const [newExcerpt, setNewExcerpt] = useState('')
  const [newContent, setNewContent] = useState('')

  // Form states for creating UMKM
  const [newUmkmName, setNewUmkmName] = useState('')
  const [newUmkmCat, setNewUmkmCat] = useState('Pertanian')
  const [newUmkmPrice, setNewUmkmPrice] = useState('')
  const [newUmkmDesc, setNewUmkmDesc] = useState('')

  // Form states for creating marker peta
  const [newMarkerTitle, setNewMarkerTitle] = useState('')
  const [newMarkerLat, setNewMarkerLat] = useState('')
  const [newMarkerLng, setNewMarkerLng] = useState('')
  const [newMarkerCat, setNewMarkerCat] = useState('Fasilitas')
  const [newMarkerDesc, setNewMarkerDesc] = useState('')

  // Form states for discover item
  const [newDiscoverTitle, setNewDiscoverTitle] = useState('')
  const [newDiscoverCat, setNewDiscoverCat] = useState('Alam')
  const [newDiscoverLoc, setNewDiscoverLoc] = useState('')
  const [newDiscoverDesc, setNewDiscoverDesc] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.toLowerCase() === 'admin' && password === 'admin') {
      setIsLoggedIn(true)
      triggerToast(`Login sukses sebagai ${role}!`)
    } else {
      triggerToast('Gagal: Gunakan username "admin" dan password "admin"!')
    }
  }

  const addBerita = (e: React.FormEvent) => {
    e.preventDefault()
    const newArt = {
      id: Date.now(),
      title: newTitle,
      category: newCat,
      excerpt: newExcerpt,
      content: newContent,
      date: new Date().toISOString().split('T')[0],
      image: 'https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?w=800&auto=format&fit=crop',
      author: role
    }
    setBerita([newArt, ...berita])
    triggerToast('Berita baru berhasil dipublikasi!')
    setNewTitle('')
    setNewExcerpt('')
    setNewContent('')
  }

  const deleteBerita = (id: number) => {
    setBerita(berita.filter(b => b.id !== id))
    triggerToast('Berita berhasil dihapus!')
  }

  const addUmkm = (e: React.FormEvent) => {
    e.preventDefault()
    const newProduct = {
      id: Date.now(),
      name: newUmkmName,
      category: newUmkmCat,
      price: newUmkmPrice,
      seller: `Binaan BUMDes (${role})`,
      phone: '628123456789',
      image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=500&h=350&fit=crop',
      description: newUmkmDesc
    }
    setUmkmList([newProduct, ...umkmList])
    triggerToast('Produk UMKM berhasil didaftarkan!')
    setNewUmkmName('')
    setNewUmkmPrice('')
    setNewUmkmDesc('')
  }

  const deleteUmkm = (id: number) => {
    setUmkmList(umkmList.filter(u => u.id !== id))
    triggerToast('Produk UMKM berhasil dihapus!')
  }

  const addMarker = (e: React.FormEvent) => {
    e.preventDefault()
    const latNum = parseFloat(newMarkerLat)
    const lngNum = parseFloat(newMarkerLng)
    if (isNaN(latNum) || isNaN(lngNum)) {
      triggerToast('Koordinat GPS harus decimal!')
      return
    }
    const newPoint = {
      id: Date.now(),
      title: newMarkerTitle,
      lat: latNum,
      lng: lngNum,
      category: newMarkerCat,
      description: newMarkerDesc,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&h=300&fit=crop'
    }
    setMapMarkers([...mapMarkers, newPoint])
    triggerToast('Marker baru berhasil dipetakan!')
    setNewMarkerTitle('')
    setNewMarkerLat('')
    setNewMarkerLng('')
    setNewMarkerDesc('')
  }

  const deleteMarker = (id: number) => {
    setMapMarkers(mapMarkers.filter(m => m.id !== id))
    triggerToast('Marker berhasil dihapus!')
  }

  const addDiscoverItem = (e: React.FormEvent) => {
    e.preventDefault()
    const newItem = {
      id: Date.now(),
      title: newDiscoverTitle,
      category: newDiscoverCat,
      location: newDiscoverLoc,
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&auto=format&fit=crop',
      description: newDiscoverDesc,
      facilities: ['Fasilitas Umum Standard', 'Spot Foto'],
      hours: '08:00 - 18:00 WITA',
      contact: '+62 812-3456-7890',
      lat: -2.855,
      lng: 122.253
    }
    setDiscoverItems([newItem, ...discoverItems])
    triggerToast('Objek pariwisata baru didaftarkan!')
    setNewDiscoverTitle('')
    setNewDiscoverLoc('')
    setNewDiscoverDesc('')
  }

  const deleteDiscoverItem = (id: number) => {
    setDiscoverItems(discoverItems.filter(d => d.id !== id))
    triggerToast('Objek pariwisata berhasil dihapus!')
  }

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-sm border border-slate-100 mt-10">
        <h2 className="text-xl font-bold font-swiss-title text-center text-[#0f2811] mb-2">Autentikasi Dashboard Desa</h2>
        <p className="text-slate-400 text-xs text-center mb-8">Masuk untuk mengelola pariwisata & geografi Desa Padaleu.</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Peran</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value as any)}
              className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none"
            >
              <option>Operator</option>
              <option>Administrator</option>
              <option>Kepala Desa</option>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Username</label>
            <input 
              type="text" 
              placeholder="Masukkan admin" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" 
              required 
            />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Password</label>
            <input 
              type="password" 
              placeholder="Masukkan admin" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" 
              required 
            />
          </div>
          <button type="submit" className="w-full mt-4 py-3 bg-[#1e4620] hover:bg-[#0f2811] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md">
            Masuk ke Panel
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 grid lg:grid-cols-12 gap-8 mt-4">
      
      {/* Sidebar Panel Admin */}
      <div className="lg:col-span-3 border-r border-slate-100 pr-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl">🔒</span>
            <div>
              <h4 className="font-extrabold text-sm text-[#0f2811]">Pemerintahan Desa</h4>
              <p className="text-[9px] font-bold text-[#d4af37] uppercase tracking-wider">{role}</p>
            </div>
          </div>

          <div className="space-y-2">
            {[
              { id: 'berita', label: 'Kelola Berita', icon: '📝' },
              { id: 'discover', label: 'Objek Discover', icon: '⛵' },
              { id: 'umkm', label: 'Katalog UMKM', icon: '🛍️' },
              { id: 'peta', label: 'Marker Peta GIS', icon: '📍' },
              { id: 'apbdes', label: 'Kelola APBDes', icon: '💰' },
              { id: 'statistik', label: 'Statistik Penduduk', icon: '📊' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setAdminTab(tab.id as any)}
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold text-left transition-all flex items-center gap-3 ${
                  adminTab === tab.id
                    ? 'bg-[#f1f6f1] text-[#1e4620] border-l-4 border-[#d4af37]'
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        <button 
          onClick={() => { setIsLoggedIn(false); triggerToast('Logout berhasil!') }}
          className="mt-8 py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
        >
          <IconLogOut /> Keluar
        </button>
      </div>

      {/* Main Workspace */}
      <div className="lg:col-span-9">
        
        {/* TAB: Kelola Berita */}
        {adminTab === 'berita' && (
          <div className="space-y-8">
            <h3 className="font-bold text-[#0f2811] text-base swiss-border pb-2 mb-4">Publikasi Artikel & Berita Baru</h3>
            <form onSubmit={addBerita} className="space-y-4">
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Judul Artikel</label>
                <input 
                  type="text" 
                  placeholder="Contoh: Pembagian Pupuk Organik untuk Kelompok Tani" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Kategori Berita</label>
                  <select 
                    value={newCat}
                    onChange={(e) => setNewCat(e.target.value)}
                    className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none"
                  >
                    <option>Kegiatan</option>
                    <option>Pemerintahan</option>
                    <option>Pengumuman</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Ringkasan Singkat (Excerpt)</label>
                  <input 
                    type="text" 
                    placeholder="Deskripsi singkat yang tampil di halaman katalog..." 
                    value={newExcerpt}
                    onChange={(e) => setNewExcerpt(e.target.value)}
                    className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required 
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Isi Berita Lengkap</label>
                <textarea 
                  rows={6} 
                  placeholder="Ketik seluruh informasi lengkap terkait kegiatan desa di sini..." 
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required
                />
              </div>
              <button type="submit" className="px-6 py-3 bg-[#1e4620] hover:bg-[#0f2811] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
                <IconPlus /> Terbitkan Berita
              </button>
            </form>

            <div className="border-t border-slate-100 pt-6">
              <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-4">Daftar Berita Aktif</h4>
              <div className="space-y-3">
                {berita.map((art) => (
                  <div key={art.id} className="bg-[#f8f9fa] p-4 rounded-xl flex items-center justify-between border border-slate-100">
                    <div>
                      <h5 className="font-bold text-xs text-[#0f2811] line-clamp-1">{art.title}</h5>
                      <p className="text-[10px] text-slate-400">{art.date} • Kategori: {art.category}</p>
                    </div>
                    <button 
                      onClick={() => deleteBerita(art.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <IconTrash />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Objek Discover */}
        {adminTab === 'discover' && (
          <div className="space-y-8">
            <h3 className="font-bold text-[#0f2811] text-base swiss-border pb-2 mb-4">Dafrar/Edit Objek Discover</h3>
            <form onSubmit={addDiscoverItem} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Nama Objek Wisata/Daya Tarik</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Air Terjun Puncak Lembo" 
                    value={newDiscoverTitle}
                    onChange={(e) => setNewDiscoverTitle(e.target.value)}
                    className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Kategori Objek</label>
                  <select 
                    value={newDiscoverCat}
                    onChange={(e) => setNewDiscoverCat(e.target.value)}
                    className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none"
                  >
                    <option>Alam</option>
                    <option>Budaya</option>
                    <option>Kuliner</option>
                    <option>Penginapan</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Lokasi Wilayah Desa</label>
                <input 
                  type="text" 
                  placeholder="Contoh: Dusun III Hutan Lindung" 
                  value={newDiscoverLoc}
                  onChange={(e) => setNewDiscoverLoc(e.target.value)}
                  className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required 
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Deskripsi Lengkap Wisata</label>
                <textarea 
                  rows={4} 
                  placeholder="Detail keunikan objek wisata, fasilitas yang tersedia, tiket masuk, dll..." 
                  value={newDiscoverDesc}
                  onChange={(e) => setNewDiscoverDesc(e.target.value)}
                  className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required
                />
              </div>
              <button type="submit" className="px-6 py-3 bg-[#1e4620] hover:bg-[#0f2811] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
                <IconPlus /> Tambah ke Discover
              </button>
            </form>

            <div className="border-t border-slate-100 pt-6">
              <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-4">Daftar Objek Discover Aktif</h4>
              <div className="space-y-3">
                {discoverItems.map((item) => (
                  <div key={item.id} className="bg-[#f8f9fa] p-4 rounded-xl flex items-center justify-between border border-slate-100">
                    <div>
                      <h5 className="font-bold text-xs text-[#0f2811]">{item.title}</h5>
                      <p className="text-[10px] text-slate-400">{item.location} • Kategori: {item.category}</p>
                    </div>
                    <button 
                      onClick={() => deleteDiscoverItem(item.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <IconTrash />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Katalog UMKM */}
        {adminTab === 'umkm' && (
          <div className="space-y-8">
            <h3 className="font-bold text-[#0f2811] text-base swiss-border pb-2 mb-4">Registrasi Produk UMKM Baru</h3>
            <form onSubmit={addUmkm} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Nama Produk</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Madu Hutan Asli Rimba" 
                    value={newUmkmName}
                    onChange={(e) => setNewUmkmName(e.target.value)}
                    className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Harga Produk</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Rp 120.000 / Botol" 
                    value={newUmkmPrice}
                    onChange={(e) => setNewUmkmPrice(e.target.value)}
                    className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required 
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Kategori Produk</label>
                <select 
                  value={newUmkmCat}
                  onChange={(e) => setNewUmkmCat(e.target.value)}
                  className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none"
                >
                  <option>Pertanian</option>
                  <option>Kuliner</option>
                  <option>Kerajinan</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Deskripsi Produk & Kualitas</label>
                <textarea 
                  rows={4} 
                  placeholder="Detail kualitas produk, kemasan, stok, dll..." 
                  value={newUmkmDesc}
                  onChange={(e) => setNewUmkmDesc(e.target.value)}
                  className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required
                />
              </div>
              <button type="submit" className="px-6 py-3 bg-[#1e4620] hover:bg-[#0f2811] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
                <IconPlus /> Daftarkan Produk
              </button>
            </form>

            <div className="border-t border-slate-100 pt-6">
              <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-4">Daftar Produk UMKM Terdaftar</h4>
              <div className="space-y-3">
                {umkmList.map((product) => (
                  <div key={product.id} className="bg-[#f8f9fa] p-4 rounded-xl flex items-center justify-between border border-slate-100">
                    <div>
                      <h5 className="font-bold text-xs text-[#0f2811]">{product.name}</h5>
                      <p className="text-[10px] text-slate-400">{product.price} • Penjual: {product.seller}</p>
                    </div>
                    <button 
                      onClick={() => deleteUmkm(product.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <IconTrash />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Marker Peta GIS */}
        {adminTab === 'peta' && (
          <div className="space-y-8">
            <h3 className="font-bold text-[#0f2811] text-base swiss-border pb-2 mb-4">Penambahan Marker / POI Geografis</h3>
            <form onSubmit={addMarker} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Nama Tempat / Fasilitas</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Pos Kamling RT 03" 
                    value={newMarkerTitle}
                    onChange={(e) => setNewMarkerTitle(e.target.value)}
                    className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Kategori Lokasi</label>
                  <select 
                    value={newMarkerCat}
                    onChange={(e) => setNewMarkerCat(e.target.value)}
                    className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none"
                  >
                    <option>Fasilitas</option>
                    <option>Pendidikan</option>
                    <option>Ibadah</option>
                    <option>Wisata</option>
                    <option>UMKM</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Latitude (Garis Lintang)</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: -2.8552" 
                    value={newMarkerLat}
                    onChange={(e) => setNewMarkerLat(e.target.value)}
                    className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Longitude (Garis Bujur)</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: 122.2515" 
                    value={newMarkerLng}
                    onChange={(e) => setNewMarkerLng(e.target.value)}
                    className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required 
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Deskripsi Singkat Lokasi</label>
                <textarea 
                  rows={3} 
                  placeholder="Informasi detail..." 
                  value={newMarkerDesc}
                  onChange={(e) => setNewMarkerDesc(e.target.value)}
                  className="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required
                />
              </div>

              <button type="submit" className="px-6 py-3 bg-[#1e4620] hover:bg-[#0f2811] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center gap-2">
                <IconPlus /> Tambah ke Peta Digital
              </button>
            </form>

            <div className="border-t border-slate-100 pt-6">
              <h4 className="font-bold text-xs uppercase text-slate-400 tracking-wider mb-4">Daftar Titik Penanda (Markers)</h4>
              <div className="space-y-3">
                {mapMarkers.map((marker) => (
                  <div key={marker.id} className="bg-[#f8f9fa] p-4 rounded-xl flex items-center justify-between border border-slate-100">
                    <div>
                      <h5 className="font-bold text-xs text-[#0f2811]">{marker.title}</h5>
                      <p className="text-[10px] text-slate-400">Lat: {marker.lat}, Lng: {marker.lng} • Kategori: {marker.category}</p>
                    </div>
                    <button 
                      onClick={() => deleteMarker(marker.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <IconTrash />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB: Kelola APBDes */}
        {adminTab === 'apbdes' && (
          <div className="space-y-8">
            <h3 className="font-bold text-[#0f2811] text-base swiss-border pb-2 mb-4">Ubah Data Anggaran APBDes</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Edit Pendapatan */}
              <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-xs uppercase text-[#1e4620] mb-4">Edit Nilai Pendapatan</h4>
                <div className="space-y-3">
                  {apbdes.pendapatan.items.map((item: any, idx: number) => (
                    <div key={idx} className="text-xs">
                      <label className="text-[10px] font-bold text-slate-400 block mb-1">{item.nama}</label>
                      <input 
                        type="number" 
                        value={item.nilai}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 0
                          const updatedItems = [...apbdes.pendapatan.items]
                          updatedItems[idx].nilai = val
                          const updatedTotal = updatedItems.reduce((acc, cur) => acc + cur.nilai, 0)
                          setApbdes({
                            ...apbdes,
                            pendapatan: { total: updatedTotal, items: updatedItems }
                          })
                        }}
                        className="bg-white border border-slate-200 rounded-lg p-2 text-xs w-full focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Edit Belanja */}
              <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-slate-100">
                <h4 className="font-bold text-xs uppercase text-[#d4af37] mb-4">Edit Nilai Alokasi Belanja</h4>
                <div className="space-y-3">
                  {apbdes.belanja.items.map((item: any, idx: number) => (
                    <div key={idx} className="text-xs">
                      <label className="text-[10px] font-bold text-slate-400 block mb-1">{item.nama}</label>
                      <input 
                        type="number" 
                        value={item.nilai}
                        onChange={(e) => {
                          const val = parseInt(e.target.value) || 0
                          const updatedItems = [...apbdes.belanja.items]
                          updatedItems[idx].nilai = val
                          const updatedTotal = updatedItems.reduce((acc, cur) => acc + cur.nilai, 0)
                          setApbdes({
                            ...apbdes,
                            belanja: { total: updatedTotal, items: updatedItems }
                          })
                        }}
                        className="bg-white border border-slate-200 rounded-lg p-2 text-xs w-full focus:outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB: Kelola Statistik Penduduk */}
        {adminTab === 'statistik' && (
          <div className="space-y-8">
            <h3 className="font-bold text-[#0f2811] text-base swiss-border pb-2 mb-4">Ubah Data Statistik Kependudukan</h3>
            
            <div className="grid md:grid-cols-2 gap-8 bg-[#f8f9fa] p-6 rounded-2xl border border-slate-100">
              <div className="space-y-4">
                <h4 className="font-bold text-xs uppercase text-[#1e4620]">Data Agregat Penduduk</h4>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">Total Penduduk (Jiwa)</label>
                  <input 
                    type="number" 
                    value={statistik.total}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 0
                      setStatistik({ ...statistik, total: val })
                    }}
                    className="bg-white border border-slate-200 rounded-lg p-2.5 text-xs w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">Jumlah Laki-Laki (Jiwa)</label>
                  <input 
                    type="number" 
                    value={statistik.lakiLaki}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 0
                      setStatistik({ ...statistik, lakiLaki: val })
                    }}
                    className="bg-white border border-slate-200 rounded-lg p-2.5 text-xs w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">Jumlah Perempuan (Jiwa)</label>
                  <input 
                    type="number" 
                    value={statistik.perempuan}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 0
                      setStatistik({ ...statistik, perempuan: val })
                    }}
                    className="bg-white border border-slate-200 rounded-lg p-2.5 text-xs w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 block mb-1">Kepala Keluarga (KK)</label>
                  <input 
                    type="number" 
                    value={statistik.kepalaKeluarga}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 0
                      setStatistik({ ...statistik, kepalaKeluarga: val })
                    }}
                    className="bg-white border border-slate-200 rounded-lg p-2.5 text-xs w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-6 border border-dashed border-[#1e4620]/20 rounded-2xl bg-white">
                <span className="text-4xl mb-2">📊</span>
                <h4 className="font-bold text-xs text-[#0f2811]">Visualisasi Reaktif</h4>
                <p className="text-[10px] text-slate-400 mt-1">Mengedit data kependudukan di samping akan langsung memperbaharui persentase rasio gender dan grafik progress bar di dashboard kependudukan utama secara instan.</p>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  )
}
