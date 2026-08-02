<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BeritaController;
use App\Http\Controllers\PetaController;

/*
|--------------------------------------------------------------------------
| Web Routes - Web Desa Padaleu
|--------------------------------------------------------------------------
*/

// Sisi Publik (Guest)
Route::get('/', function () {
    return view('home'); // Halaman utama (Hero, Sambutan Kades, Agenda, Potensi)
})->name('home');

Route::get('/profil', function () {
    return view('profil'); // Halaman Sejarah, Visi Misi, Aparatur
})->name('profil');

Route::get('/discover', function () {
    return view('discover'); // Halaman Discover Eksplorasi Wisata
})->name('discover');

Route::get('/peta', function () {
    return view('peta'); // Halaman Peta GIS Leaflet.js
})->name('peta');

Route::get('/kependudukan', function () {
    return view('kependudukan'); // Dashboard Statistik Demografi
})->name('kependudukan');

// Berita & Pengumuman
Route::get('/berita', [BeritaController::class, 'index'])->name('berita.index');
Route::get('/berita/{slug}', [BeritaController::class, 'show'])->name('berita.show');

// UMKM & Potensi
Route::get('/umkm', function () {
    $umkms = \App\Models\Umkm::all();
    return view('umkm.index', compact('umkms'));
})->name('umkm.index');

Route::get('/potensi', function () {
    return view('potensi'); // Daftar komoditas unggulan & wisata
})->name('potensi');

Route::get('/ppid', function () {
    return view('ppid'); // Dokumen regulasi download
})->name('ppid');

Route::get('/kontak', function () {
    return view('kontak'); // Alamat, email, form aspirasi
})->name('kontak');

// API routes for dynamic Leaflet markers (can be moved to routes/api.php if decoupled)
Route::get('/api/peta/markers', [PetaController::class, 'getPoints'])->name('api.markers');


// --------------------------------------------------------------------------
// Sisi Admin Dashboard (Auth Protected)
// --------------------------------------------------------------------------
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.dashboard'); // Dashboard overview admin
    })->name('dashboard');

    // Berita CRUD
    Route::post('/berita/store', [BeritaController::class, 'store'])->name('berita.store');
    Route::delete('/berita/{id}', [BeritaController::class, 'destroy'])->name('berita.destroy');

    // Peta Markers CRUD
    Route::post('/markers/store', [PetaController::class, 'store'])->name('markers.store');
    Route::delete('/markers/{id}', [PetaController::class, 'destroy'])->name('markers.destroy');

    // UMKM CRUD
    Route::post('/umkm/store', function (\Illuminate\Http\Request $request) {
        \App\Models\Umkm::create($request->all());
        return redirect()->back()->with('success', 'Produk UMKM berhasil didaftarkan.');
    })->name('umkm.store');
    
    Route::delete('/umkm/{id}', function ($id) {
        \App\Models\Umkm::destroy($id);
        return redirect()->back()->with('success', 'Produk berhasil dihapus.');
    })->name('umkm.destroy');
});
