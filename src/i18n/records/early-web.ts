import type { ArtifactIdText } from "../types";

/** ERA I — WEB AWAL (1989–1999). Versi Bahasa Indonesia, 14 entri katalog. */
export const earlyWebTextId: Record<string, ArtifactIdText> = {
  "world-wide-web": {
    blurb:
      "Usulan menautkan dokumen antarkomputer menjadi ruang alamat yang masih kita huni — dan halaman web pertama masih daring.",
    significance:
      "Web memisahkan penerbitan dari penjagaan gerbang. Dokumen apa pun bisa menunjuk ke dokumen mana pun, di mesin mana pun, tanpa perantara — desain yang memungkinkan setiap efek jejaring sesudahnya.",
    story: [
      "Pada Maret 1989, Tim Berners-Lee, yang saat itu insinyur kontrak di CERN, mengajukan proposal sistem informasi yang akan menghubungkan dokumen-dokumen laboratorium dengan hipertaut. Catatan pinggir manajernya yang kini terkenal berbunyi: “Vague, but exciting” (“Samar, tetapi menarik”). Bekerja sama dengan Robert Cailliau, Berners-Lee membangun empat bagian yang masih dipakai web hingga kini: HTML untuk dokumen, URL untuk alamat, HTTP untuk transfer, dan peramban-penyunting pertama bernama WorldWideWeb yang berjalan di komputer NeXT.",
      "Pada 6 Agustus 1991 ia mengunggah ringkasan proyek itu ke grup berita Usenet alt.hypertext — momen ketika web keluar dari laboratorium. Server pertamanya adalah kubus NeXT itu sendiri, yang terus dinyalakan dengan label tulisan tangan berisi peringatan: “This machine is a server. DO NOT POWER DOWN!!” (“Mesin ini server. JANGAN DIMATIKAN!!”). Pada 30 April 1993 CERN mengumumkan perangkat lunak web tersedia untuk dipakai siapa pun, tanpa biaya lisensi. Satu keputusan itulah alasan tak ada pihak yang perlu dimintai izin.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "HTML, URL, dan HTTP menjadi standar terbuka yang dipelihara mula-mula oleh W3C dan, untuk HTML, kemudian oleh WHATWG.",
      },
      {
        label: "Budaya",
        text: "Penerbitan berhenti menjadi hak istimewa institusi; satu halaman dan satu alamat sudah cukup.",
      },
      {
        label: "Desain",
        text: "Hipertaut biru bergaris bawah menjadi elemen antarmuka pertama dan paling awet dari medium ini.",
      },
    ],
    facts: [
      { label: "Diusulkan", value: "Maret 1989, CERN, Jenewa" },
      { label: "Penemu", value: "Tim Berners-Lee, bersama Robert Cailliau" },
      { label: "Situs publik pertama", value: "info.cern.ch — 6 Agustus 1991" },
      { label: "Dibebaskan tanpa royalti", value: "30 April 1993" },
    ],
    image: {
      alt: "Komputer NeXT yang dipakai Tim Berners-Lee di CERN, server web pertama, dengan label tulisan tangan bertuliskan 'This machine is a server. DO NOT POWER DOWN!!'.",
      caption:
        "Server web pertama: kubus NeXT di CERN, dilabeli tulisan tangan agar tak ada yang mematikannya.",
    },
  },
  "ncsa-mosaic": {
    blurb:
      "Peramban yang menaruh gambar di dalam halaman — dan membuat web terbaca oleh orang yang bukan fisikawan.",
    significance:
      "Mosaic tidak menemukan web; ia membuat web terlihat. Ia juga memberi silsilah komersial: dilisensikan lewat Spyglass, kodenya menjadi basis peramban pertama Microsoft.",
    story: [
      "Mosaic ditulis di National Center for Supercomputing Applications di University of Illinois, terutama oleh Marc Andreessen dan Eric Bina. Peramban-peramban sebelumnya seperti WorldWideWeb karya Berners-Lee, ViolaWWW, dan Erwise memang sudah menampilkan grafis, tetapi Mosaic menggabungkan gambar sebaris, tautan yang bisa diklik, markah, dan daftar riwayat dalam satu program yang bisa berjalan di mesin desktop biasa.",
      "Rilis 1993-nya untuk X Window System, Windows, dan Macintosh menyebar lewat universitas lalu perkantoran. Distribusinya gratis untuk pemakaian nonkomersial, sehingga adopsinya cepat dan konvensi antarmuka yang ditetapkannya — bilah perkakas berisi mundur, maju, beranda, dan muat ulang — diwarisi hampir setiap peramban sesudahnya.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Mempopulerkan gambar sebaris dan tag <img> sebagai cara bawaan mendesain halaman.",
      },
      {
        label: "Budaya",
        text: "Mengubah 'berselancar di internet' menjadi hobi arus utama pada 1994–1995.",
      },
      {
        label: "Desain",
        text: "Menegakkan kosakata chrome peramban: bilah perkakas, kolom alamat, tombol beranda.",
      },
    ],
    facts: [
      { label: "Pengembang", value: "NCSA, University of Illinois" },
      { label: "Rilis pertama", value: "1993 (X, lalu Windows dan Mac)" },
      { label: "Penulis utama", value: "Marc Andreessen, Eric Bina" },
      { label: "Pengembangan berakhir", value: "1997" },
    ],
    image: {
      alt: "Tangkapan layar peramban NCSA Mosaic yang menampilkan halaman web awal bergambar sebaris.",
      caption:
        "NCSA Mosaic menampilkan halaman bergambar sebaris, tata letak yang kini dikenal kebanyakan orang sebagai 'situs web'.",
    },
  },
  "netscape-navigator": {
    blurb:
      "Sebuah rintisan merilis peramban yang lebih cepat, menghadirkan JavaScript dalam sepuluh hari, dan pencatatan saham 1995-nya mengumumkan era dot-com.",
    significance:
      "Netscape membuktikan web adalah platform komersial, dan keputusannya merilis kodenya sebagai proyek Mozilla pada 1998 akhirnya melahirkan Firefox — alasan web modern memiliki lebih dari satu mesin peramban dominan.",
    story: [
      "Marc Andreessen meninggalkan NCSA dan mendirikan Mosaic Communications pada 1994, yang segera berganti nama menjadi Netscape untuk menyelesaikan sengketa merek dagang. Beta Mosaic Netscape dirilis Oktober 1994 dan produknya berganti nama menjadi Navigator pada Desember tahun itu. Ia terasa lebih cepat dari Mosaic, bisa mengunduh dan me-render halaman secara progresif, serta mendukung tabel, bingkai, dan gambar latar — fitur yang langsung dipakai desainer untuk membangun tata letak yang lebih ambisius.",
      "Pada 1995 Brendan Eich menulis bahasa yang menjadi JavaScript dalam hitungan hari, dan Netscape menyertakannya di Navigator 2.0 pada Desember 1995; SSL yang diperkenalkan pada 1994 memberi alasan bagi perdagangan untuk ada secara daring. Penawaran umum perdana Netscape pada 9 Agustus 1995 menjadi salah satu debut saham yang paling disorot dasawarsa itu. Perang peramban melawan Microsoft menyusul, lalu perkara antimonopoli 1998 yang keluhan bundling Netscape menjadi pusatnya.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "JavaScript, kuki, dan SSL semuanya sampai ke publik lewat Navigator.",
      },
      {
        label: "Budaya",
        text: "IPO-nya menjadikan 'perusahaan internet' kategori ambisi bagi satu generasi pendiri.",
      },
      {
        label: "Desain",
        text: "Tag proprietary seperti <blink> dan <marquee> menunjukkan apa yang terjadi pada bahasa visual ketika standar tak terkoordinasi.",
      },
    ],
    facts: [
      { label: "Perusahaan didirikan", value: "1994 (Mosaic Communications)" },
      { label: "Navigator 1.0", value: "Desember 1994" },
      { label: "IPO", value: "9 Agustus 1995" },
      { label: "Dukungan peramban berakhir", value: "2008" },
    ],
    image: {
      alt: "Tangkapan layar Netscape Navigator 9 yang berjalan di desktop, versi terakhir peramban itu.",
      caption: "Netscape Navigator 9 (2007) — versi final peramban yang memulai perang peramban.",
    },
  },
  "yahoo-directory": {
    blurb:
      "Sebelum pencarian bisa memeringkat web, manusia mengarsipkannya. Dua mahasiswa doktoral menyimpan indeks di kertas, lalu di basis data.",
    significance:
      "Direktori adalah jawaban pertama atas masalah utama internet — penemuan — dan penutupannya menandai titik ketika algoritma menggantikan penilaian editorial sebagai cara kita menemukan sesuatu.",
    story: [
      "Jerry Yang dan David Filo mulai menyusun 'Jerry and David's Guide to the World Wide Web' pada 1994 sambil menunda-nunda disertasi PhD mereka di Stanford. Berganti nama menjadi Yahoo!, panduan itu adalah hierarki kategori yang disunting manusia yang melihat tiap situs dan memutuskan di mana tempatnya. Ia menjadi pintu depan bawaan bagi jutaan pengguna baru yang mengetik tujuan, bukan pertanyaan.",
      "Perusahaannya berbadan hukum pada 1995 dan melantai di bursa pada 1996, berekspansi ke surel, berita, olahraga, dan obrolan. Tetapi direktori suntingan tangan tak bisa mengejar web yang tumbuh eksponensial. Seiring membaiknya pemeringkatan otomatis, menjelajahi kategori Yahoo! menjadi kebiasaan nostalgia, bukan kebutuhan. Direktorinya ditutup pada 31 Desember 2014.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Menunjukkan batas kurasi manusia melawan pertumbuhan eksponensial.",
      },
      {
        label: "Budaya",
        text: "Menjadikan 'portal' — satu halaman awal bermerek — sebagai tujuan setiap perusahaan web.",
      },
      {
        label: "Desain",
        text: "Daftar tautan biru yang padat di latar abu-abu menjadi ciri visual desain informasi 1990-an.",
      },
    ],
    facts: [
      { label: "Dimulai", value: "1994, Stanford University" },
      { label: "Pendiri", value: "Jerry Yang, David Filo" },
      { label: "Berbadan hukum", value: "Maret 1995" },
      { label: "Direktori ditutup", value: "31 Desember 2014" },
    ],
  },
  geocities: {
    blurb:
      "Hos gratis yang disusun menjadi perkampungan khayalan, tempat halaman dibangun dari buku tamu, penghitung kunjungan, dan GIF animasi.",
    significance:
      "GeoCities adalah platform massal pertama untuk penerbitan amatir di web. Penghapusannya adalah studi kasus pendiri tentang pentingnya pelestarian web — dan alasan Wayback Machine terasa seperti infrastruktur esensial, bukan sekadar keingintahuan.",
    story: [
      "Didirikan pada 1994 oleh David Bohnett dan John Rezner sebagai Beverly Hills Internet, layanan ini berganti nama menjadi GeoCities pada 1995. Pengguna memilih 'perkampungan' — SiliconValley untuk komputasi, Hollywood untuk film, TimesSquare untuk gim — dan menerima alamat yang mendeskripsikan tempat, bukan orangnya: sebuah halaman bisa tinggal di geocities.com/SiliconValley/Port/1234.",
      "Budaya visual yang menyusul penuh semangat dan tanpa standar: latar berubin, webring, buku tamu, musik MIDI yang berbunyi tanpa peringatan, dan papan 'under construction' yang sering kali sungguhan. Yahoo! mengakuisisi GeoCities pada 1999 dan menutupnya pada 26 Oktober 2009, menghapus jutaan halaman. Kelompok relawan seperti Archive Team menyelamatkan sebanyak yang mereka bisa sebelum server-servernya sunyi.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Membuktikan hos gratis plus iklan bisa mendanai jutaan situs pribadi.",
      },
      {
        label: "Budaya",
        text: "Menciptakan bahasa desain rakyat pertama web, yang seluruhnya dibuat non-desainer.",
      },
      {
        label: "Desain",
        text: "Alamat 'perkampungan' adalah alternatif awal — dan bisa dibilang lebih hangat — bagi URL profil.",
      },
    ],
    facts: [
      { label: "Didirikan", value: "1994 (sebagai Beverly Hills Internet)" },
      { label: "Pendiri", value: "David Bohnett, John Rezner" },
      { label: "Diakuisisi Yahoo!", value: "1999" },
      { label: "Ditutup", value: "26 Oktober 2009" },
    ],
    image: {
      alt: "Logotipe GeoCities: globe bergaya dengan tulisan GeoCities di bawahnya.",
      caption: "Logotipe GeoCities. Layanan ini menyusun halaman pribadi gratis ke dalam 'perkampungan' bertema.",
    },
  },
  "windows-95": {
    blurb:
      "Sistem operasi yang mengajari ratusan juta orang apa itu tombol Start — dan menyertakan web sebagai aksesori.",
    significance:
      "Windows 95 menjadikan internet fitur konsumen, bukan perkakas spesialis — dan dengan mengikat peramban ke sistem operasi, ia menyiapkan pertempuran hukum yang menentukan dasawarsa web berikutnya.",
    story: [
      "Dirilis 24 Agustus 1995, Windows 95 menggantikan tampilan program-manager Windows 3.x dengan metafora desktop: tombol Start, bilah tugas berisi program yang berjalan, nama berkas yang panjang, dan Recycle Bin. Ia memperkenalkan tata bahasa antarmuka yang masih diandalkan kebanyakan pengguna desktop tiga puluh tahun kemudian, dan diluncurkan dengan kampanye pemasaran yang dibangun di sekitar lagu Rolling Stones 'Start Me Up'.",
      "Signifikansinya bagi arsip ini adalah koneksi yang dibawanya. Microsoft Network (MSN) meluncur bersama produk itu sebagai layanan dial-up, dan peramban Internet Explorer tiba dalam paket tambahan Plus! pada 1995, lalu di versi-versi OS berikutnya. Bagi banyak rumah tangga, 'masuk internet' berarti memasang Windows 95, membeli modem, dan mengetik nomor telepon ke kotak dialog.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Multitugas preemptif 32-bit dan perangkat keras plug-and-play memajukan pasar massal.",
      },
      {
        label: "Budaya",
        text: "Peluncuran tengah malam dan antre di depan toko elektronik menjadi ritual perangkat lunak.",
      },
      {
        label: "Desain",
        text: "Menu Start adalah salah satu invensi antarmuka paling berumur panjang dalam komputasi.",
      },
    ],
    facts: [
      { label: "Dirilis", value: "24 Agustus 1995" },
      { label: "Pengembang", value: "Microsoft" },
      { label: "Diperkenalkan", value: "Tombol Start, bilah tugas, nama berkas panjang" },
      { label: "Penjualan bulan pertama", value: "Microsoft melaporkan ~1 juta kopi dalam empat hari" },
    ],
    image: {
      alt: "Desktop Windows 95 dengan menu Start terbuka, menampilkan daftar program dan bilah tugas di bawah layar.",
      caption: "Desktop Windows 95 dengan menu Start terbuka — pola antarmuka yang masih dipakai hingga kini.",
    },
  },
  "internet-explorer": {
    blurb:
      "Peramban berlisensi dari Mosaic, dibundel dengan Windows, dan akhirnya dipensiunkan dengan perpisahan resmi.",
    significance:
      "Internet Explorer adalah contoh paling jelas tentang distribusi yang memenangkan pasar teknologi — dan tentang bagaimana satu mesin dominan bisa memperlambat seluruh platform terbuka.",
    story: [
      "Peramban pertama Microsoft dirilis Agustus 1995, dibangun di atas kode berlisensi dari Spyglass, yang melisensikan NCSA Mosaic. Sejak Internet Explorer 3 pada 1996 peramban didistribusikan bersama Windows itu sendiri, begitulah ia menyalip Netscape begitu cepat. Pada awal 2000-an IE menguasai mayoritas luar biasa pemakaian peramban yang terukur, dan pengembang web kian membangun untuk satu mesin render dan menguji di tempat lain.",
      "Perkara United States v. Microsoft yang diajukan pada 1998 sebagian berpusat pada bundling itu. Versi-versi berikutnya stagnan sementara Firefox (2004), Chrome (2008), dan peramban seluler bergerak lebih cepat dalam standar. Microsoft menggantikan IE dengan Edge pada 2015 dan memensiunkan Internet Explorer pada 15 Juni 2022, mempertahankan 'mode IE' di dalam Edge untuk situs korporat lawas. Akhirnya ditandai daring oleh halaman memorial dan kue berbentuk pemakaman di Korea Selatan.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Ekstensi proprietary-nya (VBScript, ActiveX, komentar kondisional) memecah pengembangan front-end selama bertahun-tahun.",
      },
      {
        label: "Budaya",
        text: "Lencana 'Best viewed in Internet Explorer' kini menjadi artefak periode perang peramban.",
      },
      {
        label: "Desain",
        text: "Quirks mode IE6 memaksa satu dasawarsa peretasan tata letak dan melahirkan profesi pengujian lintas peramban.",
      },
    ],
    facts: [
      { label: "Rilis pertama", value: "Agustus 1995" },
      { label: "Asal", value: "Berlisensi dari Spyglass Mosaic" },
      { label: "Versi final", value: "Internet Explorer 11 (2013)" },
      { label: "Dipensiunkan", value: "15 Juni 2022" },
    ],
    image: {
      alt: "Tangkapan layar Internet Explorer 11 yang berjalan di Windows 8.1, versi final peramban itu.",
      caption: "Internet Explorer 11 di Windows 8.1 — versi terakhir sebelum dipensiunkan pada 2022.",
    },
  },
  icq: {
    blurb:
      "“I Seek You” menemukan kehadiran: daftar orang, daring saat ini juga, yang akan menjawab jika Anda mengetik.",
    significance:
      "Invensi abadi ICQ adalah kehadiran — rasa tentang siapa yang tersedia. Setiap titik “aktif sekarang”, tanda dibaca, dan indikator mengetik turun dari daftar teman itu.",
    story: [
      "ICQ diluncurkan November 1996 oleh Mirabilis, perusahaan kecil Israel yang didirikan Arik Vardi, Yair Goldfinger, Sefi Vigiser, dan Amnon Amir. Ia membawa perpesanan teks real-time ke desktop: daftar teman yang menunjukkan siapa yang daring, bunyi notifikasi yang khas, dan pengenal pengguna numerik — UIN — yang dipertukarkan orang seperti nomor telepon.",
      "AOL mengakuisisi Mirabilis pada 1998, dan gagasan-gagasan ICQ diserap ke AOL Instant Messenger dan MSN Messenger, lalu ke setiap produk obrolan sesudahnya. Kliennya bertahan melewati pergantian pemilik dan reboot selama hampir tiga dasawarsa sebelum dihentikan pada 26 Juni 2024.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Perpesanan klien-server yang selalu aktif sejak awal, lewat koneksi dial-up.",
      },
      {
        label: "Budaya",
        text: "Bertukar UIN menjadi semacam ritual pertemanan di kalangan remaja.",
      },
      {
        label: "Desain",
        text: "Ikon bunga dan bunyi 'Uh-oh' termasuk karya branding perangkat lunak pertama yang mudah dikenali.",
      },
    ],
    facts: [
      { label: "Diluncurkan", value: "November 1996" },
      { label: "Pengembang", value: "Mirabilis (Israel)" },
      { label: "Diakuisisi AOL", value: "1998" },
      { label: "Dihentikan", value: "26 Juni 2024" },
    ],
    image: {
      alt: "Logo ICQ: tanda menyerupai bunga berwarna hijau dan kuning dengan huruf ICQ.",
      caption: "Tanda bunga ICQ — identitas perpesanan instan global pertama.",
    },
  },
  "macromedia-flash": {
    blurb:
      "Animasi vektor, gim, dan seluruh situs di dalam sebuah plugin — lapisan web awal yang paling berisik dan paling inventif.",
    significance:
      "Flash adalah runtime media kaya pertama web. Ia menciptakan karya yang tak bisa diungkapkan HTML selama satu dasawarsa sesudahnya — lalu sebagian besarnya nyaris hilang ketika plugin ditarik.",
    story: [
      "FutureSplash Animator karya FutureWave diakuisisi Macromedia pada akhir 1996 dan diganti merek menjadi Flash. Karena menggambar vektor, bukan bitmap, animasi tetap cukup kecil untuk dialirkan lewat modem, dan karena berjalan dalam plugin, ia melompati HTML yang terbatas pada masa itu. Situs-situs mendapat suara, gerak, intro selayar penuh, dan gim.",
      "Seluruh budaya amatir tumbuh di sekitarnya — Newgrounds, Homestar Runner, gim Flash yang tak terhitung — dan satu generasi animator serta desainer antarmuka mempelajari keahliannya di perkakas authoring Flash. Masalah platformnya sama nyatanya: aksesibilitas, seleksi teks, deep linking, dan daya baterai semuanya menderita. Apple menolak mendukung Flash di iPhone pada 2007; Adobe membeli Macromedia pada 2005, mengumumkan akhir hayat Flash pada 2017, dan Flash Player berhenti menjalankan konten pada 31 Desember 2020. Emulator seperti Ruffle kini melestarikan sebagian besar katalognya.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Memperkenalkan plugin peramban sebagai platform aplikasi, yang kemudian digantikan video HTML5, kanvas, dan WebGL.",
      },
      {
        label: "Budaya",
        text: "Menggerakkan generasi pertama animasi web dan gim peramban buatan pengguna.",
      },
      {
        label: "Desain",
        text: "Desain gerak menjadi disiplin web karena Flash membuat linimasa dan tween mudah diakses.",
      },
    ],
    facts: [
      { label: "Asal", value: "FutureSplash Animator, FutureWave, 1996" },
      { label: "Diakuisisi Adobe", value: "2005" },
      { label: "Akhir hayat diumumkan", value: "2017" },
      { label: "Pemutar diblokir", value: "31 Desember 2020" },
    ],
    image: {
      alt: "Logo Adobe Flash Player: kotak merah berisi huruf f kecil putih bergaya.",
      caption: "Tanda Flash Player. Pencabutan plugin pada 2020 membuat segunung budaya web kehilangan rumah.",
    },
  },
  "google-search": {
    blurb:
      "Gagasan pemeringkatan dari asrama Stanford menggantikan direktori suntingan tangan dengan satu kotak dan daftar sepuluh tautan biru.",
    significance:
      "Pencarian menyusun ulang web berdasarkan relevansi, bukan hierarki, dan menjadikan algoritma pemeringkat penyunting paling berkuasa dalam sejarah penerbitan.",
    story: [
      "Larry Page dan Sergey Brin memulai proyek riset BackRub di Stanford pada 1996, menjelajahi wawasan bahwa tautan adalah suara: halaman yang ditunjuk banyak halaman penting mungkin memang penting. Algoritma itu, PageRank, menjadi Google, yang berbadan hukum pada 4 September 1998, mula-mula beroperasi dari garasi di Menlo Park, California.",
      "Antarmukanya adalah penolakan yang disengaja terhadap model portal. Satu kolom masukan, sepuluh hasil, nyaris tanpa ornamen iklan saat diluncurkan. Seiring indeksnya tumbuh hingga miliaran halaman, kotak yang sama menyerap pencarian gambar, berita, peta, dan video, dan Google menjadi pintu masuk utama ke web — posisi yang menjadikan optimasi mesin pencari sebuah industri dan 'to google' sebuah kata kerja.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Menegakkan perayapan, pengindeksan, dan pemeringkatan terdistribusi skala besar sebagai infrastruktur inti.",
      },
      {
        label: "Budaya",
        text: "Menciptakan kebiasaan riset 'cari dulu' dan ekspektasi jawaban seketika.",
      },
      {
        label: "Desain",
        text: "Halaman hasil — sepuluh tautan biru dan tombol lanjut — menjadi templat yang ditiru dua dasawarsa.",
      },
    ],
    facts: [
      { label: "Proyek riset", value: "BackRub, Stanford, 1996" },
      { label: "Perusahaan berbadan hukum", value: "4 September 1998" },
      { label: "Pendiri", value: "Larry Page, Sergey Brin" },
      { label: "Domain didaftarkan", value: "google.com, 15 September 1997" },
    ],
    image: {
      alt: "Logotipe Google dalam bentuk sans-serif 2015-nya, berwarna biru, merah, kuning, dan hijau.",
      caption: "Logotipe Google. Produknya bermula sebagai eksperimen pemeringkatan akademis pada 1996.",
    },
  },
  "wayback-machine": {
    blurb:
      "Upaya agar web tidak lenyap: ratusan miliar halaman, dirayapi dan diberi cap waktu, dapat dijelajahi sebagai sejarah.",
    significance:
      "Wayback Machine adalah bukti bahwa web tidak permanen dengan sendirinya. Tanpa pengarsipan yang disengaja, sebagian besar sejarahnya sudah lenyap.",
    story: [
      "Brewster Kahle mendirikan Internet Archive pada 1996 dengan argumen bahwa web sedang menjadi bentuk penerbitan dominan dan, tidak seperti kertas, tak punya perpustakaan yang menyimpan salinannya. Perayapan dimulai nyaris seketika; antarmuka jelajah publiknya, Wayback Machine, dibuka Oktober 2001.",
      "Arsip itu kini menyimpan ratusan miliar halaman web plus perangkat lunak, audio, buku, dan video. Siapa pun bisa meminta jepretan lewat 'Save Page Now'. Bagi sejarawan, jurnalis, dan mantan desainer web, inilah satu-satunya cara melihat situs yang terhapus — termasuk perkampungan GeoCities yang lenyap dan antarmuka awal platform-platform di arsip ini.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Merintis perayapan web skala besar dan format penyimpanan WARC yang dipakai arsip sedunia.",
      },
      {
        label: "Budaya",
        text: "Menjadikan 'internet lama' tempat yang benar-benar bisa dikunjungi, bukan sekadar dikenang.",
      },
      {
        label: "Desain",
        text: "Menyediakan bahan rujukan untuk mempelajari bagaimana gaya antarmuka berubah tahun demi tahun.",
      },
    ],
    facts: [
      { label: "Arsip didirikan", value: "Mei 1996" },
      { label: "Pendiri", value: "Brewster Kahle" },
      { label: "Wayback dibuka", value: "Oktober 2001" },
      { label: "Akses", value: "Gratis, tanpa akun" },
    ],
    image: {
      alt: "Logo Internet Archive Wayback Machine, menampilkan lengkung bergaya menyerupai jam.",
      caption: "Tanda Wayback Machine (2010). Layanan ini menyimpan jepretan web publik bercap waktu.",
    },
  },
  "msn-messenger": {
    blurb:
      "Nudge, gambar tampilan, pesan pergi, dan kejahilan kecil berupa tampak luring hanya untuk satu orang.",
    significance:
      "Messenger menormalkan percakapan daring yang kontinu dan ambient — pergeseran dari “masuk untuk mengobrol” menjadi sekadar tersedia, yang kelak diwarisi umpan sosial dan obrolan grup.",
    story: [
      "Microsoft meluncurkan MSN Messenger Service pada Mei 1999 untuk bersaing dengan AOL Instant Messenger. Kedua layanan sempat saling terhubung sebelum AOL memblokir klien pihak ketiga, sengketa yang menunjukkan betapa awal industri memahami bahwa graf sosial adalah aset sesungguhnya.",
      "Yang menyusul adalah klien obrolan definitif bagi satu generasi: gambar tampilan kustom, status pergi dan sibuk, wink dan nudge yang mengguncang jendela lawan bicara, dan percakapan panjang yang dibiarkan terbuka seharian di lab komputer sekolah atau kantor. Berganti nama menjadi Windows Live Messenger pada 2005, ia dihentikan pada 2014 ketika Microsoft mengonsolidasikan perpesanan ke Skype.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Perpesanan instan klien-server dengan kehadiran menjadi fitur standar perangkat lunak konsumen.",
      },
      {
        label: "Budaya",
        text: "Pesan status adalah bentuk awal presentasi diri yang murah upaya.",
      },
      {
        label: "Desain",
        text: "Nudge — guncangan fisik pada jendela — masih dikutip sebagai mahakarya desain interaksi ekspresif.",
      },
    ],
    facts: [
      { label: "Diluncurkan", value: "Mei 1999" },
      { label: "Pengembang", value: "Microsoft" },
      { label: "Berganti nama", value: "Windows Live Messenger, 2005" },
      { label: "Dihentikan", value: "2014 (dimigrasikan ke Skype)" },
    ],
    image: {
      alt: "Ikon MSN Messenger: sosok bergaya menyerupai kupu-kupu berwarna biru dan hijau.",
      caption: "Ikon MSN Messenger. Klien ini menentukan percakapan daring sepanjang sebagian besar 2000-an.",
    },
  },
  napster: {
    blurb:
      "Berbagi berkas peer-to-peer mengubah program kamar asrama menjadi perpustakaan musik terbesar di bumi — dan perkara pengadilan federal.",
    significance:
      "Napster adalah demonstrasi massal pertama bahwa distribusi, bukan manufaktur, adalah bisnis sejati industri musik. Setiap layanan alir sesudahnya adalah jawaban atasnya.",
    story: [
      "Shawn Fanning menulis versi pertama Napster saat menjadi mahasiswa di Northeastern University, dan layanan itu meluncur Juni 1999 bersama Sean Parker. Ia mengindeks berkas MP3 yang tersimpan di komputer pengguna sendiri: direktori terpusat, tetapi tanpa penyimpanan terpusat. Menyalin lagu berhenti menjadi pembelian dan menjadi transfer antara dua orang.",
      "Industri rekaman menggugat pada Desember 1999. Pada Februari 2001 Pengadilan Banding Sirkuit Kesembilan sebagian besar menguatkan perintah pengadilan terhadap layanan itu, dan Napster mematikan jaringannya pada Juli 2001. Kebiasaan yang diciptakannya tidak hilang — ia berpindah ke BitTorrent, lalu ke katalog legal iTunes dan, akhirnya, ke layanan alir.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Mempopulerkan arsitektur peer-to-peer dan mengekspos betapa kecil kendali pemegang hak cipta atas salinan.",
      },
      {
        label: "Budaya",
        text: "Menjadikan perpustakaan bersama tanpa batas sebagai ekspektasi normal konsumsi media.",
      },
      {
        label: "Desain",
        text: "Antarmuka dua panel cari-dan-unduhnya menjadi templat satu dasawarsa klien berbagi berkas.",
      },
    ],
    facts: [
      { label: "Diluncurkan", value: "Juni 1999" },
      { label: "Pencipta", value: "Shawn Fanning, bersama Sean Parker" },
      { label: "Putusan banding", value: "Februari 2001, Sirkuit Kesembilan" },
      { label: "Layanan ditutup", value: "Juli 2001" },
    ],
    image: {
      alt: "Logotipe Napster dengan tanda kucing berheadphone di atasnya.",
      caption: "Tanda Napster. Layanan ini beroperasi kira-kira dua tahun sebelum perintah pengadilan mengakhirinya.",
    },
  },
  emoji: {
    blurb:
      "176 gambar dua belas kali dua belas piksel yang dibuat untuk ponsel Jepang menjadi sistem tulis global.",
    significance:
      "Emoji adalah sistem tulis pertama yang dirancang, dibakukan, dan diadopsi sedunia dalam satu masa hidup manusia — invensi antarmuka dengan jangkauan tanda baca.",
    story: [
      "Shigetaka Kurita mendesain set emoji pertama pada 1999 untuk platform internet seluler i-mode NTT DoCoMo: 176 karakter berukuran 12×12 piksel, mencakup cuaca, lalu lintas, bulan, hati, dan beberapa wajah. Kendalanya teknis — layar mungil dan jatah data yang mungil — dan hasilnya adalah singkatan piktografis yang ringkas.",
      "Set-set itu tetap tak saling kompatibel antaroperator Jepang sampai Unicode mulai menyandikan emoji pada 2010, memberi tiap karakter titik kode yang berlaku di mana-mana. Apple membuka papan ketik emoji di iOS 5 pada 2011, dan adopsi menjadi global. Pada 2015 Museum of Modern Art di New York mengakuisisi set asli Kurita, memperlakukannya sebagai artefak desain, bukan keisengan.",
    ],
    impact: [
      {
        label: "Teknologi",
        text: "Teks lintas platform membutuhkan standardisasi Unicode, yang rampung sejak 2010.",
      },
      {
        label: "Budaya",
        text: "Mengembalikan nada dan gestur ke teks polos, mengubah cara perdebatan, permintaan maaf, dan lelucon terbaca.",
      },
      {
        label: "Desain",
        text: "Membuktikan makna bisa dibawa gambar yang sangat kecil dan sangat terkekang.",
      },
    ],
    facts: [
      { label: "Set pertama", value: "1999, 176 karakter berukuran 12×12 px" },
      { label: "Perancang", value: "Shigetaka Kurita" },
      { label: "Platform", value: "NTT DoCoMo i-mode" },
      { label: "Adopsi Unicode", value: "Sejak 2010" },
    ],
    image: {
      alt: "Kisi emoji warna yang umum dipakai, di-render dalam set emoji Noto Google.",
      caption: "Pilihan emoji terstandardisasi. Set asli Kurita tahun 1999 berisi 176 ikon monokrom.",
    },
  },
};