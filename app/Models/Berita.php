<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Berita extends Model
{
    use HasFactory;

    protected $table = 'beritas';

    protected $fillable = [
        'title',
        'slug',
        'category',
        'excerpt',
        'content',
        'image',
        'author',
        'views_count'
    ];

    /**
     * Auto generate slug on creating news article.
     */
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($berita) {
            $berita->slug = Str::slug($berita->title);
        });
    }
}
