import { useState, useEffect, useRef } from 'react'
import imgLogoKonaweUtara from './imports/Kabupaten Konawe Utara.png'
import imgGambarHome from './imports/gambarhome.png'
import imgLoadingScreen from '../public/imports/loadingscreen.png'
import videoLatar from '../public/imports/videolatar.mp4'
import imgAvatar from './imports/avatar_default.jpg'
import imgFotoKades from './imports/fotokades.jpeg'
import imgSekdes from './imports/sekdes.png'
import imgKaurPerencanaan from './imports/kaurperencanaan.png'
import imgKaurUmum from './imports/kaurumum.png'
import imgKaurKeuangan from './imports/kaurkeuangan.png'
import imgKasiPemerintahan from './imports/kasipemerintahan.png'
import imgKasiPelayanan from './imports/kasipelayanan.png'
import imgKasiKesejahteraan from './imports/kasikesejahteraan.png'
import imgKadus1 from './imports/kadus1.png'
import imgKadus2 from './imports/kadus2.png'
import imgKadus3 from './imports/kadus3.png'
import imgCengkeh from './imports/Cengkeh.jpeg'
import imgNilam from './imports/nilam.jpeg'
import imgSawit from './imports/sawit.jpeg'
import imgPemerintahanDesa from './imports/pemerintahandesa.png'
import imgPembangunanDesa from './imports/pembangunandesa.png'
import imgPotensiDesa from './imports/potensidesa.jpeg'
import imgDokumentasiDesa from './imports/dokumentasidesa.png'
import imgKegiatanWarga from './imports/kegiatanwarga.png'
import imgProker from './imports/Pembahasan_Proker_Bersama_Aparat-1.jpeg'
import imgKKN from './imports/Penerimaan_KKN_Aparat-1.jpeg'
import imgPenerimaan2 from './imports/Penerimaan_2.jpeg'
import imgPenerimaan3 from './imports/Penerimaan_3.jpeg'
import imgPenerimaan4 from './imports/Penerimaan_4.jpeg'
import imgKepDes from './imports/Pertemuan_bersama_Kepala_Desa-1.jpeg'

export default function App() {
  // ── 1. Typewriter State ──
  const [typedText, setTypedText] = useState('Selamat Datang di')

  // ── 2. Navigation & Floating State ──
  const [activeSection, setActiveSection] = useState('hero')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Beranda' },
    { id: 'sejarah', label: 'Sejarah Desa' },
    { id: 'struktur', label: 'Struktur Desa' },
    { id: 'komoditas', label: 'Komoditas Unggulan' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'peta-sec', label: 'Peta Digital' },
    { id: 'dokumenter', label: 'Dokumenter' },
    { id: 'promosi', label: 'Video Promosi' },
    { id: 'kontak-sec', label: 'Kontak' },
  ]

  // ── 3. Leaflet Map, Gallery & Leader State ──
  const mapRef = useRef<HTMLDivElement>(null)
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const [currentLeaderIdx, setCurrentLeaderIdx] = useState(0)
  const [selectedImage, setSelectedImage] = useState<{ title: string; category: string; image: string } | null>(null)

  // ── Force Video Autoplay & Seamless Loop Fade ──
  useEffect(() => {
    const video = heroVideoRef.current
    if (!video) return

    video.muted = true
    video.play().catch(() => {
      // Fallback for strict power-saver policies
    })

    const handleTimeUpdate = () => {
      if (!video.duration) return
      const fadeDuration = 0.8 // Fade out/in during last and first 0.8s for smooth loop transition
      const timeLeft = video.duration - video.currentTime

      if (timeLeft <= fadeDuration) {
        video.style.opacity = Math.max(0, timeLeft / fadeDuration).toString()
      } else if (video.currentTime <= fadeDuration) {
        video.style.opacity = Math.min(1, video.currentTime / fadeDuration).toString()
      } else {
        video.style.opacity = '1'
      }
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    return () => video.removeEventListener('timeupdate', handleTimeUpdate)
  }, [])

  // ── ESC Key Handler to Close Modals ──
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // ── Typewriter Effect Engine ──
  useEffect(() => {
    const words = [
      "Selamat Datang di",
      "Selamat Menjelajahi",
      "Portal Informasi Resmi",
      "Surga Perkebunan Cengkeh & Pesisir"
    ]
    let wordIdx = 0
    let charIdx = 0
    let isDeleting = false
    let timer: any = null

    function typeLoop() {
      const currentWord = words[wordIdx]
      if (isDeleting) {
        setTypedText(currentWord.substring(0, charIdx - 1))
        charIdx--
      } else {
        setTypedText(currentWord.substring(0, charIdx + 1))
        charIdx++
      }

      let speed = isDeleting ? 40 : 90

      if (!isDeleting && charIdx === currentWord.length) {
        speed = 2200
        isDeleting = true
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false
        wordIdx = (wordIdx + 1) % words.length
        speed = 450
      }

      timer = setTimeout(typeLoop, speed)
    }

    timer = setTimeout(typeLoop, 500)
    return () => clearTimeout(timer)
  }, [])

  // ── Scroll Reveal Observer ──
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })

    revealEls.forEach(el => revealObserver.observe(el))
    return () => revealObserver.disconnect()
  }, [])

  // ── Scroll Active Section & Back To Top ──
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 350)

      const sections = ['hero', 'sejarah', 'struktur', 'komoditas', 'galeri', 'peta-sec', 'dokumenter', 'promosi', 'kontak-sec']
      const scrollY = window.scrollY + 220
      let current = 'hero'
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) {
          current = id
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Leaflet GIS Map Engine ──
  useEffect(() => {
    if (mapRef.current && (window as any).L) {
      const L = (window as any).L
      if ((mapRef.current as any)._leaflet_id) {
        // Clear previous map container if re-rendered
        mapRef.current.innerHTML = ""
        delete (mapRef.current as any)._leaflet_id
      }

      const padaleuLat = -3.7521192
      const padaleuLng = 122.3402454
      const map = L.map(mapRef.current).setView([padaleuLat, padaleuLng], 17)

      // Satelit High-Resolution (Google Hybrid Satellite) - Bebas "Data Not Available" saat Zoom
      L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        maxNativeZoom: 18,
        attribution: '© Google Satellite | Satelit GIS Desa Padaleu'
      }).addTo(map)

      // SATU-SATUNYA PIN POINT: TUGU PADALEU (TITIK TENGAH)
      const popupContent = `
        <div style="padding:0.4rem;text-align:center;">
          <span style="font-size:0.65rem;font-weight:700;color:#004851;text-transform:uppercase;letter-spacing:0.08em;">Ikon Utama Desa</span>
          <h4 style="margin:0.25rem 0;font-size:1.05rem;color:#004851;font-family:'Recoleta',serif;">Tugu Desa Padaleu</h4>
          <p style="margin:0;font-size:0.8rem;color:#57534e;line-height:1.4;">Tugu & Markah Utama Wilayah Desa Padaleu, Kec. Lembo, Kab. Konawe Utara.</p>
        </div>
      `
      L.marker([padaleuLat, padaleuLng]).addTo(map).bindPopup(popupContent).openPopup()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ═══════════ TOP BAR (Mürren Schilthorn Style) ═══════════ */}
      <div className="topbar" id="topbar">
        <div className="topbar-left">
          <a href="#hero" className="topbar-logo-box" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={imgLogoKonaweUtara} alt="Logo Kabupaten Konawe Utara" className="topbar-logo-img" />
            <div className="topbar-logo-content">
              <span className="topbar-logo-text">DESA PADALEU</span>
              <span className="topbar-logo-sub">KECAMATAN LEMBO - KONAWE UTARA</span>
            </div>
          </a>
        </div>

        <div className="topbar-right-group">
          {/* Red CTA Button (Gaya "Booking" Warna Merah Koral pada Gambar Mürren) */}
          <a
            href="https://konaweutarakab.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="topbar-cta-btn"
            title="Buka Website Resmi Pemerintah Kabupaten Konawe Utara"
          >
            Pemerintah Kabupaten Konawe Utara
          </a>

          {/* Mobile Hamburger Menu Button */}
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* ═══════════ SECONDARY NAV (Desktop Subnav) ═══════════ */}
      <nav className="subnav" id="subnav">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? 'active' : ''}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* ═══════════ MOBILE DRAWER MENU & BACKDROP OVERLAY ═══════════ */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="mobile-menu-title">
            <img src={imgLogoKonaweUtara} alt="Logo Konawe Utara" style={{ height: '32px', width: 'auto' }} />
            <div>
              <div style={{ fontFamily: "inherit", fontWeight: 700, fontSize: '1rem', color: '#004851', lineHeight: 1.1 }}>DESA PADALEU</div>
              <div style={{ fontSize: '0.58rem', color: 'var(--gray-500)', letterSpacing: '0.12em', marginTop: '2px', textTransform: 'uppercase' }}>Konawe Utara</div>
            </div>
          </div>
          <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <nav className="mobile-menu-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>{item.label}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <a
            href="https://konaweutarakab.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer-cta-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>Pemerintah Kabupaten Konawe Utara ↗</span>
          </a>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--gray-500)', marginTop: '0.8rem' }}>Pemerintah Desa Padaleu &bull; Lembo</div>
        </div>
      </div>

      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <main>
        {/* 1. BERANDA (Hero Section) */}
        <section className="hero" id="hero">
          <img src={imgLoadingScreen} alt="Loading Desa Padaleu" className="hero-img" />
          <video
            ref={heroVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={imgLoadingScreen}
            className="hero-video"
          >
            <source src={videoLatar} type="video/mp4" />
            <source src="/imports/videolatar.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-overline">
              <span>{typedText}</span>
              <span className="typing-cursor"></span>
            </div>
            <h1 className="hero-title">Desa Padaleu</h1>
            <p className="hero-subtitle">Kecamatan Lembo &middot; Kabupaten Konawe Utara &middot; Sulawesi Tenggara</p>
          </div>
          <a href="#sejarah" className="hero-scroll-hint">
            <span>Scroll</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
          </a>
        </section>

        {/* STATISTIK BAR */}
        <div className="stats-bar" id="statistik">
          <div className="stat-item reveal stagger-1">
            <div className="stat-number">550</div>
            <div className="stat-label">Penduduk</div>
          </div>
          <div className="stat-item reveal stagger-2">
            <div className="stat-number">172</div>
            <div className="stat-label">Kepala Keluarga</div>
          </div>
          <div className="stat-item reveal stagger-3">
            <div className="stat-number">6</div>
            <div className="stat-label">Jumlah RT</div>
          </div>
          <div className="stat-item reveal stagger-3">
            <div className="stat-number">3</div>
            <div className="stat-label">Jumlah Dusun</div>
          </div>
        </div>

        {/* 2. SEJARAH DESA & KEPEMIMPINAN TAHUN KE TAHUN */}
        <section className="section section-bordered" id="sejarah" style={{ background: '#ffffff' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="overline">Jejak Langkah &amp; Sejarah</div>
              <h2>Sejarah &amp; Perjalanan Kepemimpinan Desa Padaleu</h2>
              <p><strong>Desa Padaleu</strong> merupakan pemekaran dari Desa Lembo (sekarang Kel. Lembo, Kec. Lembo) yang berdiri sejak tahun 1967 di ketinggian &plusmn;500 mdpl dengan luas wilayah 4.170 km&sup2;.</p>
              <div className="divider"></div>
            </div>

            <div style={{ maxWidth: '840px', margin: '0 auto 3.5rem', textAlign: 'center' }} className="reveal">
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                Berdiri pada tahun 1967 dengan 162 jiwa awal, <strong>Desa Padaleu</strong> berkembang pesat hingga mampu memekarkan tiga desa baru, yaitu <strong>Desa Puulemo</strong> (1979), <strong>Desa Pasir Putih</strong> (1999), dan <strong>Desa Laramo</strong> (2010).
              </p>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                Didukung aksesibilitas jalan yang lancar untuk kendaraan roda dua maupun roda empat, para petani dan pekebun tidak kesulitan dalam memasarkan hasil panennya. Sebagai desa yang terbuka dan heterogen, warga Desa Padaleu hidup rukun dengan beragam suku serta mata pencaharian.
              </p>
            </div>

            {/* Section Sub-Header */}
            <div className="section-header reveal" style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--red-accent)' }}>
                Rekam Jejak Kepemimpinan
              </span>
              <h3 style={{ fontFamily: "inherit", fontSize: '1.75rem', color: 'var(--gray-800)', marginTop: '0.4rem' }}>
                Kepala Desa Padaleu dari Masa ke Masa
              </h3>
            </div>

            {/* Interactive 3-Card Focused Showcase Container */}
            {(() => {
              const leaders = [
                { period: '2023 — Sekarang', name: 'MASIUDIN, S.Si', order: 'Kepala Desa Ke-10 (Petahana)', active: true },
                { period: '2020 — 2022', name: 'ARIPUDIN', order: 'Kepala Desa Ke-9', active: false },
                { period: '2015 — 2020', name: 'ANTON ARSYAD', order: 'Kepala Desa Ke-8', active: false },
                { period: '2008 — 2015', name: 'ASWAN', order: 'Kepala Desa Ke-7', active: false },
                { period: '2000 — 2008', name: 'ABDUL HAMID', order: 'Kepala Desa Ke-6', active: false },
                { period: '1995 — 1999', name: 'MUH. ARSYAD', order: 'Kepala Desa Ke-5', active: false },
                { period: '1991 — 1994', name: 'SAPRUDIN', order: 'Kepala Desa Ke-4', active: false },
                { period: '1986 — 1990', name: 'ZAINAL. MEKUO', order: 'Kepala Desa Ke-3', active: false },
                { period: '1969 — 1986', name: 'APUKA', order: 'Kepala Desa Ke-2', active: false },
                { period: '1967 — 1969', name: 'ABUDU', order: 'Kepala Desa Ke-1', active: false }
              ];

              return (
                <div className="reveal" style={{ maxWidth: '960px', margin: '0 auto', padding: '1rem 0', overflow: 'hidden' }}>
                  <div className="leadership-carousel-container">

                    {/* Tombol Panah Kiri (<) */}
                    <button
                      className="leadership-nav-btn left"
                      onClick={() => setCurrentLeaderIdx(prev => Math.max(prev - 1, 0))}
                      disabled={currentLeaderIdx === 0}
                      title="Era Selanjutnya (Terbaru)"
                      style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: currentLeaderIdx === 0 ? 'var(--gray-200)' : '#004851',
                        color: 'white',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: currentLeaderIdx === 0 ? 'not-allowed' : 'pointer',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                        opacity: currentLeaderIdx === 0 ? 0.35 : 1,
                        zIndex: 20,
                        transition: 'all 0.3s ease'
                      }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                    </button>

                    {/* Tombol Panah Kanan (>) */}
                    <button
                      className="leadership-nav-btn right"
                      onClick={() => setCurrentLeaderIdx(prev => Math.min(prev + 1, leaders.length - 1))}
                      disabled={currentLeaderIdx === leaders.length - 1}
                      title="Era Sebelumnya (Terlama)"
                      style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: currentLeaderIdx === leaders.length - 1 ? 'var(--gray-200)' : '#004851',
                        color: 'white',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: currentLeaderIdx === leaders.length - 1 ? 'not-allowed' : 'pointer',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                        opacity: currentLeaderIdx === leaders.length - 1 ? 0.35 : 1,
                        zIndex: 20,
                        transition: 'all 0.3s ease'
                      }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                    </button>

                    {/* Render Cards with Smooth Sliding & Blur Transitions */}
                    {leaders.map((item, idx) => {
                      const offset = idx - currentLeaderIdx;
                      const isFocused = offset === 0;
                      const isVisible = Math.abs(offset) <= 1;

                      if (!isVisible) return null;

                      return (
                        <div
                          key={idx}
                          onClick={() => setCurrentLeaderIdx(idx)}
                          className={`leadership-card ${isFocused ? 'leadership-card-main' : 'leadership-card-side'}`}
                          style={{
                            flex: isFocused ? '0 0 min(420px, 86vw)' : '0 0 min(220px, 42vw)',
                            maxWidth: isFocused ? 'min(420px, 86vw)' : 'min(220px, 42vw)',
                            background: item.active ? 'linear-gradient(135deg, #ffffff 0%, #f4fbf9 100%)' : 'var(--white)',
                            border: item.active ? '2px solid #004851' : (isFocused ? '2px solid var(--teal)' : '1px solid var(--gray-200)'),
                            borderTop: item.active ? '5px solid #004851' : '4px solid var(--teal)',
                            borderRadius: '8px',
                            padding: isFocused ? '2.2rem 1.8rem' : '1.5rem 1.2rem',
                            boxShadow: isFocused
                              ? (item.active ? '0 12px 36px rgba(0,72,81,0.18)' : '0 8px 28px rgba(0,0,0,0.08)')
                              : '0 3px 12px rgba(0,0,0,0.03)',
                            textAlign: 'center',
                            filter: isFocused ? 'blur(0px) opacity(1)' : 'blur(2px) opacity(0.68)',
                            transform: isFocused ? 'scale(1.03)' : 'scale(0.95)',
                            cursor: isFocused ? 'default' : 'pointer',
                            transition: 'transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1), filter 0.55s cubic-bezier(0.16, 1, 0.3, 1), flex 0.55s cubic-bezier(0.16, 1, 0.3, 1), max-width 0.55s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                            willChange: 'transform, opacity, filter',
                            zIndex: isFocused ? 10 : 3
                          }}>
                          
                          {/* Badge Periode & Status */}
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginBottom: isFocused ? '1.2rem' : '0.6rem', flexWrap: 'wrap' }}>
                            <span style={{
                              background: item.active ? '#004851' : 'var(--teal)',
                              color: 'white',
                              fontSize: isFocused ? '0.76rem' : '0.68rem',
                              fontWeight: 700,
                              padding: isFocused ? '0.22rem 0.75rem' : '0.15rem 0.55rem',
                              borderRadius: '20px',
                              letterSpacing: '0.06em'
                            }}>
                              {item.period}
                            </span>
                            {item.active && (
                              <span style={{ background: '#FFD700', color: '#004851', fontSize: isFocused ? '0.68rem' : '0.6rem', fontWeight: 800, padding: '0.18rem 0.5rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                                Kepala Desa Aktif
                              </span>
                            )}
                          </div>

                          {/* Photo Frame */}
                          <div style={{
                            width: isFocused ? '92px' : '64px',
                            height: isFocused ? '86px' : '60px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: item.active ? '3px solid #004851' : '2px solid var(--gray-300)',
                            margin: '0 auto ' + (isFocused ? '1rem' : '0.6rem'),
                            background: '#f5f5f4',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            transition: 'all 0.45s ease'
                          }}>
                            <img src={item.active ? imgFotoKades : imgAvatar} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                          </div>

                          {/* Leader Name & Order */}
                          <h3 style={{
                            fontFamily: "inherit",
                            fontSize: isFocused ? '1.5rem' : '1.15rem',
                            color: item.active ? '#004851' : 'var(--gray-900)',
                            margin: '0.3rem 0 0.15rem',
                            transition: 'font-size 0.45s ease'
                          }}>
                            {item.name}
                          </h3>
                          <div style={{
                            fontSize: isFocused ? '0.8rem' : '0.72rem',
                            fontWeight: 700,
                            color: 'var(--teal)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em'
                          }}>
                            {item.order}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Era Quick Select Dots / Stepper Chips */}
                  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.5rem' }}>
                    {leaders.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentLeaderIdx(idx)}
                        title={`${item.name} (${item.period})`}
                        style={{
                          background: currentLeaderIdx === idx ? '#004851' : 'var(--white)',
                          color: currentLeaderIdx === idx ? 'white' : 'var(--gray-700)',
                          border: currentLeaderIdx === idx ? '1px solid #004851' : '1px solid var(--gray-300)',
                          padding: '0.35rem 0.7rem',
                          borderRadius: '4px',
                          fontSize: '0.72rem',
                          fontWeight: currentLeaderIdx === idx ? 700 : 500,
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          boxShadow: currentLeaderIdx === idx ? '0 2px 6px rgba(0,72,81,0.2)' : 'none'
                        }}>
                        {item.period.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
        <section className="section section-bordered" id="struktur" style={{ background: '#f8f7f4' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="overline">Pemerintahan & Lembaga Desa</div>
              <h2>Struktur Organisasi & Aparatur Desa Padaleu</h2>
              <p>Susunan aparatur Pemerintah Desa Padaleu beserta lembaga pendukung dan wilayah kewilayahan yang bertugas melayani masyarakat.</p>
              <div className="divider"></div>
            </div>

            {/* 1. Pimpinan Eksekutif Desa */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.8rem', marginBottom: '3.5rem' }}>
              <div className="aparatur-card reveal stagger-1" style={{ borderTop: '4px solid #004851', background: 'var(--white)', maxWidth: '320px', width: '100%' }}>
                <div className="aparatur-avatar">
                  <img src={imgFotoKades} alt="Masiudin, S.Si" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <h3 className="aparatur-name" style={{ fontSize: '1.35rem', color: 'var(--gray-900)', marginBottom: '0.2rem' }}>Masiudin, S.Si</h3>
                <div className="aparatur-role" style={{ color: '#004851', fontWeight: 800, letterSpacing: '0.15em' }}>Kepala Desa</div>
              </div>

              <div className="aparatur-card reveal stagger-2" style={{ borderTop: '4px solid var(--teal)', background: 'var(--white)', maxWidth: '320px', width: '100%' }}>
                <div className="aparatur-avatar">
                  <img src={imgSekdes} alt="Asrul" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <h3 className="aparatur-name" style={{ fontSize: '1.35rem', color: 'var(--gray-900)', marginBottom: '0.2rem' }}>Asrul</h3>
                <div className="aparatur-role" style={{ color: 'var(--teal)', fontWeight: 700, letterSpacing: '0.15em' }}>Sekretaris Desa</div>
              </div>
            </div>

            {/* 2. Lembaga Pendukung Desa (Khusus BPD & Data Anggota Resmi) */}
            <div className="reveal" style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: '4px', padding: '2.2rem', marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.8rem', borderBottom: '1.5px solid var(--gray-200)', paddingBottom: '1.2rem' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004851" strokeWidth="2.2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M8 10v11M12 10v11M16 10v11M20 10v11"/></svg>
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{ fontFamily: "inherit", fontSize: '1.35rem', color: '#004851', fontWeight: 600, letterSpacing: '0.02em', margin: 0 }}>
                    Badan Permusyawaratan Desa (BPD) Desa Padaleu
                  </h3>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--gray-500)', textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '0.3rem' }}>
                    Kec. Lembo &middot; Kab. Konawe Utara &middot; Prov. Sulawesi Tenggara &middot; Periode 2019 – 2025
                  </div>
                </div>
              </div>

              {/* Card Ringkasan Anggota BPD */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
                {[
                  { name: 'ANSAR', role: 'Ketua BPD', pend: 'SMA' },
                  { name: 'AYU NUR', role: 'Wakil Ketua BPD', pend: 'SMA' },
                  { name: 'SURIANTO, S.Pd', role: 'Sekretaris BPD', pend: 'S-1' },
                  { name: "SU'AIB, ST, M.Si", role: 'Anggota BPD', pend: 'S-2' },
                  { name: 'JUHARNI', role: 'Anggota BPD', pend: '-' }
                ].map((bpd, idx) => (
                  <div key={idx} style={{ background: 'var(--gray-50)', padding: '1.2rem', borderRadius: '4px', borderTop: idx === 0 ? '3px solid #004851' : '3px solid var(--teal)', textAlign: 'center' }}>
                    <h4 style={{ fontFamily: "inherit", fontSize: '1.05rem', color: 'var(--gray-800)', marginTop: '0.2rem', marginBottom: '0.2rem' }}>{bpd.name}</h4>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>{bpd.role}</div>
                    <span style={{ fontSize: '0.72rem', color: 'var(--gray-500)', fontWeight: 500 }}>Pendidikan: {bpd.pend}</span>
                  </div>
                ))}
              </div>

              {/* Tabel Resmi Data Anggota BPD (Tampilan Desktop) */}
              <div className="bpd-table-desktop" style={{ overflowX: 'auto', border: '1px solid var(--gray-200)', borderRadius: '4px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.82rem' }}>
                  <thead>
                    <tr style={{ background: '#004851', color: 'white', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.72rem' }}>
                      <th style={{ padding: '0.8rem 1rem' }}>No</th>
                      <th style={{ padding: '0.8rem 1rem' }}>Nama Lengkap</th>
                      <th style={{ padding: '0.8rem 1rem' }}>Jabatan</th>
                      <th style={{ padding: '0.8rem 1rem' }}>Tempat, Tgl Lahir</th>
                      <th style={{ padding: '0.8rem 1rem' }}>Agama</th>
                      <th style={{ padding: '0.8rem 1rem' }}>Pend.</th>
                      <th style={{ padding: '0.8rem 1rem' }}>No. & Tgl Keputusan Pengangkatan</th>
                      <th style={{ padding: '0.8rem 1rem' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { no: 1, name: 'ANSAR', role: 'KETUA', ttl: 'PADALEU, 12 AGUSTUS 1976', agama: 'ISLAM', pend: 'SMA', sk: '346 TAHUN 2019 TANGGAL 27 SEPTEMBER 2019', status: 'AKTIF' },
                      { no: 2, name: 'AYU NUR', role: 'WAKIL KETUA', ttl: 'PADALEU, 17 OKTOBER 1970', agama: 'ISLAM', pend: 'SMA', sk: '346 TAHUN 2019 TANGGAL 27 SEPTEMBER 2019', status: 'AKTIF' },
                      { no: 3, name: 'SURIANTO, S.Pd', role: 'SEKRETARIS', ttl: 'PADALEU, 10 NOVEMBER 1983', agama: 'ISLAM', pend: 'S-1', sk: '346 TAHUN 2019 TANGGAL 27 SEPTEMBER 2019', status: 'AKTIF' },
                      { no: 4, name: "SU'AIB, ST, M.Si", role: 'ANGGOTA', ttl: 'PADALEU KENDARI, 09 MEI 1964', agama: 'ISLAM', pend: 'S-2', sk: '-', status: 'AKTIF' },
                      { no: 5, name: 'JUHARNI', role: 'ANGGOTA', ttl: '-', agama: 'ISLAM', pend: '-', sk: '346 TAHUN 2019 TANGGAL 27 SEPTEMBER 2019', status: 'AKTIF' }
                    ].map((row, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? 'white' : 'var(--gray-50)', borderBottom: '1px solid var(--gray-200)' }}>
                        <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--gray-600)' }}>{row.no}</td>
                        <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--gray-800)' }}>{row.name}</td>
                        <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#004851' }}>{row.role}</td>
                        <td style={{ padding: '0.75rem 1rem', color: 'var(--gray-600)' }}>{row.ttl}</td>
                        <td style={{ padding: '0.75rem 1rem', color: 'var(--gray-600)' }}>{row.agama}</td>
                        <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>{row.pend}</td>
                        <td style={{ padding: '0.75rem 1rem', color: 'var(--gray-600)', fontSize: '0.78rem' }}>{row.sk}</td>
                        <td style={{ padding: '0.75rem 1rem' }}>
                          <span style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#128C7E', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '3px', fontSize: '0.7rem' }}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Tampilan Kartu Responsif BPD (Khusus HP / Mobile) */}
              <div className="bpd-cards-mobile">
                {[
                  { no: 1, name: 'ANSAR', role: 'KETUA BPD', ttl: 'PADALEU, 12 AGUSTUS 1976', agama: 'ISLAM', pend: 'SMA', sk: '346 TAHUN 2019 (27 SEPT 2019)', status: 'AKTIF' },
                  { no: 2, name: 'AYU NUR', role: 'WAKIL KETUA BPD', ttl: 'PADALEU, 17 OKTOBER 1970', agama: 'ISLAM', pend: 'SMA', sk: '346 TAHUN 2019 (27 SEPT 2019)', status: 'AKTIF' },
                  { no: 3, name: 'SURIANTO, S.Pd', role: 'SEKRETARIS BPD', ttl: 'PADALEU, 10 NOVEMBER 1983', agama: 'ISLAM', pend: 'S-1', sk: '346 TAHUN 2019 (27 SEPT 2019)', status: 'AKTIF' },
                  { no: 4, name: "SU'AIB, ST, M.Si", role: 'ANGGOTA BPD', ttl: 'PADALEU KENDARI, 09 MEI 1964', agama: 'ISLAM', pend: 'S-2', sk: '-', status: 'AKTIF' },
                  { no: 5, name: 'JUHARNI', role: 'ANGGOTA BPD', ttl: '-', agama: 'ISLAM', pend: '-', sk: '346 TAHUN 2019 (27 SEPT 2019)', status: 'AKTIF' }
                ].map((bpd, idx) => (
                  <div key={idx} className="bpd-mobile-card">
                    <div className="bpd-mobile-card-header">
                      <div>
                        <span className="bpd-mobile-no">#{bpd.no}</span>
                        <span className="bpd-mobile-role">{bpd.role}</span>
                      </div>
                      <span className="bpd-mobile-status">{bpd.status}</span>
                    </div>
                    <h4 className="bpd-mobile-name">{bpd.name}</h4>
                    <div className="bpd-mobile-details">
                      <div className="bpd-detail-item">
                        <span className="bpd-detail-label">Pendidikan</span>
                        <span className="bpd-detail-val">{bpd.pend}</span>
                      </div>
                      <div className="bpd-detail-item">
                        <span className="bpd-detail-label">Agama</span>
                        <span className="bpd-detail-val">{bpd.agama}</span>
                      </div>
                      <div className="bpd-detail-item full-width">
                        <span className="bpd-detail-label">Tempat, Tgl Lahir</span>
                        <span className="bpd-detail-val">{bpd.ttl}</span>
                      </div>
                      <div className="bpd-detail-item full-width">
                        <span className="bpd-detail-label">SK Pengangkatan</span>
                        <span className="bpd-detail-val">{bpd.sk}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Kepala Urusan (KAUR) */}
            <div style={{ marginBottom: '3.5rem' }}>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1.8rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004851" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                <h3 style={{ fontFamily: "inherit", fontSize: '1.3rem', color: 'var(--gray-800)', margin: 0, textAlign: 'center' }}>
                  Kepala Urusan (KAUR)
                </h3>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.8rem' }}>
                <div className="aparatur-card reveal stagger-1" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgKaurPerencanaan} alt="Aris" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <h3 className="aparatur-name">Aris</h3>
                  <div className="aparatur-role">Kaur Perencanaan</div>
                </div>

                <div className="aparatur-card reveal stagger-2" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgKaurUmum} alt="Jois" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <h3 className="aparatur-name">Jois</h3>
                  <div className="aparatur-role">Kaur Administrasi & Umum</div>
                </div>

                <div className="aparatur-card reveal stagger-3" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgKaurKeuangan} alt="Arlis" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <h3 className="aparatur-name">Arlis</h3>
                  <div className="aparatur-role">Kaur Keuangan</div>
                </div>
              </div>
            </div>

            {/* 4. Kepala Seksi (KASI) */}
            <div style={{ marginBottom: '3.5rem' }}>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1.8rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004851" strokeWidth="2.2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <h3 style={{ fontFamily: "inherit", fontSize: '1.3rem', color: 'var(--gray-800)', margin: 0, textAlign: 'center' }}>
                  Kepala Seksi (KASI)
                </h3>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.8rem' }}>
                <div className="aparatur-card reveal stagger-1" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgKasiPemerintahan} alt="Ismail" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <h3 className="aparatur-name">Ismail</h3>
                  <div className="aparatur-role">Kasi Pemerintahan</div>
                </div>

                <div className="aparatur-card reveal stagger-2" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgKasiPelayanan} alt="Derman, S.P" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <h3 className="aparatur-name">Derman, S.P</h3>
                  <div className="aparatur-role">Kasi Pelayanan</div>
                </div>

                <div className="aparatur-card reveal stagger-3" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgKasiKesejahteraan} alt="Endang Fitriani" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </div>
                  <h3 className="aparatur-name">Endang Fitriani</h3>
                  <div className="aparatur-role">Kasi Kesejahteraan</div>
                </div>
              </div>
            </div>

            {/* 5. Wilayah Kewilayahan (Kepala Dusun & RT) */}
            <div>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004851" strokeWidth="2.2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <h3 style={{ fontFamily: "inherit", fontSize: '1.3rem', color: 'var(--gray-800)', margin: 0 }}>
                  Wilayah Kewilayahan (Kepala Dusun & Rukun Tetangga)
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.8rem' }}>
                {/* Dusun I */}
                <div className="reveal stagger-1" style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: '4px', padding: '1.8rem' }}>
                  <div style={{ background: '#004851', color: 'white', padding: '0.35rem 0.9rem', borderRadius: '3px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'inline-block', marginBottom: '1.2rem' }}>
                    Wilayah Dusun I
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--gray-200)' }}>
                    <div style={{ width: '54px', height: '50px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0, border: '1.5px solid var(--gray-300)', background: '#f5f5f4' }}>
                      <img src={imgKadus1} alt="Budugami" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "inherit", fontSize: '1.15rem', color: 'var(--gray-800)', margin: '0 0 2px' }}>Budugami</h4>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Kepala Dusun I</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--gray-50)', padding: '0.65rem 0.9rem', borderRadius: '3px', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>Ketua RT 01</span>
                      <span style={{ fontWeight: 700, color: 'var(--gray-800)' }}>Sarpin H.</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--gray-50)', padding: '0.65rem 0.9rem', borderRadius: '3px', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>Ketua RT 02</span>
                      <span style={{ fontWeight: 700, color: 'var(--gray-800)' }}>Sucipto</span>
                    </div>
                  </div>
                </div>

                {/* Dusun II */}
                <div className="reveal stagger-2" style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: '4px', padding: '1.8rem' }}>
                  <div style={{ background: '#004851', color: 'white', padding: '0.35rem 0.9rem', borderRadius: '3px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'inline-block', marginBottom: '1.2rem' }}>
                    Wilayah Dusun II
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--gray-200)' }}>
                    <div style={{ width: '54px', height: '50px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0, border: '1.5px solid var(--gray-300)', background: '#f5f5f4' }}>
                      <img src={imgKadus2} alt="Arit Noval" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "inherit", fontSize: '1.15rem', color: 'var(--gray-800)', margin: '0 0 2px' }}>Arit Noval</h4>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Kepala Dusun II</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--gray-50)', padding: '0.65rem 0.9rem', borderRadius: '3px', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>Ketua RT 03</span>
                      <span style={{ fontWeight: 700, color: 'var(--gray-800)' }}>Harsono</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--gray-50)', padding: '0.65rem 0.9rem', borderRadius: '3px', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>Ketua RT 04</span>
                      <span style={{ fontWeight: 700, color: 'var(--gray-800)' }}>Mawa</span>
                    </div>
                  </div>
                </div>

                {/* Dusun III */}
                <div className="reveal stagger-3" style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: '4px', padding: '1.8rem' }}>
                  <div style={{ background: '#004851', color: 'white', padding: '0.35rem 0.9rem', borderRadius: '3px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', display: 'inline-block', marginBottom: '1.2rem' }}>
                    Wilayah Dusun III
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem', paddingBottom: '1rem', borderBottom: '1.5px solid var(--gray-200)' }}>
                    <div style={{ width: '54px', height: '50px', borderRadius: '10px', overflow: 'hidden', flexShrink: 0, border: '1.5px solid var(--gray-300)', background: '#f5f5f4' }}>
                      <img src={imgKadus3} alt="Harman" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: "inherit", fontSize: '1.15rem', color: 'var(--gray-800)', margin: '0 0 2px' }}>Harman</h4>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Kepala Dusun III</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--gray-50)', padding: '0.65rem 0.9rem', borderRadius: '3px', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>Ketua RT 05</span>
                      <span style={{ fontWeight: 700, color: 'var(--gray-800)' }}>Ripai</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--gray-50)', padding: '0.65rem 0.9rem', borderRadius: '3px', fontSize: '0.85rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--gray-600)' }}>Ketua RT 06</span>
                      <span style={{ fontWeight: 700, color: 'var(--gray-800)' }}>Darman</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 5. KOMODITAS UNGGULAN (Khusus Cengkeh Organik) */}
        <section className="section section-bordered" id="komoditas" style={{ background: '#ffffff' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="overline">Potensi Utama Desa</div>
              <h2>Komoditas Unggulan Desa Padaleu</h2>
              <p>Desa Padaleu memiliki tiga komoditas unggulan yang menjadi sumber penghidupan dan kebanggaan masyarakat, yaitu Cengkeh, Nilam, dan Sawit.</p>
              <div className="divider"></div>
            </div>

            <div className="welcome-grid reveal" style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', padding: '2rem', borderRadius: '6px', marginBottom: '2.5rem' }}>
              <div className="welcome-img-wrap" style={{ height: '380px' }}>
                <img src="/imports/komoditas.png" alt="Komoditas unggulan Desa Padaleu" style={{ height: '100%' }} />
                <div className="caption-bar">
                  <h4>Potensi Alam Padaleu</h4>
                  <span>Komoditas Unggulan Masyarakat</span>
                </div>
              </div>
              <div className="welcome-text">
                <div className="overline" style={{ color: 'var(--red-accent)' }}>Andalan Desa</div>
                <h2>3 Komoditas Unggulan yang Menjadi Kekuatan Ekonomi Desa</h2>
                <p>Cengkeh, Nilam, dan Sawit menjadi tiga komoditas utama yang memberikan nilai ekonomi penting bagi warga Desa Padaleu.</p>
                <p>Ketiga komoditas ini menjadi simbol kekayaan alam dan harapan kesejahteraan masyarakat desa.</p>
              </div>
            </div>

            <div className="komoditas-grid">
              <a href="https://id.wikipedia.org/wiki/Cengkih" target="_blank" rel="noopener noreferrer" className="komoditas-card reveal stagger-1" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="komoditas-img-wrap">
                  <img src="/imports/cengkeh.png" alt="Cengkeh" />
                </div>
                <div className="komoditas-body">
                  <div className="komoditas-tag">Komoditas Utama</div>
                  <h3 className="komoditas-title">Cengkeh</h3>
                  <p className="komoditas-desc">Komoditas andalan masyarakat Desa Padaleu yang dikenal memiliki kualitas baik dan nilai ekonomi tinggi.</p>
                </div>
              </a>

              <a href="https://id.wikipedia.org/wiki/Nilam" target="_blank" rel="noopener noreferrer" className="komoditas-card reveal stagger-2" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="komoditas-img-wrap">
                  <img src={imgNilam} alt="Nilam" />
                </div>
                <div className="komoditas-body">
                  <div className="komoditas-tag">Komoditas Unggulan</div>
                  <h3 className="komoditas-title">Nilam</h3>
                  <p className="komoditas-desc">Salah satu hasil bumi penting yang turut mendukung ekonomi warga dan potensi desa.</p>
                </div>
              </a>

              <a href="https://id.wikipedia.org/wiki/Kelapa_sawit" target="_blank" rel="noopener noreferrer" className="komoditas-card reveal stagger-3" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="komoditas-img-wrap">
                  <img src={imgSawit} alt="Sawit" />
                </div>
                <div className="komoditas-body">
                  <div className="komoditas-tag">Komoditas Unggulan</div>
                  <h3 className="komoditas-title">Sawit</h3>
                  <p className="komoditas-desc">Komoditas perkebunan yang menjadi salah satu sumber pendapatan masyarakat Desa Padaleu.</p>
                </div>
              </a>
            </div>
          </div>
        </section>


        {/* 7. GALERI FOTO (Foto Placeholder Avatar) */}
        <section className="section section-bordered" id="galeri" style={{ background: '#f8f7f4' }}>
          <div className="container-wide">
            <div className="section-header reveal">
              <div className="overline">Galeri Visual</div>
              <h2>Pesona Desa dalam Bingkai Foto</h2>
              <p>Koleksi dokumentasi keindahan alam, kegiatan masyarakat, dan potensi Desa Padaleu.</p>
              <div className="divider"></div>
            </div>

            <div className="gallery-grid reveal-scale">
              {[
                { title: 'Pemerintahan Desa', category: 'Foto Galeri', image: imgPemerintahanDesa },
                { title: 'Kegiatan Warga', category: 'Foto Galeri', image: imgKegiatanWarga },
                { title: 'Potensi Desa', category: 'Foto Galeri', image: imgPotensiDesa },
                { title: 'Pembangunan Desa', category: 'Foto Galeri', image: imgPembangunanDesa },
                { title: 'Dokumentasi Desa', category: 'Foto Galeri', image: imgDokumentasiDesa }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`gallery-item ${idx > 0 ? `reveal stagger-${idx}` : ''}`}
                  onClick={() => setSelectedImage(item)}
                  title="Klik untuk Perbesar Gambar (Zoom In)"
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ objectFit: 'cover', width: '100%', height: '100%', background: '#e7e5e4' }}
                  />
                  <div className="gallery-caption">
                    <h4>{item.title}</h4>
                    <span>{item.category} &bull; Klik Zoom</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. PETA DIGITAL GIS DESA */}
        <section className="section section-bordered" id="peta-sec" style={{ background: '#ffffff' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="overline">Peta Geografis Interaktif</div>
              <h2>Peta Digital GIS Desa Padaleu</h2>
              <p>Jelajahi lokasi fisik kantor desa, tempat wisata, dermaga, pos kesehatan, dan sarana publik desa secara langsung.</p>
              <div className="divider"></div>
            </div>

            <div className="map-wrapper reveal">
              <div ref={mapRef} id="home-map" style={{ width: '100%', height: '100%' }}></div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }} className="reveal">
              <a href="https://www.google.com/maps/place/Desa+padaleu/@-3.7515053,122.3401347,642m/data=!3m1!1e3!4m6!3m5!1s0x2d9855761937d85b:0x26ace3d8a9a9e8ee!8m2!3d-3.7521192!4d122.3402454!16s%2Fg%2F11cs6ktnzy" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#e04336' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Buka Lokasi Desa Padaleu di Google Maps ↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* 8.5. VIDEO DOKUMENTER */}
        <section className="section section-bordered" id="dokumenter" style={{ background: '#e7e5e4' }}>
          <div className="container-wide">
            <div className="section-header reveal">
              <div className="overline">Video Dokumenter</div>
              <h2>Lensa Padaleu</h2>
              <p>Dokumenter potensi &amp; kehidupan Desa Padaleu, Kecamatan Lembo, Kabupaten Konawe Utara.</p>
              <div className="divider"></div>
            </div>
            <div className="video-player-wrap reveal">
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/w9liIAud8og?rel=0&modestbranding=1"
                  title="Dokumenter Desa Padaleu — Lensa Padaleu"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* 8.6. VIDEO PROMOSI */}
        <section className="section section-bordered" id="promosi" style={{ background: '#ffffff' }}>
          <div className="container-wide">
            <div className="section-header reveal">
              <div className="overline">Video Promosi Desa</div>
              <h2>Profil &amp; Promosi Desa Padaleu</h2>
              <p>Saksikan tayangan profil promosi potensi alam, hasil bumi, dan pembangunan Desa Padaleu.</p>
              <div className="divider"></div>
            </div>
            <div className="video-player-wrap reveal">
              <div className="video-frame">
                <iframe
                  src="https://www.youtube.com/embed/B1LEL26tS8I?rel=0&modestbranding=1"
                  title="Video Promosi Desa Padaleu"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* 9. KONTAK DESA */}
        <section className="cta-section section-bordered" id="kontak-sec" style={{ background: '#f5f2ed', padding: '5rem 2rem' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="overline">Layanan Kontak Resmi</div>
              <h2 className="font-serif">Hubungi Pemerintah Desa Padaleu</h2>
              <p>Silakan sampaikan pertanyaan, aspirasi warga, atau koordinasi kunjungan melalui layanan kontak resmi di bawah ini.</p>
              <div className="divider"></div>
            </div>

            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 480px))', justifyContent: 'center', gap: '2rem', marginTop: '2.5rem' }}>
              {/* Card 1: Alamat Kantor Desa */}
              <div style={{ background: 'var(--white)', padding: '2.8rem 2.2rem', border: '1px solid var(--gray-200)', borderRadius: '6px', borderTop: '4px solid #004851', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(0,72,81,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.4rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#004851" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>
                    Alamat Fisik
                  </div>
                  <h3 style={{ fontFamily: "inherit", fontSize: '1.4rem', color: 'var(--gray-800)', marginBottom: '1rem' }}>
                    Kantor Desa Padaleu
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--gray-600)', lineHeight: '1.6', margin: '0 0 1.8rem' }}>
                    Jl. Trans Sulawesi, Desa Padaleu, Kec. Lembo, Kab. Konawe Utara, Sulawesi Tenggara 93354
                  </p>
                </div>

                <a href="https://www.google.com/maps/place/Desa+padaleu/@-3.7515053,122.3401347,642m/data=!3m1!1e3!4m6!3m5!1s0x2d9855761937d85b:0x26ace3d8a9a9e8ee!8m2!3d-3.7521192!4d122.3402454!16s%2Fg%2F11cs6ktnzy" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#004851', width: '100%', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Petunjuk Arah Google Maps</span>
                </a>
              </div>

              {/* Card 2: Layanan Telepon & WhatsApp */}
              <div style={{ background: 'var(--white)', padding: '2.8rem 2.2rem', border: '1px solid var(--gray-200)', borderRadius: '6px', borderTop: '4px solid #128C7E', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(37,211,102,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.4rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#128C7E" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#128C7E', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.4rem' }}>
                    Telepon / WhatsApp
                  </div>
                  <h3 style={{ fontFamily: "inherit", fontSize: '1.4rem', color: 'var(--gray-800)', marginBottom: '1rem' }}>
                    +62 812-4777-1312
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--gray-600)', lineHeight: '1.6', margin: '0 0 1.8rem' }}>
                    Layanan Komunikasi & Informasi Publik Kantor Sekretariat Desa Padaleu
                  </p>
                </div>

                <a href="https://wa.me/6281247771312?text=Halo%20Desa%20Padaleu,%20saya%20ingin%20bertanya" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', width: '100%', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                  <span>Hubungi via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Tentang Desa</h4>
            <p>Portal informasi pariwisata dan pemerintahan Desa Padaleu. Menyajikan transparansi, sejarah kepemimpinan, profil aparatur, peta digital, serta layanan kependudukan terpadu.</p>
          </div>
          <div>
            <h4>Navigasi Utama</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {navItems.slice(0, 5).map((item) => (
                <a key={item.id} href={`#${item.id}`}>{item.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4>Media &amp; Informasi</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {navItems.slice(5).map((item) => (
                <a key={item.id} href={`#${item.id}`}>{item.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h4>Kontak</h4>
            <p>Kantor Desa Padaleu<br />Jl. Trans Sulawesi, Lembo<br />Konawe Utara, Sultra<br /><strong>WA: +62 812-4777-1312</strong></p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Pemerintah Desa Padaleu, Kecamatan Lembo, Kabupaten Konawe Utara. All Rights Reserved.
        </div>
      </footer>

      {/* ═══════════ FLOATING BUTTONS ═══════════ */}
      <div className="floating-btn-group">
        <a href="https://wa.me/6281247771312?text=Halo%20Admin%20Desa%20Padaleu,%20saya%20ingin%20bertanya" target="_blank" rel="noopener noreferrer" className="btn-float btn-whatsapp-float" title="Chat WhatsApp Desa">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </a>
        <button className={`btn-float btn-back-to-top ${showBackToTop ? 'visible' : ''}`} title="Kembali ke Atas" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"/></svg>
        </button>
      </div>

      {/* ═══════════ GALERI ZOOM LIGHTBOX MODAL ═══════════ */}
      {selectedImage && (
        <div
          className="gallery-modal-overlay active"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="gallery-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery-modal-close"
              onClick={() => setSelectedImage(null)}
              title="Tutup Preview Foto (ESC)"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div className="gallery-modal-img-box">
              <img src={selectedImage.image} alt={selectedImage.title} className="gallery-modal-img" />
            </div>
            <div className="gallery-modal-info">
              <span className="gallery-modal-category">{selectedImage.category}</span>
              <h3 className="gallery-modal-title">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
