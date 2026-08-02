<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BeritaController extends Controller
{
    /**
     * Display a listing of public news articles.
     */
    public function index(Request $request)
    {
        $query = Berita::orderBy('created_at', 'desc');

        if ($request->has('category') && $request->category != 'Semua') {
            $query->where('category', $request->category);
        }

        if ($request->has('search')) {
            $query->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('content', 'like', '%' . $request->search . '%');
        }

        $berita = $query->paginate(6);
        return view('berita.index', compact('berita'));
    }

    /**
     * Display the specified news article.
     */
    public function show($slug)
    {
        $article = Berita::where('slug', $slug)->firstOrFail();
        $article->increment('views_count'); // Record reader hits

        $latestNews = Berita::where('id', '!=', $article->id)->orderBy('created_at', 'desc')->take(3)->get();

        return view('berita.show', compact('article', 'latestNews'));
    }

    /**
     * [ADMIN] Store a newly created news article.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'excerpt' => 'required|string',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $data = $request->only(['title', 'category', 'excerpt', 'content']);
        $data['author'] = auth()->user()->name ?? 'Administrator';

        if ($request->hasFile('image')) {
            $filePath = $request->file('image')->store('berita_images', 'public');
            $data['image'] = Storage::url($filePath);
        }

        Berita::create($data);

        return redirect()->route('admin.berita.index')->with('success', 'Berita desa berhasil dipublikasikan!');
    }

    /**
     * [ADMIN] Delete article.
     */
    public function destroy($id)
    {
        $berita = Berita::findOrFail($id);
        
        // Remove image if exists in storage
        if ($berita->image) {
            $path = str_replace('/storage/', '', $berita->image);
            Storage::disk('public')->delete($path);
        }

        $berita->delete();

        return redirect()->back()->with('success', 'Berita berhasil dihapus.');
    }
}
