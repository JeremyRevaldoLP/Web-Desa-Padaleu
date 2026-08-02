<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Aparatur extends Model
{
    use HasFactory;

    protected $table = 'aparaturs';

    protected $fillable = [
        'nama',
        'jabatan',
        'deskripsi',
        'foto', // path/url to image file
        'order_priority' // for ordering in organizational chart
    ];
}
