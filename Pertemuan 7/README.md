# Laporan Tugas Bootstrap — Pertemuan 7

**Nama:** Asher Yedijah Hoesono  
**NRP:** 5025251106  
**Mata Kuliah:** Pemrograman Web  
**Pertemuan:** 7
**Source Code:**
**Link:**

## Deskripsi

Pada pertemuan ini dibuat dua halaman web menggunakan **Bootstrap 5.3.3**. Tugas pertama berupa portal berita kampus, sedangkan tugas kedua berupa antarmuka sign in dan sign up. Bootstrap digunakan untuk menyusun layout responsif serta komponen seperti card, form, tombol, alert, dan modal.

## Tujuan Pembelajaran

- Menggunakan Bootstrap melalui CDN.
- Menyusun layout responsif dengan container, grid, dan breakpoint.
- Menggunakan komponen serta utility class Bootstrap untuk membangun antarmuka.
- Menambahkan interaksi form sederhana dengan JavaScript.

## 1. Portal Berita ITS

File: [`tugas-1/index.html`](./tugas-1/index.html)

Halaman portal berita menampilkan informasi kampus dalam susunan yang mudah dibaca.

**Fitur dan komponen:**

- Header dengan nama portal dan navigasi.
- Menu kategori berita menggunakan komponen list group.
- Daftar berita terbaru dalam card.
- Artikel berita utama.
- Footer dengan tautan informasi.
- Layout grid yang berubah mengikuti lebar layar: menu kategori berada di atas konten pada layar kecil dan di sisi konten pada layar lebih lebar.

## 2. Halaman Sign In dan Sign Up

File: [`tugas-2/index.html`](./tugas-2/index.html)

Halaman autentikasi menyediakan form masuk dan pendaftaran akun dalam satu tampilan.

**Fitur dan komponen:**

- Layout dua kolom responsif dengan panel sambutan dan panel form.
- Form sign in dengan email, password, dan pilihan untuk mengingat email.
- Form sign up dengan nama depan, nama belakang, nama tampilan, email, password, dan konfirmasi password.
- Tombol untuk berpindah antara form sign in dan sign up.
- Tombol tampil/sembunyikan password.
- Validasi kecocokan password saat pengguna mengetik dan saat form dikirim.
- Modal Syarat & Ketentuan serta alert untuk menampilkan status.
- Email sign in dapat disimpan di `localStorage` ketika pilihan “Remember password” dicentang.

> Form ini merupakan simulasi antarmuka sisi browser. Belum ada autentikasi, pembuatan akun, atau penyimpanan data pengguna ke server.

## Struktur File

```text
Pertemuan 7/
├── README.md
├── tugas-1/
│   └── index.html
└── tugas-2/
    └── index.html
```
