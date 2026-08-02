@extends('layouts.app')

@section('title', 'Dokumen PPID')

@section('content')
<div class="max-w-7xl mx-auto px-6 py-16">
    <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-gold text-xs font-extrabold uppercase tracking-widest mb-3">Informasi Publik</p>
        <h1 class="text-4xl md:text-5xl font-bold font-serif-title text-green-dark">PPID & Regulasi Desa</h1>
        <div class="w-16 h-1 bg-gold mx-auto mt-4"></div>
    </div>

    <div class="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-green-primary/5">
        <table class="w-full text-xs text-left text-slate-600">
            <thead class="bg-green-light text-green-dark font-bold uppercase border-b border-slate-100">
                <tr>
                    <th class="p-4 rounded-l-xl">Nama Regulasi / Dokumen</th>
                    <th class="p-4">Kategori</th>
                    <th class="p-4">Tanggal Rilis</th>
                    <th class="p-4">Ukuran</th>
                    <th class="p-4 rounded-r-xl text-center">Unduh</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-slate-100 hover:bg-green-light/20 transition-colors">
                    <td class="p-4 font-bold text-green-dark">Perdes No. 3 Tahun 2025 tentang Ketertiban Umum</td>
                    <td class="p-4">Peraturan Desa</td>
                    <td class="p-4">2025-11-12</td>
                    <td class="p-4 text-slate-400">1.2 MB</td>
                    <td class="p-4 text-center">
                        <a href="#" class="p-2 bg-green-light hover:bg-green-primary hover:text-white rounded-lg transition-colors text-green-primary">💾</a>
                    </td>
                </tr>
                <tr class="border-b border-slate-100 hover:bg-green-light/20 transition-colors">
                    <td class="p-4 font-bold text-green-dark">Laporan Realisasi APBDes Semester II TA 2025</td>
                    <td class="p-4">Laporan Keuangan</td>
                    <td class="p-4">2026-01-15</td>
                    <td class="p-4 text-slate-400">2.4 MB</td>
                    <td class="p-4 text-center">
                        <a href="#" class="p-2 bg-green-light hover:bg-green-primary hover:text-white rounded-lg transition-colors text-green-primary">💾</a>
                    </td>
                </tr>
                <tr class="border-b border-slate-100 hover:bg-green-light/20 transition-colors">
                    <td class="p-4 font-bold text-green-dark">SK Kepala Desa No. 14 tentang Pengangkatan Pengurus BUMDes 2026</td>
                    <td class="p-4">Surat Keputusan</td>
                    <td class="p-4">2026-02-05</td>
                    <td class="p-4 text-slate-400">840 KB</td>
                    <td class="p-4 text-center">
                        <a href="#" class="p-2 bg-green-light hover:bg-green-primary hover:text-white rounded-lg transition-colors text-green-primary">💾</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
@endsection
