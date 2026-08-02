@extends('layouts.app')

@section('title', 'Kependudukan')

@section('content')
<div class="max-w-7xl mx-auto px-6 py-16">
    <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-gold text-xs font-extrabold uppercase tracking-widest mb-3">Statistik Wilayah</p>
        <h1 class="text-4xl md:text-5xl font-bold font-serif-title text-green-dark">Demografi & Data Penduduk</h1>
        <div class="w-16 h-1 bg-gold mx-auto mt-4"></div>
    </div>

    <!-- Quick Stats Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-green-primary/5 text-center">
            <p class="text-4xl font-extrabold text-green-primary">1,420</p>
            <p class="text-xs font-bold text-gold uppercase tracking-wider mt-1">Total Penduduk</p>
            <p class="text-[10px] text-slate-400">Jiwa terdata</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-green-primary/5 text-center">
            <p class="text-4xl font-extrabold text-green-primary">728</p>
            <p class="text-xs font-bold text-gold uppercase tracking-wider mt-1">Laki-Laki</p>
            <p class="text-[10px] text-slate-400">51% Rasio</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-green-primary/5 text-center">
            <p class="text-4xl font-extrabold text-green-primary">692</p>
            <p class="text-xs font-bold text-gold uppercase tracking-wider mt-1">Perempuan</p>
            <p class="text-[10px] text-slate-400">49% Rasio</p>
        </div>
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-green-primary/5 text-center">
            <p class="text-4xl font-extrabold text-green-primary">412</p>
            <p class="text-xs font-bold text-gold uppercase tracking-wider mt-1">Kepala Keluarga</p>
            <p class="text-[10px] text-slate-400">KK aktif</p>
        </div>
    </div>

    <!-- Education and Age Group Rows -->
    <div class="grid md:grid-cols-2 gap-8">
        <!-- Pendidikan -->
        <div class="bg-white p-8 rounded-3xl border border-green-primary/5 shadow-sm">
            <h2 class="text-base font-bold text-green-dark mb-6 border-b pb-3 border-slate-100 flex items-center gap-2">
                <span>🎓</span> Tingkat Pendidikan Terakhir
            </h2>
            <div class="space-y-4">
                @foreach([
                    ['Tidak/Belum Sekolah', 240, 17],
                    ['SD / Sederajat', 410, 29],
                    ['SMP / Sederajat', 380, 27],
                    ['SMA / Sederajat', 310, 22],
                    ['Diploma / Sarjana (S1+)', 80, 5]
                ] as $item)
                <div class="text-xs">
                    <div class="flex justify-between font-bold mb-1">
                        <span class="text-slate-600">{{ $item[0] }}</span>
                        <span class="text-green-primary">{{ $item[1] }} Jiwa ({{ $item[2] }}%)</span>
                    </div>
                    <div class="w-full bg-green-light h-2 rounded-full overflow-hidden">
                        <div class="bg-green-primary h-full" style="width: {{ $item[2] }}%"></div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>

        <!-- Kelompok Usia -->
        <div class="bg-white p-8 rounded-3xl border border-green-primary/5 shadow-sm">
            <h2 class="text-base font-bold text-green-dark mb-6 border-b pb-3 border-slate-100 flex items-center gap-2">
                <span>⏳</span> Kelompok Usia Penduduk
            </h2>
            <div class="space-y-4">
                @foreach([
                    ['Balita (0-5 thn)', 140, 10],
                    ['Anak-Anak (6-12 thn)', 180, 13],
                    ['Remaja (13-18 thn)', 210, 15],
                    ['Dewasa Produktif (19-59 thn)', 710, 50],
                    ['Lansia (60+ thn)', 180, 12]
                ] as $item)
                <div class="text-xs">
                    <div class="flex justify-between font-bold mb-1">
                        <span class="text-slate-600">{{ $item[0] }}</span>
                        <span class="text-gold">{{ $item[1] }} Jiwa ({{ $item[2] }}%)</span>
                    </div>
                    <div class="w-full bg-green-light h-2 rounded-full overflow-hidden">
                        <div class="bg-gold h-full" style="width: {{ $item[2] }}%"></div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
@endsection
