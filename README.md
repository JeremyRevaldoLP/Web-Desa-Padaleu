# 🌐 Web Desa Padaleu

Portal web resmi dan sistem informasi untuk **Desa / Kelurahan Padaleu** (Kecamatan Kambu, Kota Kendari, Sulawesi Tenggara). Website ini dirancang untuk meningkatkan transparansi, mempermudah akses informasi publik, serta mengoptimalkan pelayanan masyarakat secara digital.

---

## 🚀 Fitur Utama

- **Beranda & Profil Desa**: Memuat latar belakang, sejarah, visi & misi, serta gambaran umum wilayah Desa Padaleu.
- **Struktur Organisasi**: Informasi pengurus dan perangkat desa beserta tugas pokok dan fungsinya.
- **Berita & Pengumuman**: Publikasi kegiatan desa, agenda mendatang, dan pengumuman resmi bagi masyarakat.
- **Layanan Masyarakat / E-Surat**: Kemudahan akses informasi seputar persyaratan layanan administrasi dan pengajuan surat online.
- **Potensi & UMKM Desa**: Media promosi untuk produk lokal, UMKM, dan potensi ekonomi/pariwisata di Padaleu.
- **Galeri Kegiatan**: Dokumentasi foto dan video kegiatan kemasyarakatan desa.
- **Kontak & Lokasi**: Informasi alamat kantor desa, peta interaktif, serta formulir pendaftaran/pengaduan.

---

## 🛠️ Teknologi yang Digunakan (Tech Stack)

- **Frontend**: HTML5, CSS3, JavaScript / Framework CSS (Bootstrap / Tailwind CSS)
- **Backend**: PHP (Native / Framework Laravel / CodeIgniter)
- **Database**: MySQL / MariaDB
- **Web Server**: Apache / Nginx (XAMPP / Laragon)

---

## 💻 Prasyarat & Instalasi Lokal

Untuk menjalankan proyek ini di lingkungan lokal (development), pastikan Anda telah menginstal:

1. **Web Server & Database**: [XAMPP](https://www.apachefriends.org/) / [Laragon](https://laragon.org/)
2. **PHP**: Versi 8.0 atau yang lebih baru
3. **Composer** (jika menggunakan framework PHP): [getcomposer.org](https://getcomposer.org/)
4. **Git**: [git-scm.com](https://git-scm.com/)

### Langkah Instalasi

1. **Clone Repositori**

   ```bash
   git clone https://github.com/JeremyRevaldoLP/Web-Desa-Padaleu.git
   cd Web-Desa-Padaleu
   ```

2. **Pindahkan Proyek ke Web Directory**

   Pindahkan folder proyek ke dalam direktori `htdocs` (XAMPP) atau `www` (Laragon).

3. **Konfigurasi Database**

   - Buka phpMyAdmin (`http://localhost/phpmyadmin`).
   - Buat database baru, misalnya `db_desa_padaleu`.
   - Import file `.sql` jika tersedia di folder `database/` atau `sql/`.
   - Atur koneksi database pada file konfigurasi seperti `config.php` atau `.env`.

4. **Jalankan Aplikasi**

   Buka browser dan akses:

   ```text
   http://localhost/Web-Desa-Padaleu
   ```

---

## 📂 Struktur Direktori (Gambaran Umum)

```text
Web-Desa-Padaleu/
├── assets/          # File statis (CSS, JS, Gambar, Font)
├── config/          # File konfigurasi sistem & database
├── controllers/     # Logika backend / penanganan permintaan
├── database/        # File skema database (.sql / migrasi)
├── views/           # Tampilan halaman web (HTML/PHP templates)
├── index.php        # Halaman utama / entry point
└── README.md        # Dokumentasi proyek
```

---

## 📝 Lisensi

Proyek ini dibuat untuk keperluan pengabdian dan pengembangan masyarakat Desa Padaleu. Lisensi dapat disesuaikan dengan kebutuhan pengembang.

---

## 👨‍💻 Pengembang

**JeremyRevaldoLP**
**Adamachmad**
**Andibrahim7**
**arilandrian**
**IqraJr**
**prasstyoadhi2**
