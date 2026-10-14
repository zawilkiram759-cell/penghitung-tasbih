# Penghitung Tasbih

Aplikasi web sederhana untuk menghitung dzikir dengan satu tombol. Dibuat sebagai tugas vibe coding Praktikum Algoritma dan Pemrograman.

**Link aplikasi:** https://zawilkiram759-cell.github.io/penghitung-tasbih/

## Masalah dan solusi
Menghitung dzikir dengan jari sering membuat hitungan terlewat. Aplikasi ini menghitung otomatis lewat satu tombol besar yang nyaman ditap di HP, dan hitungannya tidak hilang walau halaman ditutup.

## Fitur
- Tombol **+1** untuk menambah hitungan
- Tombol **Reset** untuk mengembalikan hitungan ke 0
- Target dzikir bisa diubah (bawaan 33)
- Pesan "Target tercapai" dan getar HP saat hitungan sama dengan target
- Validasi: target harus angka bulat lebih dari 0
- Hitungan dan target tersimpan di browser (localStorage)

## Teknologi
HTML, CSS, dan JavaScript tanpa framework. Dipublikasikan dengan GitHub Pages.

## Cara menjalankan
Buka `index.html` di browser, atau kunjungi link aplikasi di atas.

## Proses vibe coding
- Master prompt yang digunakan ada di [PROMPT.md](PROMPT.md)
- Alur kerja: ide, prompt terstruktur, rencana dari AI, kode, uji di lokal, perbaikan error lewat Console browser, commit dan push ke GitHub, deploy ke GitHub Pages
- Kendala yang dialami: kode `script.js` sempat tertempel sebagian sehingga muncul `SyntaxError: Unexpected end of input`; diperbaiki dengan menempel ulang kode lengkap

## Pembuat
Zawil Kiram, TRO 26, Sekolah Vokasi Undip