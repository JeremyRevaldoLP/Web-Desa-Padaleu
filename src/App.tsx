import { useState, useEffect, useRef } from 'react'
import imgLogoKonaweUtara from './imports/Kabupaten Konawe Utara.png'
import imgGambarHome from './imports/gambarhome.png'
import imgAvatar from './imports/avatar_default.jpg'
import imgCengkeh from './imports/Cengkeh.jpeg'
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

  // ── 3. Leaflet Map Ref ──
  const mapRef = useRef<HTMLDivElement>(null)

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

      const sections = ['hero', 'sejarah', 'struktur', 'sambutan', 'komoditas', 'berita', 'galeri', 'peta-sec', 'kontak-sec']
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
      if ((mapRef.current as any)._leaflet_id) return

      const padaleuLat = -3.7521192
      const padaleuLng = 122.3402454
      const map = L.map(mapRef.current).setView([padaleuLat, padaleuLng], 15)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors | Desa Padaleu GIS'
      }).addTo(map)

      const markers = [
        {
          lat: -3.7521192, lng: 122.3402454,
          title: "Desa Padaleu (Pusat Desa)",
          desc: "Lokasi Geografis Resmi Desa Padaleu, Kec. Lembo, Kab. Konawe Utara.",
          category: "Pusat Desa"
        },
        {
          lat: -3.750500, lng: 122.341500,
          title: "Kantor Desa Padaleu",
          desc: "Pusat Pelayanan Publik & Balai Desa Padaleu.",
          category: "Pemerintahan"
        },
        {
          lat: -3.754000, lng: 122.345000,
          title: "Perkebunan Cengkeh Organik",
          desc: "Kawasan utama perkebunan cengkeh Desa Padaleu.",
          category: "Komoditas"
        },
        {
          lat: -3.756500, lng: 122.349000,
          title: "Pesisir Teluk Lembo",
          desc: "Kawasan pesisir pantai & dermaga tambatan perahu nelayan.",
          category: "Wisata"
        }
      ]

      markers.forEach(m => {
        const popupContent = `
          <div style="padding:0.4rem;">
            <span style="font-size:0.6rem;font-weight:700;color:#c0392b;text-transform:uppercase;">${m.category}</span>
            <h4 style="margin:0.2rem 0;font-size:0.95rem;color:#1a4a4a;">${m.title}</h4>
            <p style="margin:0;font-size:0.78rem;color:#57534e;line-height:1.4;">${m.desc}</p>
          </div>
        `
        L.marker([m.lat, m.lng]).addTo(map).bindPopup(popupContent)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* ═══════════ TOP BAR (Mürren / Konawe Utara Style) ═══════════ */}
      <div className="topbar" id="topbar">
        <div className="topbar-left">
          <a href="#hero" className="topbar-logo-box">
            <img src={imgLogoKonaweUtara} alt="Logo Kabupaten Konawe Utara" className="topbar-logo-img" />
            <div className="topbar-logo-content">
              <span className="topbar-logo-text">DESA PADALEU</span>
              <span className="topbar-logo-sub">KECAMATAN LEMBO - KONAWE UTARA</span>
            </div>
          </a>
        </div>
        <div className="topbar-right-info">
          Pemerintah Kabupaten Konawe Utara
        </div>
      </div>

      {/* ═══════════ SECONDARY NAV (Exact 9 Requested Menu Items) ═══════════ */}
      <nav className="subnav" id="subnav">
        <a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Beranda</a>
        <a href="#sejarah" className={activeSection === 'sejarah' ? 'active' : ''}>Sejarah Desa</a>
        <a href="#struktur" className={activeSection === 'struktur' ? 'active' : ''}>Struktur Desa</a>
        <a href="#sambutan" className={activeSection === 'sambutan' ? 'active' : ''}>Sambutan</a>
        <a href="#komoditas" className={activeSection === 'komoditas' ? 'active' : ''}>Komoditas Unggulan</a>
        <a href="#berita" className={activeSection === 'berita' ? 'active' : ''}>Berita</a>
        <a href="#galeri" className={activeSection === 'galeri' ? 'active' : ''}>Galeri</a>
        <a href="#peta-sec" className={activeSection === 'peta-sec' ? 'active' : ''}>Peta Digital</a>
        <a href="#kontak-sec" className={activeSection === 'kontak-sec' ? 'active' : ''}>Kontak</a>
      </nav>

      {/* ═══════════ MAIN CONTENT ═══════════ */}
      <main>
        {/* 1. BERANDA (Hero Section) */}
        <section className="hero" id="hero">
          <img src={imgGambarHome} alt="Panorama Desa Padaleu" className="hero-img" />
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
            <div className="stat-number">1,420</div>
            <div className="stat-label">Penduduk</div>
          </div>
          <div className="stat-item reveal stagger-2">
            <div className="stat-number">412</div>
            <div className="stat-label">Kepala Keluarga</div>
          </div>
          <div className="stat-item reveal stagger-3">
            <div className="stat-number">3</div>
            <div className="stat-label">Destinasi Wisata</div>
          </div>
          <div className="stat-item reveal stagger-4">
            <div className="stat-number">2,026</div>
            <div className="stat-label">Tahun Anggaran</div>
          </div>
        </div>

        {/* 2. SEJARAH DESA & KEPEMIMPINAN TAHUN KE TAHUN */}
        <section className="section" id="sejarah" style={{ background: 'var(--white)' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="overline">Jejak Langkah & Sejarah</div>
              <h2>Sejarah & Perjalanan Kepemimpinan Desa Padaleu</h2>
              <p>Sejak pertama kali berdiri di pesisir Lembo, Desa Padaleu telah tumbuh menjadi desa mandiri yang kaya akan hasil bumi dan potensi maritim melalui kepemimpinan yang berkesinambungan.</p>
              <div className="divider"></div>
            </div>

            <div style={{ maxWidth: '800px', margin: '0 auto 3.5rem', textAlign: 'center' }} className="reveal">
              <p style={{ color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                Desa Padaleu dibentuk melalui semangat gotong royong para tetua adat dan tokoh masyarakat pesisir Konawe Utara. Nama <strong>"Padaleu"</strong> diambil dari perpaduan kata lokal yang bermakna <em>"Hamparan Hijau yang Subur dan Damai"</em>. Berikut adalah jejak kepemimpinan Kepala Desa Padaleu dari masa ke masa:
              </p>
            </div>

            <div className="section-header reveal" style={{ marginBottom: '2rem' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--red-accent)' }}>Kepemimpinan dari Tahun ke Tahun</span>
            </div>

            <div className="timeline-grid">
              <div className="timeline-card reveal stagger-1">
                <div className="timeline-img-wrap">
                  <img src={imgAvatar} alt="H. La Ode Rahman" style={{ objectFit: 'contain', background: '#f5f5f4', padding: '1.5rem' }} />
                  <div className="timeline-badge">Periode I</div>
                </div>
                <div className="timeline-body">
                  <div className="timeline-period">1998 — 2006</div>
                  <h3 className="timeline-name">H. La Ode Rahman</h3>
                  <p className="timeline-desc">Kepala Desa Pertama. Peletak fondasi administrasi wilayah desa, pembangunan Balai Desa pertama, dan pembukaan jalan rintisan antardusun.</p>
                </div>
              </div>

              <div className="timeline-card reveal stagger-2">
                <div className="timeline-img-wrap">
                  <img src={imgAvatar} alt="Drs. Muhammad Yamin" style={{ objectFit: 'contain', background: '#f5f5f4', padding: '1.5rem' }} />
                  <div className="timeline-badge">Periode II</div>
                </div>
                <div className="timeline-body">
                  <div className="timeline-period">2006 — 2014</div>
                  <h3 className="timeline-name">Drs. Muhammad Yamin</h3>
                  <p className="timeline-desc">Fokus pada penguatan sektor perkebunan cengkeh dan kelapa, perbaikan jalan desa beraspal, serta pendirian posyandu desa.</p>
                </div>
              </div>

              <div className="timeline-card reveal stagger-3">
                <div className="timeline-img-wrap">
                  <img src={imgAvatar} alt="Ir. H. Andi Syamsul" style={{ objectFit: 'contain', background: '#f5f5f4', padding: '1.5rem' }} />
                  <div className="timeline-badge">Periode III</div>
                </div>
                <div className="timeline-body">
                  <div className="timeline-period">2014 — 2021</div>
                  <h3 className="timeline-name">Ir. H. Andi Syamsul</h3>
                  <p className="timeline-desc">Pembangunan jaringan elektrifikasi terpadu, pembuatan dermaga tambatan perahu nelayan, dan pembentukan BUMDes Padaleu Sejahtera.</p>
                </div>
              </div>

              <div className="timeline-card reveal stagger-4">
                <div className="timeline-img-wrap">
                  <img src={imgAvatar} alt="Masiudin, S.Si" style={{ objectFit: 'contain', background: '#f5f5f4', padding: '1.5rem' }} />
                  <div className="timeline-badge" style={{ background: 'var(--teal-dark)' }}>Petahana</div>
                </div>
                <div className="timeline-body">
                  <div className="timeline-period">2021 — Sekarang</div>
                  <h3 className="timeline-name">Masiudin, S.Si</h3>
                  <p className="timeline-desc">Transformasi digitalisasi desa, pengembangan Ekowisata Mangrove Padaleu, transparansi APBDes, serta keterbukaan informasi publik.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="struktur" style={{ background: 'var(--gray-50)' }}>
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
                  <img src={imgAvatar} alt="Masiudin, S.Si" />
                </div>
                <div className="aparatur-role" style={{ color: '#004851', fontWeight: 800, letterSpacing: '0.15em' }}>Kepala Desa</div>
                <h3 className="aparatur-name" style={{ fontSize: '1.35rem', color: 'var(--gray-900)' }}>Masiudin, S.Si</h3>
              </div>

              <div className="aparatur-card reveal stagger-2" style={{ borderTop: '4px solid var(--teal)', background: 'var(--white)', maxWidth: '320px', width: '100%' }}>
                <div className="aparatur-avatar">
                  <img src={imgAvatar} alt="Asrul" />
                </div>
                <div className="aparatur-role" style={{ color: 'var(--teal)', fontWeight: 700, letterSpacing: '0.15em' }}>Sekretaris Desa</div>
                <h3 className="aparatur-name" style={{ fontSize: '1.35rem', color: 'var(--gray-900)' }}>Asrul</h3>
              </div>
            </div>

            {/* 2. Lembaga Pendukung Desa */}
            <div className="reveal" style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', borderRadius: '4px', padding: '2.2rem', marginBottom: '3.5rem', maxWidth: '850px', margin: '0 auto 3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1.5px solid var(--gray-200)', paddingBottom: '0.8rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#004851" strokeWidth="2.2"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M8 10v11M12 10v11M16 10v11M20 10v11"/></svg>
                <h3 style={{ fontFamily: "'Recoleta', 'Playfair Display', serif", fontSize: '1.25rem', color: '#004851', fontWeight: 600, letterSpacing: '0.02em', margin: 0, textAlign: 'center' }}>
                  Lembaga Pendukung Desa
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: 'var(--gray-50)', padding: '1.4rem', borderRadius: '4px', borderLeft: '4px solid #004851' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Lembaga Legislatif Desa</div>
                  <h4 style={{ fontFamily: "'Recoleta', serif", fontSize: '1.15rem', color: 'var(--gray-800)', marginTop: '0.4rem' }}>Badan Permusyawaratan Desa (BPD)</h4>
                </div>

                <div style={{ background: 'var(--gray-50)', padding: '1.4rem', borderRadius: '4px', borderLeft: '4px solid var(--red-accent)' }}>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--red-accent)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Lembaga Kemasyarakatan</div>
                  <h4 style={{ fontFamily: "'Recoleta', serif", fontSize: '1.15rem', color: 'var(--gray-800)', marginTop: '0.4rem' }}>Lembaga Ketahanan Desa (LKD / LAD)</h4>
                </div>
              </div>
            </div>

            {/* 3. Kepala Urusan (KAUR) */}
            <div style={{ marginBottom: '3.5rem' }}>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1.8rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004851" strokeWidth="2.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                <h3 style={{ fontFamily: "'Recoleta', 'Playfair Display', serif", fontSize: '1.3rem', color: 'var(--gray-800)', margin: 0, textAlign: 'center' }}>
                  Kepala Urusan (KAUR)
                </h3>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.8rem' }}>
                <div className="aparatur-card reveal stagger-1" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgAvatar} alt="Aris" />
                  </div>
                  <div className="aparatur-role">Kaur Perencanaan</div>
                  <h3 className="aparatur-name">Aris</h3>
                </div>

                <div className="aparatur-card reveal stagger-2" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgAvatar} alt="Jois" />
                  </div>
                  <div className="aparatur-role">Kaur Administrasi & Umum</div>
                  <h3 className="aparatur-name">Jois</h3>
                </div>

                <div className="aparatur-card reveal stagger-3" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgAvatar} alt="Arlis" />
                  </div>
                  <div className="aparatur-role">Kaur Keuangan</div>
                  <h3 className="aparatur-name">Arlis</h3>
                </div>
              </div>
            </div>

            {/* 4. Kepala Seksi (KASI) */}
            <div style={{ marginBottom: '3.5rem' }}>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '1.8rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004851" strokeWidth="2.2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                <h3 style={{ fontFamily: "'Recoleta', 'Playfair Display', serif", fontSize: '1.3rem', color: 'var(--gray-800)', margin: 0, textAlign: 'center' }}>
                  Kepala Seksi (KASI)
                </h3>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.8rem' }}>
                <div className="aparatur-card reveal stagger-1" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgAvatar} alt="Ismail" />
                  </div>
                  <div className="aparatur-role">Kasi Pemerintahan</div>
                  <h3 className="aparatur-name">Ismail</h3>
                </div>

                <div className="aparatur-card reveal stagger-2" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgAvatar} alt="Derman, S.P" />
                  </div>
                  <div className="aparatur-role">Kasi Pelayanan</div>
                  <h3 className="aparatur-name">Derman, S.P</h3>
                </div>

                <div className="aparatur-card reveal stagger-3" style={{ maxWidth: '280px', width: '100%' }}>
                  <div className="aparatur-avatar">
                    <img src={imgAvatar} alt="Endang Fitriani" />
                  </div>
                  <div className="aparatur-role">Kasi Kesejahteraan</div>
                  <h3 className="aparatur-name">Endang Fitriani</h3>
                </div>
              </div>
            </div>

            {/* 5. Wilayah Kewilayahan (Kepala Dusun & RT) */}
            <div>
              <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004851" strokeWidth="2.2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                <h3 style={{ fontFamily: "'Recoleta', 'Playfair Display', serif", fontSize: '1.3rem', color: 'var(--gray-800)', margin: 0 }}>
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
                    <div style={{ width: '54px', height: '54px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--cream)' }}>
                      <img src={imgAvatar} alt="Budugami" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Kepala Dusun I</div>
                      <h4 style={{ fontFamily: "'Recoleta', serif", fontSize: '1.15rem', color: 'var(--gray-800)', margin: '2px 0 0' }}>Budugami</h4>
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
                    <div style={{ width: '54px', height: '54px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--cream)' }}>
                      <img src={imgAvatar} alt="Arit Noval" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Kepala Dusun II</div>
                      <h4 style={{ fontFamily: "'Recoleta', serif", fontSize: '1.15rem', color: 'var(--gray-800)', margin: '2px 0 0' }}>Arit Noval</h4>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem', paddingBottom: '1rem', borderBottom: '1px solid var(--gray-200)' }}>
                    <div style={{ width: '54px', height: '54px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--cream)' }}>
                      <img src={imgAvatar} alt="Harman" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Kepala Dusun III</div>
                      <h4 style={{ fontFamily: "'Recoleta', serif", fontSize: '1.15rem', color: 'var(--gray-800)', margin: '2px 0 0' }}>Harman</h4>
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

        {/* 4. SAMBUTAN KEPALA DESA (Foto Placeholder Avatar) */}
        <section className="section" id="sambutan" style={{ background: 'var(--white)' }}>
          <div className="container">
            <div className="welcome-grid">
              <div className="welcome-img-wrap reveal-left">
                <img src={imgAvatar} alt="Kepala Desa Padaleu" style={{ objectFit: 'contain', background: '#f5f5f4', padding: '2rem' }} />
                <div className="caption-bar">
                  <h4>Masiudin, S.Si.</h4>
                  <span>Kepala Desa Padaleu (2021—Sekarang)</span>
                </div>
              </div>
              <div className="welcome-text reveal-right">
                <div className="overline">Sambutan Kepala Desa</div>
                <h2>Membangun Desa Digital Melalui Transparansi & Keterbukaan</h2>
                <p>"Selamat datang di portal resmi Desa Padaleu. Melalui platform digital ini, kami berupaya mendekatkan pelayanan pemerintahan desa kepada seluruh lapisan masyarakat. Website ini merupakan pilar keterbukaan anggaran, promosi komoditas unggulan, pariwisata terpadu, serta sistem koordinasi peta digital desa."</p>
                <p>"Mari bersama-sama bersinergi mewujudkan pembangunan desa yang transparan, modern, dan membawa kesejahteraan bagi segenap warga Lembo, Konawe Utara."</p>
                <a href="#kontak-sec" className="link-arrow">
                  Kirim Aspirasi & Hubungi Kami
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. KOMODITAS UNGGULAN (Khusus Cengkeh Organik) */}
        <section className="section" id="komoditas" style={{ background: 'var(--gray-50)' }}>
          <div className="container">
            <div className="section-header reveal">
              <div className="overline">Potensi Utama Desa</div>
              <h2>Komoditas Unggulan: Cengkeh Organik Padaleu</h2>
              <p>Cengkeh merupakan satu-satunya komoditas perkebunan utama yang menjadi pilar utama perekonomian dan kebanggaan warga Desa Padaleu, Kecamatan Lembo.</p>
              <div className="divider"></div>
            </div>

            <div className="welcome-grid reveal" style={{ background: 'var(--white)', border: '1px solid var(--gray-200)', padding: '2rem', borderRadius: '6px', marginBottom: '2.5rem' }}>
              <div className="welcome-img-wrap" style={{ height: '380px' }}>
                <img src={imgCengkeh} alt="Perkebunan Cengkeh Organik Padaleu" style={{ height: '100%' }} />
                <div className="caption-bar">
                  <h4>Cengkeh Organik Konawe Utara</h4>
                  <span>Komoditas Perkebunan Utama Desa</span>
                </div>
              </div>
              <div className="welcome-text">
                <div className="overline" style={{ color: 'var(--red-accent)' }}>Hasil Bumi Utama</div>
                <h2>Cengkeh Kualitas Ekspor Khas Lereng Bukit Lembo</h2>
                <p>Perkebunan cengkeh di Desa Padaleu terhampar luas di sepanjang lereng perbukitan Lembo yang subur. Dipetik secara tradisional oleh para petani lokal dan dikeringkan di bawah sinar matahari alami untuk menjaga kualitas aroma dan kadar eugenol terbaik.</p>
                <p>Panen cengkeh di Desa Padaleu merupakan penggerak roda ekonomi terbesar desa, yang disyukuri tiap tahun melalui tradisi pesta adat panen rempah cengkeh.</p>
              </div>
            </div>

            <div className="komoditas-grid">
              <div className="komoditas-card reveal stagger-1">
                <div className="komoditas-img-wrap">
                  <img src={imgCengkeh} alt="Lahan Perkebunan Cengkeh" />
                </div>
                <div className="komoditas-body">
                  <div className="komoditas-tag">Lahan & Iklim Topografi</div>
                  <h3 className="komoditas-title">Lahan Perbukitan Subur</h3>
                  <p className="komoditas-desc">Ditanam di ketinggian ideal lereng Lembo dengan kondisi tanah vulkanik kaya unsur hara, menghasilkan pohon cengkeh yang lebat dan produktif.</p>
                </div>
              </div>

              <div className="komoditas-card reveal stagger-2">
                <div className="komoditas-img-wrap">
                  <img src={imgCengkeh} alt="Kualitas Minyak Atsiri" />
                </div>
                <div className="komoditas-body">
                  <div className="komoditas-tag">Mutu & Standar Minyak</div>
                  <h3 className="komoditas-title">Kadar Minyak Atsiri Tinggi</h3>
                  <p class="komoditas-desc">Bunga cengkeh Padaleu memiliki kadar eugenol murni yang tinggi, sangat diminati oleh industri minyak atsiri, farmasi, dan rempah ekspor.</p>
                </div>
              </div>

              <div className="komoditas-card reveal stagger-3">
                <div className="komoditas-img-wrap">
                  <img src={imgCengkeh} alt="Pengolahan Tradisional" />
                </div>
                <div className="komoditas-body">
                  <div className="komoditas-tag">Proses Alami</div>
                  <h3 className="komoditas-title">Pengeringan Alami</h3>
                  <p className="komoditas-desc">Dipetik secara manual dan dijemur secara alami tanpa bahan kimia, menghasilkan warna cokelat keemasan yang sempurna dan tahan lama.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BERITA & PENGUMUMAN DESA */}
        <section className="section" id="berita" style={{ background: 'var(--white)' }}>
          <div className="container-wide">
            <div className="section-header reveal">
              <div className="overline">Kabar Terkini</div>
              <h2>Berita & Kegiatan Desa Padaleu</h2>
              <p>Pengumuman resmi, kegiatan gotong royong, dan kabar perkembangan pembangunan desa terbaru.</p>
              <div className="divider"></div>
            </div>

            <div className="card-grid">
              <div className="card reveal stagger-1">
                <div className="card-img-wrap">
                  <img src={imgProker} alt="Pembahasan Proker" />
                  <div className="card-badge">Pembangunan</div>
                </div>
                <div className="card-body">
                  <div className="location">28 Juli 2026 &middot; Oleh Admin Desa</div>
                  <h3>Musyawarah Pembangunan Desa & Rencana Program Kerja Terpadu</h3>
                  <p>Pemerintah Desa Padaleu bersama aparat dan tokoh masyarakat menggelar musyawarah desa pembahasan program kerja prioritas.</p>
                  <a href="#berita" className="read-more">Baca Berita →</a>
                </div>
              </div>

              <div className="card reveal stagger-2">
                <div className="card-img-wrap">
                  <img src={imgCengkeh} alt="Panen Cengkeh" />
                  <div className="card-badge">Kegiatan Warga</div>
                </div>
                <div className="card-body">
                  <div className="location">15 Juli 2026 &middot; Oleh Poktan Desa</div>
                  <h3>Persiapan Pesta Adat Panen Rempah Cengkeh Raya 2026</h3>
                  <p>Warga dusun bersiap menyambut syukuran tahunan panen cengkeh melimpah dengan tarian adat tradisional khas Konawe Utara.</p>
                  <a href="#berita" className="read-more">Baca Berita →</a>
                </div>
              </div>

              <div className="card reveal stagger-3">
                <div className="card-img-wrap">
                  <img src={imgKKN} alt="Penerimaan KKN" />
                  <div className="card-badge">Pemberdayaan</div>
                </div>
                <div className="card-body">
                  <div className="location">02 Juli 2026 &middot; Sekretariat Desa</div>
                  <h3>Penerimaan Mahasiswa KKN & Program Kerja Kolaborasi Desa</h3>
                  <p>Penyambutan mahasiswa KKN oleh Pemerintah Desa Padaleu guna mendukung program digitalisasi desa dan pemetaan potensi wisata.</p>
                  <a href="#berita" className="read-more">Baca Berita →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. GALERI FOTO (Foto Placeholder Avatar) */}
        <section className="section" id="galeri" style={{ background: 'var(--gray-50)' }}>
          <div className="container-wide">
            <div className="section-header reveal">
              <div className="overline">Galeri Visual</div>
              <h2>Pesona Desa dalam Bingkai Foto</h2>
              <p>Koleksi dokumentasi keindahan alam, kegiatan masyarakat, dan potensi Desa Padaleu.</p>
              <div className="divider"></div>
            </div>

            <div className="gallery-grid reveal-scale">
              {[
                { title: 'Dokumentasi Desa', category: 'Slot Foto Galeri' },
                { title: 'Kegiatan Warga', category: 'Slot Foto Galeri' },
                { title: 'Potensi Desa', category: 'Slot Foto Galeri' },
                { title: 'Pembangunan Desa', category: 'Slot Foto Galeri' },
                { title: 'Pemerintahan Desa', category: 'Slot Foto Galeri' }
              ].map((item, idx) => (
                <div key={idx} className={`gallery-item ${idx > 0 ? `reveal stagger-${idx}` : ''}`}>
                  <img src={imgAvatar} alt={item.title} style={{ objectFit: 'contain', background: '#e7e5e4', padding: '2rem' }} />
                  <div className="gallery-caption">
                    <h4>{item.title}</h4>
                    <span>{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. PETA DIGITAL GIS DESA */}
        <section className="section" id="peta-sec" style={{ background: 'var(--white)' }}>
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

        {/* 9. KONTAK DESA & FORM ASPIRASI */}
        <section className="cta-section" id="kontak-sec">
          <div className="container">
            <div className="reveal">
              <h2 className="font-serif">Hubungi Pemerintah Desa Padaleu</h2>
              <p>Silakan sampaikan pertanyaan, aspirasi warga, atau koordinasi kunjungan wisata melalui layanan kontak di bawah ini.</p>
            </div>

            <div className="contact-grid reveal">
              <div style={{ background: 'var(--white)', padding: '2.5rem', border: '1px solid var(--gray-200)', borderRadius: '4px' }}>
                <h3 style={{ fontFamily: "'Recoleta', 'Playfair Display', serif", fontSize: '1.4rem', color: 'var(--gray-800)', marginBottom: '1.5rem' }}>Kantor Desa Padaleu</h3>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem', fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  <div><strong>Alamat:</strong><br />Jl. Trans Sulawesi, Desa Padaleu, Kec. Lembo, Kab. Konawe Utara, Sulawesi Tenggara 93354</div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem', fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <div><strong>Telepon / WhatsApp:</strong><br />+62 812-4455-6677 (Kantor Desa)</div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.2rem', fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <div><strong>Email Resmi:</strong><br />desa.padaleu@konaweutarakab.go.id</div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" style={{ flexShrink: 0 }}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <div><strong>Jam Pelayanan Publik:</strong><br />Senin — Jumat: 08:00 — 16:00 WITA</div>
                </div>
              </div>

              <div style={{ background: 'var(--white)', padding: '2.5rem', border: '1px solid var(--gray-200)', borderRadius: '4px' }}>
                <h3 style={{ fontFamily: "'Recoleta', 'Playfair Display', serif", fontSize: '1.4rem', color: 'var(--gray-800)', marginBottom: '1.5rem' }}>Kirim Pesan / Aspirasi</h3>

                <form onSubmit={(e) => { e.preventDefault(); alert('Terima kasih! Pesan/Aspirasi Anda telah terikirim ke Pemerintah Desa Padaleu.'); }}>
                  <div className="form-group">
                    <label>Nama Lengkap</label>
                    <input type="text" className="form-control" placeholder="Masukkan nama Anda" required />
                  </div>

                  <div className="form-group">
                    <label>Nomor HP / WhatsApp</label>
                    <input type="tel" className="form-control" placeholder="08xxxxxxxxxx" required />
                  </div>

                  <div className="form-group">
                    <label>Pesan / Aspirasi</label>
                    <textarea className="form-control" rows={4} placeholder="Tuliskan pesan atau aspirasi Anda untuk desa..." required></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', textAlign: 'center', cursor: 'pointer' }}>Kirim Pesan Sekarang</button>
                </form>
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
            <h4>Navigasi</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href="#sejarah">Sejarah Desa</a>
              <a href="#struktur">Struktur Desa</a>
              <a href="#komoditas">Komoditas Unggulan</a>
              <a href="#peta-sec">Peta Digital</a>
            </div>
          </div>
          <div>
            <h4>Informasi</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <a href="#berita">Berita Desa</a>
              <a href="#galeri">Galeri Foto</a>
              <a href="#kontak-sec">Hubungi Kami</a>
            </div>
          </div>
          <div>
            <h4>Kontak</h4>
            <p>Kantor Desa Padaleu<br />Jl. Trans Sulawesi, Lembo<br />Konawe Utara, Sultra<br /><br />desa.padaleu@konaweutarakab.go.id</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Pemerintah Desa Padaleu, Kecamatan Lembo, Kabupaten Konawe Utara. All Rights Reserved.
        </div>
      </footer>

      {/* ═══════════ FLOATING BUTTONS ═══════════ */}
      <div className="floating-btn-group">
        <a href="https://wa.me/6281244556677?text=Halo%20Admin%20Desa%20Padaleu,%20saya%20ingin%20bertanya" target="_blank" rel="noopener noreferrer" className="btn-float btn-whatsapp-float" title="Chat WhatsApp Desa">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </a>
        <button className={`btn-float btn-back-to-top ${showBackToTop ? 'visible' : ''}`} title="Kembali ke Atas" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"/></svg>
        </button>
      </div>

    </div>
  )
}
