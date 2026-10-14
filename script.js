// ===== VARIABEL: wadah untuk menyimpan data =====
let hitungan = 0;   // angka hitungan sekarang
let target = 33;    // target dzikir

// ===== Ambil elemen dari halaman HTML =====
const elAngka = document.getElementById("angka");
const elTeksTarget = document.getElementById("teks-target");
const elPesan = document.getElementById("pesan");
const elInputTarget = document.getElementById("input-target");

// ===== FUNGSI: kumpulan perintah yang diberi nama =====

// Menyimpan data ke browser supaya tidak hilang saat di-refresh
function simpan() {
  localStorage.setItem("hitungan", hitungan);
  localStorage.setItem("target", target);
}

// Mengambil data yang tersimpan (kalau ada)
function muat() {
  const hitunganTersimpan = localStorage.getItem("hitungan");
  const targetTersimpan = localStorage.getItem("target");

  if (hitunganTersimpan !== null) {
    hitungan = Number(hitunganTersimpan);
  }
  if (targetTersimpan !== null) {
    target = Number(targetTersimpan);
  }
}

// Menampilkan nilai variabel ke layar
function tampilkan() {
  elAngka.textContent = hitungan;
  elTeksTarget.textContent = target;
}

// Dijalankan saat tombol +1 ditekan
function tambah() {
  hitungan = hitungan + 1;

  // IF: apakah hitungan sudah sama dengan target?
  if (hitungan === target) {
    elPesan.textContent = "Target tercapai! Alhamdulillah.";
    if (navigator.vibrate) {
      navigator.vibrate(300); // getarkan HP (kalau didukung)
    }
  } else {
    elPesan.textContent = "";
  }

  simpan();
  tampilkan();
}

// Dijalankan saat tombol Reset ditekan
function reset() {
  hitungan = 0;
  elPesan.textContent = "";
  simpan();
  tampilkan();
}

// Dijalankan saat tombol Simpan target ditekan
function ubahTarget() {
  const nilai = Number(elInputTarget.value);

  // IF: target harus angka bulat lebih dari 0
  if (elInputTarget.value === "" || !Number.isInteger(nilai) || nilai < 1) {
    elPesan.textContent = "Target harus angka bulat lebih dari 0.";
  } else {
    target = nilai;
    elPesan.textContent = "Target diubah menjadi " + target + ".";
    elInputTarget.value = "";
    simpan();
    tampilkan();
  }
}

// ===== Sambungkan tombol dengan fungsi =====
document.getElementById("tombol-tambah").addEventListener("click", tambah);
document.getElementById("tombol-reset").addEventListener("click", reset);
document.getElementById("tombol-simpan-target").addEventListener("click", ubahTarget);

// ===== Saat halaman dibuka =====
muat();
tampilkan();