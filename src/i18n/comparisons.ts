import { comparisons, type Comparison } from "@/data/comparisons";
import type { Lang } from "./types";

/**
 * Terjemahan Bahasa Indonesia untuk enam pasangan “Dulu vs Kini”.
 * Struktur dan tautan arsip sama persis dengan versi Inggris —
 * hanya prosa yang diterjemahkan.
 */
const comparisonsId: Comparison[] = [
  {
    id: "front-door",
    kicker: "Pasangan 01",
    title: "Tempat Anda di web",
    thesis:
      "Pada 1998 Anda membangun halaman lalu memberi tahu orang di mana alamatnya. Kini Anda mengisi profil dan sebuah sistem menentukan siapa yang melihatnya. Satuan penerbitan pribadi berubah dari dokumen yang Anda miliki menjadi akun yang Anda sewa — dan bersamanya berubah pula desain presentasi diri.",
    rows: [
      {
        axis: "Perkakas terbit",
        then: "Penyunting teks, klien FTP, dan HTML apa pun yang bisa disalin dari halaman tetangga.",
        now: "Aplikasi berkamera dengan templat dan komposer; format di baliknya tak terlihat.",
      },
      {
        axis: "Alamat",
        then: "Path deskriptif di dalam sebuah perkampungan, mis. geocities.com/SiliconValley/Port/1234.",
        now: "Nama akun di platform, mis. @nama — hanya portabel jika platform mengizinkan Anda pergi.",
      },
      {
        axis: "Audiens",
        then: "Siapa pun yang mengikuti tautan Anda, bergabung ke webring, atau menandatangani buku tamu.",
        now: "Umpan berperingkat berisi orang yang mungkin tak pernah Anda pilih, dipilihkan untuk Anda.",
      },
      {
        axis: "Kepemilikan",
        then: "Berkas Anda, di hos yang bisa — dan pada 2009 benar-benar — menghapusnya dalam semalam.",
        now: "Konten Anda, di dalam basis data yang diatur syarat layanan dan antrean moderasi.",
      },
    ],
    then: {
      label: "Dulu",
      years: "1998",
      title: "Halaman muka rakitan tangan",
      artifactId: "geocities",
      points: [
        { label: "Dibuat oleh", value: "Pemiliknya, karakter demi karakter" },
        { label: "Bahasa desain", value: "Latar berubin, penghitung kunjungan, webring" },
        { label: "Biaya", value: "Hos gratis, dibayar dengan iklan spanduk" },
      ],
    },
    now: {
      label: "Kini",
      years: "2025",
      title: "Profil algoritmik",
      artifactId: "tiktok",
      points: [
        { label: "Dibuat oleh", value: "Pemiliknya, disaring lewat perkakas platform" },
        { label: "Bahasa desain", value: "Media vertikal selayar penuh, seragam di semua akun" },
        { label: "Biaya", value: "Gratis dipakai; perhatian dan data adalah bayarannya" },
      ],
    },
  },
  {
    id: "finding-things",
    kicker: "Pasangan 02",
    title: "Menemukan apa pun",
    thesis:
      "Penemuan berpindah dari penilaian manusia ke penilaian statistik lalu ke teks generatif. Setiap langkah membuat jawaban lebih cepat dan lebih sulit diperiksa: Anda bisa membaca kategori direktori dan tidak setuju dengannya, tetapi jawaban yang muncul dalam keadaan sudah tertulis jauh lebih sulit diperdebatkan.",
    rows: [
      {
        axis: "Metode",
        then: "Penyunting meninjau situs lalu memasukkannya ke hierarki kategori.",
        now: "Sistem temu kembali membaca korpus dan model bahasa meringkasnya.",
      },
      {
        axis: "Yang Anda terima",
        then: "Daftar tempat untuk dikunjungi, diurutkan menurut kategori dan penilaian penyunting.",
        now: "Sebuah paragraf bersitasi, di atas daftar tempat yang lebih pendek.",
      },
      {
        axis: "Cara gagalnya",
        then: "Kategori kedaluwarsa, tautan mati, dan situs yang tak pernah diarsipkan.",
        now: "Jawaban salah yang disampaikan dengan percaya diri, dibuat dari sumber yang tak pernah dimaksudkan untuk dipercaya.",
      },
      {
        axis: "Kepercayaan",
        then: "Ditaruh pada institusi — tim editorial bernama di perusahaan bernama.",
        now: "Ditaruh pada sistem yang kriteria pemeringkatannya tidak dipublikasikan.",
      },
    ],
    then: {
      label: "Dulu",
      years: "1998",
      title: "Direktori terkurasi",
      artifactId: "yahoo-directory",
      points: [
        { label: "Pintu masuk", value: "Jelajahi kategori, atau ketik kata kunci" },
        { label: "Batas skala", value: "Penyunting manusia tak sanggup mengejar pertumbuhan" },
        { label: "Hasil akhir", value: "Ditutup 31 Desember 2014" },
      ],
    },
    now: {
      label: "Kini",
      years: "2024",
      title: "Ringkasan generatif",
      artifactId: "ai-overviews",
      points: [
        { label: "Pintu masuk", value: "Sebuah pertanyaan, dalam bahasa sehari-hari" },
        { label: "Batas skala", value: "Provenans, hak cipta, dan akurasi" },
        { label: "Hasil akhir", value: "Pencarian yang mengutamakan jawaban, masih diregulasi" },
      ],
    },
  },
  {
    id: "presence",
    kicker: "Pasangan 03",
    title: "Daring bersama orang lain",
    thesis:
      "Internet awal meminta Anda memilih dengan siapa berbicara, lalu menunjukkan apakah mereka tersedia. Internet kini menunjukkan konten dari orang asing dan membiarkan Anda membalas sesudahnya. Kehadiran menjadi siaran, dan graf sosial menjadi graf rekomendasi.",
    rows: [
      {
        axis: "Arah",
        then: "Anda memulai: pilih nama dari daftar buatan Anda, ketik, tunggu balasan.",
        now: "Umpan memulai: konten berdatangan, dan Anda menanggapi apa yang dimunculkan.",
      },
      {
        axis: "Keterlihatan",
        then: "Status eksplisit — daring, pergi, tak terlihat — dipilih oleh orangnya.",
        now: "Keterlibatan yang disimpulkan, diukur platform dan jarang ditunjukkan ke pengguna.",
      },
      {
        axis: "Bentuk grup",
        then: "Jendela satu lawan satu, sesekali ruang obrolan kecil.",
        now: "Kanal grup persisten dan utas komentar publik dalam skala besar.",
      },
      {
        axis: "Jejak",
        then: "Bawaan fana; log tersimpan di mesin Anda sendiri.",
        now: "Bawaan terarsip, dapat dicari dan dikutip bertahun-tahun kemudian.",
      },
    ],
    then: {
      label: "Dulu",
      years: "1996",
      title: "Daftar teman",
      artifactId: "icq",
      points: [
        { label: "Sinyal", value: "Siapa yang daring, saat ini juga" },
        { label: "Bunyi", value: "Nada notifikasi berarti sesuatu" },
        { label: "Identitas", value: "Sebuah nomor, dipilih sekali, dipakai bertahun-tahun" },
      ],
    },
    now: {
      label: "Kini",
      years: "2022",
      title: "Linimasa terfederasi",
      artifactId: "fediverse-mastodon",
      points: [
        { label: "Sinyal", value: "Apa yang diterbitkan instansi Anda, berurutan" },
        { label: "Bunyi", value: "Notifikasi diperingkat dan dikelompokkan" },
        { label: "Identitas", value: "Akun yang dapat berpindah antarserver" },
      ],
    },
  },
  {
    id: "machine",
    kicker: "Pasangan 04",
    title: "Mesin yang Anda pakai",
    thesis:
      "Desktop adalah tujuan: ruangan, kursi, sesi terjadwal yang berawal dan berakhir. Ponsel adalah lapisan di atas segalanya, itulah sebabnya makna “luring” berubah — tak ada lagi jendela untuk ditutup.",
    rows: [
      {
        axis: "Sesi",
        then: "Tersambung, bekerja, terputus. Salurannya tak bisa dipakai menelepon pada saat yang sama.",
        now: "Selalu tersambung; sesi tak pernah benar-benar mulai atau selesai.",
      },
      {
        axis: "Masukan",
        then: "Papan ketik dan tetikus dua tombol, dengan menu dan jendela.",
        now: "Kaca, gestur, dan papan ketik perangkat lunak; suara dan kamera sebagai masukan.",
      },
      {
        axis: "Perangkat lunak",
        then: "Dipasang dari disket, jarang diperbarui, umumnya bisa dipakai luring.",
        now: "Aplikasi yang terus diperbarui, umumnya tak berguna tanpa koneksi.",
      },
      {
        axis: "Kecepatan",
        then: "Kira-kira 14,4–56 kbit/s lewat saluran telepon.",
        now: "Pitalebar seluler dan fiber, jauh lebih cepat, dengan video sebagai muatan bawaan.",
      },
    ],
    then: {
      label: "Dulu",
      years: "1995",
      title: "Komputer desktop",
      artifactId: "windows-95",
      points: [
        { label: "Antarmuka", value: "Menu Start, bilah tugas, jendela" },
        { label: "Koneksi", value: "Modem dan nomor telepon" },
        { label: "Tempat", value: "Meja, di ruangan, pada waktu tertentu" },
      ],
    },
    now: {
      label: "Kini",
      years: "2007 →",
      title: "Komputer saku",
      artifactId: "iphone",
      points: [
        { label: "Antarmuka", value: "Kaca multisentuh, satu tombol" },
        { label: "Koneksi", value: "Data seluler, Wi-Fi, perpindahan mulus" },
        { label: "Tempat", value: "Di mana pun Anda berada" },
      ],
    },
  },
  {
    id: "moving-pictures",
    kicker: "Pasangan 05",
    title: "Membuat dan menonton gambar bergerak",
    thesis:
      "Mula-mula web mendapat animasi, digambar tangan di dalam sebuah plugin. Lalu web mendapat video, diunggah siapa pun yang berkamera. Hambatan kreatif berpindah dari keterampilan dan perkakas ke perhatian — itulah sebabnya formatnya terus menyusut.",
    rows: [
      {
        axis: "Format",
        then: "Animasi vektor dan adegan interaktif di dalam plugin peramban.",
        now: "Video tersandi, dialirkan progresif, kian vertikal dan pendek.",
      },
      {
        axis: "Siapa bisa membuat",
        then: "Siapa pun yang mempelajari perkakasnya — hambatan keterampilan yang nyata, tetapi hambatan biaya yang rendah.",
        now: "Siapa pun yang berponsel; perkakas sunting tertanam di aplikasi penerbitnya.",
      },
      {
        axis: "Distribusi",
        then: "Dibenamkan di halaman; halamannya harus dimuat dulu.",
        now: "Umpan klip rekomendasi, ditonton tanpa halaman perantara.",
      },
      {
        axis: "Keawetan",
        then: "Sebagian besar hilang: plugin ditarik pada 2020 dan hanya emulasi yang melestarikan karyanya.",
        now: "Terpelihara di basis data platform, tetapi tunduk pada takedown dan penghapusan akun.",
      },
    ],
    then: {
      label: "Dulu",
      years: "1996",
      title: "Animasi plugin",
      artifactId: "macromedia-flash",
      points: [
        { label: "Medium", value: "Vektor gambar, linimasa, dan ActionScript" },
        { label: "Rumah", value: "Portal seperti Newgrounds" },
        { label: "Nasib", value: "Pemutar diblokir 31 Desember 2020" },
      ],
    },
    now: {
      label: "Kini",
      years: "2005 →",
      title: "Video unggahan",
      artifactId: "youtube",
      points: [
        { label: "Medium", value: "Video tersandi dengan kisi gambar mini" },
        { label: "Rumah", value: "Satu platform global dan para rival video pendeknya" },
        { label: "Nasib", value: "Arsip rekaman amatir terbesar yang pernah ada" },
      ],
    },
  },
  {
    id: "music",
    kicker: "Pasangan 06",
    title: "Mendapatkan musik",
    thesis:
      "Dua jawaban atas masalah yang sama tiba dalam selisih delapan belas bulan: ambil salinan yang sudah ada lalu bagikan, atau bangun basis data legal lalu jual aksesnya. Yang kedua menang, dan gagasan memiliki koleksi diam-diam menjadi opsional.",
    rows: [
      {
        axis: "Perolehan",
        then: "Salin berkas dari kandar orang lain lewat indeks peer-to-peer.",
        now: "Alirkan dari katalog berlisensi, atau beli unduhan, di dalam satu aplikasi.",
      },
      {
        axis: "Bendanya",
        then: "Berkas di diska Anda, milik Anda untuk disimpan dan dipindah.",
        now: "Satu baris dalam langganan yang berakhir saat pembayaran berhenti.",
      },
      {
        axis: "Status hukum",
        then: "Diperdebatkan — berakhir oleh perintah pengadilan pada 2001.",
        now: "Perjanjian lisensi dengan pemegang hak, dirundingkan per negara.",
      },
      {
        axis: "Kurasi",
        then: "Buatan tangan: daftar putar sebagai berkas di folder, mixtape sebagai hadiah.",
        now: "Generatif: daftar putar rekomendasi disusun dari riwayat dengar.",
      },
    ],
    then: {
      label: "Dulu",
      years: "1999",
      title: "Berkas berbagi",
      artifactId: "napster",
      points: [
        { label: "Model", value: "Indeks terpusat, penyimpanan tersebar" },
        { label: "Pembayaran", value: "Tidak ada" },
        { label: "Hasil akhir", value: "Ditutup Juli 2001" },
      ],
    },
    now: {
      label: "Kini",
      years: "2001 →",
      title: "Perpustakaan jinjing",
      artifactId: "ipod",
      points: [
        { label: "Model", value: "Sinkronkan perpustakaan, lalu alirkan katalog" },
        { label: "Pembayaran", value: "Per trek, lalu per bulan" },
        { label: "Hasil akhir", value: "Akses menggantikan kepemilikan bagi kebanyakan pendengar" },
      ],
    },
  },
];

export const localizedComparisons = (lang: Lang): Comparison[] =>
  lang === "id" ? comparisonsId : comparisons;

/** Exposed for the archive validator (parity checks). */
export const idComparisonSource = comparisonsId;
