@extends('layouts.app')

@section('title', 'Peta Digital GIS')

@section('styles')
<style>
    #map-container {
        height: 60vh;
        width: 100%;
        border-radius: 20px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
</style>
@endsection

@section('content')
<div class="max-w-7xl mx-auto px-6 py-16">
    <div class="text-center max-w-2xl mx-auto mb-12">
        <p class="text-gold text-xs font-extrabold uppercase tracking-widest mb-3">Geolokasi Terpadu</p>
        <h1 class="text-4xl md:text-5xl font-bold font-serif-title text-green-dark">Peta Batas Administrasi & POI Desa</h1>
        <div class="w-16 h-1 bg-gold mx-auto mt-4"></div>
    </div>

    <div class="grid lg:grid-cols-12 gap-8">
        <div class="lg:col-span-8">
            <div id="map-container"></div>
        </div>
        <div class="lg:col-span-4 bg-white p-6 rounded-3xl border border-green-primary/5 shadow-sm space-y-6">
            <h3 class="font-bold text-lg text-green-dark">Informasi Batas Wilayah</h3>
            <p class="text-slate-500 text-xs leading-relaxed">
                Peta interaktif di samping menunjukkan batas wilayah administratif Desa Padaleu, Kecamatan Lembo, Kabupaten Konawe Utara.
            </p>
            <div class="border-t border-slate-100 pt-4 space-y-2 text-xs">
                <p class="flex justify-between"><span class="font-bold text-slate-600">Utara:</span> <span>Desa Lembo Makmur</span></p>
                <p class="flex justify-between"><span class="font-bold text-slate-600">Selatan:</span> <span>Garis Pantai / Selat Wawonii</span></p>
                <p class="flex justify-between"><span class="font-bold text-slate-600">Timur:</span> <span>Konservasi Mangrove</span></p>
                <p class="flex justify-between"><span class="font-bold text-slate-600">Barat:</span> <span>Desa Taipa</span></p>
            </div>
            <div class="bg-green-light p-4 rounded-xl text-[10px] text-green-primary font-bold uppercase tracking-wider text-center">
                Peta Berbasis OpenStreetMap & Leaflet.js
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const map = L.map('map-container').setView([-3.7521192, 122.3402454], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors | Google Maps Data Desa Padaleu'
        }).addTo(map);

        // Draw boundary polygon around Desa Padaleu
        const bounds = L.polygon([
            [-3.7450, 122.3350],
            [-3.7420, 122.3480],
            [-3.7550, 122.3540],
            [-3.7650, 122.3420],
            [-3.7610, 122.3320]
        ], {
            color: '#d4af37',
            fillColor: '#1e4620',
            fillOpacity: 0.1,
            weight: 3
        }).addTo(map);

        bounds.bindTooltip('Batas Administrasi Desa Padaleu', { sticky: true });

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
        }).addTo(map);

        trekkingPath.bindTooltip('Jalur Trekking Wisata Padaleu', { sticky: true });

        // Fetch dynamic markers from API route
        fetch('{{ route("api.markers") }}')
            .then(res => res.json())
            .then(data => {
                data.forEach(item => {
                    const pinIcon = L.divIcon({
                        className: 'custom-div-icon',
                        html: `<div style="background-color:#1e4620; color:white; width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid #d4af37; box-shadow:0 2px 4px rgba(0,0,0,0.3); font-weight:bold; font-size:10px;">📍</div>`,
                        iconSize: [28, 28],
                        iconAnchor: [14, 14]
                    });

                    const popupContent = `
                        <div style="font-family: sans-serif; width: 200px;">
                            ${item.image ? `<img src="${item.image}" style="width:100%; height:90px; object-fit:cover; border-radius:6px; margin-bottom:6px;" />` : ''}
                            <h4 style="font-weight:bold; font-size:12px; margin:0 0 2px 0; color:#0f2811;">${item.title}</h4>
                            <span style="font-size:9px; color:#d4af37; font-weight:bold; text-transform:uppercase;">${item.category}</span>
                            <p style="font-size:11px; color:#64748b; margin:4px 0 0 0; line-height:1.3;">${item.description}</p>
                        </div>
                    `;

                    L.marker([parseFloat(item.lat), parseFloat(item.lng)], { icon: pinIcon })
                        .addTo(map)
                        .bindPopup(popupContent);
                });
            })
            .catch(err => console.error("Gagal memuat markers:", err));
    });
</script>
@endsection
