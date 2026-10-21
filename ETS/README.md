# Evaluasi Tengah Semester (ETS) - Pemrograman Web

**Identitas Mahasiswa:**
- **Nama:** Asher Yedijah Hoesono
- **NRP:** 5025251106
- **Aplikasi:** LibraryReg – Pendaftaran & Pengelolaan Anggota Perpustakaan Kampus

**Tautan Publikasi & Repositori:**
- 🌐 **Live Website (GitHub Pages):** [https://AsherYedi.github.io/PemrogramanWeb_Asher-Yedijah-Hoesono_5025251106/ETS/index.html](https://AsherYedi.github.io/PemrogramanWeb_Asher-Yedijah-Hoesono_5025251106/ETS/index.html)
- 📁 **Repository GitHub:** [https://github.com/AsherYedi/PemrogramanWeb_Asher-Yedijah-Hoesono_5025251106](https://github.com/AsherYedi/PemrogramanWeb_Asher-Yedijah-Hoesono_5025251106)
- 🔑 **Akun Uji Coba Petugas:** Username: `petugas` | Password: `perpus123`

---

## 1. Deskripsi dan Ruang Lingkup Pekerjaan

### Deskripsi Proyek
**LibraryReg** adalah aplikasi web *front-end* untuk digitalisasi sistem pendaftaran anggota perpustakaan perguruan tinggi. Aplikasi ini menggantikan formulir kertas manual agar proses pendaftaran lebih cepat, bebas antrean, dan meminimalisir kesalahan pencatatan data.

### Ruang Lingkup Pekerjaan
- **Pengembangan Front-End:** Aplikasi *client-side* berbasis HTML5, CSS3, Bootstrap 5, dan Vanilla JavaScript ES6+.
- **Pendaftaran & Validasi:** Validasi formulir secara *real-time* (kelengkapan data, format email regex, nomor telepon, dan pengecekan NIM/NIP unik agar tidak ganda).
- **Kartu Anggota Digital:** Pembuatan kartu anggota otomatis dengan *barcode* dinamis (SVG) yang digenerate dari NIM/NIP.
- **Dashboard Manajemen Data (CRUD):**
  - **Create:** Pendaftaran anggota baru.
  - **Read:** Tabel daftar anggota dengan fitur pencarian instan (*live search*) serta pratinjau kartu anggota.
  - **Update:** Edit data anggota langsung melalui modal interaktif.
  - **Delete:** Hapus data anggota dengan dialog konfirmasi SweetAlert2.
- **Penyimpanan Data & Sesi:** Menggunakan `localStorage` untuk persistensi data anggota di browser dan `sessionStorage` untuk autentikasi sesi petugas perpustakaan.

---

## 2. Rancangan Halaman dan Struktur Menu

### Struktur Menu & Navigasi
Aplikasi memiliki navbar *sticky* responsif dengan indikator halaman aktif (`.active`):
- **Beranda (`index.html`)**: Pintu masuk utama dengan informasi fasilitas, layanan, dan statistik perpustakaan.
- **Pendaftaran (`pendaftaran.html`)**: Formulir pendaftaran anggota baru dilengkapi *live preview* kartu identitas.
- **Daftar Anggota (`daftar-anggota.html`)**: Dashboard tabel data anggota, pencarian, dan aksi CRUD.
- **Login Petugas (`login.html`)**: Halaman login untuk masuk sebagai pengelola perpustakaan.

### Tangkapan Layar Halaman (Screenshots)

#### A. Halaman Beranda (Landing Page)
![Landing Page](assets/landingPage.png)

#### B. Halaman Formulir Pendaftaran
![Pendaftaran](assets/pendaftaran.png)

#### C. Halaman Dashboard & Daftar Anggota
![Daftar Anggota](assets/daftarAnggota.png)

#### D. Halaman Login Petugas
![Login Petugas](assets/loginPetugas.png)

---

## 3. Desain UI Landing Page

### Konsep Desain
Mengusung gaya **Editorial-Akademik Modern** yang rapi, berwibawa, dan nyaman dibaca:
- **Warna:** *Deep Green* (`#1D3B34`) sebagai warna utama, *Warm Brass/Gold* (`#C8962E`) untuk tombol aksi dan aksen, *Paper White* (`#F8FAF8`) untuk latar belakang kartu, dan *Ink Dark* (`#16201D`) untuk teks.
- **Tipografi:** *Bricolage Grotesque* untuk judul dan *Public Sans* untuk teks isi.

### Komponen Landing Page
1. **Hero Section:** Judul penyambutan, deskripsi singkat, tombol Call-to-Action (*"Daftar jadi anggota"* dan *"Lihat layanan"*), serta showcase foto perpustakaan dengan aksen bingkai modern dan *floating badge* "Buka 24 Jam".
2. **Tentang Perpustakaan:** Penjelasan fungsi perpustakaan untuk belajar, riset, dan diskusi.
3. **Layanan Unggulan:** Daftar fasilitas (ruang baca 24 jam, jurnal internasional, peminjaman buku, ruang diskusi, dan fotokopi).
4. **Statistik Koleksi:** Statistik buku cetak, jurnal/e-book, anggota aktif, dan jam buka dalam format *ledger*.
5. **Footer:** Alamat gedung, jam operasional, kontak email, dan media sosial.
6. **Aksesibilitas & Responsivitas:** Desain ramah perangkat seluler (*mobile-friendly*), fokus keyboard visual jelas (`:focus-visible`), dan dukungan `prefers-reduced-motion`.

---

## 4. Implementasi dan Publikasi Web

### Struktur Berkas Proyek
```text
ETS/
├── index.html               # Halaman utama (Landing page)
├── pendaftaran.html         # Halaman formulir pendaftaran anggota
├── daftar-anggota.html       # Halaman dashboard data anggota
├── login.html               # Halaman login petugas
├── README.md                # Laporan ringkas ETS
├── assets/                  # Tangkapan layar antarmuka
│   ├── landingPage.png
│   ├── pendaftaran.png
│   ├── daftarAnggota.png
│   └── loginPetugas.png
├── css/
│   └── style.css            # Gaya tema, layout, hero, dan kartu
├── js/
│   ├── app.js               # Logic store (localStorage), validasi, barcode SVG, & kartu
│   ├── home.js              # Script landing page
│   ├── pendaftaran.js       # Script form pendaftaran & live card update
│   ├── dashboard.js         # Script CRUD tabel anggota & pencarian
│   └── login.js             # Script autentikasi petugas
├── img/
│   └── hero-library.jpg     # Foto perpustakaan landing page
├── fonts/                   # Webfont Bricolage Grotesque & Public Sans
└── vendor/                  # Bootstrap 5 & SweetAlert2
```

### Publikasi Web (Deployment)
Aplikasi telah di-deploy dan dipublikasikan menggunakan **GitHub Pages**:
- **URL Publikasi:** [https://AsherYedi.github.io/PemrogramanWeb_Asher-Yedijah-Hoesono_5025251106/ETS/index.html](https://AsherYedi.github.io/PemrogramanWeb_Asher-Yedijah-Hoesono_5025251106/ETS/index.html)
- **Repositori:** [https://github.com/AsherYedi/PemrogramanWeb_Asher-Yedijah-Hoesono_5025251106](https://github.com/AsherYedi/PemrogramanWeb_Asher-Yedijah-Hoesono_5025251106)
