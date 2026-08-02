<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Table Aparatur Desa
        Schema::create('aparaturs', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('jabatan');
            $table->text('deskripsi')->nullable();
            $table->string('foto')->nullable();
            $table->integer('order_priority')->default(0);
            $table->timestamps();
        });

        // 2. Table Berita & Artikel
        Schema::create('beritas', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category');
            $table->text('excerpt');
            $table->text('content');
            $table->string('image')->nullable();
            $table->string('author')->default('Operator');
            $table->unsignedInteger('views_count')->default(0);
            $table->timestamps();
        });

        // 3. Table Kependudukan
        Schema::create('penduduks', function (Blueprint $table) {
            $table->id();
            $table->string('nik', 16)->unique();
            $table->string('nama');
            $table->enum('jenis_kelamin', ['L', 'P']);
            $table->date('tanggal_lahir');
            $table->string('usia_kelompok'); // Balita, Anak, Remaja, Dewasa, Lansia
            $table->string('pendidikan');
            $table->string('pekerjaan');
            $table->string('agama');
            $table->string('status_pernikahan');
            $table->string('dusun');
            $table->string('rt');
            $table->string('rw');
            $table->timestamps();
        });

        // 4. Table UMKM Katalog
        Schema::create('umkms', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category');
            $table->string('price');
            $table->string('seller');
            $table->string('phone');
            $table->string('image')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });

        // 5. Table Peta Markers (Geografis GIS)
        Schema::create('peta_markers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->decimal('lat', 10, 8);
            $table->decimal('lng', 11, 8);
            $table->string('category');
            $table->text('description')->nullable();
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peta_markers');
        Schema::dropIfExists('umkms');
        Schema::dropIfExists('penduduks');
        Schema::dropIfExists('beritas');
        Schema::dropIfExists('aparaturs');
    }
};
