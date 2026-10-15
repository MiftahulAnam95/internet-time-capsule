import type { ArtifactIdText } from "../types";

/** ERA IV — ERA ALGORITMIK (2020–NOW). Versi Bahasa Indonesia, 3 entri katalog. */
export const algorithmicEraTextId: Record<string, ArtifactIdText> = {
  "generative-ai": {
    blurb:
      "Pertama kali internet menjawab balik: kotak teks yang menghasilkan prosa, kode, dan gambar sesuai permintaan.",
    significance:
      "Asisten generatif mengubah web dari sesuatu yang dicari menjadi sesuatu yang merespons. Mereka juga menjadikan provenans syarat desain: watermark, pengungkapan, dan atribusi sumber kini menjadi fitur antarmuka.",
    story: [
      "OpenAI merilis ChatGPT pada 30 November 2022, dibangun di atas lini model generative pre-trained transformer yang dipublikasikan perusahaan sejak 2018, dengan GPT-3 pada 2020 dan GPT-4 pada Maret 2023. Karya generatif sebelumnya — model bahasa besar, sintesis gambar dengan DALL·E dan Stable Diffusion, penyelesaian kode — berpindah dari demonstrasi riset ke produk konsumen dalam kira-kira dua tahun.",
      "Adopsinya luar biasa cepat: ChatGPT mencapai 100 juta pengguna aktif bulanan sekitar dua bulan setelah rilis. Asisten-asisten lalu dibenamkan ke pencarian, suite perkantoran, peramban, ponsel, dan penyunting gambar. Akibatnya masih dirundingkan — soal data latih dan hak cipta, soal reliabilitas dan jawaban salah yang percaya diri, dan soal apa arti 'dikarang' ketika sebuah teks tak punya pengarang tunggal.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Menggeser upaya komputasi ke inferensi, dan menjadikan bahasa alami antarmuka serbaguna.",
      },
      {
        label: "Budaya",
        text: "Memperkenalkan perdebatan publik tentang konten sintetis, kepengarangan, dan kepercayaan pada apa yang Anda baca.",
      },
      {
        label: "Desain",
        text: "Kotak obrolan kembali sebagai pola interaksi dominan, tiga puluh tahun setelah baris perintah.",
      },
    ],
    facts: [
      { label: "ChatGPT dirilis", value: "30 November 2022" },
      { label: "Pengembang", value: "OpenAI" },
      { label: "Makalah GPT-3", value: "2020" },
      { label: "Adopsi", value: "100 juta pengguna bulanan dalam dua bulan setelah rilis" },
    ],
    image: {
      alt: "Logotipe ChatGPT: tanda simpul heksagonal di atas tulisan ChatGPT.",
      caption: "Tanda ChatGPT. Peluncurannya November 2022 adalah tanggal mulai konvensional periode kini.",
    },
  },
  "fediverse-mastodon": {
    blurb:
      "Jejaring sosial tanpa pemilik: ribuan server yang dijalankan independen, terhubung oleh satu protokol terbuka.",
    significance:
      "Fediverse adalah alternatif nyata atas kepemilikan platform. Ia menunjukkan graf sosial bisa portabel, pemeringkatan tak harus komersial, dan harga kebebasan itu adalah koordinasi.",
    story: [
      "Eugen Rochko merilis Mastodon pada 2016 sebagai perangkat lunak gratis dan sumber terbuka untuk menjalankan server microblog. Server-server individual — instansi — berfederasi satu sama lain memakai ActivityPub, protokol W3C yang menjadi rekomendasi pada Januari 2018, sehingga akun di satu instansi bisa mengikuti dan membalas akun di instansi mana pun.",
      "Mastodon mengalami beberapa lonjakan adopsi, yang terbesar bermula 2022 ketika pengguna meninggalkan Twitter setelah pergantian pemilik dan kebijakan moderasinya. Timbal-baliknya struktural: tak ada perusahaan pusat untuk mengajukan banding, tak ada umpan algoritmik tunggal, dan moderasi diputuskan per server, yang berarti standar komunitas yang nyata sekaligus fragmentasi yang nyata.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "ActivityPub mengubah interoperabilitas menjadi standar terbitan yang bisa diadopsi produk lain.",
      },
      {
        label: "Budaya",
        text: "Menghidupkan kembali gagasan web awal bahwa komunitas bisa mengehos ruangnya sendiri.",
      },
      {
        label: "Desain",
        text: "Linimasa kronologis dan perkakas moderasi yang kasatmata adalah posisi desain yang disengaja, bukan bawaan.",
      },
    ],
    facts: [
      { label: "Rilis pertama", value: "2016, oleh Eugen Rochko" },
      { label: "Protokol", value: "ActivityPub (Rekomendasi W3C, Januari 2018)" },
      { label: "Struktur", value: "Instansi terfederasi yang dimoderasi independen" },
      { label: "Lonjakan adopsi terbesar", value: "Sejak 2022" },
    ],
    image: {
      alt: "Tangkapan layar beranda web Mastodon yang menampilkan deskripsi proyek dan pratinjau antarmuka.",
      caption: "Halaman proyek Mastodon. Tiap server menjalankan instansinya sendiri; protokollah yang menghubungkannya.",
    },
  },
  "ai-overviews": {
    blurb:
      "Jawaban tiba sebelum tautan. Dua puluh enam tahun sepuluh tautan biru digantikan sebuah paragraf generatif.",
    significance:
      "AI Overviews menandai akhir daftar sebagai bentuk bawaan jawaban. Arsip web kini sering dikonsultasikan lewat ringkasan, sehingga provenans dan sitasi menjadi masalah desain utama pencarian.",
    story: [
      "Google menguji ringkasan generatif di dalam pencarian sebagai Search Generative Experience lewat program Labs-nya pada 2023, dan mulai menggulirkan fitur itu ke pengguna di Amerika Serikat pada Mei 2024 dengan nama AI Overviews. Paragraf generatif bersitasi muncul di atas daftar hasil.",
      "Perubahan itu bermata dua. Jawaban-jawaban salah dan absurd yang tersebar luas dalam pekan-pekan pertama peluncuran — beberapa terlacak ke halaman sumber yang satir atau berkualitas rendah — membuat Google mengurangi jangkauan fitur untuk sebagian kategori kueri. Para penerbit, sementara itu, mengamati pola lalu lintas bergeser ketika jawaban dihantarkan di halaman hasil itu sendiri, yang menghidupkan kembali perdebatan lama tentang siapa yang diuntungkan ketika mesin pencari meringkas karya orang lain.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Temu-kembali plus generasi menjadi arsitektur standar produk pencarian konsumen.",
      },
      {
        label: "Budaya",
        text: "Menjadikan halusinasi kata rumah tangga dan sitasi ekspektasi konsumen.",
      },
      {
        label: "Desain",
        text: "Tata letak jawaban-dulu mengurangi kebutuhan mengeklik, dan karenanya mengubah cara penerbit didanai.",
      },
    ],
    facts: [
      { label: "Eksperimen pendahulu", value: "Search Generative Experience, 2023" },
      { label: "Peluncuran publik", value: "Mei 2024, Amerika Serikat" },
      { label: "Operator", value: "Google" },
      { label: "Format", value: "Ringkasan generatif bersitasi di atas hasil" },
    ],
    image: {
      alt: "Tangkapan layar halaman hasil Google Search berbahasa Inggris yang menampilkan ringkasan jawaban generatif di atas daftar tautan.",
      caption: "Halaman hasil Google masa kini: ringkasan generatif di atas daftar tautan tradisional.",
    },
  },
};