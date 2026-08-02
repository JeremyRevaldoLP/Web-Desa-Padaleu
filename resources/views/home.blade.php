@extends('layouts.app')

@section('title', 'Beranda - Portal Desa Padaleu')

@section('content')

<!-- ═══════════════════════════════════════════════════════
     1. BERANDA (Hero Section)
     ═══════════════════════════════════════════════════════ -->
<section class="hero" id="hero">
    <img src="{{ asset('imports/gambarhome.png') }}" alt="Panorama Desa Padaleu" class="hero-img">
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <div class="hero-overline"><span id="hero-typewriter">Selamat Datang di</span><span class="typing-cursor"></span></div>
        <h1 class="hero-title">Desa Padaleu</h1>
        <p class="hero-subtitle">Kecamatan Lembo &middot; Kabupaten Konawe Utara &middot; Sulawesi Tenggara</p>
    </div>
    <a href="#sejarah" class="hero-scroll-hint">
        <span>Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
    </a>
</section>

<!-- ═══════════════════════════════════════════════════════
     STATISTIK QUICK BAR
     ═══════════════════════════════════════════════════════ -->
<div class="stats-bar" id="statistik">
    <div class="stat-item reveal stagger-1">
        <div class="stat-number">1,420</div>
        <div class="stat-label">Penduduk</div>
    </div>
    <div class="stat-item reveal stagger-2">
        <div class="stat-number">412</div>
        <div class="stat-label">Kepala Keluarga</div>
    </div>
    <div class="stat-item reveal stagger-3">
        <div class="stat-number">3</div>
        <div class="stat-label">Destinasi Wisata</div>
    </div>
    <div class="stat-item reveal stagger-4">
        <div class="stat-number">2,026</div>
        <div class="stat-label">Tahun Anggaran</div>
    </div>
</div>

<!-- ═══════════════════════════════════════════════════════
     2. SEJARAH DESA (Termasuk Gambar Kepemimpinan dari Tahun ke Tahun)
     ═══════════════════════════════════════════════════════ -->
<section class="section" id="sejarah" style="background: var(--white);">
    <div class="container">
        <div class="section-header reveal">
            <div class="overline">Jejak Langkah & Sejarah</div>
            <h2>Sejarah & Perjalanan Kepemimpinan Desa Padaleu</h2>
            <p>Sejak pertama kali berdiri di pesisir Lembo, Desa Padaleu telah tumbuh menjadi desa mandiri yang kaya akan hasil bumi dan potensi maritim melalui kepemimpinan yang berkesinambungan.</p>
            <div class="divider"></div>
        </div>

        <div style="max-width: 800px; margin: 0 auto 3.5rem; text-align: center;" class="reveal">
            <p style="color: var(--gray-600); font-size: 0.95rem; line-height: 1.8;">
                Desa Padaleu dibentuk melalui semangat gotong royong para tetua adat dan tokoh masyarakat pesisir Konawe Utara. Nama <strong>"Padaleu"</strong> diambil dari perpaduan kata lokal yang bermakna <em>"Hamparan Hijau yang Subur dan Damai"</em>. Berikut adalah jejak kepemimpinan Kepala Desa Padaleu dari masa ke masa:
            </p>
        </div>

        <!-- Linimasa Kepemimpinan dari Tahun ke Tahun -->
        <div class="section-header reveal" style="margin-bottom: 2rem;">
            <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.15em; color: var(--red-accent);">Kepemimpinan dari Tahun ke Tahun</span>
        </div>

        <div class="timeline-grid">
            <!-- Kepemimpinan 1 -->
            <div class="timeline-card reveal stagger-1">
                <div class="timeline-img-wrap">
                    <div class="timeline-badge">Periode I</div>
                </div>
                <div class="timeline-body">
                    <div class="timeline-period">1998 — 2006</div>
                    <h3 class="timeline-name">Noname</h3>
                    <p class="timeline-desc">Kepala Desa Pertama. Peletak fondasi administrasi wilayah desa, pembangunan Balai Desa pertama, dan pembukaan jalan rintisan antardusun.</p>
                </div>
            </div>

            <!-- Kepemimpinan 2 -->
            <div class="timeline-card reveal stagger-2">
                <div class="timeline-img-wrap">
                    <div class="timeline-badge">Periode II</div>
                </div>
                <div class="timeline-body">
                    <div class="timeline-period">2006 — 2014</div>
                    <h3 class="timeline-name">Noname</h3>
                    <p class="timeline-desc">Fokus pada penguatan sektor perkebunan cengkeh dan kelapa, perbaikan jalan desa beraspal, serta pendirian posyandu desa.</p>
                </div>
            </div>

            <!-- Kepemimpinan 3 -->
            <div class="timeline-card reveal stagger-3">
                <div class="timeline-img-wrap">
                    <div class="timeline-badge">Periode III</div>
                </div>
                <div class="timeline-body">
                    <div class="timeline-period">2014 — 2021</div>
                    <h3 class="timeline-name">Noname</h3>
                    <p class="timeline-desc">Pembangunan jaringan elektrifikasi terpadu, pembuatan dermaga tambatan perahu nelayan, dan pembentukan BUMDes Padaleu Sejahtera.</p>
                </div>
            </div>

            <!-- Kepemimpinan 4 (Petahana) -->
            <div class="timeline-card reveal stagger-4">
                <div class="timeline-img-wrap">
                    <div class="timeline-badge" style="background: var(--teal-dark);">Petahana</div>
                </div>
                <div class="timeline-body">
                    <div class="timeline-period">2021 — Sekarang</div>
                    <h3 class="timeline-name">Masiudin, S.Si.</h3>
                    <p class="timeline-desc">Transformasi digitalisasi desa, pengembangan Ekowisata Mangrove Padaleu, transparansi APBDes, serta keterbukaan informasi publik.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     3. STRUKTUR DESA (Aparatur Pemerintahan)
     ═══════════════════════════════════════════════════════ -->
<section class="section" id="struktur" style="background: var(--gray-50);">
    <div class="container">
        <div class="section-header reveal">
            <div class="overline">Pemerintahan Desa</div>
            <h2>Struktur Organisasi & Aparatur Desa</h2>
            <p>Susunan aparatur Pemerintah Desa Padaleu yang bertugas melayani kebutuhan dan aspirasi masyarakat.</p>
            <div class="divider"></div>
        </div>

        <div class="aparatur-grid">
            <div class="aparatur-card reveal stagger-1">
                <div class="aparatur-avatar">
                    <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Suprianto, S.Sos.">
                </div>
                <div class="aparatur-role">Kepala Desa</div>
                <h3 class="aparatur-name">Suprianto, S.Sos.</h3>
            </div>

            <div class="aparatur-card reveal stagger-2">
                <div class="aparatur-avatar">
                    <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Ahmad Fauzi, S.IP.">
                </div>
                <div class="aparatur-role">Sekretaris Desa</div>
                <h3 class="aparatur-name">Ahmad Fauzi, S.IP.</h3>
            </div>

            <div class="aparatur-card reveal stagger-3">
                <div class="aparatur-avatar">
                    <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Nurhayati, S.E.">
                </div>
                <div class="aparatur-role">Kaur Keuangan</div>
                <h3 class="aparatur-name">Nurhayati, S.E.</h3>
            </div>

            <div class="aparatur-card reveal stagger-4">
                <div class="aparatur-avatar">
                    <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Rahmat Hidayat">
                </div>
                <div class="aparatur-role">Kaur Perencanaan</div>
                <h3 class="aparatur-name">Rahmat Hidayat</h3>
            </div>

            <div class="aparatur-card reveal stagger-1">
                <div class="aparatur-avatar">
                    <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Siti Badriah">
                </div>
                <div class="aparatur-role">Kasi Pemerintahan</div>
                <h3 class="aparatur-name">Siti Badriah</h3>
            </div>

            <div class="aparatur-card reveal stagger-2">
                <div class="aparatur-avatar">
                    <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Bambang Sutrisno">
                </div>
                <div class="aparatur-role">Kasi Kesejahteraan</div>
                <h3 class="aparatur-name">Bambang Sutrisno</h3>
            </div>

            <div class="aparatur-card reveal stagger-3">
                <div class="aparatur-avatar">
                    <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Hasanuddin">
                </div>
                <div class="aparatur-role">Kepala Dusun I</div>
                <h3 class="aparatur-name">Hasanuddin</h3>
            </div>

            <div class="aparatur-card reveal stagger-4">
                <div class="aparatur-avatar">
                    <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Darmawan">
                </div>
                <div class="aparatur-role">Kepala Dusun II</div>
                <h3 class="aparatur-name">Darmawan</h3>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     4. SAMBUTAN KEPALA DESA
     ═══════════════════════════════════════════════════════ -->
<section class="section" id="sambutan" style="background: var(--white);">
    <div class="container">
        <div class="welcome-grid">
            <div class="welcome-img-wrap reveal-left">
                <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Kepala Desa Padaleu" style="object-fit: contain; background: #f5f5f4; padding: 2rem;">
                <div class="caption-bar">
                    <h4>Masiudin, S.Si.</h4>
                    <span>Kepala Desa Padaleu (2021—Sekarang)</span>
                </div>
            </div>
            <div class="welcome-text reveal-right">
                <div class="overline">Sambutan Kepala Desa</div>
                <h2>Membangun Desa Digital Melalui Transparansi & Keterbukaan</h2>
                <p>"Selamat datang di portal resmi Desa Padaleu. Melalui platform digital ini, kami berupaya mendekatkan pelayanan pemerintahan desa kepada seluruh lapisan masyarakat. Website ini merupakan pilar keterbukaan anggaran, promosi komoditas unggulan, pariwisata terpadu, serta sistem koordinasi peta digital desa."</p>
                <p>"Mari bersama-sama bersinergi mewujudkan pembangunan desa yang transparan, modern, dan membawa kesejahteraan bagi segenap warga Lembo, Konawe Utara."</p>
                <a href="#kontak-sec" class="link-arrow">
                    Kirim Aspirasi & Hubungi Kami
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     5. KOMODITAS UNGGULAN (Khusus Cengkeh Organik)
     ═══════════════════════════════════════════════════════ -->
<section class="section" id="komoditas" style="background: var(--gray-50);">
    <div class="container">
        <div class="section-header reveal">
            <div class="overline">Potensi Utama Desa</div>
            <h2>Komoditas Unggulan: Cengkeh Organik Padaleu</h2>
            <p>Cengkeh merupakan satu-satunya komoditas perkebunan utama yang menjadi pilar utama perekonomian dan kebanggaan warga Desa Padaleu, Kecamatan Lembo.</p>
            <div class="divider"></div>
        </div>

        <!-- Cengkeh Hero Feature Spotlight -->
        <div class="welcome-grid reveal" style="background: var(--white); border: 1px solid var(--gray-200); padding: 2rem; border-radius: 6px; margin-bottom: 2.5rem;">
            <div class="welcome-img-wrap" style="height: 380px;">
                <img src="{{ asset('imports/Cengkeh.jpeg') }}" alt="Perkebunan Cengkeh Organik Padaleu" style="height: 100%;">
                <div class="caption-bar">
                    <h4>Cengkeh Organik Konawe Utara</h4>
                    <span>Komoditas Perkebunan Utama Desa</span>
                </div>
            </div>
            <div class="welcome-text">
                <div class="overline" style="color: var(--red-accent);">Hasil Bumi Utama</div>
                <h2>Cengkeh Kualitas Ekspor Khas Lereng Bukit Lembo</h2>
                <p>Perkebunan cengkeh di Desa Padaleu terhampar luas di sepanjang lereng perbukitan Lembo yang subur. Dipetik secara tradisional oleh para petani lokal dan dikeringkan di bawah sinar matahari alami untuk menjaga kualitas aroma dan kadar eugenol terbaik.</p>
                <p>Panen cengkeh di Desa Padaleu merupakan penggerak roda ekonomi terbesar desa, yang disyukuri tiap tahun melalui tradisi pesta adat panen rempah cengkeh.</p>
            </div>
        </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     6. BERITA & PENGUMUMAN DESA
     ═══════════════════════════════════════════════════════ -->
<section class="section" id="berita" style="background: var(--white);">
    <div class="container-wide">
        <div class="section-header reveal">
            <div class="overline">Kabar Terkini</div>
            <h2>Berita & Kegiatan Desa Padaleu</h2>
            <p>Pengumuman resmi, kegiatan gotong royong, dan kabar perkembangan pembangunan desa terbaru.</p>
            <div class="divider"></div>
        </div>

        <div class="card-grid">
            <!-- Berita 1 -->
            <div class="card reveal stagger-1" onclick="window.location='{{ route('berita.index') }}'">
                <div class="card-img-wrap">
                    <img src="{{ asset('imports/Pembahasan_Proker_Bersama_Aparat-1.jpeg') }}" alt="Pembahasan Proker">
                    <div class="card-badge">Pembangunan</div>
                </div>
                <div class="card-body">
                    <div class="location">28 Juli 2026 &middot; Oleh Admin Desa</div>
                    <h3>Musyawarah Pembangunan Desa & Rencana Program Kerja Terpadu</h3>
                    <p>Pemerintah Desa Padaleu bersama aparat dan tokoh masyarakat menggelar musyawarah desa pembahasan program kerja prioritas.</p>
                    <a href="{{ route('berita.index') }}" class="read-more">Baca Berita →</a>
                </div>
            </div>

            <!-- Berita 2 -->
            <div class="card reveal stagger-2" onclick="window.location='{{ route('berita.index') }}'">
                <div class="card-img-wrap">
                    <img src="{{ asset('imports/Cengkeh.jpeg') }}" alt="Panen Cengkeh">
                    <div class="card-badge">Kegiatan Warga</div>
                </div>
                <div class="card-body">
                    <div class="location">15 Juli 2026 &middot; Oleh Poktan Desa</div>
                    <h3>Persiapan Pesta Adat Panen Rempah Cengkeh Raya 2026</h3>
                    <p>Warga dusun bersiap menyambut syukuran tahunan panen cengkeh melimpah dengan tarian adat tradisional khas Konawe Utara.</p>
                    <a href="{{ route('berita.index') }}" class="read-more">Baca Berita →</a>
                </div>
            </div>

            <!-- Berita 3 -->
            <div class="card reveal stagger-3" onclick="window.location='{{ route('berita.index') }}'">
                <div class="card-img-wrap">
                    <img src="{{ asset('imports/Penerimaan_KKN_Aparat-1.jpeg') }}" alt="Penerimaan KKN">
                    <div class="card-badge">Pemberdayaan</div>
                </div>
                <div class="card-body">
                    <div class="location">02 Juli 2026 &middot; Sekretariat Desa</div>
                    <h3>Penerimaan Mahasiswa KKN & Program Kerja Kolaborasi Desa</h3>
                    <p>Penyambutan mahasiswa KKN oleh Pemerintah Desa Padaleu guna mendukung program digitalisasi desa dan pemetaan potensi wisata.</p>
                    <a href="{{ route('berita.index') }}" class="read-more">Baca Berita →</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     7. GALERI FOTO VISUAL DESA
     ═══════════════════════════════════════════════════════ -->
<section class="section" id="galeri" style="background: var(--gray-50);">
    <div class="container-wide">
        <div class="section-header reveal">
            <div class="overline">Galeri Visual</div>
            <h2>Pesona Desa dalam Bingkai Foto</h2>
            <p>Koleksi dokumentasi keindahan alam, kegiatan masyarakat, dan potensi Desa Padaleu.</p>
            <div class="divider"></div>
        </div>

        <div class="gallery-grid reveal-scale">
            <div class="gallery-item">
                <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Foto Galeri 1" style="object-fit: contain; background: #e7e5e4; padding: 2rem;">
                <div class="gallery-caption">
                    <h4>Dokumentasi Desa</h4>
                    <span>Slot Foto Galeri</span>
                </div>
            </div>
            <div class="gallery-item reveal stagger-1">
                <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Foto Galeri 2" style="object-fit: contain; background: #e7e5e4; padding: 2rem;">
                <div class="gallery-caption">
                    <h4>Kegiatan Warga</h4>
                    <span>Slot Foto Galeri</span>
                </div>
            </div>
            <div class="gallery-item reveal stagger-2">
                <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Foto Galeri 3" style="object-fit: contain; background: #e7e5e4; padding: 2rem;">
                <div class="gallery-caption">
                    <h4>Potensi Desa</h4>
                    <span>Slot Foto Galeri</span>
                </div>
            </div>
            <div class="gallery-item reveal stagger-3">
                <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Foto Galeri 4" style="object-fit: contain; background: #e7e5e4; padding: 2rem;">
                <div class="gallery-caption">
                    <h4>Pembangunan Desa</h4>
                    <span>Slot Foto Galeri</span>
                </div>
            </div>
            <div class="gallery-item reveal stagger-4">
                <img src="{{ asset('imports/avatar_default.jpg') }}" alt="Foto Galeri 5" style="object-fit: contain; background: #e7e5e4; padding: 2rem;">
                <div class="gallery-caption">
                    <h4>Pemerintahan Desa</h4>
                    <span>Slot Foto Galeri</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     8. PETA DIGITAL GIS DESA
     ═══════════════════════════════════════════════════════ -->
<section class="section" id="peta-sec" style="background: var(--white);">
    <div class="container">
        <div class="section-header reveal">
            <div class="overline">Peta Geografis Interaktif</div>
            <h2>Peta Digital GIS Desa Padaleu</h2>
            <p>Jelajahi lokasi fisik kantor desa, tempat wisata, dermaga, pos kesehatan, dan sarana publik desa secara langsung.</p>
            <div class="divider"></div>
        </div>

        <div class="map-wrapper reveal">
            <div id="home-map" style="width: 100%; height: 100%;"></div>
        </div>

        <div style="text-align: center; margin-top: 1.5rem;" class="reveal">
            <a href="https://www.google.com/maps/place/Desa+padaleu/@-3.7515053,122.3401347,642m/data=!3m1!1e3!4m6!3m5!1s0x2d9855761937d85b:0x26ace3d8a9a9e8ee!8m2!3d-3.7521192!4d122.3402454!16s%2Fg%2F11cs6ktnzy" target="_blank" class="btn-primary" style="display: inline-flex; align-items: center; gap: 0.5rem; background: #e04336;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Buka Lokasi Desa Padaleu di Google Maps ↗</span>
            </a>
        </div>
    </div>
</section>

<!-- ═══════════════════════════════════════════════════════
     9. KONTAK DESA & FORM ASPIRASI
     ═══════════════════════════════════════════════════════ -->
<section class="cta-section" id="kontak-sec">
    <div class="container">
        <div class="reveal">
            <h2 class="font-serif">Hubungi Pemerintah Desa Padaleu</h2>
            <p>Silakan sampaikan pertanyaan, aspirasi warga, atau koordinasi kunjungan wisata melalui layanan kontak di bawah ini.</p>
        </div>

        <div class="contact-grid reveal">
            <!-- Info Kontak -->
            <div style="background: var(--white); padding: 2.5rem; border: 1px solid var(--gray-200); border-radius: 4px;">
                <h3 style="font-family:'Recoleta', 'Playfair Display', serif; font-size: 1.4rem; color: var(--gray-800); margin-bottom: 1.5rem;">Kantor Desa Padaleu</h3>
                
                <div style="display: flex; gap: 1rem; margin-bottom: 1.2rem; font-size: 0.9rem; color: var(--gray-600);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" style="flex-shrink:0;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    <div><strong>Alamat:</strong><br>Jl. Trans Sulawesi, Desa Padaleu, Kec. Lembo, Kab. Konawe Utara, Sulawesi Tenggara 93354</div>
                </div>

                <div style="display: flex; gap: 1rem; margin-bottom: 1.2rem; font-size: 0.9rem; color: var(--gray-600);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" style="flex-shrink:0;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <div><strong>Telepon / WhatsApp:</strong><br>+62 812-4455-6677 (Kantor Desa)</div>
                </div>

                <div style="display: flex; gap: 1rem; margin-bottom: 1.2rem; font-size: 0.9rem; color: var(--gray-600);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" style="flex-shrink:0;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    <div><strong>Email Resmi:</strong><br>desa.padaleu@konaweutarakab.go.id</div>
                </div>

                <div style="display: flex; gap: 1rem; font-size: 0.9rem; color: var(--gray-600);">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" stroke-width="2" style="flex-shrink:0;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <div><strong>Jam Pelayanan Publik:</strong><br>Senin — Jumat: 08:00 — 16:00 WITA</div>
                </div>
            </div>

            <!-- Form Pesan Aspirasi -->
            <div style="background: var(--white); padding: 2.5rem; border: 1px solid var(--gray-200); border-radius: 4px;">
                <h3 style="font-family:'Recoleta', 'Playfair Display', serif; font-size: 1.4rem; color: var(--gray-800); margin-bottom: 1.5rem;">Kirim Pesan / Aspirasi</h3>
                
                <form onsubmit="alert('Terima kasih! Pesan/Aspirasi Anda telah terikirim ke Pemerintah Desa Padaleu.'); return false;">
                    <div class="form-group">
                        <label>Nama Lengkap</label>
                        <input type="text" class="form-control" placeholder="Masukkan nama Anda" required>
                    </div>

                    <div class="form-group">
                        <label>Nomor HP / WhatsApp</label>
                        <input type="tel" class="form-control" placeholder="08xxxxxxxxxx" required>
                    </div>

                    <div class="form-group">
                        <label>Pesan / Aspirasi</label>
                        <textarea class="form-control" rows="4" placeholder="Tuliskan pesan atau aspirasi Anda untuk desa..." required></textarea>
                    </div>

                    <button type="submit" class="btn-primary" style="width: 100%; text-align: center; cursor: pointer;">Kirim Pesan Sekarang</button>
                </form>
            </div>
        </div>
    </div>
</section>

@endsection

@section('scripts')
<script>
(function() {
    // Initialize Leaflet Map on Landing Page with exact Google Maps coordinates (-3.7521192, 122.3402454)
    const mapElement = document.getElementById('home-map');
    if (mapElement) {
        const padaleuLat = -3.7521192;
        const padaleuLng = 122.3402454;
        const map = L.map('home-map').setView([padaleuLat, padaleuLng], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap contributors | Desa Padaleu GIS'
        }).addTo(map);

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
        ];

        markers.forEach(m => {
            const popupContent = `
                <div style="padding:0.4rem;">
                    <span style="font-size:0.6rem;font-weight:700;color:#c0392b;text-transform:uppercase;">${m.category}</span>
                    <h4 style="margin:0.2rem 0;font-size:0.95rem;color:#1a4a4a;">${m.title}</h4>
                    <p style="margin:0;font-size:0.78rem;color:#57534e;line-height:1.4;">${m.desc}</p>
                </div>
            `;
            L.marker([m.lat, m.lng]).addTo(map).bindPopup(popupContent);
        });
    }
})();
</script>
@endsection
