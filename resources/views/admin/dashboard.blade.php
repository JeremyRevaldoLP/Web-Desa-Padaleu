@extends('layouts.app')

@section('title', 'Admin Dashboard')

@section('content')
<div class="max-w-7xl mx-auto px-6 py-16">
    <div class="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 grid lg:grid-cols-12 gap-8">
        
        <!-- Sidebar -->
        <div class="lg:col-span-3 border-r border-slate-100 pr-6 space-y-4">
            <div class="flex items-center gap-3">
                <span class="text-2xl">🔒</span>
                <div>
                    <h4 class="font-extrabold text-sm text-green-dark">Panel Konten</h4>
                    <p class="text-[9px] font-bold text-gold uppercase tracking-wider">Administrator</p>
                </div>
            </div>
            <div class="space-y-1">
                <a href="#" class="block w-full py-2.5 px-4 rounded-xl text-xs font-bold text-left bg-green-light text-green-primary border-l-4 border-gold">📝 Kelola Konten</a>
                <a href="{{ route('peta') }}" class="block w-full py-2.5 px-4 rounded-xl text-xs font-bold text-left text-slate-500 hover:bg-slate-50">📍 Lihat Peta</a>
                <a href="{{ route('home') }}" class="block w-full py-2.5 px-4 rounded-xl text-xs font-bold text-left text-slate-500 hover:bg-slate-50">🏠 Kembali Ke Home</a>
            </div>
        </div>

        <!-- Main Content area -->
        <div class="lg:col-span-9 space-y-8">
            <h3 class="font-bold text-green-dark text-base border-b-2 border-gold pb-2">Selamat Datang di Administrator Panel</h3>
            <p class="text-xs text-slate-500 leading-relaxed">
                Melalui panel ini, Anda dapat mengelola seluruh konten geolokasi, data statistik kependudukan, transparansi anggaran APBDes, berita, serta agenda yang ditampilkan ke publik.
            </p>
            <div class="bg-green-light p-6 rounded-2xl border border-green-primary/10 grid grid-cols-2 gap-4">
                <div>
                    <h5 class="text-xs font-bold text-green-dark">Status Sistem</h5>
                    <p class="text-[11px] text-slate-500 mt-1">Laravel berjalan dengan database MySQL terkoneksi.</p>
                </div>
                <div class="text-right">
                    <span class="inline-block px-3 py-1 bg-green-primary text-white text-[10px] font-bold uppercase rounded-full">Aktif</span>
                </div>
            </div>
        </div>

    </div>
</div>
@endsection
