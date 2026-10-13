function bukaHalaman(id) {
  document.querySelectorAll(".halaman").forEach(function (halaman) {
    halaman.classList.remove("aktif");
  });

  document.getElementById(id).classList.add("aktif");
  window.location.hash = id === "beranda" ? "" : id;
  window.scrollTo(0, 0);
}

window.bukaHalaman = bukaHalaman;

var mahasiswa = [
  {
    nama: "Asher Yedijah Hoesono",
    nim: "5025251106",
    mataKuliah: "Pemrograman Web",
    dosen: "Dr. Fajar Baskoro, S.Kom., M.T.",
  },
  {
    nama: "Dimas Adiyaksa",
    nim: "5025251107",
    mataKuliah: "Pemrograman Web",
    dosen: "Dr. Fajar Baskoro, S.Kom., M.T.",
  },
  {
    nama: "Dimas Maulana Putra",
    nim: "5025251108",
    mataKuliah: "Basis Data",
    dosen: "Ir. Siti Rochimah, M.T., Ph.D.",
  },
  {
    nama: "Marveilleux Putra Mahasura",
    nim: "5025251109",
    mataKuliah: "Interaksi Manusia Komputer",
    dosen: "Dwi Sunaryono, S.Kom., M.Kom.",
  },
  {
    nama: "Muhammad Fauzta Putra Kavie",
    nim: "5025251110",
    mataKuliah: "Pemrograman Web",
    dosen: "Dr. Fajar Baskoro, S.Kom., M.T.",
  },
  {
    nama: "Ahmad Rafli Syarif Attallah",
    nim: "5025251111",
    mataKuliah: "Basis Data",
    dosen: "Ir. Siti Rochimah, M.T., Ph.D.",
  },
  {
    nama: "Faizaturrahmah Baity",
    nim: "5025251112",
    mataKuliah: "Interaksi Manusia Komputer",
    dosen: "Dwi Sunaryono, S.Kom., M.Kom.",
  },
];

var inputNama = document.getElementById("namaMahasiswa");
var rekomendasiNama = document.getElementById("rekomendasiNama");

inputNama.addEventListener("input", function () {
  var kata = inputNama.value.toLowerCase();
  rekomendasiNama.innerHTML = "";

  if (kata === "") {
    return;
  }

  mahasiswa
    .filter(function (data) {
      return data.nama.toLowerCase().includes(kata);
    })
    .forEach(function (data) {
      var tombol = document.createElement("button");
      tombol.type = "button";
      tombol.textContent = data.nama + " (" + data.nim + ")";
      tombol.addEventListener("click", function () {
        inputNama.value = data.nama;
        document.getElementById("nim").value = data.nim;
        document.getElementById("mataKuliah").value = data.mataKuliah;
        document.getElementById("dosen").value = data.dosen;
        rekomendasiNama.innerHTML = "";
      });
      rekomendasiNama.appendChild(tombol);
    });
});

document.getElementById("formMahasiswa").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("hasilMahasiswa").textContent =
    "Data registrasi " + inputNama.value + " berhasil disimpan.";
});

var dataKodePos = {
  "DKI Jakarta": {
    "Jakarta Selatan": {
      "Kebayoran Baru": {
        kode: "12110",
        daerah: "Gunung, Kramat Pela, Melawai, Petogogan, Pulo, Rawa Barat, Selong, Senayan",
      },
      Tebet: {
        kode: "12810",
        daerah: "Bukit Duri, Kebon Baru, Manggarai, Menteng Dalam, Tebet Barat, Tebet Timur",
      },
      Cilandak: {
        kode: "12430",
        daerah: "Cilandak Barat, Cipete Selatan, Gandaria Selatan, Lebak Bulus, Pondok Labu",
      },
    },
    "Jakarta Pusat": {
      Menteng: {
        kode: "10310",
        daerah: "Cikini, Gondangdia, Kebon Sirih, Menteng, Pegangsaan",
      },
      "Tanah Abang": {
        kode: "10210",
        daerah: "Bendungan Hilir, Gelora, Kampung Bali, Karet Tengsin, Petamburan",
      },
    },
  },
  "Jawa Barat": {
    "Kota Bandung": {
      Coblong: {
        kode: "40132",
        daerah: "Cipaganti, Dago, Lebak Gede, Lebak Siliwangi, Sadang Serang, Sekeloa",
      },
      Sukajadi: {
        kode: "40161",
        daerah: "Cipedes, Pasteur, Sukabungah, Sukagalih, Sukawarna",
      },
    },
    "Kota Bogor": {
      "Bogor Tengah": {
        kode: "16121",
        daerah: "Babakan, Cibogor, Gudang, Kebon Kalapa, Pabaton, Paledang",
      },
      "Bogor Utara": {
        kode: "16151",
        daerah: "Bantarjati, Cibuluh, Ciluar, Cimahpar, Tanah Baru, Tegalgundil",
      },
    },
  },
  "Jawa Timur": {
    "Kota Surabaya": {
      Sukolilo: {
        kode: "60111",
        daerah: "Gebang Putih, Keputih, Klampis Ngasem, Medokan Semampir, Menur Pumpungan",
      },
      Gubeng: {
        kode: "60281",
        daerah: "Airlangga, Baratajaya, Gubeng, Kertajaya, Mojo, Pucang Sewu",
      },
    },
    "Kabupaten Sidoarjo": {
      Waru: {
        kode: "61256",
        daerah: "Berbek, Bungurasih, Janti, Kedungrejo, Kepuhkiriman, Kureksari",
      },
      Taman: {
        kode: "61257",
        daerah: "Bebekan, Geluran, Kalijaten, Ketegan, Kletek, Sepanjang, Wage",
      },
    },
  },
  "DI Yogyakarta": {
    "Kota Yogyakarta": {
      Gondokusuman: {
        kode: "55221",
        daerah: "Baciro, Demangan, Klitren, Kotabaru, Terban",
      },
      Umbulharjo: {
        kode: "55161",
        daerah: "Giwangan, Muja Muju, Pandeyan, Semaki, Sorosutan, Tahunan, Warungboto",
      },
    },
    "Kabupaten Sleman": {
      Depok: {
        kode: "55281",
        daerah: "Caturtunggal, Condongcatur, Maguwoharjo",
      },
      Mlati: {
        kode: "55284",
        daerah: "Sendangadi, Sinduadi, Sumberadi, Tirtoadi, Tlogoadi",
      },
    },
  },
};

var provinsi = document.getElementById("provinsi");
var kabupaten = document.getElementById("kabupaten");
var kecamatan = document.getElementById("kecamatan");

function tambahPilihan(select, daftar, teksAwal) {
  select.innerHTML = '<option value="">-- ' + teksAwal + " --</option>";
  daftar.forEach(function (item) {
    var option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    select.appendChild(option);
  });
}

tambahPilihan(provinsi, Object.keys(dataKodePos), "Pilih Provinsi");

provinsi.addEventListener("change", function () {
  var daftarKabupaten = provinsi.value ? Object.keys(dataKodePos[provinsi.value]) : [];
  tambahPilihan(kabupaten, daftarKabupaten, "Pilih Kabupaten/Kota");
  tambahPilihan(kecamatan, [], "Pilih Kecamatan");
  kabupaten.disabled = provinsi.value === "";
  kecamatan.disabled = true;
});

kabupaten.addEventListener("change", function () {
  var daftarKecamatan = kabupaten.value
    ? Object.keys(dataKodePos[provinsi.value][kabupaten.value])
    : [];
  tambahPilihan(kecamatan, daftarKecamatan, "Pilih Kecamatan");
  kecamatan.disabled = kabupaten.value === "";
});

document.getElementById("formKodePos").addEventListener("submit", function (event) {
  event.preventDefault();
  var data = dataKodePos[provinsi.value][kabupaten.value][kecamatan.value];
  var hasil = document.getElementById("hasilKodePos");
  hasil.innerHTML =
    "<b>Kode Pos: " +
    data.kode +
    "</b><br>Provinsi: " +
    provinsi.value +
    "<br>Kabupaten/Kota: " +
    kabupaten.value +
    "<br>Kecamatan: " +
    kecamatan.value +
    "<br>Kelurahan/Daerah: " +
    data.daerah;
  hasil.classList.remove("tidak-tampil");
});

document.getElementById("formValidasi").addEventListener("submit", function (event) {
  event.preventDefault();

  var nilai = {
    name: document.getElementById("name").value.trim(),
    address: document.getElementById("address").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
    course: document.getElementById("course").value,
    college: document.getElementById("college").value.trim(),
  };

  var pesan = {
    name: nilai.name.length < 3 ? "Nama minimal 3 karakter." : "",
    address: nilai.address.length < 10 ? "Alamat harus ditulis lebih lengkap." : "",
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nilai.email)
      ? ""
      : "Format email tidak valid.",
    password:
      nilai.password.length >= 8 && /\d/.test(nilai.password)
        ? ""
        : "Password minimal 8 karakter dan harus memiliki angka.",
    course: nilai.course === "" ? "Course harus dipilih." : "",
    college: nilai.college.length < 3 ? "College name harus diisi." : "",
  };

  var valid = true;
  Object.keys(pesan).forEach(function (nama) {
    var input = document.getElementById(nama);
    var error = document.getElementById(
      "error" + nama.charAt(0).toUpperCase() + nama.slice(1),
    );
    error.textContent = pesan[nama];
    input.classList.toggle("input-error", pesan[nama] !== "");
    if (pesan[nama] !== "") {
      valid = false;
    }
  });

  document.getElementById("hasilValidasi").textContent = valid
    ? "Registrasi berhasil. Semua data sudah valid."
    : "";
});

var dataProgram = {
  "Teknologi Informasi": [
    "Teknik Informatika",
    "Sistem Informasi",
    "Teknologi Informasi",
  ],
  Teknik: ["Teknik Sipil", "Teknik Mesin", "Teknik Elektro", "Arsitektur"],
  "Ekonomi dan Bisnis": ["Manajemen", "Akuntansi", "Ekonomi Pembangunan"],
  "Sains dan Analitika Data": ["Matematika", "Statistika", "Sains Data", "Aktuaria"],
};

var fakultas = document.getElementById("fakultas");
var programStudi = document.getElementById("programStudi");

fakultas.addEventListener("change", function () {
  var daftarProgram = fakultas.value ? dataProgram[fakultas.value] : [];
  tambahPilihan(programStudi, daftarProgram, "Pilih Program Studi");
  programStudi.disabled = fakultas.value === "";
});

document.getElementById("formDropdown").addEventListener("submit", function (event) {
  event.preventDefault();
  var hasil = document.getElementById("hasilDropdown");
  hasil.innerHTML =
    "<b>Hasil Pilihan:</b><br>Fakultas: " +
    fakultas.value +
    "<br>Program Studi: " +
    programStudi.value +
    "<br>Tahun Masuk: " +
    document.getElementById("tahun").value;
  hasil.classList.remove("tidak-tampil");
});

var halamanAwal = window.location.hash.substring(1);
if (document.getElementById(halamanAwal)) {
  bukaHalaman(halamanAwal);
}
