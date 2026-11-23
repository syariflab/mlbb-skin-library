# MLBB Skin Library

Website katalog informasi skin Mobile Legends dengan tampilan dark, responsif, dan mobile-first.

## Struktur proyek
```
mlbb-skin-library/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/app.js
│   └── images/
├── data/
│   └── skins.json
├── pages/
│   ├── heroes.html
│   ├── detail.html
│   └── about.html
└── README.md
```

## Menambahkan data skin
Edit `data/skins.json`. Setiap item menggunakan format:
```json
{
  "id": "contoh-skin",
  "name": "Nama Skin",
  "hero": "Nama Hero",
  "type": "Epic",
  "status": "Informasi",
  "release": "Tahun / periode",
  "description": "Deskripsi informasi skin."
}
```
Gunakan kategori: `Collector`, `Legend`, `Epic`, atau `Special`. Halaman detail dibuka melalui ID pada URL.

## Menjalankan
Buka melalui web server statis atau aktifkan GitHub Pages dari **Settings → Pages**, pilih branch `main` dan folder `/ (root)`.

## Catatan
Proyek ini independen dan tidak berafiliasi dengan Moonton. Gunakan hanya materi, gambar, dan file yang dibuat sendiri atau memiliki izin untuk dibagikan. Website ini ditujukan sebagai katalog informasi; bukan tempat distribusi cheat, modifikasi gameplay, bypass proteksi, atau penghindaran anti-cheat.
