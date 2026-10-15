import type { ArtifactIdText } from "../types";

/** ERA II — WEB SOSIAL (2000–2009). Versi Bahasa Indonesia, 12 entri katalog. */
export const socialWebTextId: Record<string, ArtifactIdText> = {
  wikipedia: {
    blurb:
      "Ensiklopedia yang boleh disunting siapa pun, dan eksperimen terbesar menulis kolaboratif terbuka yang pernah dicoba.",
    significance:
      "Wikipedia menunjukkan bahwa kerumunan besar tanpa bayaran dan anonim bisa menghasilkan karya rujukan yang layak, asalkan prosesnya meninggalkan jejak kasatmata dari setiap perselisihan.",
    story: [
      "Jimmy Wales dan Larry Sanger meluncurkan Wikipedia pada 15 Januari 2001 sebagai pendamping Nupedia, ensiklopedia tulisan pakar yang bergerak terlalu lambat. Format wiki membiarkan pengunjung mana pun merevisi artikel mana pun seketika, dengan setiap perubahan tercatat dalam riwayat publik. Sanger dikreditkan menggabungkan 'wiki' dan 'encyclopedia' menjadi namanya.",
      "Premisnya kontroversial: kualitas lewat volume, perdebatan, dan sitasi, bukan lewat kredensial. Ia cukup berhasil sehingga edisi Inggris melewati satu juta artikel pada 2006, dan edisi bahasanya kini berjumlah ratusan. Tata kelola tiba dalam bentuk kebijakan — sudut pandang netral, keterverifikasian, tanpa riset orisinal — yang ditegakkan relawan dan, kian lama, perkakas otomatis.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Menjadikan kontrol versi, diff, dan halaman pembicaraan sebagai fitur konsumen biasa.",
      },
      {
        label: "Budaya",
        text: "Menegakkan sitasi dan 'keterverifikasian' sebagai nilai publik dalam perdebatan daring.",
      },
      {
        label: "Desain",
        text: "Tata letaknya yang sengaja polos, stabil sejak 2002, menjadi tolok ukur desain informasi yang mudah dibaca.",
      },
    ],
    facts: [
      { label: "Diluncurkan", value: "15 Januari 2001" },
      { label: "Pendiri", value: "Jimmy Wales, Larry Sanger" },
      { label: "Model", value: "Suntingan terbuka dengan riwayat revisi publik" },
      { label: "Operator", value: "Wikimedia Foundation (sejak 2003)" },
    ],
    image: {
      alt: "Logo Wikipedia: globe yang tersusun dari keping puzzle yang tertutup glif dari banyak sistem tulis.",
      caption: "Globe puzzle Wikipedia. Tiap kepingnya membawa karakter dari sistem tulis yang berbeda.",
    },
  },
  ipod: {
    blurb:
      "Kandar keras, roda klik, dan kabel sinkron: koleksi musik milik Anda menjadi basis data jinjing.",
    significance:
      "iPod memindahkan media dari rak ke basis data dan menyiapkan orang untuk menerima bahwa koleksi pribadi bisa berlisensi, dialirkan, dan akhirnya lenyap.",
    story: [
      "Apple merilis iPod pertama pada 10 November 2001, sepuluh bulan setelah iTunes untuk Macintosh. Tawarannya sederhana — kandar berkapasitas besar dalam perangkat sesaku, dipasarkan dengan klaim seribu lagu — dan roda gulirnya membuat menjelajahi daftar panjang dengan satu jempol menjadi praktis untuk pertama kali.",
      "iTunes Store dibuka April 2003, menjual trek satuan, bukan album, dan melegitimasi musik digital berbayar setelah Napster. Menyinkronkan perpustakaan ke komputer juga memperkenalkan ritual mingguan baru dan objek keterikatan baru. Apple menghentikan lini iPod pada 10 Mei 2022, setelah estimasi 450 juta unit terjual dan lebih dari dua puluh tahun di pasar.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Sinkron-plus-toko menjadi model yang kemudian digantikan layanan alir dengan akses on-demand.",
      },
      {
        label: "Budaya",
        text: "Kabel earbud putih menjadi sinyal kasatmata bahwa seseorang sedang berada di tempat lain.",
      },
      {
        label: "Desain",
        text: "Roda klik tetap menjadi contoh kanonis antarmuka yang pas dengan tugasnya: satu masukan, ribuan item.",
      },
    ],
    facts: [
      { label: "Pertama dirilis", value: "10 November 2001" },
      { label: "Produsen", value: "Apple" },
      { label: "iTunes Store dibuka", value: "April 2003" },
      { label: "Lini dihentikan", value: "10 Mei 2022" },
    ],
    image: {
      alt: "Beberapa generasi iPod yang disusun bersama, dari model roda klik asli hingga iPod nano dan shuffle.",
      caption: "Keluarga iPod sepanjang dua dasawarsa revisi perangkat keras.",
    },
  },
  friendster: {
    blurb:
      "Jejaring sosial pertama yang dipakai kebanyakan orang: profil, permintaan teman, dan testimoni yang ditulis orang lain tentang Anda.",
    significance:
      "Friendster menegakkan model graf sosial: akun Anda didefinisikan oleh koneksi eksplisit dan resiprokal ke orang bernama. Setiap jejaring sesudahnya mewarisi asumsi itu.",
    story: [
      "Jonathan Abrams mendirikan Friendster dan membukanya untuk publik pada Maret 2002. Mekanik intinya sudah bisa dikenali — profil, daftar teman terkonfirmasi, dan kemampuan menjelajah keluar lewat koneksi mereka — tetapi situsnya dirancang seputar kencan dan menemukan band, acara, dan hobi, bukan seputar umpan kabar.",
      "Pertumbuhan melampaui infrastruktur. Masalah muat halaman selama 2003–2004 banyak disalahkan atas audiens yang hanyut ke MySpace, dan perusahaan kemudian berputar ke gim sosial di Asia Tenggara sebelum tutup sebagai jejaring sosial pada 2015. Friendster lebih dikenang bukan karena apa yang dipertahankannya, melainkan karena templat yang diserahkannya ke semua orang.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Pelajaran awal tentang betapa cepat graf sosial bisa melampaui desain basis data.",
      },
      {
        label: "Budaya",
        text: "'Testimoni' — komentar publik dari teman — meramalkan endorsement dan reaksi.",
      },
      {
        label: "Desain",
        text: "Tata letak profil dua kolom berisi foto, status, dan daftar teman menjadi standar.",
      },
    ],
    facts: [
      { label: "Diluncurkan", value: "Maret 2002" },
      { label: "Pendiri", value: "Jonathan Abrams" },
      { label: "Putar haluan", value: "Gim sosial, Juni 2011" },
      { label: "Jejaring sosial ditutup", value: "2015" },
    ],
    image: {
      alt: "Logotipe Friendster, di-render biru.",
      caption: "Tanda Friendster. Jejaring itu meluncur Maret 2002 dan mempopulerkan daftar teman eksplisit.",
    },
  },
  myspace: {
    blurb:
      "HTML yang bisa disunting, musik yang terputar otomatis, dan Top 8. Jejaring sosial pertama yang didesain penggunanya.",
    significance:
      "MySpace adalah argumen historis terkuat bahwa personalisasi menumbuhkan keterikatan. Ia memberi pengguna perkakas untuk membuat tempat, dan menjadi jejaring pertama yang identitas visualnya dibuat remaja, bukan tim desain.",
    story: [
      "MySpace meluncur 1 Agustus 2003 dan menjadi jejaring sosial terbesar di dunia antara 2005 dan 2009. News Corporation membelinya pada Juli 2005 seharga $580 juta; pada Juni 2006 ia dilaporkan sebagai situs web paling dikunjungi di Amerika Serikat, mengungguli Google Search.",
      "Yang membuatnya berbeda adalah izin: pengguna bisa menyunting HTML dan CSS profilnya, membenamkan pemutar musik, dan menyusun ulang delapan teman berperingkatnya. Band memakainya sebagai kanal distribusi, dan situs itu memainkan peran awal dalam pertumbuhan YouTube serta dalam meluncurkan perusahaan-perusahaan platform seperti Zynga. Desain ulang yang melucuti kustomisasi profil pada 2006 biasanya disebut sebagai awal kemunduran.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Menunjukkan nilai komersial graf sosial — dan harga HTML yang tak terkendali.",
      },
      {
        label: "Budaya",
        text: "Menjadikan Top 8 berperingkat sebagai pernyataan sosial publik, dan musik terbitan sendiri sebagai hal normal.",
      },
      {
        label: "Desain",
        text: "Bentrokan antara halaman buatan pengguna dan cangkang korporat adalah pelajaran abadi dalam desain platform.",
      },
    ],
    facts: [
      { label: "Diluncurkan", value: "1 Agustus 2003" },
      { label: "Diakuisisi News Corp.", value: "Juli 2005, $580 juta" },
      { label: "Situs AS paling dikunjungi", value: "Juni 2006" },
      { label: "Jejaring sosial terbesar", value: "2005 – 2009" },
    ],
    image: {
      alt: "Logotipe MySpace, dengan 'my' huruf kecil diikuti simbol spasi.",
      caption: "Wordmark MySpace. Antara 2005 dan 2009 ia adalah jejaring sosial terbesar di dunia.",
    },
  },
  facebook: {
    blurb:
      "Direktori kampus yang mewajibkan nama asli, dibuka untuk publik pada 2006, dan menjadi infrastruktur identitas sosial.",
    significance:
      "Facebook menjadikan graf sosial nama asli prinsip pengatur web komersial, dan umpan kabar format baca dominan — dua keputusan yang akibatnya masih dirundingkan.",
    story: [
      "Mark Zuckerberg meluncurkan thefacebook.com pada 4 Februari 2004 untuk mahasiswa Harvard, bersama Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, dan Chris Hughes. Ekspansi ke universitas lain, lalu ke sekolah menengah dan akhirnya, pada September 2006, ke siapa pun berusia di atas tiga belas tahun yang memiliki alamat surel mengubah jaringan tertutup menjadi utilitas publik.",
      "Kabar Beranda tiba September 2006 disambut keberatan keras, lalu menjadi cara bawaan orang membaca internet. API platform pada 2007 memungkinkan aplikasi pihak ketiga; tombol Like tiba Februari 2009. Skala Facebook membawa efek jejaring sekaligus sorotan berkelanjutan atas penanganan data, interferensi pemilu, dan moderasi konten, terutama setelah 2018.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Mempopulerkan umpan berurutan algoritmik dan API platform terbuka untuk aplikasi sosial.",
      },
      {
        label: "Budaya",
        text: "Mengubah acara, pengumuman, dan perdebatan menjadi pertunjukan publik yang terkuantifikasi.",
      },
      {
        label: "Desain",
        text: "Profil dua kolom biru-putih menjadi tata letak paling ditiru di web.",
      },
    ],
    facts: [
      { label: "Diluncurkan", value: "4 Februari 2004, Harvard University" },
      { label: "Dibuka untuk publik", value: "September 2006" },
      { label: "Kabar Beranda diperkenalkan", value: "September 2006" },
      { label: "Induk berganti nama", value: "Meta Platforms, 2021" },
    ],
    image: {
      alt: "Logotipe Facebook: huruf kecil putih di kotak bulat biru.",
      caption: "Tanda Facebook. Layanannya bermula sebagai direktori kampus Harvard pada Februari 2004.",
    },
  },
  youtube: {
    blurb:
      "Situs video pertama yang benar-benar bisa diunggahi orang biasa — dimulai dengan sembilan belas detik di kebun binatang.",
    significance:
      "YouTube memisahkan penerbitan video dari penyiaran. Ia menciptakan ekonomi kreator dan menjadikan gambar bergerak bentuk ekspresi daring bawaan.",
    story: [
      "Chad Hurley, Steve Chen, dan Jawed Karim mendirikan YouTube pada Februari 2005 dan membukanya untuk publik pada Desember; klip Karim 'Me at the zoo' yang diunggah 23 April 2005 masih menjadi video pertama situs itu. Yang membuatnya berhasil adalah hal duniawi: enkode Flash Video di peramban berarti tanpa berburu plugin, tanpa codec, dan tanpa menunggu, sehingga siapa pun yang berkamera bisa menerbitkan.",
      "Google mengakuisisi perusahaan itu pada November 2006 seharga $1,65 miliar dalam bentuk saham. Bagi hasil kemitraan sejak 2007 menciptakan kelas kreator profesional; siaran langsung, unggahan seluler, dan video pendek menyusul. YouTube kini adalah arsip rekaman amatir terbesar yang ada, dan sumber primer sejarah visual dua puluh tahun terakhir.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Transkode dan alir berbasis peramban membuat video pengguna praktis di koneksi pertengahan 2000-an.",
      },
      {
        label: "Budaya",
        text: "Memperkenalkan kreator daring purnawaktu, dan kolom komentar sebagai bentuk budaya.",
      },
      {
        label: "Desain",
        text: "Kisi gambar mini kini menjadi antarmuka standar menjelajahi pustaka video.",
      },
    ],
    facts: [
      { label: "Didirikan", value: "Februari 2005" },
      { label: "Video pertama", value: "'Me at the zoo', 23 April 2005" },
      { label: "Diakuisisi Google", value: "November 2006, $1,65 miliar" },
      { label: "Pendiri", value: "Chad Hurley, Steve Chen, Jawed Karim" },
    ],
    image: {
      alt: "Tangkapan layar situs YouTube yang menampilkan kisi hasil pencarian berisi gambar mini, durasi, dan nama kanal.",
      caption: "Hasil pencarian YouTube kini — kisi gambar mini yang bermula sebagai perkakas unggah satu halaman pada 2005.",
    },
  },
  twitter: {
    blurb: "140 karakter, linimasa publik, dan sebuah invensi tak disengaja: tagar.",
    significance:
      "Twitter menjadikan percakapan publik, real-time, dan pendek sebagai media massa — dan menunjukkan betapa banyak fitur terpenting platform bisa ditemukan penggunanya, bukan perancangnya.",
    story: [
      "Twitter tumbuh dari perusahaan podcast Odeo dan meluncur publik pada 21 Maret 2006, dibangun Jack Dorsey, Biz Stone, dan Evan Williams, dengan Noah Glass sebagai kontributor awal yang sering tak dikreditkan. Batas panjangnya warisan dari SMS; sintaks balasan (@) dan retweet bermula sebagai konvensi pengguna sebelum diimplementasikan perusahaan.",
      "Tagar diusulkan Chris Messina pada Agustus 2007 sebagai cara mengelompokkan pesan tentang peristiwa bersama, dan menjadi mekanisme yang melaluinya berita terkini, protes, dan meme mengorganisasi diri. Twitter meliput pemilu AS 2008 dan pemberontakan 2011 dengan cara yang menjadikannya subjek kajian. Layanan itu berganti nama menjadi X pada 2023 setelah diakuisisi Elon Musk pada 2022, dan tanda burung aslinya dipensiunkan.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Mendorong infrastruktur real-time: aliran, firehose, dan pencarian publik yang cepat.",
      },
      {
        label: "Budaya",
        text: "Menjadikan 'viral' terukur dan mengubah berita terkini menjadi kesaksian orang pertama.",
      },
      {
        label: "Desain",
        text: "Linimasa kronologis terbalik tetap menjadi model rujukan lama setelah umpan menjadi algoritmik.",
      },
    ],
    facts: [
      { label: "Diluncurkan", value: "21 Maret 2006" },
      { label: "Asal", value: "Proyek sampingan Odeo" },
      { label: "Tagar diusulkan", value: "Agustus 2007, oleh Chris Messina" },
      { label: "Berganti nama", value: "X, Juli 2023" },
    ],
    image: {
      alt: "Logo burung Twitter berwarna biru, dipensiunkan setelah layanan berganti nama menjadi X pada 2023.",
      caption: "Burung Twitter, dipensiunkan 2023 — tanda yang pernah menandai ujung internet yang paling hidup.",
    },
  },
  tumblr: {
    blurb:
      "Dasbor untuk reblog: jejaring yang membuat fandom, estetika, dan keanehan internet menjadi portabel.",
    significance:
      "Tumblr membuktikan jejaring sosial bisa disusun berdasarkan selera dan komunitas, bukan identitas nama asli — dan bahwa jejaring semacam itu rapuh ketika kepemilikan berganti.",
    story: [
      "David Karp mendirikan Tumblr pada 2007 dengan Marco Arment sebagai pengembang utama, meluncur Februari tahun itu sebagai platform microblog yang menggabungkan kemudahan umpan dengan kepermanenan blog. Reblog — mengunggah ulang konten orang lain ke blog sendiri disertai komentar — menjadi mekanik khasnya, dan rantai reblog berfungsi sebagai percakapan terdistribusi.",
      "Tumblr menjadi rumah komunitas fandom, set GIF, blog estetika, dan subkultur yang diabaikan jejaring arus utama. Yahoo! mengakuisisinya pada 2013 seharga sekitar $1,1 miliar; Automattic membelinya pada 2019, tahun yang sama ketika perubahan kebijakan konten menghapus materi dewasa dan memicu eksodus yang kasatmata. Platformnya terus beroperasi dengan populasi yang jauh lebih kecil dan setia.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Reblog memodelkan atribusi sebagai fitur kelas satu dalam berbagi.",
      },
      {
        label: "Budaya",
        text: "Kosakata fandom, budaya GIF, dan kurasi 'estetika' menyebar dari Tumblr ke setiap platform sesudahnya.",
      },
      {
        label: "Desain",
        text: "Dasbor satu kolom bermedia campurnya meramalkan tata letak umpan seluler.",
      },
    ],
    facts: [
      { label: "Diluncurkan", value: "Februari 2007" },
      { label: "Pendiri", value: "David Karp, bersama Marco Arment" },
      { label: "Diakuisisi Yahoo!", value: "2013" },
      { label: "Diakuisisi Automattic", value: "2019" },
    ],
    image: {
      alt: "Logotipe Tumblr: huruf 't' kecil putih dalam kotak bulat gelap.",
      caption: "Tanda Tumblr. Platformnya menjadikan reblog cara dominan berbagi selera secara daring.",
    },
  },
  iphone: {
    blurb:
      "Layar multisentuh, peramban sungguhan, dan keputusan tanpa stilus — antarmuka yang memindahkan internet ke saku.",
    significance:
      "iPhone menjadikan internet benda fisik yang dibawa. Ia juga menentukan dasawarsa desain berikutnya: sentuh dulu, aplikasi dulu, potret dulu.",
    story: [
      "Steve Jobs memperkenalkan iPhone pada 9 Januari 2007 sebagai 'iPod, telepon, dan komunikator internet' dalam satu perangkat, dan ia mulai dijual di Amerika Serikat pada 29 Juni 2007. Bagian signifikannya bagi arsip ini bukan teleponnya, melainkan perambannya: perender web penuh, yang dikemudikan cubit-untuk-zoom dan gulir jentik di permukaan kaca multisentuh.",
      "App Store dibuka 10 Juli 2008 dengan sekitar lima ratus aplikasi, menggantikan handset kendali operator dengan lokapasar perangkat lunak. Aplikasi native segera menggusur web seluler untuk tugas sehari-hari, dan sensor ponsel — GPS, kamera, akselerometer — memberi internet lokasi dan sudut pandang.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Masukan multisentuh dan model distribusi aplikasi menggantikan handset kendali operator.",
      },
      {
        label: "Budaya",
        text: "Konektivitas yang selalu aktif menjadi ambient, bukan terjadwal.",
      },
      {
        label: "Desain",
        text: "Desain web responsif ada sebagian besar karena situs harus selamat di layar sentuh selebar 320 piksel.",
      },
    ],
    facts: [
      { label: "Diumumkan", value: "9 Januari 2007" },
      { label: "Rilis pertama", value: "29 Juni 2007 (Amerika Serikat)" },
      { label: "App Store", value: "10 Juli 2008" },
      { label: "Produsen", value: "Apple" },
    ],
    image: {
      alt: "Ilustrasi iPhone asli tampak dari depan, menampilkan layar dan satu tombol beranda bundar.",
      caption: "iPhone asli (2007). Satu tombol di bawah kaca; selebihnya adalah antarmuka.",
    },
  },
  minecraft: {
    blurb:
      "Dunia dari balok, tanpa instruksi, dan satu generasi yang belajar membangun, mengehos server, dan menonton orang lain bermain.",
    significance:
      "Minecraft mengubah audiens internet menjadi pembangun. Ia kasus paling jelas tentang gim yang menjadi platform kreativitas, pendidikan, dan infrastruktur yang dijalankan komunitas.",
    story: [
      "Markus 'Notch' Persson merilis build publik pertama Minecraft pada Mei 2009, dikembangkan dalam Java dan dijual langsung dari situs web sebelum penerbit mana pun terlibat. Versi alfa dan beta menyebar lewat mulut ke mulut dan lewat video-video YouTube awal berisi pemain yang menarasikan apa yang mereka bangun. Rilis penuhnya tiba 18 November 2011.",
      "Tak ada objektif: gim ini memberi Anda bahan, siklus siang-malam, dan pemain lain. Keterbukaan itu menghasilkan server, mod, paket tekstur, komputer redstone yang dibangun di dalam dunia gim, dan industri rumahan konten video dan siaran. Microsoft mengakuisisi Mojang pada September 2014 seharga $2,5 miliar, dan Minecraft tetap menjadi gim video terlaris sepanjang masa.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Dijual langsung dari situs pengembang, membuktikan jalur distribusi di luar penerbit dan toko.",
      },
      {
        label: "Budaya",
        text: "Video let's-play dan server komunitas menjadi cara utama orang mengalami gim ini bersama.",
      },
      {
        label: "Desain",
        text: "Estetika voxel yang sengaja tak dipoles menunjukkan fidelitas bukan penentu meyakinkannya sebuah dunia.",
      },
    ],
    facts: [
      { label: "Build publik pertama", value: "Mei 2009" },
      { label: "Pencipta", value: "Markus 'Notch' Persson" },
      { label: "Rilis penuh", value: "18 November 2011" },
      { label: "Mojang diakuisisi Microsoft", value: "September 2014, $2,5 miliar" },
    ],
    image: {
      alt: "Logotipe Minecraft, dibangun dari huruf-huruf balok yang menyerupai tekstur batu dan kayu.",
      caption: "Logotipe balok Minecraft, mencerminkan kosakata material gim itu sendiri.",
    },
  },
  farmville: {
    blurb:
      "Gim sosial yang mengubah umpan kabar menjadi ladang, dan menjadikan “spam permintaan” masalah desain yang layak dipecahkan.",
    significance:
      "FarmVille menunjukkan gim bisa didistribusikan lewat graf sosial, bukan toko — dan betapa cepat daya ungkit itu menjadi kebisingan ketika dioptimalkan tanpa kendali.",
    story: [
      "Zynga merilis FarmVille di Facebook pada Juni 2009 sebagai gim Flash. Putarannya sengaja pendek — bajak, tanam, panen, kumpulkan — dan mekanisme pertumbuhannya sosial: hadiah dan permintaan muncul di umpan teman Anda, dan saling membantu adalah cara tercepat untuk maju.",
      "Selama beberapa tahun ia adalah gim terbesar di Facebook dengan selisih lebar dan memperkenalkan puluhan juta orang yang tak pernah membeli gim video pada gagasan memainkannya. Desainnya juga menghasilkan serangan baliknya sendiri: spam umpan mendorong Facebook membatasi unggahan aplikasi, dan akhir Flash pada Desember 2020 memensiunkan versi peramban aslinya.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Gim Flash berbasis peramban dalam skala jejaring sosial, dengan barang virtual yang dibeli di dalam aplikasi.",
      },
      {
        label: "Budaya",
        text: "Membawa pemain kasual dan yang lebih tua ke gim daring untuk pertama kali.",
      },
      {
        label: "Desain",
        text: "Pewaktu energi dan kewajiban sosial menjadi mekanik standar — sekaligus kritik standar.",
      },
    ],
    facts: [
      { label: "Diluncurkan di Facebook", value: "Juni 2009" },
      { label: "Pengembang", value: "Zynga" },
      { label: "Platform", value: "Adobe Flash, dalam peramban" },
      { label: "Versi peramban asli berakhir", value: "31 Desember 2020" },
    ],
  },
  "like-button": {
    blurb:
      "Satu klik menggantikan satu kalimat. Invensi antarmuka terkecil dengan efek terukur terbesar pada perilaku.",
    significance:
      "Tombol Like mengubah percakapan menjadi sinyal. Inilah titik ketika web sosial mulai mengoptimalkan reaksi terukur, bukan pertukaran.",
    story: [
      "Facebook memperkenalkan tombol Like pada Februari 2009 setelah perdebatan internal tentang apakah satu sinyal positif sudah cukup. Ia memecahkan masalah nyata: kebanyakan orang tak akan menulis komentar, tetapi banyak yang mau mengeklik. Keterlibatan menjadi terhitung, dan hitungan menjadi umpan balik.",
      "Setiap platform besar menyusul dengan padanannya — hati, bintang, upvote — dan angka yang menempel padanya menjadi ukuran nilai sosial yang terbaca. Para peneliti dan mantan karyawan sejak itu berpendapat hitungan yang kasatmata membentuk apa yang diposkan orang dan bagaimana perasaan mereka sesudahnya, itulah sebabnya beberapa produk bereksperimen menyembunyikannya.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Memberi sistem pemeringkat sinyal latih yang murah dan melimpah untuk tiap unggahan di jaringan.",
      },
      {
        label: "Budaya",
        text: "Menjadikan persetujuan terkuantifikasi dan publik, dengan efek terdokumentasi baik pada presentasi diri.",
      },
      {
        label: "Desain",
        text: "Gestur ketuk tunggal adalah interaksi paling tereduksi yang mungkin — dan yang paling sulit ditarik kembali.",
      },
    ],
    facts: [
      { label: "Diperkenalkan", value: "Februari 2009, oleh Facebook" },
      { label: "Pendahulu", value: "Suara 'digg' Digg (2004), upvote Reddit (2005)" },
      { label: "Varian kemudian", value: "Reactions, 2016" },
      { label: "Padanan", value: "Hati (Instagram, Twitter), upvote (Reddit)" },
    ],
    image: {
      alt: "Tangkapan layar tombol like yang menampilkan ikon jempol dan hitungan like.",
      caption: "Kontrol like, direduksi menjadi ikon dan angka.",
    },
  },
};