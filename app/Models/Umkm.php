<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Umkm extends Model
{
    use HasFactory;

    protected $table = 'umkms';

    protected $fillable = [
        'name',
        'category',
        'price',
        'seller',
        'phone', // WhatsApp number
        'image',
        'description'
    ];
}
