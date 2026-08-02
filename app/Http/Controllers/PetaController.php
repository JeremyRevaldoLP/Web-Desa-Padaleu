<?php

namespace App\Http\Controllers;

use App\Models\PetaMarker;
use Illuminate\Http\Request;

class PetaController extends Controller
{
    /**
     * Get all points as JSON for Leaflet.js rendering
     */
    public function getPoints(Request $request)
    {
        $query = PetaMarker::query();

        if ($request->has('category') && $request->category != 'Semua') {
            $query->where('category', $request->category);
        }

        $markers = $query->get();

        return response()->json($markers);
    }

    /**
     * [ADMIN] Store a new POI marker
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'lat' => 'required|numeric',
            'lng' => 'required|numeric',
            'category' => 'required|string',
            'description' => 'required|string',
            'image' => 'nullable|string'
        ]);

        $marker = PetaMarker::create($request->all());

        return response()->json([
            'success' => true,
            'message' => 'Marker baru berhasil ditambahkan ke peta digital!',
            'data' => $marker
        ]);
    }

    /**
     * [ADMIN] Delete marker
     */
    public function destroy($id)
    {
        $marker = PetaMarker::findOrFail($id);
        $marker->delete();

        return response()->json([
            'success' => true,
            'message' => 'Titik marker berhasil dihapus.'
        ]);
    }
}
