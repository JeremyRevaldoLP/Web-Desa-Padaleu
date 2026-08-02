@extends('layouts.app')

@section('title', 'Discover')

@section('content')

<!-- ═══ HERO ═══ -->
<section class="hero" style="height: 50vh; min-height: 350px;">
    <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1800&auto=format&fit=crop&q=90" alt="Discover Padaleu" class="hero-img">
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <h1 class="hero-title">Discover</h1>
    </div>
</section>

<!-- ═══ FILTER & GRID ═══ -->
<section class="section" style="background: var(--white);">
    <div class="container-wide" style="padding: 0 2rem;">

        <div class="filter-bar" id="filter-bar">
            <button class="filter-btn active" onclick="filterItems('Semua', this)">Semua</button>
            <button class="filter-btn" onclick="filterItems('Alam', this)">Alam</button>
            <button class="filter-btn" onclick="filterItems('Budaya', this)">Budaya</button>
            <button class="filter-btn" onclick="filterItems('Kuliner', this)">Kuliner</button>
            <button class="filter-btn" onclick="filterItems('Penginapan', this)">Penginapan</button>
        </div>

        <div class="card-grid" id="discover-grid"></div>
    </div>
</section>

<!-- ═══ DETAIL MODAL ═══ -->
<div class="modal-overlay" id="modal-overlay" onclick="if(event.target===this) closeModal()">
    <div class="modal-box" style="position:relative;">
        <button class="modal-close" onclick="closeModal()">&times;</button>
        <div id="modal-body"></div>
    </div>
</div>

@endsection

@section('scripts')
<script>
const items = [
    {
        id:1, title:'Ekowisata Hutan Mangrove Padaleu', category:'Alam', location:'Pesisir Timur Desa',
        image:'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=800&auto=format&fit=crop',
        desc:'Menyusuri jembatan kayu terapung sepanjang 500 meter di tengah rimbunnya pohon bakau pusaka. Destinasi yang menenangkan jiwa sekaligus menjaga ekosistem pesisir Lembo.',
        facilities:['Jembatan Kayu Swafoto','Menara Pandang','Gazebo Istirahat','Penyewaan Perahu Tradisional'],
        hours:'07:30 - 17:30 WITA', contact:'+62 812-4455-6677 (Pokdarwis Desa)'
    },
    {
        id:2, title:'Pantai Pasir Putih Teluk Lembo', category:'Alam', location:'Kawasan Pesisir Selatan',
        image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop',
        desc:'Garis pantai pasir putih halus sepanjang 1 km dengan ombak tenang yang sangat aman untuk berenang, snorkeling, dan bersantai menikmati matahari terbenam.',
        facilities:['Penyewaan Ban Renang','Kios Kuliner Ikan Bakar','Kamar Bilas Umum','Area Camping Ground'],
        hours:'24 Jam Terbuka', contact:'+62 812-4455-6677'
    },
    {
        id:3, title:'Air Terjun Bertingkat Puncak Lembo', category:'Alam', location:'Hutan Barat Desa',
        image:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop',
        desc:'Air terjun tersembunyi dengan tiga tingkatan alami yang menawarkan kolam pemandian menyegarkan dengan air pegunungan yang jernih dan asri.',
        facilities:['Jalur Trekking Berbatu','Spot Foto Alami','Warung Makan Khas','Toilet Umum'],
        hours:'08:00 - 17:00 WITA', contact:'+62 812-8899-0011'
    },
    {
        id:4, title:'Homestay Nyaman Pesisir Indah', category:'Penginapan', location:'Dusun II Pantai',
        image:'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
        desc:'Penginapan berkonsep ramah lingkungan yang menghadap langsung ke pantai. Dikelola langsung oleh warga setempat.',
        facilities:['AC & Kamar Mandi Dalam','Sarapan Masakan Lokal','Sewa Sepeda Gratis','Wi-Fi Area'],
        hours:'Check-in: 14:00 WITA', contact:'+62 821-3344-5566'
    },
    {
        id:5, title:'Warung Kuliner Ikan Bakar Aroma Laut', category:'Kuliner', location:'Jalan Dermaga Pantai',
        image:'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop',
        desc:'Hidangan laut segar tangkapan nelayan lokal, dibakar dengan bumbu rempah kelapa tradisional khas Konawe Utara.',
        facilities:['Lesehan Pantai','Live Music Akhir Pekan','Parkiran Luas','Mushola'],
        hours:'11:00 - 22:00 WITA', contact:'+62 812-7788-9900'
    },
    {
        id:6, title:'Pesta Adat Panen Rempah Cengkeh', category:'Budaya', location:'Lapangan Utama Desa',
        image:'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&auto=format&fit=crop',
        desc:'Syukuran tahunan masyarakat atas keberhasilan panen cengkeh melimpah. Diisi tarian tradisional dan makan bersama.',
        facilities:['Panggung Pertunjukan Adat','Pasar Malam UMKM','Pameran Kerajinan Tangan'],
        hours:'Setiap Bulan September', contact:'+62 812-3456-7890'
    }
];

let currentFilter = 'Semua';

function render() {
    const grid = document.getElementById('discover-grid');
    const filtered = items.filter(i => currentFilter === 'Semua' || i.category === currentFilter);
    grid.innerHTML = filtered.map(i => `
        <div class="card" onclick="openModal(${i.id})">
            <div class="card-img-wrap">
                <img src="${i.image}" alt="${i.title}">
                <div class="card-badge">${i.category}</div>
            </div>
            <div class="card-body">
                <div class="location">${i.location}</div>
                <h3>${i.title}</h3>
                <p>${i.desc}</p>
                <span class="read-more">Lihat Detail →</span>
            </div>
        </div>
    `).join('');
}

function filterItems(cat, btn) {
    currentFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render();
}

function openModal(id) {
    const i = items.find(x => x.id === id);
    if (!i) return;
    document.getElementById('modal-body').innerHTML = `
        <img src="${i.image}" alt="${i.title}" style="width:100%;height:320px;object-fit:cover;">
        <div style="padding:2rem;">
            <span style="font-size:0.65rem;color:#1a4a4a;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;">${i.location}</span>
            <h2 style="font-family:'Recoleta', 'Playfair Display', serif;font-size:1.8rem;margin:0.5rem 0 1rem;color:#292524;">${i.title}</h2>
            <p style="color:#78716c;font-size:0.9rem;line-height:1.8;margin-bottom:1.5rem;">${i.desc}</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;border-top:1px solid #e7e5e4;padding-top:1.5rem;">
                <div>
                    <h4 style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.12em;color:#1a4a4a;margin-bottom:0.8rem;font-weight:700;">Fasilitas</h4>
                    <ul style="list-style:none;padding:0;font-size:0.85rem;color:#57534e;line-height:2;">
                        ${i.facilities.map(f => `<li>✓ ${f}</li>`).join('')}
                    </ul>
                </div>
                <div>
                    <h4 style="font-size:0.7rem;text-transform:uppercase;letter-spacing:0.12em;color:#1a4a4a;margin-bottom:0.8rem;font-weight:700;">Informasi</h4>
                    <p style="font-size:0.85rem;color:#57534e;line-height:2;">
                        <strong>Jam:</strong> ${i.hours}<br>
                        <strong>Kontak:</strong> ${i.contact}
                    </p>
                    <a href="{{ route('peta') }}" style="display:inline-block;margin-top:1rem;padding:0.7rem 1.5rem;background:#1a4a4a;color:white;text-decoration:none;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;">
                        Lihat di Peta
                    </a>
                </div>
            </div>
        </div>
    `;
    document.getElementById('modal-overlay').classList.add('show');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('show');
}

render();
</script>
@endsection
