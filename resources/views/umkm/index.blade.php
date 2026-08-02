@extends('layouts.app')

@section('title', 'Katalog UMKM')

@section('content')
<div class="max-w-7xl mx-auto px-6 py-16">
    <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-gold text-xs font-extrabold uppercase tracking-widest mb-3">Katalog Produk Lokal</p>
        <h1 class="text-4xl md:text-5xl font-bold font-serif-title text-green-dark">UMKM Digital Padaleu</h1>
        <div class="w-16 h-1 bg-gold mx-auto mt-4"></div>
    </div>

    <!-- Product Grid -->
    <div class="grid md:grid-cols-3 gap-8">
        @forelse($umkms as $umkm)
        <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-green-primary/5 flex flex-col justify-between">
            <div>
                <div class="h-56 overflow-hidden relative">
                    <img src="{{ $umkm->image ?: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=500' }}" alt="{{ $umkm->name }}" class="w-full h-full object-cover">
                    <span class="absolute top-4 left-4 bg-green-primary text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">{{ $umkm->category }}</span>
                </div>
                <div class="p-6">
                    <p class="text-gold text-[10px] font-extrabold uppercase tracking-wider">{{ $umkm->seller }}</p>
                    <h3 class="font-extrabold text-green-dark text-base leading-snug mt-1 mb-2">{{ $umkm->name }}</h3>
                    <p class="text-green-primary font-extrabold text-base mb-3">{{ $umkm->price }}</p>
                    <p class="text-slate-500 text-xs leading-relaxed line-clamp-3">{{ $umkm->description }}</p>
                </div>
            </div>

            <div class="p-6 pt-0 mt-4">
                <a href="https://wa.me/{{ $umkm->phone }}?text=Halo%20penjual%20di%20Web%20Desa%20Padaleu%2C%20saya%20tertarik%20untuk%20membeli%20produk%20%22{{ urlencode($umkm->name) }}%22.%20Mohon%20info%20ketersediaan%20barang.%20Terima%20kasih." target="_blank" rel="noopener noreferrer" class="w-full py-3 bg-[#1b5e20] hover:bg-[#123c14] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 hover:shadow-md">
                    <span>💬 Hubungi via WhatsApp</span>
                </a>
            </div>
        </div>
        @empty
        <div class="col-span-3 text-center py-12 text-slate-400 text-sm">
            Belum ada produk UMKM terdaftar.
        </div>
        @endforelse
    </div>
</div>
@endsection
