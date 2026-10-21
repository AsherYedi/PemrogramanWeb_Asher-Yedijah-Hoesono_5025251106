# LibraryReg

Prototipe front-end untuk pendaftaran dan pengelolaan anggota perpustakaan kampus.

## Menjalankan

Buka `index.html` di browser. Tidak memerlukan instalasi paket atau server backend.

## Struktur

- `index.html` - struktur halaman, formulir pendaftaran, dan tabel anggota.
- `css/style.css` - gaya halaman dan aturan responsif.
- `js/app.js` - validasi form, pencarian, CRUD, dan penyimpanan browser.
- `PRD LibraryReg.md` - dokumen kebutuhan produk.

Data anggota disimpan di `localStorage` browser yang sedang digunakan. Menu **Login Petugas** membuka area pengelolaan prototipe; belum ada autentikasi atau sinkronisasi server.