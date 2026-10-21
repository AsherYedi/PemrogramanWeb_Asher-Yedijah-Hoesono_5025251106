## Product Requirements Document

LibraryReg - Aplikasi Pendaftaran Anggota Perpustakaan

## 1. Informasi Proyek

NAMA APLIKASI

LibraryReg

FASE PENGEMBANGAN

Prototipe Front-End

PLATFORM

Aplikasi Web (Client-Side)

TUJUAN UTAMA

Digitalisasi Pendaftaran Anggota

## 2. Latar Belakang & Masalah

Sebuah perpustakaan perguruan tinggi saat ini masih bergantung pada proses pendaftaran anggota secara manual menggunakan formulir kertas. Metode konvensional ini memunculkan berbagai masalah operasional, di antaranya:

- Terjadinya antrean panjang saat periode pendaftaran mahasiswa baru.

- Tingginya risiko kesalahan (*human error*) dalam pencatatan dan transkripsi data ke buku besar.

- Kesulitan dalam mencari dan mengelola informasi anggota secara cepat.

- Proses validasi dan pembuatan kartu keanggotaan yang lambat.

Untuk mengatasi masalah tersebut, diperlukan aplikasi web LibraryReg yang menyederhanakan alur pendaftaran dan pengelolaan data anggota oleh petugas.

## 3. Spesifikasi Teknis & Arsitektur

Pengembangan pada tahap ini difokuskan sepenuhnya pada antarmuka pengguna (*front-end*). Karena fokus pada pembelajaran UI/UX dan interaksi DOM, sistem tidak akan terhubung dengan *backend* atau *database server* terpusat.

Data anggota dikelola, ditambah, diedit, dan dihapus menggunakan JavaScript. Objek data akan diserialisasi menjadi JSON dan disimpan di dalam window.localStorage untuk memastikan persistensi data selama sesi penjelajahan di *browser* yang sama.


## 4. Kebutuhan Fitur Utama

## A. Landing Page (Halaman Utama)

Berfungsi sebagai pintu masuk yang representatif dan informatif bagi pengunjung. Fitur ini harus mencakup:

- Hero Section: Menampilkan judul aplikasi, deskripsi singkat misi perpustakaan, dan tombol *Call-to- Action* (CTA) untuk mendaftar.

- Informasi Fasilitas: Daftar layanan dan keunggulan perpustakaan (misalnya: ruang baca 24 jam, koleksi jurnal internasional).

- Statistik Ilustratif: Visualisasi angka jumlah koleksi buku dan anggota aktif.

- Footer: Informasi kontak, jam layanan operasional, dan tautan media sosial.

## B. Pengelolaan Menu Navigasi

Navigasi diimplementasikan menggunakan *navbar* responsif (disarankan menggunakan framework Bootstrap). Kriteria navigasi:

- Tautan menu utama: Beranda, Tentang, Layanan, Daftar Anggota, Pendaftaran, dan Login Petugas.

- Harus mengimplementasikan penanda status (kelas .active) pada menu yang sedang dibuka.

## C. Formulir Pendaftaran Anggota

Digitalisasi proses *onboarding* anggota baru dengan validasi ketat di sisi klien (klien-side validation):

- Field Data: Nama Lengkap, NIM/NIP, Program Studi, Alamat Lengkap, Nomor Telepon, Email, dan Jenis Keanggotaan (dropdown: Mahasiswa, Dosen, Tenaga Kependidikan).

- Validasi: Semua kolom wajib diisi (*required*), format email menggunakan regex standar, dan NIM/NIP harus unik (dicek terhadap data *localStorage*).

- Aksi: Jika sukses, form dibersihkan (*reset*) dan data baru ditambahkan ke penyimpanan lokal.

## D. Halaman Pengelolaan Data (Dashboard Petugas)

Antarmuka khusus bagi petugas untuk mengelola basis data anggota secara interaktif:

- Tabel Data: Menampilkan daftar seluruh anggota yang terdaftar secara *real-time*.

- Pencarian Cepat: Kolom filter (*search bar*) untuk mencari berdasarkan Nama atau NIM/NIP.

- Aksi CRUD: Tombol untuk Melihat Detail, Mengedit (mengubah data yang salah), dan Menghapus anggota (wajib menampilkan dialog konfirmasi / *sweetalert*).

- Notifikasi: Umpan balik visual (pesan sukses atau gagal) setiap kali aksi modifikasi dilakukan.

## Ringkasan Prioritas Fitur

| Modul | Fungsi Utama | Penyimpanan Prioritas |   |
| --- | --- | --- | --- |
| Landing Page | Tampilan statis hero section, informasi, statistik, | Statis (HTML) | Medium |
|   | & footer. |   |   |
| Navigasi | Navbar responsif, indikator halaman aktif. | Statis (CSS/JS) | Tinggi |

( )
