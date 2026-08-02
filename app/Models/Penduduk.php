<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penduduk extends Model
{
    use HasFactory;

    protected $table = 'penduduks';

    protected $fillable = [
        'nik',
        'nama',
        'jenis_kelamin', // L/P
        'tanggal_lahir',
        'usia_kelompok', // Balita, Anak-Anak, Remaja, Dewasa, Lansia
        'pendidikan',
        'pekerjaan',
        'agama',
        'status_pernikahan',
        'dusun',
        'rt',
        'rw'
    ];
}
