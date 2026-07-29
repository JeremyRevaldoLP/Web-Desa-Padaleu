# Web Desa Padaleu

Aplikasi web modern yang dibangun dengan React, Vite, dan Tailwind CSS.

## Prasyarat

Sebelum memulai, pastikan Anda telah menginstall:
- **Node.js** (versi 16 atau lebih tinggi) - [Download di sini](https://nodejs.org/)
- **pnpm** - Package manager yang lebih cepat dan efisien

Untuk menginstall pnpm, jalankan:
```bash
npm install -g pnpm
```

## Langkah-langkah Menjalankan Aplikasi

### 1. Clone Repository (Jika di-download dari Git)
```bash
git clone <repository-url>
cd "Web Desa Padaleu"
```

### 2. Install Dependencies
Jalankan perintah berikut untuk menginstall semua package yang diperlukan:
```bash
pnpm install
```

### 3. Jalankan Development Server
Mulai server pengembangan dengan:
```bash
pnpm run dev
```

Server akan berjalan di `http://localhost:5173` (atau port lain jika 5173 sudah digunakan).

### 4. Buka di Browser
Buka browser Anda dan kunjungi URL yang ditampilkan di terminal.

## Build untuk Production

Ketika siap untuk production, jalankan:
```bash
pnpm run build
```

Hasilnya akan tersimpan di folder `dist/`.

## Preview Build Production

Untuk melihat preview dari build production secara lokal:
```bash
pnpm run preview
```

## Struktur Folder

```
.
├── src/
│   ├── App.tsx           # Komponen utama aplikasi
│   ├── main.tsx          # Entry point React
│   ├── index.css         # Style global dan Tailwind CSS
│   └── imports/          # Folder untuk imports custom
├── index.html            # File HTML utama
├── vite.config.ts        # Konfigurasi Vite
├── tsconfig.json         # Konfigurasi TypeScript
└── package.json          # Dependencies dan scripts
```

## Stack Teknologi

- **React** - UI Library
- **Vite** - Build tool dan dev server
- **TypeScript** - Type safety untuk JavaScript
- **Tailwind CSS** - Utility-first CSS framework

## Perintah Penting

| Perintah | Deskripsi |
|----------|-----------|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Jalankan development server |
| `pnpm run build` | Build untuk production |
| `pnpm run preview` | Preview production build |

## Troubleshooting

### Port sudah digunakan
Jika port 5173 sudah digunakan, Vite akan otomatis menggunakan port berikutnya. Lihat terminal untuk URL yang benar.

### Module tidak ditemukan
Jika ada error module tidak ditemukan, coba jalankan ulang:
```bash
pnpm install
```

## Kontribusi

Untuk berkontribusi pada proyek ini, silakan buat branch baru dan submit pull request.

## Lisensi

Proyek ini tersedia di bawah lisensi MIT.
