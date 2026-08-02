<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PetaMarker extends Model
{
    use HasFactory;

    protected $table = 'peta_markers';

    protected $fillable = [
        'title',
        'lat', // Latitude coordinate
        'lng', // Longitude coordinate
        'category', // Fasilitas, Wisata, UMKM, dll
        'description',
        'image'
    ];
}
