import { useState } from 'react'
import imgKKN from '@/imports/Penerimaan_KKN_Aparat-1.jpeg'
import imgKepDes from '@/imports/Pertemuan_bersama_Kepala_Desa-1.jpeg'
import imgProker from '@/imports/Pembahasan_Proker_Bersama_Aparat-1.jpeg'
import imgAvatar from '@/imports/avatar_default.jpg'
import imgGallery2 from '@/imports/Penerimaan_2.jpeg'
import imgGallery3 from '@/imports/Penerimaan_3.jpeg'
import imgGallery4 from '@/imports/Penerimaan_4.jpeg'

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}
function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
function IconHome() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
function IconMap() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  )
}
function IconLeaf() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a10 10 0 0 1 18-6M2 20l10-10" /><path d="M12 10C12 4 18 2 22 2c0 4-2 10-10 10z" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.48 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.82 5.82l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
function IconWA() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}
function IconWASmall() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
}
function IconClock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
function IconPin() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IconArrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
function IconFB() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
}
function IconIG() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}
function IconYT() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" stroke="none" />
    </svg>
  )
}

// ── Village Logo ──────────────────────────────────────────────────────────────

function VillageLogo({ size = 32 }: { size?: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size, background: 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)', boxShadow: '0 2px 8px rgba(46,125,50,0.35)' }}
    >
      <svg width={size * 0.58} height={size * 0.58} viewBox="0 0 28 28" fill="none">
        <path d="M14 2L2 11h4v14h7v-7h2v7h7V11h4L14 2z" fill="white" />
        <rect x="11" y="16" width="6" height="9" rx="1" fill="#2E7D32" />
      </svg>
    </div>
  )
}

// ── Navbar ────────────────────────────────────────────────────────────────────

const NAV_LINKS = ['Beranda', 'Profil Desa', 'Pemerintahan', 'Berita', 'Galeri', 'UMKM', 'Kontak']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        style={{ boxShadow: '0 1px 10px rgba(0,0,0,0.09)' }}
      >
        {/* Top bar — desktop only */}
        <div className="hidden lg:flex items-center justify-between px-8 py-1.5" style={{ background: '#1B5E20' }}>
          <p className="text-xs text-white/70">Website Resmi Pemerintah Desa Padaleu</p>
          <div className="flex items-center gap-4 text-xs text-white/70">
            <span>📞 (0408) 1234-567</span>
            <span>|</span>
            <span>✉ desa@padaleu.desa.id</span>
          </div>
        </div>
        {/* Main nav row */}
        <div className="flex items-center justify-between px-5 lg:px-8" style={{ height: 60 }}>
          <div className="flex items-center gap-3">
            <VillageLogo size={36} />
            <div>
              <p className="font-extrabold text-sm leading-tight" style={{ color: '#1B5E20' }}>Desa Padaleu</p>
              <p className="text-xs leading-tight" style={{ color: '#78909C' }}>Kec. Lembo, Kab. Konawe Utara</p>
            </div>
          </div>
          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-green-50"
                style={{ color: '#2E7D32' }}
              >
                {l}
              </button>
            ))}
            <button
              className="ml-3 px-5 py-2 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ background: '#2E7D32' }}
            >
              Layanan Desa
            </button>
          </div>
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
            style={{ color: '#2E7D32' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="lg:hidden fixed inset-0 z-40 transition-opacity duration-200"
        style={{ pointerEvents: menuOpen ? 'auto' : 'none', opacity: menuOpen ? 1 : 0 }}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div
        className="lg:hidden fixed top-0 right-0 bottom-0 z-40 bg-white flex flex-col pt-20 pb-8 px-6 transition-transform duration-300"
        style={{ width: 270, transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <p className="text-xs font-semibold mb-3" style={{ color: '#9E9E9E', letterSpacing: '0.08em' }}>NAVIGASI</p>
        {NAV_LINKS.map((l) => (
          <button
            key={l}
            onClick={() => setMenuOpen(false)}
            className="text-left py-3 px-3 rounded-xl text-sm font-medium hover:bg-green-50 transition-colors"
            style={{ color: '#1B5E20' }}
          >
            {l}
          </button>
        ))}
        <div className="mt-4">
          <button
            className="w-full py-3 rounded-xl text-sm font-bold text-white"
            style={{ background: '#2E7D32' }}
          >
            Layanan Desa
          </button>
        </div>
        <div className="mt-auto pt-6 border-t border-gray-100 flex items-center gap-2">
          <VillageLogo size={28} />
          <div>
            <p className="text-xs font-bold" style={{ color: '#1B5E20' }}>Desa Padaleu</p>
            <p className="text-xs" style={{ color: '#9E9E9E' }}>Website Resmi</p>
          </div>
        </div>
      </div>
    </>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative w-full"
      style={{ marginTop: 60, height: 'clamp(420px, 56vw, 680px)' }}
    >
      <img
        src="https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?w=1400&h=700&fit=crop&auto=format"
        alt="Pemandangan alam Desa Padaleu, Kecamatan Lembo, Konawe Utara"
        className="w-full h-full object-cover"
        style={{ backgroundColor: '#2E7D32' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.18) 45%, rgba(0,0,0,0.68) 100%)' }}
      />
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 lg:px-16 lg:pb-14 max-w-screen-xl mx-auto">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4"
          style={{ background: 'rgba(255,255,255,0.16)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.28)' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white text-xs font-semibold tracking-wide">Website Resmi — Desa Padaleu</span>
        </div>
        <h1 className="text-white font-extrabold leading-tight mb-3" style={{ fontSize: 'clamp(22px, 4vw, 48px)' }}>
          Selamat Datang di<br />
          <span style={{ color: '#F9A825' }}>Desa Padaleu</span>
        </h1>
        <p className="mb-6" style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(13px, 1.6vw, 17px)', maxWidth: 520 }}>
          Kecamatan Lembo, Kabupaten Konawe Utara, Sulawesi Tenggara — Desa yang maju, sejahtera, dan berbudaya.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            className="flex items-center gap-2 px-6 py-3 font-bold rounded-full transition-transform active:scale-95"
            style={{ background: '#F9A825', color: '#1A1A1A', fontSize: 14, boxShadow: '0 6px 20px rgba(249,168,37,0.45)' }}
          >
            Kenali Desa Kami <IconArrow />
          </button>
          <button
            className="flex items-center gap-2 px-6 py-3 font-semibold rounded-full transition-all hover:bg-white/20"
            style={{ border: '1.5px solid rgba(255,255,255,0.6)', color: 'white', fontSize: 14 }}
          >
            Lihat Berita
          </button>
        </div>
      </div>
    </section>
  )
}

// ── Stats ─────────────────────────────────────────────────────────────────────

const stats = [
  { icon: <IconUsers />, value: 'x', label: 'Jumlah Penduduk' },
  { icon: <IconHome />, value: '12 RT / 4 RW', label: 'Rukun Tetangga' },
  { icon: <IconMap />, value: 'x Ha', label: 'Luas Wilayah' },
  { icon: <IconLeaf />, value: 'Pertanian', label: 'Potensi Utama' },
]

function StatsSection() {
  return (
    <section className="px-5 py-10 lg:py-14 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-6 lg:flex lg:items-end lg:justify-between">
          <div>
            <h2 className="font-bold text-xl lg:text-2xl mb-1.5" style={{ color: '#1B1B1B' }}>Sekilas Desa Padaleu</h2>
            <div className="rounded-full" style={{ width: 44, height: 3, background: '#2E7D32' }} />
          </div>
          <p className="hidden lg:block text-sm" style={{ color: '#757575', maxWidth: 420 }}>
            Data statistik resmi Desa Padaleu, Kecamatan Lembo, Kabupaten Konawe Utara, Sulawesi Tenggara.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5 bg-white flex flex-col gap-3 transition-shadow hover:shadow-lg"
              style={{ boxShadow: '0 2px 14px rgba(0,0,0,0.07)', border: '1px solid #F0F0F0' }}
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ background: '#E8F5E9' }}>
                {s.icon}
              </div>
              <p className="font-extrabold text-2xl lg:text-3xl leading-none" style={{ color: '#1B1B1B' }}>{s.value}</p>
              <p className="text-xs lg:text-sm" style={{ color: '#757575' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Village Head ──────────────────────────────────────────────────────────────

function VillageHeadSection() {
  return (
    <section className="px-5 py-10 lg:py-14 lg:px-8" style={{ background: '#F5F5F5' }}>
      <div className="max-w-screen-xl mx-auto">
        {/* Mobile: stacked center | Desktop: side-by-side */}
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-14">
          {/* Photo side */}
          <div className="flex flex-col items-center text-center lg:text-left lg:items-start flex-shrink-0 mb-8 lg:mb-0">
            <div className="relative mb-4">
              <img
                src={imgAvatar}
                alt="Bapak Masiudin, S.SI — Kepala Desa Padaleu"
                className="rounded-full object-cover"
                style={{ width: 120, height: 120, border: '4px solid white', boxShadow: '0 6px 24px rgba(0,0,0,0.16)', backgroundColor: '#C8E6C9' }}
              />
              <div
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#2E7D32', border: '2.5px solid white' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
            <p className="font-extrabold text-xl" style={{ color: '#1B1B1B' }}>Masiudin, S.SI</p>
            <p className="text-sm mt-0.5" style={{ color: '#757575' }}>Kepala Desa Padaleu</p>
            <p className="text-xs mt-0.5" style={{ color: '#9E9E9E' }}>Periode 2023 –xxxx</p>
          </div>
          {/* Quote side */}
          <div className="flex-1">
            <div className="mb-3">
              <h2 className="font-bold text-xl lg:text-2xl mb-1.5 text-center lg:text-left" style={{ color: '#1B1B1B' }}>Sambutan Kepala Desa</h2>
              <div className="rounded-full mx-auto lg:mx-0" style={{ width: 44, height: 3, background: '#2E7D32' }} />
            </div>
            <div
              className="relative px-6 py-5 rounded-2xl"
              style={{ background: 'white', boxShadow: '0 2px 14px rgba(0,0,0,0.07)' }}
            >
              <span
                className="absolute -top-4 left-5 text-5xl leading-none select-none"
                style={{ color: '#2E7D32', opacity: 0.25, fontFamily: 'Georgia, serif' }}
              >
                "
              </span>
              <p className="text-sm lg:text-base italic leading-relaxed" style={{ color: '#424242' }}>
                Dengan penuh rasa syukur dan semangat gotong royong, kami terus berupaya membangun Desa Padaleu yang maju, sejahtera, dan berbudaya. Mari bersama-sama kita wujudkan cita-cita desa yang kita cintai demi generasi penerus yang lebih baik.
              </p>
              <span
                className="block text-right text-5xl leading-none select-none -mt-2"
                style={{ color: '#2E7D32', opacity: 0.25, fontFamily: 'Georgia, serif' }}
              >
                "
              </span>
            </div>
            <button className="flex items-center gap-1.5 text-sm font-semibold mt-4 mx-auto lg:mx-0 transition-opacity hover:opacity-70" style={{ color: '#2E7D32' }}>
              Baca Selengkapnya <IconArrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── News ──────────────────────────────────────────────────────────────────────

const news = [
  {
    img: imgKKN,
    date: '19 Juli 2026',
    tag: 'Kegiatan',
    title: 'Penerimaan Mahasiswa KKN Reguler Berdampak Batch II di Desa Padaleu',
    excerpt: 'Aparat Desa Menyambut Mahasiswa Dari Universitas Halu Oleo',
    alt: 'Aparat Desa Padaleu menyambut mahasiswa KKN UHO Batch II',
  },
  {
    img: imgKepDes,
    date: '20 Juli 2026',
    tag: 'KKN',
    title: 'Pertemuan Mahasiswa UHO dengan kepala Desa Padaleu',
    excerpt: 'Pertemuan Mahasiswa UHO dengan kepala Desa Padaleu',
    alt: 'Pertemuan mahasiswa UHO bersama Kepala Desa Padaleu',
  },
  {
    img: imgProker,
    date: '21 Juli 2026',
    tag: 'KKN',
    title: 'Pertemuan Mahasiswa UHO dengan aparat-aparat Desa Padaleu',
    excerpt: 'Pertemuan aparat-aparat desa dan mendiskusikan program kerja',
    alt: 'Pembahasan program kerja KKN bersama aparat Desa Padaleu',
  },
]

const tagColors: Record<string, string> = {
  Kegiatan: '#E8F5E9',
  UMKM: '#FFF8E1',
  Pertanian: '#E3F2FD',
  KKN: '#EDE7F6',
}
const tagText: Record<string, string> = {
  Kegiatan: '#2E7D32',
  UMKM: '#F57F17',
  Pertanian: '#1565C0',
  KKN: '#6A1B9A',
}

function NewsSection() {
  return (
    <section className="px-5 py-10 lg:py-14 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-bold text-xl lg:text-2xl mb-1.5" style={{ color: '#1B1B1B' }}>Berita & Pengumuman</h2>
            <div className="rounded-full" style={{ width: 44, height: 3, background: '#2E7D32' }} />
          </div>
          <button className="hidden lg:flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-70" style={{ color: '#2E7D32' }}>
            Lihat Semua <IconArrow />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {news.map((n) => (
            <article
              key={n.title}
              className="rounded-2xl overflow-hidden bg-white transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer"
              style={{ boxShadow: '0 2px 14px rgba(0,0,0,0.08)', border: '1px solid #F0F0F0' }}
            >
              <div className="relative" style={{ height: 180, backgroundColor: '#C8E6C9' }}>
                <img src={n.img} alt={n.alt} className="w-full h-full object-cover" />
                <span
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: tagColors[n.tag], color: tagText[n.tag] }}
                >
                  {n.tag}
                </span>
              </div>
              <div className="p-4 lg:p-5">
                <p className="text-xs mb-2" style={{ color: '#9E9E9E' }}>{n.date}</p>
                <h3 className="font-bold text-sm lg:text-base leading-snug mb-2 line-clamp-2" style={{ color: '#1B1B1B' }}>{n.title}</h3>
                <p className="text-xs lg:text-sm leading-relaxed line-clamp-2" style={{ color: '#757575' }}>{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <button className="lg:hidden flex items-center gap-1.5 text-sm font-semibold mt-5 transition-opacity hover:opacity-70" style={{ color: '#2E7D32' }}>
          Lihat Semua Berita <IconArrow />
        </button>
      </div>
    </section>
  )
}

// ── Gallery ───────────────────────────────────────────────────────────────────

const gallery = [
  { src: imgKepDes, alt: 'Pertemuan mahasiswa UHO bersama Kepala Desa Padaleu' },
  { src: imgKKN, alt: 'Penerimaan mahasiswa KKN UHO di Desa Padaleu' },
  { src: imgProker, alt: 'Pembahasan program kerja KKN bersama aparat desa' },
  { src: imgGallery2, alt: 'Kegiatan penerimaan mahasiswa KKN Desa Padaleu' },
  { src: imgGallery3, alt: 'Kegiatan mahasiswa KKN bersama warga Desa Padaleu' },
  { src: imgGallery4, alt: 'Dokumentasi kegiatan KKN di Desa Padaleu' },
]

function GallerySection() {
  return (
    <section className="px-5 py-10 lg:py-14 lg:px-8" style={{ background: '#F5F5F5' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-bold text-xl lg:text-2xl mb-1.5" style={{ color: '#1B1B1B' }}>Galeri Desa</h2>
            <div className="rounded-full" style={{ width: 44, height: 3, background: '#2E7D32' }} />
          </div>
          <button className="hidden lg:flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-70" style={{ color: '#2E7D32' }}>
            Lihat Semua <IconArrow />
          </button>
        </div>
        {/* Mobile: 2 cols | Desktop: 3 cols with featured first */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
          {gallery.map((p, i) => (
            <div
              key={p.src}
              className={`rounded-xl overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer ${i === 0 ? 'lg:row-span-2' : ''}`}
              style={{ height: i === 0 ? undefined : 150, backgroundColor: '#C8E6C9' }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full object-cover"
                style={{ height: i === 0 ? '100%' : 150 }}
              />
            </div>
          ))}
        </div>
        <button className="lg:hidden flex items-center gap-1.5 text-sm font-semibold mt-5 transition-opacity hover:opacity-70" style={{ color: '#2E7D32' }}>
          Lihat Semua Foto <IconArrow />
        </button>
      </div>
    </section>
  )
}

// ── UMKM ──────────────────────────────────────────────────────────────────────

const products = [
  {
    img: 'https://images.unsplash.com/photo-1560005046-8fcfa2addf38?w=600&h=320&fit=crop&auto=format',
    name: 'Keripik Singkong Pedas Manis',
    maker: 'Bu Sari Dewi — UMKM Mandiri Desa',
    alt: 'Keripik singkong produk UMKM Desa Padaleu',
    contact: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1542897643-cfccd88c7127?w=600&h=320&fit=crop&auto=format',
    name: 'Tenun Tradisional Motif Lokal',
    maker: 'Pak Deden Suripto — Kelompok Tenun Desa',
    alt: 'Tenun tradisional produk unggulan Desa Padaleu',
    contact: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1667809938371-a29e3caac747?w=600&h=320&fit=crop&auto=format',
    name: 'Madu Hutan Asli Padaleu',
    maker: 'Pak Rudi Hartono — Usaha Lebah Madu',
    alt: 'Madu hutan asli produksi warga Desa Padaleu',
    contact: false,
  },
]

function UMKMSection() {
  return (
    <section className="px-5 py-10 lg:py-14 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="font-bold text-xl lg:text-2xl mb-1.5" style={{ color: '#1B1B1B' }}>Produk Unggulan Desa</h2>
            <div className="rounded-full" style={{ width: 44, height: 3, background: '#F9A825' }} />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {products.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl overflow-hidden bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ boxShadow: '0 2px 14px rgba(0,0,0,0.08)', border: '1px solid #F0F0F0' }}
            >
              <div style={{ height: 160, backgroundColor: '#C8E6C9' }}>
                <img src={p.img} alt={p.alt} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 lg:p-5 flex items-end justify-between gap-3">
                <div>
                  <h3 className="font-bold text-sm lg:text-base mb-0.5" style={{ color: '#1B1B1B' }}>{p.name}</h3>
                  <p className="text-xs" style={{ color: '#9E9E9E' }}>{p.maker}</p>
                </div>
                {p.contact && (
                  <button
                    className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white transition-opacity hover:opacity-85"
                    style={{ background: '#2E7D32', whiteSpace: 'nowrap' }}
                  >
                    <IconWASmall /> Hubungi
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Map ───────────────────────────────────────────────────────────────────────

function MapSection() {
  return (
    <section className="px-5 py-10 lg:py-14 lg:px-8" style={{ background: '#F5F5F5' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-6">
          <h2 className="font-bold text-xl lg:text-2xl mb-1.5" style={{ color: '#1B1B1B' }}>Lokasi Desa</h2>
          <div className="rounded-full" style={{ width: 44, height: 3, background: '#2E7D32' }} />
        </div>
        <div className="lg:flex lg:gap-8 lg:items-start">
          {/* Map placeholder */}
          <div
            className="rounded-2xl flex flex-col items-center justify-center gap-2 mb-5 lg:mb-0 lg:flex-1"
            style={{ height: 240, background: '#E0E0E0', border: '1.5px dashed #BDBDBD' }}
          >
            <IconPin />
            <p className="text-sm font-medium" style={{ color: '#616161' }}>Google Maps</p>
            <p className="text-xs" style={{ color: '#9E9E9E' }}>Desa Padaleu, Kec. Lembo</p>
          </div>
          {/* Info */}
          <div className="lg:w-72 flex flex-col gap-4">
            <div
              className="rounded-2xl p-5 bg-white"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
            >
              <p className="font-semibold text-sm mb-2" style={{ color: '#1B1B1B' }}>Alamat Lengkap</p>
              <p className="text-sm leading-relaxed" style={{ color: '#424242' }}>
                Desa Padaleu, Kecamatan Lembo,<br />
                Kabupaten Konawe Utara,<br />
                Sulawesi Tenggara 93352
              </p>
            </div>
            <button
              className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-green-50"
              style={{ border: '1.5px solid #2E7D32', color: '#2E7D32', background: 'transparent' }}
            >
              Buka di Google Maps <IconArrow />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────

const contacts = [
  { icon: <IconPhone />, label: 'Telepon', value: '(0408) 1234-567' },
  { icon: <IconMail />, label: 'Email', value: 'desa@padaleu.desa.id' },
  { icon: <IconWA />, label: 'WhatsApp', value: '0812-3456-7890' },
  { icon: <IconClock />, label: 'Jam Pelayanan', value: 'Senin–Jumat, 08.00–15.00 WITA' },
]

function ContactSection() {
  return (
    <section className="px-5 py-10 lg:py-14 lg:px-8 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <div className="mb-7">
          <h2 className="font-bold text-xl lg:text-2xl mb-1.5" style={{ color: '#1B1B1B' }}>Hubungi Kami</h2>
          <div className="rounded-full" style={{ width: 44, height: 3, background: '#2E7D32' }} />
        </div>
        <div className="lg:flex lg:gap-16 lg:items-start">
          <div className="flex flex-col gap-5 lg:flex-1">
            {contacts.map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#E8F5E9' }}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs" style={{ color: '#9E9E9E' }}>{c.label}</p>
                  <p className="text-sm font-semibold" style={{ color: '#1B1B1B' }}>{c.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 lg:mt-0 lg:w-72">
            <p className="text-xs font-bold mb-4" style={{ color: '#9E9E9E', letterSpacing: '0.08em' }}>IKUTI KAMI DI MEDIA SOSIAL</p>
            <div className="flex gap-3 mb-6">
              {[
                { label: 'Facebook', icon: <IconFB />, bg: '#1877F2' },
                { label: 'Instagram', icon: <IconIG />, bg: 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)' },
                { label: 'YouTube', icon: <IconYT />, bg: '#FF0000' },
              ].map((s) => (
                <button
                  key={s.label}
                  className="w-11 h-11 rounded-full flex items-center justify-center transition-transform active:scale-90 hover:scale-110"
                  style={{ background: s.bg, boxShadow: '0 3px 10px rgba(0,0,0,0.18)' }}
                  aria-label={s.label}
                >
                  {s.icon}
                </button>
              ))}
            </div>
            <div
              className="rounded-2xl p-5"
              style={{ background: '#E8F5E9', border: '1px solid #C8E6C9' }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: '#1B5E20' }}>Kantor Desa Padaleu</p>
              <p className="text-xs leading-relaxed" style={{ color: '#2E7D32' }}>
                Buka Senin — Jumat<br />
                08.00 – 15.00 WITA<br />
                (Istirahat 12.00 – 13.00)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  const links = [
    { heading: 'Navigasi', items: ['Beranda', 'Profil Desa', 'Pemerintahan', 'Berita'] },
    { heading: 'Layanan', items: ['Surat Keterangan', 'Administrasi', 'Pengaduan', 'PPID'] },
    { heading: 'Informasi', items: ['Galeri', 'Produk UMKM', 'Peta Desa', 'Kontak'] },
  ]
  return (
    <footer className="px-5 py-10 lg:px-8 lg:py-14" style={{ background: '#1B5E20' }}>
      <div className="max-w-screen-xl mx-auto">
        {/* Desktop: 4-col grid | Mobile: stacked */}
        <div className="lg:grid lg:grid-cols-4 lg:gap-10 mb-8">
          {/* Brand */}
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <VillageLogo size={44} />
              <div>
                <p className="font-extrabold text-white">Desa Padaleu</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>Kab. Konawe Utara</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 240 }}>
              Website resmi Pemerintah Desa Padaleu, Kecamatan Lembo, Kabupaten Konawe Utara, Sulawesi Tenggara.
            </p>
          </div>
          {/* Link columns */}
          {links.map((col) => (
            <div key={col.heading} className="mb-6 lg:mb-0">
              <p className="font-bold text-xs mb-3 tracking-wider" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '0.09em' }}>
                {col.heading.toUpperCase()}
              </p>
              <ul className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <button className="text-xs transition-opacity hover:opacity-100" style={{ color: 'rgba(255,255,255,0.68)' }}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)' }} className="mb-6" />
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © 2026 Desa Padaleu. Hak cipta dilindungi.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Dikembangkan oleh Tim KKN Universitas Halu Oleo
          </p>
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <Hero />
      <StatsSection />
      <VillageHeadSection />
      <NewsSection />
      <GallerySection />
      <UMKMSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
