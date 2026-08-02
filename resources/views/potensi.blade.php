@extends('layouts.app')

@section('title', 'Potensi & Wisata')

@section('content')
<div class="max-w-7xl mx-auto px-6 py-16">
    <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-gold text-xs font-extrabold uppercase tracking-widest mb-3">Sektor Potensi</p>
        <h1 class="text-4xl md:text-5xl font-bold font-serif-title text-green-dark">Komoditas & Destinasi Wisata</h1>
        <div class="w-16 h-1 bg-gold mx-auto mt-4"></div>
    </div>

    <!-- Pertanian -->
    <div class="mb-20">
        <h2 class="text-xl font-bold font-serif-title text-green-dark border-b-2 border-gold pb-3 mb-8">Pertanian & Perkebunan</h2>
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white p-8 rounded-3xl shadow-sm border border-green-primary/5 flex flex-col md:flex-row gap-6 items-center">
                <img src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=500" alt="Cengkeh" class="w-full md:w-44 h-44 object-cover rounded-2xl">
                <div>
                    <span class="bg-green-light text-green-primary text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">Komoditas Utama</span>
                    <h3 class="font-extrabold text-base text-green-dark mt-2">Cengkeh Rempah</h3>
                    <p class="text-slate-500 text-xs leading-relaxed mt-2">
                        Sektor perkebunan cengkeh merupakan mata pencaharian utama warga Desa Padaleu yang menyokong ketahanan ekonomi lokal.
                    </p>
                </div>
            </div>
            <div class="bg-white p-8 rounded-3xl shadow-sm border border-green-primary/5 flex flex-col md:flex-row gap-6 items-center">
                <img src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500" alt="Madu Hutan" class="w-full md:w-44 h-44 object-cover rounded-2xl">
                <div>
                    <span class="bg-green-light text-green-primary text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">Komoditas Hutan</span>
                    <h3 class="font-extrabold text-base text-green-dark mt-2">Madu Hutan Murni</h3>
                    <p class="text-slate-500 text-xs leading-relaxed mt-2">
                        Madu lebah liar dari pedalaman hutan Lembo yang dipanen langsung dengan metode kelestarian alam oleh kelompok tani.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
