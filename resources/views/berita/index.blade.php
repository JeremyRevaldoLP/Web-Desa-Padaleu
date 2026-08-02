@extends('layouts.app')

@section('title', 'Kabar Berita')

@section('content')
<div class="max-w-7xl mx-auto px-6 py-16">
    <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-gold text-xs font-extrabold uppercase tracking-widest mb-3">Informasi Terbaru</p>
        <h1 class="text-4xl md:text-5xl font-bold font-serif-title text-green-dark">Kabar Berita Desa</h1>
        <div class="w-16 h-1 bg-gold mx-auto mt-4"></div>
    </div>

    <!-- Search Form -->
    <div class="mb-10 max-w-xl mx-auto">
        <form action="{{ route('berita.index') }}" method="GET" class="flex gap-2">
            <input type="text" name="search" placeholder="Cari berita..." value="{{ request('search') }}" class="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-green-primary">
            <button type="submit" class="px-6 py-2.5 bg-green-primary hover:bg-green-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider">Cari</button>
        </form>
    </div>

    <!-- News Grid -->
    <div class="grid md:grid-cols-3 gap-8">
        @forelse($berita as $item)
        <div class="bg-white rounded-3xl overflow-hidden shadow-sm border border-green-primary/5 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
                <div class="h-52 overflow-hidden relative">
                    <img src="{{ $item->image ?: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600' }}" alt="{{ $item->title }}" class="w-full h-full object-cover">
                    <span class="absolute top-4 left-4 bg-green-primary text-white text-[9px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">{{ $item->category }}</span>
                </div>
                <div class="p-6">
                    <p class="text-slate-400 text-[10px] font-medium mb-1">📅 {{ $item->created_at->format('Y-m-d') }}</p>
                    <h3 class="font-extrabold text-green-dark text-base leading-snug line-clamp-2">{{ $item->title }}</h3>
                    <p class="text-slate-500 text-xs mt-3 line-clamp-3 leading-relaxed">{{ $item->excerpt }}</p>
                </div>
            </div>
            <div class="p-6 pt-0 border-t border-slate-50 mt-4 pt-4">
                <a href="{{ route('berita.show', $item->slug) }}" class="flex justify-between items-center text-[10px] font-bold text-green-primary uppercase tracking-wider">
                    <span>Baca Selengkapnya</span>
                    <span>&rarr;</span>
                </a>
            </div>
        </div>
        @empty
        <div class="col-span-3 text-center py-12 text-slate-400 text-sm">
            Belum ada berita dipublikasikan.
        </div>
        @endforelse
    </div>

    <!-- Pagination links -->
    <div class="mt-12">
        {{ $berita->links() }}
    </div>
</div>
@endsection
