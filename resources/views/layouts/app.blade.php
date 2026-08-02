<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desa Padaleu - @yield('title', 'Portal Desa & Pariwisata')</title>
    <meta name="description" content="Website resmi Desa Padaleu, Kecamatan Lembo, Kabupaten Konawe Utara. Portal pariwisata, profil desa, dan sistem informasi terpadu.">

    <!-- Google & Custom Fonts (Recoleta & Inter) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/recoleta" rel="stylesheet">

    <!-- Leaflet.js CDN -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <style>
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
            --teal-dark: #1a4a4a;
            --teal: #2a6b6b;
            --teal-light: #3a8b8b;
            --red-accent: #c0392b;
            --red-hover: #a93226;
            --cream: #f5f2ed;
            --white: #ffffff;
            --gray-50: #fafaf9;
            --gray-100: #f5f5f4;
            --gray-200: #e7e5e4;
            --gray-300: #d6d3d1;
            --gray-400: #a8a29e;
            --gray-500: #78716c;
            --gray-600: #57534e;
            --gray-700: #44403c;
            --gray-800: #292524;
            --gray-900: #1c1917;
        }

        html { scroll-behavior: smooth; }

        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: var(--gray-800);
            background: var(--white);
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
        }

        .font-serif { font-family: 'Recoleta', 'Playfair Display', Georgia, serif; }

        /* ══════════════════════════════════════════════════════
           SCROLL REVEAL ANIMATION SYSTEM
           ══════════════════════════════════════════════════════ */
        .reveal {
            opacity: 0;
            transform: translateY(60px);
            transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .reveal-left {
            opacity: 0;
            transform: translateX(-80px);
            transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-left.visible {
            opacity: 1;
            transform: translateX(0);
        }
        .reveal-right {
            opacity: 0;
            transform: translateX(80px);
            transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-right.visible {
            opacity: 1;
            transform: translateX(0);
        }
        .reveal-scale {
            opacity: 0;
            transform: scale(0.85);
            transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
                        transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-scale.visible {
            opacity: 1;
            transform: scale(1);
        }
        /* Stagger children delays */
        .stagger-1 { transition-delay: 0.1s !important; }
        .stagger-2 { transition-delay: 0.2s !important; }
        .stagger-3 { transition-delay: 0.3s !important; }
        .stagger-4 { transition-delay: 0.4s !important; }
        .stagger-5 { transition-delay: 0.5s !important; }

        /* ══════════════════════════════════════════════════════
           TOP BAR (Desa Padaleu - Konawe Utara)
           ══════════════════════════════════════════════════════ */
        .topbar {
            background: #004851;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0;
            height: 60px;
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 100;
            transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .topbar.scrolled {
            box-shadow: 0 4px 20px rgba(0,0,0,0.18);
        }

        .topbar-left {
            display: flex;
            align-items: center;
            height: 100%;
        }
        .topbar-logo-box {
            display: flex;
            align-items: center;
            padding: 0 2rem;
            height: 100%;
            text-decoration: none;
            color: #ffffff;
        }
        .topbar-logo-img {
            height: 40px;
            width: auto;
            object-fit: contain;
            margin-right: 0.85rem;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }
        .topbar-logo-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        .topbar-logo-text {
            font-family: 'Recoleta', 'Playfair Display', serif;
            font-weight: 700;
            font-size: 1.25rem;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            line-height: 1;
            position: relative;
            padding-bottom: 2px;
            border-bottom: 1.5px solid rgba(255,255,255,0.85);
        }
        .topbar-logo-sub {
            font-size: 0.52rem;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            opacity: 0.85;
            display: block;
            margin-top: 3px;
        }
        .topbar-logo-star {
            color: #e04336;
            font-size: 1rem;
            vertical-align: super;
            line-height: 0;
            margin-left: 2px;
        }

        .topbar-right-info {
            display: flex;
            align-items: center;
            padding-right: 2rem;
            color: rgba(255,255,255,0.85);
            font-size: 0.78rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
        }

        /* ══════════════════════════════════════════════════════
           SECONDARY NAV (Mürren Clean Serif Subnav)
           ══════════════════════════════════════════════════════ */
        .subnav {
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            position: fixed;
            top: 60px;
            left: 0; right: 0;
            z-index: 99;
            height: 54px;
            box-shadow: 0 1px 4px rgba(0,0,0,0.05);
            border-bottom: 1px solid #eaeaea;
            overflow-x: auto;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
        }
        .subnav::-webkit-scrollbar { display: none; }
        .subnav.scrolled { box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
        .subnav a {
            text-decoration: none;
            color: #004851;
            font-family: 'Recoleta', 'Playfair Display', serif;
            font-size: 1.1rem;
            font-weight: 600;
            padding: 0 1.8rem;
            height: 100%;
            display: inline-flex;
            align-items: center;
            transition: color 0.2s;
            letter-spacing: 0.01em;
            border: none;
        }
        .subnav a:hover { color: #e04336; }
        .subnav a.active {
            color: #e04336;
            font-weight: 600;
        }

        /* ══════════════════════════════════════════════════════
           HERO SECTION — Full Viewport
           ══════════════════════════════════════════════════════ */
        .hero {
            position: relative;
            height: 100vh;
            min-height: 600px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .hero-img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            will-change: transform;
            transition: transform 0.1s linear;
        }
        .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                180deg,
                rgba(26,74,74,0.35) 0%,
                rgba(0,0,0,0.15) 40%,
                rgba(0,0,0,0.55) 100%
            );
        }
        .hero-content {
            position: relative;
            z-index: 2;
            text-align: center;
            color: white;
            animation: heroFadeIn 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes heroFadeIn {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .hero-overline {
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            opacity: 0.85;
            margin-bottom: 1rem;
        }
        .hero-title {
            font-family: 'Recoleta', 'Playfair Display', serif;
            font-size: clamp(3rem, 7vw, 6rem);
            font-weight: 400;
            letter-spacing: 0.02em;
            text-shadow: 0 4px 40px rgba(0,0,0,0.3);
            line-height: 1.05;
        }
        .hero-subtitle {
            font-size: 1rem;
            font-weight: 300;
            margin-top: 1.2rem;
            opacity: 0.85;
            letter-spacing: 0.04em;
        }
        .hero-scroll-hint {
            position: absolute;
            bottom: 3rem;
            left: 50%;
            transform: translateX(-50%);
            z-index: 3;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            animation: scrollBounce 2s ease-in-out infinite;
            cursor: pointer;
            text-decoration: none;
        }
        .hero-scroll-hint span {
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            opacity: 0.7;
        }
        @keyframes scrollBounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(8px); }
        }

        /* ══════════════════════════════════════════════════════
           SECTIONS
           ══════════════════════════════════════════════════════ */
        .section { padding: 6rem 2rem; }
        .section-header { text-align: center; margin-bottom: 4rem; }
        .section-header .overline {
            font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
            letter-spacing: 0.25em; color: var(--teal); margin-bottom: 0.85rem;
        }
        .section-header h2 {
            font-family: 'Recoleta', 'Playfair Display', serif;
            font-size: clamp(1.8rem, 3.5vw, 2.8rem);
            font-weight: 500; color: var(--gray-800);
        }
        .section-header p {
            color: var(--gray-500); font-size: 0.95rem; max-width: 600px;
            margin: 1rem auto 0; line-height: 1.7;
        }
        .section-header .divider {
            width: 60px; height: 3px; background: var(--teal);
            margin: 1.2rem auto 0;
        }
        .container { max-width: 1200px; margin: 0 auto; }
        .container-wide { max-width: 1400px; margin: 0 auto; padding: 0 2rem; }

        /* ══════════════════════════════════════════════════════
           STATS BAR
           ══════════════════════════════════════════════════════ */
        .stats-bar {
            display: grid; grid-template-columns: repeat(4, 1fr);
            background: var(--teal-dark); color: white;
        }
        .stat-item {
            text-align: center; padding: 3rem 1.5rem;
            border-right: 1px solid rgba(255,255,255,0.08);
        }
        .stat-item:last-child { border-right: none; }
        .stat-number {
            font-family: 'Recoleta', 'Playfair Display', serif;
            font-size: 2.8rem; font-weight: 700;
        }
        .stat-label {
            font-size: 0.68rem; text-transform: uppercase;
            letter-spacing: 0.18em; opacity: 0.6; margin-top: 0.4rem;
        }

        /* ══════════════════════════════════════════════════════
           SEJARAH & TIMELINE KEPEMIMPINAN
           ══════════════════════════════════════════════════════ */
        .timeline-grid {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 1.8rem; margin-top: 3rem;
        }
        .timeline-card {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: 6px;
            overflow: hidden;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .timeline-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.08);
            border-color: var(--teal-light);
        }
        .timeline-img-wrap {
            position: relative; height: 220px; overflow: hidden;
            background: var(--gray-100);
        }
        .timeline-img-wrap img {
            width: 100%; height: 100%; object-fit: cover;
            transition: transform 0.5s ease;
        }
        .timeline-card:hover .timeline-img-wrap img { transform: scale(1.06); }
        .timeline-badge {
            position: absolute; top: 1rem; right: 1rem;
            background: var(--red-accent); color: white;
            font-size: 0.65rem; font-weight: 700; padding: 0.3rem 0.8rem;
            border-radius: 3px; letter-spacing: 0.05em;
        }
        .timeline-body { padding: 1.5rem; }
        .timeline-period {
            font-size: 0.72rem; font-weight: 700; color: var(--teal);
            text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.3rem;
        }
        .timeline-name {
            font-family: 'Recoleta', 'Playfair Display', serif;
            font-size: 1.2rem; font-weight: 600; color: var(--gray-800);
            margin-bottom: 0.6rem;
        }
        .timeline-desc {
            font-size: 0.82rem; color: var(--gray-500); line-height: 1.6;
        }

        /* ══════════════════════════════════════════════════════
           STRUKTUR DESA (Aparatur Cards)
           ══════════════════════════════════════════════════════ */
        .aparatur-grid {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 1.8rem; margin-top: 3rem;
        }
        .aparatur-card {
            background: var(--white);
            border: 1px solid var(--gray-200);
            text-align: center; padding: 2rem 1.5rem;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .aparatur-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 35px rgba(0,0,0,0.06);
            border-color: var(--teal);
        }
        .aparatur-avatar {
            width: 100px; height: 100px; border-radius: 50%;
            margin: 0 auto 1.2rem; overflow: hidden;
            border: 3px solid var(--cream);
            box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }
        .aparatur-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .aparatur-role {
            font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
            letter-spacing: 0.12em; color: var(--teal); margin-bottom: 0.3rem;
        }
        .aparatur-name {
            font-family: 'Recoleta', 'Playfair Display', serif;
            font-size: 1.1rem; font-weight: 600; color: var(--gray-800);
        }

        /* ══════════════════════════════════════════════════════
           KOMODITAS UNGGULAN (Grid Cards)
           ══════════════════════════════════════════════════════ */
        .komoditas-grid {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.8rem; margin-top: 3rem;
        }
        .komoditas-card {
            background: var(--white);
            border-radius: 4px; overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.04);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .komoditas-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        .komoditas-img-wrap {
            position: relative; height: 200px; overflow: hidden;
        }
        .komoditas-img-wrap img {
            width: 100%; height: 100%; object-fit: cover;
            transition: transform 0.5s ease;
        }
        .komoditas-card:hover .komoditas-img-wrap img { transform: scale(1.08); }
        .komoditas-body { padding: 1.5rem; }
        .komoditas-tag {
            font-size: 0.65rem; font-weight: 700; text-transform: uppercase;
            letter-spacing: 0.12em; color: var(--red-accent); margin-bottom: 0.4rem;
        }
        .komoditas-title {
            font-family: 'Recoleta', 'Playfair Display', serif;
            font-size: 1.25rem; font-weight: 600; color: var(--gray-800); margin-bottom: 0.6rem;
        }
        .komoditas-desc {
            font-size: 0.85rem; color: var(--gray-500); line-height: 1.6;
        }

        /* ══════════════════════════════════════════════════════
           SAMBUTAN GRID
           ══════════════════════════════════════════════════════ */
        .welcome-grid {
            display: grid; grid-template-columns: 1fr 1.2fr;
            gap: 5rem; align-items: center;
        }
        .welcome-img-wrap { position: relative; overflow: hidden; }
        .welcome-img-wrap img {
            width: 100%; height: 520px; object-fit: cover;
            transition: transform 0.6s ease;
        }
        .welcome-img-wrap:hover img { transform: scale(1.03); }
        .welcome-img-wrap .caption-bar {
            position: absolute; bottom: 0; left: 0; right: 0;
            background: var(--teal-dark); color: white; padding: 1rem 1.5rem;
        }
        .welcome-img-wrap .caption-bar h4 { font-weight: 700; font-size: 0.9rem; }
        .welcome-img-wrap .caption-bar span {
            font-size: 0.68rem; opacity: 0.65; text-transform: uppercase; letter-spacing: 0.12em;
        }
        .welcome-text .overline {
            font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
            letter-spacing: 0.25em; color: var(--teal); margin-bottom: 0.85rem;
        }
        .welcome-text h2 {
            font-family: 'Recoleta', 'Playfair Display', serif;
            font-size: 2.2rem; font-weight: 500; color: var(--gray-800);
            line-height: 1.25; margin-bottom: 1.5rem;
        }
        .welcome-text p {
            color: var(--gray-500); font-size: 0.95rem; line-height: 1.85; margin-bottom: 1rem;
        }
        .link-arrow {
            display: inline-flex; align-items: center; gap: 0.5rem;
            color: var(--teal); font-weight: 600; font-size: 0.85rem;
            text-decoration: none; margin-top: 1.2rem;
            transition: gap 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .link-arrow:hover { gap: 0.9rem; }

        /* ══════════════════════════════════════════════════════
           CARD GRID & BERITA
           ══════════════════════════════════════════════════════ */
        .card-grid {
            display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
            gap: 1.8rem;
        }
        .card {
            background: var(--white); overflow: hidden;
            transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
                        box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
            cursor: pointer;
        }
        .card:hover {
            transform: translateY(-6px);
            box-shadow: 0 25px 50px rgba(0,0,0,0.1);
        }
        .card-img-wrap { position: relative; height: 240px; overflow: hidden; }
        .card-img-wrap img {
            width: 100%; height: 100%; object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .card:hover .card-img-wrap img { transform: scale(1.08); }
        .card-badge {
            position: absolute; top: 1rem; left: 1rem;
            background: var(--teal-dark); color: white;
            font-size: 0.62rem; font-weight: 700; text-transform: uppercase;
            letter-spacing: 0.12em; padding: 0.35rem 0.9rem;
        }
        .card-body { padding: 1.6rem; }
        .card-body .location {
            font-size: 0.68rem; color: var(--gray-400);
            text-transform: uppercase; letter-spacing: 0.12em; font-weight: 600;
        }
        .card-body h3 {
            font-family: 'Recoleta', 'Playfair Display', serif;
            font-size: 1.25rem; font-weight: 600; color: var(--gray-800);
            margin: 0.5rem 0; line-height: 1.3;
        }
        .card-body p {
            font-size: 0.85rem; color: var(--gray-500); line-height: 1.65;
            display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
        }

        /* ══════════════════════════════════════════════════════
           PARALLAX QUOTE
           ══════════════════════════════════════════════════════ */
        .parallax-section {
            position: relative; height: 45vh; min-height: 320px;
            overflow: hidden; display: flex; align-items: center; justify-content: center;
        }
        .parallax-bg {
            position: absolute; inset: -20%; width: 140%; height: 140%;
            object-fit: cover; will-change: transform;
        }
        .parallax-overlay { position: absolute; inset: 0; background: rgba(26, 74, 74, 0.72); }
        .parallax-content {
            position: relative; z-index: 2; text-align: center; color: white;
            max-width: 700px; padding: 0 2rem;
        }
        .parallax-content h2 {
            font-family: 'Recoleta', 'Playfair Display', serif; font-size: clamp(1.8rem, 3vw, 2.5rem);
            font-weight: 500; margin-bottom: 1rem;
        }
        .parallax-content p { font-size: 0.95rem; line-height: 1.8; opacity: 0.85; }

        /* ══════════════════════════════════════════════════════
           GALLERY MASONRY
           ══════════════════════════════════════════════════════ */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(2, 240px);
            gap: 0.5rem;
        }
        .gallery-item { overflow: hidden; position: relative; cursor: pointer; }
        .gallery-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
        .gallery-item img {
            width: 100%; height: 100%; object-fit: cover;
            transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .gallery-item:hover img { transform: scale(1.06); }
        .gallery-item .gallery-caption {
            position: absolute; bottom: 0; left: 0; right: 0;
            padding: 1.5rem;
            background: linear-gradient(transparent, rgba(0,0,0,0.65));
            color: white; opacity: 0; transform: translateY(10px);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .gallery-item:hover .gallery-caption { opacity: 1; transform: translateY(0); }
        .gallery-caption h4 { font-weight: 700; font-size: 0.85rem; }
        .gallery-caption span { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; opacity: 0.7; }

        /* ══════════════════════════════════════════════════════
           MAP CONTAINER
           ══════════════════════════════════════════════════════ */
        .map-wrapper {
            height: 480px; width: 100%; border-radius: 6px; overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid var(--gray-200);
        }

        /* ══════════════════════════════════════════════════════
           CTA & KONTAK FORM
           ══════════════════════════════════════════════════════ */
        .cta-section { background: var(--cream); padding: 5rem 2rem; text-align: center; }
        .btn-primary {
            display: inline-block; background: var(--teal-dark); color: white;
            padding: 1rem 2.8rem; text-decoration: none; font-weight: 700;
            font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em;
            transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
            border-radius: 3px;
        }
        .btn-primary:hover {
            background: var(--teal); transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(26,74,74,0.2);
        }

        .contact-grid {
            display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; text-align: left;
            margin-top: 3rem;
        }
        .form-group { margin-bottom: 1.2rem; }
        .form-group label {
            display: block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
            letter-spacing: 0.08em; color: var(--gray-700); margin-bottom: 0.4rem;
        }
        .form-control {
            width: 100%; padding: 0.8rem 1rem; border: 1px solid var(--gray-300);
            border-radius: 3px; font-family: inherit; font-size: 0.88rem;
            transition: border-color 0.2s;
        }
        .form-control:focus { outline: none; border-color: var(--teal); }

        /* ══════════════════════════════════════════════════════
           FOOTER
           ══════════════════════════════════════════════════════ */
        .footer { background: var(--teal-dark); color: white; padding: 5rem 2rem 2rem; }
        .footer-grid {
            display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 3rem; max-width: 1200px; margin: 0 auto;
        }
        .footer h4 {
            font-size: 0.68rem; font-weight: 700; text-transform: uppercase;
            letter-spacing: 0.18em; margin-bottom: 1.2rem; color: rgba(255,255,255,0.45);
        }
        .footer p, .footer a {
            font-size: 0.85rem; color: rgba(255,255,255,0.65);
            line-height: 1.85; text-decoration: none;
        }
        .footer a:hover { color: white; }
        .footer-bottom {
            max-width: 1200px; margin: 3rem auto 0; padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.08); text-align: center;
            font-size: 0.72rem; color: rgba(255,255,255,0.35);
        }

        /* ══════════════════════════════════════════════════════
           RESPONSIVE
           ══════════════════════════════════════════════════════ */
        @media (max-width: 1024px) {
            .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(3, 200px); }
            .gallery-item:nth-child(1) { grid-column: span 2; }
            .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 768px) {
            .welcome-grid { grid-template-columns: 1fr; gap: 2.5rem; }
            .stats-bar { grid-template-columns: repeat(2, 1fr); }
            .footer-grid { grid-template-columns: 1fr 1fr; }
            .card-grid, .timeline-grid, .aparatur-grid, .komoditas-grid { grid-template-columns: 1fr; }
            .gallery-grid { grid-template-columns: 1fr 1fr; grid-template-rows: repeat(3, 180px); }
            .subnav a { padding: 0.8rem 1rem; font-size: 0.75rem; }
            .hero { height: 100vh; }
            .topbar { padding: 0 1.2rem; }
        }

        /* ── Leaflet overrides ─────────────────────────── */
        .leaflet-popup-content-wrapper {
            border-radius: 4px !important;
            box-shadow: 0 10px 30px rgba(0,0,0,0.12) !important;
            font-family: 'Inter', sans-serif !important;
        }

        /* ── Typing Animation Cursor ─────────────────── */
        .typing-cursor {
            display: inline-block;
            width: 2.5px;
            height: 1.1em;
            background-color: #e04336;
            margin-left: 4px;
            vertical-align: middle;
            animation: blink 0.7s infinite;
        }
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

        /* ── Floating Elements (Back to Top & Quick WA) ── */
        .floating-btn-group {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            z-index: 150;
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            align-items: flex-end;
        }
        .btn-float {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            transition: transform 0.25s, box-shadow 0.25s, opacity 0.3s;
            cursor: pointer;
            border: none;
        }
        .btn-float:hover {
            transform: translateY(-4px) scale(1.08);
            box-shadow: 0 12px 30px rgba(0,0,0,0.3);
        }
        .btn-back-to-top {
            background: #004851;
            opacity: 0;
            pointer-events: none;
        }
        .btn-back-to-top.visible {
            opacity: 1;
            pointer-events: auto;
        }
        .btn-whatsapp-float {
            background: #25D366;
        }

        /* ── Scrollbar ────────────────────────────────── */
        ::-webkit-scrollbar { width: 5px; height: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(26,74,74,0.3); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(26,74,74,0.5); }
    </style>
    @yield('styles')
</head>
<body>

    <!-- ═══════════ TOP BAR (Desa Padaleu - Konawe Utara) ═══════════ -->
    <div class="topbar" id="topbar">
        <div class="topbar-left">
            <a href="{{ route('home') }}" class="topbar-logo-box">
                <img src="{{ asset('imports/Kabupaten Konawe Utara.png') }}" alt="Logo Kabupaten Konawe Utara" class="topbar-logo-img">
                <div class="topbar-logo-content">
                    <span class="topbar-logo-text">DESA PADALEU</span>
                    <span class="topbar-logo-sub">KECAMATAN Motui - KONAWE UTARA</span>
                </div>
            </a>
        </div>
        <div class="topbar-right-info">
            Selamat datang 
        </div>
    </div>

    <!-- ═══════════ SECONDARY NAV (Exact requested navbar items) ═══════════ -->
    <nav class="subnav" id="subnav">
        @if(request()->routeIs('home'))
            <a href="#hero" class="active" data-section="hero">Beranda</a>
            <a href="#sejarah" data-section="sejarah">Sejarah Desa</a>
            <a href="#struktur" data-section="struktur">Struktur Desa</a>
            <a href="#sambutan" data-section="sambutan">Sambutan</a>
            <a href="#komoditas" data-section="komoditas">Komoditas Unggulan</a>
            <a href="#berita" data-section="berita">Berita</a>
            <a href="#galeri" data-section="galeri">Galeri</a>
            <a href="#peta-sec" data-section="peta-sec">Peta Digital</a>
            <a href="#kontak-sec" data-section="kontak-sec">Kontak</a>
        @else
            <a href="{{ route('home') }}#hero">Beranda</a>
            <a href="{{ route('home') }}#sejarah">Sejarah Desa</a>
            <a href="{{ route('home') }}#struktur">Struktur Desa</a>
            <a href="{{ route('home') }}#sambutan">Sambutan</a>
            <a href="{{ route('home') }}#komoditas">Komoditas Unggulan</a>
            <a href="{{ route('home') }}#berita">Berita</a>
            <a href="{{ route('home') }}#galeri">Galeri</a>
            <a href="{{ route('home') }}#peta-sec">Peta Digital</a>
            <a href="{{ route('home') }}#kontak-sec">Kontak</a>
        @endif
    </nav>

    <!-- ═══════════ MAIN CONTENT ═══════════ -->
    <main>
        @yield('content')
    </main>

    <!-- ═══════════ FOOTER ═══════════ -->
    <footer class="footer">
        <div class="footer-grid">
            <div>
                <h4>Tentang Desa</h4>
                <p>Portal informasi pariwisata dan pemerintahan Desa Padaleu. Menyajikan transparansi, sejarah kepemimpinan, profil aparatur, peta digital, serta layanan kependudukan terpadu.</p>
            </div>
            <div>
                <h4>Navigasi</h4>
                <p>
                    <a href="{{ route('home') }}#sejarah" style="display:block">Sejarah Desa</a>
                    <a href="{{ route('home') }}#struktur" style="display:block">Struktur Desa</a>
                    <a href="{{ route('home') }}#komoditas" style="display:block">Komoditas Unggulan</a>
                    <a href="{{ route('home') }}#peta-sec" style="display:block">Peta Digital</a>
                </p>
            </div>
            <div>
                <h4>Informasi</h4>
                <p>
                    <a href="{{ route('home') }}#berita" style="display:block">Berita Desa</a>
                    <a href="{{ route('home') }}#galeri" style="display:block">Galeri Foto</a>
                    <a href="{{ route('ppid') }}" style="display:block">Dokumen PPID</a>
                    <a href="{{ route('home') }}#kontak-sec" style="display:block">Hubungi Kami</a>
                </p>
            </div>
            <div>
                <h4>Kontak</h4>
                <p>Kantor Desa Padaleu<br>Jl. Trans Sulawesi, Lembo<br>Konawe Utara, Sultra<br><br>desa.padaleu@konaweutarakab.go.id</p>
            </div>
        </div>
        <div class="footer-bottom">
            © 2026 Pemerintah Desa Padaleu, Kecamatan Lembo, Kabupaten Konawe Utara. All Rights Reserved.
        </div>
    <!-- ═══════════ FLOATING BUTTONS (Back to Top & WhatsApp) ═══════════ -->
    <div class="floating-btn-group">
        <a href="https://wa.me/6281244556677?text=Halo%20Admin%20Desa%20Padaleu,%20saya%20ingin%20bertanya" target="_blank" class="btn-float btn-whatsapp-float" title="Chat WhatsApp Desa">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </a>
        <button class="btn-float btn-back-to-top" id="btnBackToTop" title="Kembali ke Atas" onclick="window.scrollTo({top:0, behavior:'smooth'})">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
        </button>
    </div>

    <!-- ═══════════ SCROLL ANIMATION ENGINE ═══════════ -->
    <script>
    (function() {
        // ── Smooth Typewriter Animation Engine ──
        const typeEl = document.getElementById('hero-typewriter');
        if (typeEl) {
            const words = [
                "Selamat Datang di",
                "Selamat Menjelajahi",
                "Portal Informasi Resmi",
                "Surga Perkebunan Cengkeh & Pesisir"
            ];
            let wordIdx = 0;
            let charIdx = 0;
            let isDeleting = false;
            let typeSpeed = 100;

            function typeLoop() {
                const currentWord = words[wordIdx];
                if (isDeleting) {
                    typeEl.textContent = currentWord.substring(0, charIdx - 1);
                    charIdx--;
                    typeSpeed = 40;
                } else {
                    typeEl.textContent = currentWord.substring(0, charIdx + 1);
                    charIdx++;
                    typeSpeed = 90;
                }

                if (!isDeleting && charIdx === currentWord.length) {
                    typeSpeed = 2200; // Delay saat kata utuh
                    isDeleting = true;
                } else if (isDeleting && charIdx === 0) {
                    isDeleting = false;
                    wordIdx = (wordIdx + 1) % words.length;
                    typeSpeed = 450; // Jeda sebelum ketik kata berikutnya
                }

                setTimeout(typeLoop, typeSpeed);
            }
            typeLoop();
        }

        // ── Back to Top Button Scroll Observer ──
        const btnTop = document.getElementById('btnBackToTop');
        if (btnTop) {
            window.addEventListener('scroll', () => {
                btnTop.classList.toggle('visible', window.scrollY > 350);
            }, { passive: true });
        }

        // ── Scroll Reveal via Intersection Observer ──
        const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => revealObserver.observe(el));

        // ── Topbar & Subnav scroll effects ──
        const topbar = document.getElementById('topbar');
        const subnav = document.getElementById('subnav');
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            topbar.classList.toggle('scrolled', y > 80);
            subnav.classList.toggle('scrolled', y > 80);
        });

        // ── Hero parallax ──
        const heroImg = document.querySelector('.hero-img');
        if (heroImg) {
            window.addEventListener('scroll', () => {
                const y = window.scrollY;
                if (y < window.innerHeight) {
                    heroImg.style.transform = 'translateY(' + (y * 0.35) + 'px) scale(1.05)';
                }
            }, { passive: true });
        }

        // ── Active subnav link on scroll (for landing page) ──
        const sectionLinks = document.querySelectorAll('.subnav a[data-section]');
        if (sectionLinks.length > 0) {
            const sections = [];
            sectionLinks.forEach(link => {
                const sec = document.getElementById(link.dataset.section);
                if (sec) sections.push({ el: sec, link: link });
            });
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY + 220;
                let current = sections[0];
                sections.forEach(s => {
                    if (s.el && s.el.offsetTop <= scrollY) current = s;
                });
                sectionLinks.forEach(l => l.classList.remove('active'));
                if (current && current.link) current.link.classList.add('active');
            }, { passive: true });
        }

        // ── Counter animation for stat numbers ──
        const statNumbers = document.querySelectorAll('.stat-number');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.counted) {
                    entry.target.dataset.counted = 'true';
                    const raw = entry.target.textContent.replace(/,/g, '');
                    const target = parseInt(raw) || 0;
                    const duration = 1800;
                    const start = performance.now();
                    const format = (n) => n.toLocaleString('id-ID');
                    function tick(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        entry.target.textContent = format(Math.round(target * eased));
                        if (progress < 1) requestAnimationFrame(tick);
                    }
                    entry.target.textContent = '0';
                    requestAnimationFrame(tick);
                }
            });
        }, { threshold: 0.5 });
        statNumbers.forEach(el => counterObserver.observe(el));
    })();
    </script>

    @yield('scripts')
</body>
</html>
