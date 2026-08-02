@extends('layouts.app')

@section('title', 'Profil Desa')

@section('content')
<div class="max-w-7xl mx-auto px-6 py-16">
    <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-gold text-xs font-extrabold uppercase tracking-widest mb-3">Tentang Padaleu</p>
        <h1 class="text-4xl md:text-5xl font-bold font-serif-title text-green-dark">Sejarah & Profil Desa</h1>
        <div class="w-16 h-1 bg-gold mx-auto mt-4"></div>
    </div>

    <div class="grid md:grid-cols-2 gap-12 mb-20">
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-green-primary/5">
            <h2 class="text-xl font-bold font-serif-title text-green-dark border-b-2 border-gold pb-3 mb-4">Sejarah Singkat Desa</h2>
            <div class="prose prose-slate text-slate-600 text-sm leading-relaxed space-y-4">
                <p>
                    Desa Padaleu didirikan pada awal dekade 1980-an yang mulanya berawal dari pemukiman transmigran lokal dan petani komoditas perkebunan di Kecamatan Lembo. Nama "Padaleu" sendiri diambil dari bahasa daerah setempat yang melambangkan kesuburan tanah dan keteduhan daerah pesisir.
                </p>
                <p>
                    Seiring dibentuknya pemekaran Kabupaten Konawe Utara, Desa Padaleu terus berbenah secara administratif dan bergotong royong membangun infrastruktur. Dari sentra pertanian tadah hujan tradisional, Padaleu kini bertransformasi menjadi salah satu desa percontohan digitalisasi informasi serta lumbung cengkeh unggulan di wilayah Lembo.
                </p>
            </div>
        </div>

        <div class="bg-green-dark text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
            <h2 class="text-xl font-bold font-serif-title text-gold border-b border-white/20 pb-3 mb-4">Visi & Misi Desa</h2>
            <div class="mb-6">
                <p class="text-xs uppercase tracking-widest text-gold font-bold">Visi</p>
                <p class="text-sm font-semibold italic mt-1 text-green-light">
                    "Mewujudkan Desa Padaleu yang Sejahtera, Mandiri, Transparan, Berbasis Sektor Perkebunan Unggul dan Pemanfaatan Teknologi Informasi."
                </p>
            </div>
            <div>
                <p class="text-xs uppercase tracking-widest text-gold font-bold mb-2">Misi Utama</p>
                <ul class="text-xs space-y-2 text-green-light/80 leading-relaxed">
                    <li>1. Mewujudkan pelayanan prima yang berbasis teknologi informasi (E-Government).</li>
                    <li>2. Mengakselerasi infrastruktur jalan tani dan irigasi guna mempermudah hasil panen cengkeh.</li>
                    <li>3. Membina kemandirian ekonomi pemuda dan UMKM lokal melalui penyaluran stimulus BUMDes.</li>
                    <li>4. Meningkatkan keterbukaan penggunaan APBDes secara akuntabel dan transparan kepada masyarakat.</li>
                </ul>
            </div>
        </div>
    </div>
</div>
@endsection
