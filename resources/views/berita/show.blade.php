@extends('layouts.app')

@section('title', $article->title)

@section('content')
<article class="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-100 my-16">
    <a href="{{ route('berita.index') }}" class="inline-flex items-center gap-1.5 text-xs font-bold text-green-primary hover:text-gold uppercase tracking-wider mb-8">
        &larr; Kembali ke Daftar Berita
    </a>
    
    <span class="bg-gold/20 text-green-dark text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full">{{ $article->category }}</span>
    <h1 class="text-3xl sm:text-4xl font-bold font-serif-title text-green-dark tracking-tight leading-tight mt-4 mb-4">{{ $article->title }}</h1>
    
    <div class="flex items-center justify-between text-xs text-slate-400 border-b pb-6 border-slate-100 mb-8">
        <span>Tanggal: <b>{{ $article->created_at->format('Y-m-d') }}</b></span>
        <span>Oleh: <b>{{ $article->author }}</b></span>
    </div>

    @if($article->image)
    <img src="{{ $article->image }}" alt="{{ $article->title }}" class="w-full h-96 object-cover rounded-2xl shadow-md mb-8">
    @endif
    
    <div class="prose prose-slate max-w-none text-slate-600 text-sm leading-relaxed space-y-6 whitespace-pre-line">
        {!! nl2br(e($article->content)) !!}
    </div>
</article>
@endsection
