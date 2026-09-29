# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## Website Profil SMA Katolik Santo Paulus Jember

**Versi:** 1.0  
**Tanggal riset:** 30 September 2026  
**Jenis produk:** Website profil dan informasi sekolah  
**Platform:** Web responsif  

---

## 1. Ringkasan Produk

Website Profil **SMA Katolik Santo Paulus Jember** merupakan media informasi resmi sekolah yang dirancang untuk menyajikan identitas sekolah, informasi akademik, kegiatan kesiswaan, berita, galeri, SPMB, dan kontak dalam satu pengalaman yang konsisten dan mudah dipahami.

Website ditujukan untuk beberapa kelompok pengguna sekaligus, terutama calon siswa, orang tua/wali, siswa aktif, alumni, guru/staf, serta masyarakat umum.

### Informasi Utama

| Item | Detail |
|---|---|
| Nama Produk | Website Profil SMA Katolik Santo Paulus Jember |
| Jenis Produk | Website informasi institusi dan portal informasi publik sekolah |
| Target Pengguna | Calon siswa, orang tua/wali, siswa aktif, alumni, guru/staf, masyarakat |
| Platform | Web responsif untuk desktop, tablet, dan mobile |
| Tujuan Utama | Menyediakan informasi sekolah secara resmi, terstruktur, menarik, dan mudah diakses |
| Sumber Informasi | Website resmi sekolah dan Data Pendidikan Kemendikdasmen |

---

## 2. Latar Belakang

Website sekolah perlu melayani kebutuhan informasi yang berbeda dalam satu tempat. Calon siswa ingin memahami karakter sekolah, program, kegiatan, fasilitas, dan cara mendaftar. Orang tua membutuhkan informasi yang dapat dipercaya mengenai profil sekolah, pendidikan, fasilitas, dan penerimaan siswa baru. Siswa aktif membutuhkan akses cepat ke berita, pengumuman, agenda, serta aktivitas sekolah.

Karena itu, website tidak hanya berfungsi sebagai profil institusi, tetapi juga sebagai pusat informasi digital sekolah yang mampu memperkenalkan identitas SMA Katolik Santo Paulus Jember secara utuh.

---

## 3. Tujuan Produk

Website memiliki tujuan untuk:

1. Memperkenalkan identitas dan karakter SMA Katolik Santo Paulus Jember.
2. Menyajikan informasi sekolah secara terstruktur dan mudah ditemukan.
3. Memberikan akses cepat ke informasi akademik dan kesiswaan.
4. Menampilkan kegiatan, prestasi, berita, dan dokumentasi sekolah.
5. Menyediakan informasi SPMB yang jelas bagi calon siswa dan orang tua.
6. Menampilkan video profil sekolah sebagai media pengenalan yang lebih menarik.
7. Memudahkan pengunjung menemukan alamat, kontak, dan kanal komunikasi resmi sekolah.
8. Memberikan pengalaman penggunaan yang konsisten pada desktop maupun perangkat mobile.

---

## 4. Target Pengguna

### 4.1 Calon Siswa

Kebutuhan utama:
- Mengenal suasana dan karakter sekolah.
- Mengetahui program akademik dan kegiatan siswa.
- Melihat ekstrakurikuler dan prestasi.
- Mengetahui fasilitas sekolah.
- Mendapatkan informasi SPMB.

### 4.2 Orang Tua / Wali

Kebutuhan utama:
- Mengetahui profil dan kredibilitas sekolah.
- Memahami visi, misi, dan nilai sekolah.
- Melihat fasilitas dan program pendidikan.
- Mengetahui informasi penerimaan siswa baru.
- Mendapatkan kontak resmi sekolah.

### 4.3 Siswa Aktif

Kebutuhan utama:
- Melihat berita dan pengumuman.
- Mengetahui agenda kegiatan.
- Mengakses informasi akademik dan kesiswaan.

### 4.4 Alumni dan Masyarakat

Kebutuhan utama:
- Mengetahui perkembangan sekolah.
- Melihat kegiatan dan prestasi terbaru.
- Menemukan informasi kontak dan kanal resmi sekolah.

---

## 5. Information Architecture

Struktur utama website terdiri atas:

```text
Website SMA Katolik Santo Paulus Jember
│
├── Beranda
│   ├── Hero Section
│   ├── Informasi Singkat Sekolah
│   ├── Akses Cepat
│   ├── Video Profil
│   ├── Berita Terbaru
│   ├── Agenda
│   └── Informasi SPMB
│
├── Profil
│   ├── Tentang Sekolah
│   ├── Sejarah
│   ├── Visi dan Misi
│   ├── Carmel Values
│   ├── Kepala Sekolah
│   └── Identitas Sekolah
│
├── Akademik
│   ├── Program Akademik
│   ├── Pendekatan Pembelajaran
│   ├── Extra Class
│   ├── Fasilitas Akademik
│   └── Kalender Akademik
│
├── Kesiswaan
│   ├── Organisasi dan Pembinaan
│   ├── Ekstrakurikuler
│   ├── Tim Lomba
│   └── Prestasi Siswa
│
├── Berita
│   ├── Berita Sekolah
│   ├── Pengumuman
│   └── Agenda
│
├── Galeri
│   ├── Kegiatan
│   ├── Prestasi
│   ├── Fasilitas
│   └── Video Profil
│
├── SPMB
│   ├── Informasi Pendaftaran
│   ├── Jadwal
│   ├── Alur Pendaftaran
│   ├── FAQ
│   └── Tautan Pendaftaran
│
└── Kontak
    ├── Alamat
    ├── Telepon / Email
    ├── Peta
    ├── Media Sosial
    └── Form Kontak
```

---

## 6. Functional Requirements

### FR-01 — Navigasi Global

Website harus memiliki navigasi utama yang konsisten pada seluruh halaman.

Kebutuhan:
- Logo dan identitas sekolah.
- Menu Beranda, Profil, Akademik, Kesiswaan, Berita, Galeri, SPMB, dan Kontak.
- Penanda halaman aktif.
- Navigasi mobile.
- Tombol akses cepat menuju informasi SPMB.
- Footer yang konsisten pada seluruh halaman.

### FR-02 — Beranda

Beranda menjadi halaman pengenalan utama sekolah.

Komponen:
- Hero section dengan nama sekolah dan pesan utama.
- Foto utama sekolah.
- Tombol menuju Profil dan SPMB.
- Informasi singkat sekolah.
- Akses cepat menuju halaman penting.
- Video profil sekolah.
- Berita terbaru.
- Agenda sekolah.
- Ringkasan kegiatan atau prestasi.
- CTA menuju SPMB.

### FR-03 — Profil Sekolah

Halaman profil harus menyediakan informasi mengenai identitas dan karakter sekolah.

Konten utama:
- Tentang sekolah.
- Sejarah sekolah.
- Visi dan misi.
- Carmel Values.
- Sambutan atau informasi kepala sekolah.
- Identitas resmi sekolah.
- Informasi pendirian dan akreditasi.

### FR-04 — Akademik

Halaman akademik memberikan gambaran mengenai proses dan lingkungan pembelajaran.

Konten utama:
- Pendekatan pembelajaran.
- Program akademik.
- Extra class atau program pengayaan.
- Informasi pendampingan pendidikan lanjutan.
- Fasilitas pembelajaran.
- Laboratorium.
- Kalender akademik atau akses menuju informasi kalender.

### FR-05 — Kesiswaan

Halaman kesiswaan menampilkan pengalaman siswa di luar pembelajaran utama.

Konten utama:
- Pembinaan siswa.
- Organisasi siswa.
- Ekstrakurikuler.
- Tim lomba.
- Prestasi siswa.
- Kegiatan pengembangan karakter.

### FR-06 — Berita dan Pengumuman

Halaman berita digunakan untuk menampilkan informasi terbaru sekolah.

Setiap berita dapat memuat:
- Judul.
- Tanggal.
- Kategori.
- Gambar.
- Ringkasan.

Fitur:
- Filter kategori.
- Daftar berita.
- Pengumuman sekolah.
- Agenda kegiatan.

### FR-07 — Galeri

Galeri digunakan untuk menampilkan dokumentasi visual sekolah.

Kategori yang dapat digunakan:
- Kegiatan sekolah.
- Prestasi.
- Fasilitas.
- Kesiswaan.

Fitur:
- Filter kategori.
- Grid foto.
- Preview foto ukuran lebih besar.
- Video profil sekolah.

### FR-08 — Video Profil

Website harus menyediakan bagian khusus untuk video profil sekolah sebagai media pengenalan audiovisual.

Video dapat ditampilkan pada:
- Beranda.
- Halaman Galeri.

Video menggunakan sumber resmi sekolah.

### FR-09 — SPMB

Halaman SPMB menjadi pusat informasi bagi calon siswa dan orang tua.

Konten utama:
- Informasi tahun penerimaan.
- Periode pendaftaran.
- Alur pendaftaran.
- Informasi yang perlu dipersiapkan calon siswa.
- FAQ.
- Kontak untuk pertanyaan SPMB.
- Tombol menuju portal pendaftaran resmi.

Informasi SPMB yang digunakan pada website mengikuti publikasi resmi sekolah untuk **SPMB 2027/2028**.

### FR-10 — Kontak

Halaman kontak menyediakan informasi komunikasi resmi sekolah.

Konten:
- Alamat sekolah.
- Nomor telepon.
- Email.
- Peta lokasi.
- Media sosial.
- Form kontak.

### FR-11 — Pencarian

Website menyediakan pencarian sederhana untuk membantu pengunjung menemukan halaman atau informasi utama.

Pencarian minimal dapat menemukan:
- Profil.
- Akademik.
- Kesiswaan.
- Berita.
- Galeri.
- SPMB.
- Kontak.

### FR-12 — Interaksi Halaman

Interaksi yang disediakan meliputi:
- Navigasi mobile.
- Filter berita.
- Filter galeri.
- Preview foto.
- FAQ expandable/collapsible.
- Pencarian.
- Validasi form kontak.

---

## 7. Content Requirements

Konten yang ditampilkan harus memenuhi prinsip berikut:

1. Fakta utama sekolah menggunakan sumber resmi sekolah atau pemerintah.
2. Informasi yang dapat berubah dari waktu ke waktu harus mengikuti publikasi terbaru.
3. Informasi SPMB diarahkan menuju portal atau sumber resmi sekolah.
4. Foto sekolah ditampilkan secara natural tanpa manipulasi visual yang mengubah isi dokumentasi.
5. Gambar berita dan galeri menggunakan dokumentasi yang relevan dengan isi konten.
6. Bahasa yang digunakan formal, jelas, tetapi tetap ramah bagi siswa dan orang tua.
7. Website tidak menggunakan istilah yang memberi kesan sebagai demo, prototype, redesign, atau tugas.

---

## 8. Data Sekolah yang Ditampilkan

Beberapa informasi identitas yang dapat digunakan pada website berdasarkan sumber resmi:

| Informasi | Nilai |
|---|---|
| Nama Sekolah | SMA Katolik Santo Paulus Jember |
| NPSN | 20523807 |
| Tahun Berdiri | 1951 |
| Tanggal Berdiri | 1 Agustus 1951 |
| Akreditasi | A |
| Alamat | Jl. Trunojoyo 22C, Jember |
| Naungan | Yayasan Sancta Maria Malang |

Informasi yang bersifat dinamis perlu disesuaikan apabila terdapat pembaruan dari sekolah.

---

## 9. Non-Functional Requirements

### 9.1 Responsive Design

Website harus nyaman digunakan pada:
- Desktop.
- Tablet.
- Smartphone.

Layout harus menyesuaikan ukuran layar tanpa menghilangkan informasi utama.

### 9.2 Accessibility

Website sebaiknya memenuhi kebutuhan dasar aksesibilitas:
- Kontras teks yang jelas.
- Ukuran teks nyaman dibaca.
- Struktur heading yang konsisten.
- Alt text pada gambar informatif.
- Tombol dan tautan dapat digunakan dengan keyboard.
- Navigasi mobile mudah dioperasikan.

### 9.3 Performance

Website harus:
- Memuat halaman dengan cepat.
- Menghindari aset yang tidak diperlukan.
- Mengoptimalkan ukuran gambar.
- Menggunakan lazy loading pada media yang sesuai.

### 9.4 Consistency

Seluruh halaman harus mempertahankan:
- Header yang sama.
- Footer yang sama.
- Gaya tombol yang konsisten.
- Tipografi konsisten.
- Spacing dan hierarki visual konsisten.

---

## 10. Visual Direction

Arah visual website dibuat untuk memberikan kesan:

- Institusional.
- Hangat.
- Modern.
- Rapi.
- Kredibel.
- Tidak terasa seperti template sekolah generik.

Palet warna utama menggunakan nuansa yang selaras dengan identitas sekolah, terutama warna cokelat tua, emas, krem, dan warna netral pendukung.

Foto digunakan sebagai elemen utama untuk menunjukkan lingkungan sekolah, kegiatan siswa, fasilitas, dan dokumentasi nyata.

---

## 11. User Flow

### 11.1 Calon Siswa

```text
Beranda
→ Profil
→ Akademik / Kesiswaan
→ Galeri / Prestasi
→ SPMB
→ Portal Pendaftaran Resmi
```

### 11.2 Orang Tua / Wali

```text
Beranda
→ Profil
→ Akademik
→ Fasilitas
→ SPMB
→ Kontak
```

### 11.3 Siswa Aktif

```text
Beranda
→ Berita
→ Pengumuman / Agenda
→ Kesiswaan
```

### 11.4 Pengunjung Umum

```text
Beranda
→ Profil
→ Berita / Galeri
→ Kontak
```

---

## 12. Acceptance Criteria

Website dianggap memenuhi kebutuhan apabila:

- [ ] Beranda dapat diakses dengan baik.
- [ ] Halaman Profil tersedia dan memuat identitas sekolah.
- [ ] Halaman Akademik tersedia.
- [ ] Halaman Kesiswaan tersedia.
- [ ] Halaman Berita tersedia.
- [ ] Halaman Galeri tersedia.
- [ ] Halaman SPMB tersedia.
- [ ] Halaman Kontak tersedia.
- [ ] Navigasi antarhalaman berfungsi.
- [ ] Tidak terdapat tautan internal yang rusak.
- [ ] Tampilan dapat digunakan pada desktop dan mobile.
- [ ] Video profil dapat diakses.
- [ ] Filter berita berfungsi.
- [ ] Filter galeri berfungsi.
- [ ] Preview gambar galeri berfungsi.
- [ ] FAQ SPMB dapat dibuka dan ditutup.
- [ ] Informasi kontak sekolah tersedia.
- [ ] SPMB memiliki CTA menuju sumber pendaftaran resmi.
- [ ] Footer tampil konsisten pada seluruh halaman.
- [ ] Website tidak menampilkan label seperti "redesign", "prototype", atau istilah pengembangan kepada pengunjung.

---

## 13. Batasan Scope

Versi ini berfokus pada website informasi publik sekolah.

Fitur berikut berada di luar scope:
- Login siswa.
- Login orang tua.
- Login guru atau admin.
- Sistem pembayaran.
- Pendaftaran siswa langsung di dalam website.
- Dashboard administrasi.
- Manajemen berita melalui CMS.
- Penyimpanan pesan kontak ke database.

Fitur tersebut dapat dikembangkan pada tahap berikutnya apabila dibutuhkan.

---

## 14. Pengembangan Selanjutnya

Pengembangan berikutnya dapat mencakup:

- CMS berita dan agenda.
- Dashboard admin.
- Portal siswa dan orang tua.
- Integrasi kalender sekolah.
- Sistem pencarian konten yang lebih luas.
- Form kontak tersimpan.
- Integrasi pengumuman akademik.
- Integrasi sistem SPMB.
- Statistik pengunjung.

---

## 15. Sumber Riset

Informasi pada PRD menggunakan referensi utama berikut:

1. Website resmi SMA Katolik Santo Paulus Jember  
   https://saintpauljember.sch.id/

2. Profil SMA Katolik Santo Paulus Jember  
   https://saintpauljember.sch.id/profil/

3. Visi, Misi, dan Carmel Values  
   https://saintpauljember.sch.id/visi-misi/

4. Fasilitas Sekolah  
   https://saintpauljember.sch.id/fasilitas/

5. Ekstrakurikuler  
   https://saintpauljember.sch.id/ekskul/

6. Prestasi  
   https://saintpauljember.sch.id/prestasi/

7. SPMB SMAK Santo Paulus 2027/2028  
   https://saintpauljember.sch.id/spmb-smak-st-paulus-2027-2028/

8. Video Profil SMAK Santo Paulus  
   https://saintpauljember.sch.id/video/profile-video-smak-santo-paulus-2024/

9. Data Pendidikan Kemendikdasmen — NPSN 20523807  
   https://referensi.data.kemendikdasmen.go.id/tabs.php?npsn=20523807
