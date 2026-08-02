@extends('layouts.app')

@section('title', 'Hubungi Kami')

@section('content')
<div class="max-w-7xl mx-auto px-6 py-16">
    <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-gold text-xs font-extrabold uppercase tracking-widest mb-3">Hubungi Kami</p>
        <h1 class="text-4xl md:text-5xl font-bold font-serif-title text-green-dark">Alamat & Aspirasi Warga</h1>
        <div class="w-16 h-1 bg-gold mx-auto mt-4"></div>
    </div>

    <div class="grid md:grid-cols-12 gap-8 items-start">
        <!-- Formulir Kontak -->
        <div class="md:col-span-7 bg-white p-8 rounded-3xl shadow-sm border border-green-primary/5">
            <h3 class="font-extrabold text-base text-green-dark mb-6">✉ Kirim Pesan Aspirasi</h3>
            <form action="#" method="POST" class="space-y-4">
                @csrf
                <div class="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Nama Lengkap" class="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required>
                    <input type="email" placeholder="Email" class="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required>
                </div>
                <input type="text" placeholder="Subjek" class="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required>
                <textarea rows="5" placeholder="Pesan..." class="bg-[#f8f9fa] border border-slate-200 rounded-xl p-3 text-xs w-full focus:outline-none" required></textarea>
                <button type="submit" class="w-full py-3 bg-green-primary hover:bg-green-dark text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all">Kirim Aspirasi</button>
            </form>
        </div>

        <!-- Info Kontak -->
        <div class="md:col-span-5 bg-green-dark text-white p-8 rounded-3xl shadow-lg space-y-6">
            <h3 class="font-extrabold text-base text-gold">Kantor Desa Padaleu</h3>
            <p class="text-xs text-green-light/80 leading-relaxed">
                Jalan Raya Trans Sulawesi No. 12, Pesisir Timur Lembo, Konawe Utara, Sulawesi Tenggara.
            </p>
            <div class="border-t border-white/10 pt-4 space-y-3 text-xs">
                <p class="flex justify-between"><span class="text-gold font-bold">Hari Layanan:</span> <span>Senin - Jumat</span></p>
                <p class="flex justify-between"><span class="text-gold font-bold">Jam Kerja:</span> <span>08:00 - 15:30 WITA</span></p>
                <p class="flex justify-between"><span class="text-gold font-bold">Email Resmi:</span> <span>desa.padaleu@konaweutarakab.go.id</span></p>
            </div>
        </div>
    </div>
</div>
@endsection
