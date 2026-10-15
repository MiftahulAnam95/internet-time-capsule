import type { Artifact } from "@/data/types";
import type { Lang } from "./types";

/**
 * Indonesian summaries for every catalogue record.
 *
 * The short, high-visibility texts (blurb + curatorial note) are translated so
 * cards, indexes and pull-quotes read fully in Indonesian. The long-form story,
 * impact prose and fact values stay in their source language (English) and the
 * reader says so plainly — see `storyLanguageNote`.
 *
 * To translate a record fully later, extend this map with `story`, `impact`
 * and `facts` overrides; `localizeArtifact` already merges whatever exists.
 */
export interface ArtifactIdText {
  blurb: string;
  significance: string;
}

export const artifactTextId: Record<string, ArtifactIdText> = {
  "world-wide-web": {
    blurb:
      "Usulan menautkan dokumen antarkomputer menjadi ruang alamat yang masih kita huni — dan halaman web pertama masih daring.",
    significance:
      "Web memisahkan penerbitan dari penjagaan gerbang. Dokumen apa pun bisa menunjuk ke dokumen mana pun, di mesin mana pun, tanpa perantara — desain yang memungkinkan setiap efek jejaring sesudahnya.",
  },
  "ncsa-mosaic": {
    blurb:
      "Peramban yang menaruh gambar di dalam halaman — dan membuat web terbaca oleh orang yang bukan fisikawan.",
    significance:
      "Mosaic tidak menemukan web; ia membuat web terlihat. Ia juga memberi silsilah komersial: dilisensikan lewat Spyglass, kodenya menjadi basis peramban pertama Microsoft.",
  },
  "netscape-navigator": {
    blurb:
      "Sebuah rintisan merilis peramban yang lebih cepat, menghadirkan JavaScript dalam sepuluh hari, dan pencatatan saham 1995-nya mengumumkan era dot-com.",
    significance:
      "Netscape membuktikan web adalah platform komersial, dan keputusannya merilis kodenya sebagai proyek Mozilla pada 1998 akhirnya melahirkan Firefox — alasan web modern memiliki lebih dari satu mesin peramban dominan.",
  },
  "yahoo-directory": {
    blurb:
      "Sebelum pencarian bisa memeringkat web, manusia mengarsipkannya. Dua mahasiswa doktoral menyimpan indeks di kertas, lalu di basis data.",
    significance:
      "Direktori adalah jawaban pertama atas masalah utama internet — penemuan — dan penutupannya menandai titik ketika algoritma menggantikan penilaian editorial sebagai cara kita menemukan sesuatu.",
  },
  geocities: {
    blurb:
      "Hos gratis yang disusun menjadi perkampungan khayalan, tempat halaman dibangun dari buku tamu, penghitung kunjungan, dan GIF animasi.",
    significance:
      "GeoCities adalah platform massal pertama untuk penerbitan amatir di web. Penghapusannya adalah studi kasus pendiri tentang pentingnya pelestarian web — dan alasan Wayback Machine terasa seperti infrastruktur esensial, bukan sekadar keingintahuan.",
  },
  "windows-95": {
    blurb:
      "Sistem operasi yang mengajari ratusan juta orang apa itu tombol Start — dan menyertakan web sebagai aksesori.",
    significance:
      "Windows 95 menjadikan internet fitur konsumen, bukan perkakas spesialis — dan dengan mengikat peramban ke sistem operasi, ia menyiapkan pertempuran hukum yang menentukan dasawarsa web berikutnya.",
  },
  "internet-explorer": {
    blurb:
      "Peramban berlisensi dari Mosaic, dibundel dengan Windows, dan akhirnya dipensiunkan dengan perpisahan resmi.",
    significance:
      "Internet Explorer adalah contoh paling jelas tentang distribusi yang memenangkan pasar teknologi — dan tentang bagaimana satu mesin dominan bisa memperlambat seluruh platform terbuka.",
  },
  icq: {
    blurb:
      "“I Seek You” menemukan kehadiran: daftar orang, daring saat ini juga, yang akan menjawab jika Anda mengetik.",
    significance:
      "Invensi abadi ICQ adalah kehadiran — rasa tentang siapa yang tersedia. Setiap titik “aktif sekarang”, tanda dibaca, dan indikator mengetik turun dari daftar teman itu.",
  },
  "macromedia-flash": {
    blurb:
      "Animasi vektor, gim, dan seluruh situs di dalam sebuah plugin — lapisan web awal yang paling berisik dan paling inventif.",
    significance:
      "Flash adalah runtime media kaya pertama web. Ia menciptakan karya yang tak bisa diungkapkan HTML selama satu dasawarsa sesudahnya — lalu sebagian besarnya nyaris hilang ketika plugin ditarik.",
  },
  "google-search": {
    blurb:
      "Gagasan pemeringkatan dari asrama Stanford menggantikan direktori suntingan tangan dengan satu kotak dan daftar sepuluh tautan biru.",
    significance:
      "Pencarian menyusun ulang web berdasarkan relevansi, bukan hierarki, dan menjadikan algoritma pemeringkat penyunting paling berkuasa dalam sejarah penerbitan.",
  },
  "wayback-machine": {
    blurb:
      "Upaya agar web tidak lenyap: ratusan miliar halaman, dirayapi dan diberi cap waktu, dapat dijelajahi sebagai sejarah.",
    significance:
      "Wayback Machine adalah bukti bahwa web tidak permanen dengan sendirinya. Tanpa pengarsipan yang disengaja, sebagian besar sejarahnya sudah lenyap.",
  },
  "msn-messenger": {
    blurb:
      "Nudge, gambar tampilan, pesan pergi, dan kejahilan kecil berupa tampak luring hanya untuk satu orang.",
    significance:
      "Messenger menormalkan percakapan daring yang kontinu dan ambient — pergeseran dari “masuk untuk mengobrol” menjadi sekadar tersedia, yang kelak diwarisi umpan sosial dan obrolan grup.",
  },
  napster: {
    blurb:
      "Berbagi berkas peer-to-peer mengubah program kamar asrama menjadi perpustakaan musik terbesar di bumi — dan perkara pengadilan federal.",
    significance:
      "Napster adalah demonstrasi massal pertama bahwa distribusi, bukan manufaktur, adalah bisnis sejati industri musik. Setiap layanan alir sesudahnya adalah jawaban atasnya.",
  },
  emoji: {
    blurb:
      "176 gambar dua belas kali dua belas piksel yang dibuat untuk ponsel Jepang menjadi sistem tulis global.",
    significance:
      "Emoji adalah sistem tulis pertama yang dirancang, dibakukan, dan diadopsi sedunia dalam satu masa hidup manusia — invensi antarmuka dengan jangkauan tanda baca.",
  },
  wikipedia: {
    blurb:
      "Ensiklopedia yang boleh disunting siapa pun, dan eksperimen terbesar menulis kolaboratif terbuka yang pernah dicoba.",
    significance:
      "Wikipedia menunjukkan bahwa kerumunan besar tanpa bayaran dan anonim bisa menghasilkan karya rujukan yang layak, asalkan prosesnya meninggalkan jejak kasatmata dari setiap perselisihan.",
  },
  ipod: {
    blurb:
      "Kandar keras, roda klik, dan kabel sinkron: koleksi musik milik Anda menjadi basis data jinjing.",
    significance:
      "iPod memindahkan media dari rak ke basis data dan menyiapkan orang untuk menerima bahwa koleksi pribadi bisa berlisensi, dialirkan, dan akhirnya lenyap.",
  },
  friendster: {
    blurb:
      "Jejaring sosial pertama yang dipakai kebanyakan orang: profil, permintaan teman, dan testimoni yang ditulis orang lain tentang Anda.",
    significance:
      "Friendster menegakkan model graf sosial: akun Anda didefinisikan oleh koneksi eksplisit dan resiprokal ke orang bernama. Setiap jejaring sesudahnya mewarisi asumsi itu.",
  },
  myspace: {
    blurb:
      "HTML yang bisa disunting, musik yang terputar otomatis, dan Top 8. Jejaring sosial pertama yang didesain penggunanya.",
    significance:
      "MySpace adalah argumen historis terkuat bahwa personalisasi menumbuhkan keterikatan. Ia memberi pengguna perkakas untuk membuat tempat, dan menjadi jejaring pertama yang identitas visualnya dibuat remaja, bukan tim desain.",
  },
  facebook: {
    blurb:
      "Direktori kampus yang mewajibkan nama asli, dibuka untuk publik pada 2006, dan menjadi infrastruktur identitas sosial.",
    significance:
      "Facebook menjadikan graf sosial nama asli prinsip pengatur web komersial, dan umpan kabar format baca dominan — dua keputusan yang akibatnya masih dirundingkan.",
  },
  youtube: {
    blurb:
      "Situs video pertama yang benar-benar bisa diunggahi orang biasa — dimulai dengan sembilan belas detik di kebun binatang.",
    significance:
      "YouTube memisahkan penerbitan video dari penyiaran. Ia menciptakan ekonomi kreator dan menjadikan gambar bergerak bentuk ekspresi daring bawaan.",
  },
  twitter: {
    blurb: "140 karakter, linimasa publik, dan sebuah invensi tak disengaja: tagar.",
    significance:
      "Twitter menjadikan percakapan publik, real-time, dan pendek sebagai media massa — dan menunjukkan betapa banyak fitur terpenting platform bisa ditemukan penggunanya, bukan perancangnya.",
  },
  tumblr: {
    blurb:
      "Dasbor untuk reblog: jejaring yang membuat fandom, estetika, dan keanehan internet menjadi portabel.",
    significance:
      "Tumblr membuktikan jejaring sosial bisa disusun berdasarkan selera dan komunitas, bukan identitas nama asli — dan bahwa jejaring semacam itu rapuh ketika kepemilikan berganti.",
  },
  iphone: {
    blurb:
      "Layar multisentuh, peramban sungguhan, dan keputusan tanpa stilus — antarmuka yang memindahkan internet ke saku.",
    significance:
      "iPhone menjadikan internet benda fisik yang dibawa. Ia juga menentukan dasawarsa desain berikutnya: sentuh dulu, aplikasi dulu, potret dulu.",
  },
  minecraft: {
    blurb:
      "Dunia dari balok, tanpa instruksi, dan satu generasi yang belajar membangun, mengehos server, dan menonton orang lain bermain.",
    significance:
      "Minecraft mengubah audiens internet menjadi pembangun. Ia kasus paling jelas tentang gim yang menjadi platform kreativitas, pendidikan, dan infrastruktur yang dijalankan komunitas.",
  },
  farmville: {
    blurb:
      "Gim sosial yang mengubah umpan kabar menjadi ladang, dan menjadikan “spam permintaan” masalah desain yang layak dipecahkan.",
    significance:
      "FarmVille menunjukkan gim bisa didistribusikan lewat graf sosial, bukan toko — dan betapa cepat daya ungkit itu menjadi kebisingan ketika dioptimalkan tanpa kendali.",
  },
  "like-button": {
    blurb:
      "Satu klik menggantikan satu kalimat. Invensi antarmuka terkecil dengan efek terukur terbesar pada perilaku.",
    significance:
      "Tombol Like mengubah percakapan menjadi sinyal. Inilah titik ketika web sosial mulai mengoptimalkan reaksi terukur, bukan pertukaran.",
  },
  instagram: {
    blurb:
      "Foto persegi, filter, dan umpan yang menggantikan pembaruan status tertulis dengan gambar hari Anda.",
    significance:
      "Instagram menjadikan gambar satuan utama komunikasi sosial dan menormalkan swapotret terkurasi dan berfilter sebagai penerbitan sehari-hari.",
  },
  vine: {
    blurb:
      "Enam detik berulang. Format terpendek di arsip, dan alasan video pendek tampak seperti sekarang.",
    significance:
      "Vine membuktikan keringkasan ekstrem tidak membatasi ekspresi — ia memekatkannya. TikTok, Reels, dan Shorts adalah keturunan langsungnya, dengan pewaktu yang dilonggarkan dan putaran yang dipertahankan.",
  },
  "pokemon-go": {
    blurb:
      "Musim panas ketika internet keluar rumah: peta, kamera, dan alasan berjalan ke air mancur tertentu jam 11 malam.",
    significance:
      "Pokémon GO adalah demonstrasi konsumen pertama bahwa lapisan daring bisa mengubah perilaku luring secara andal — ke mana orang berjalan, berkumpul, dan berbelanja.",
  },
  fortnite: {
    blurb:
      "Battle royale bermekanik bangun, main lintas platform, dan konser yang digelar di dalam gim.",
    significance:
      "Fortnite mendefinisikan ulang gim sebagai ruang sosial persisten yang terus diperbarui — lebih dekat ke arena daripada produk — dan memaksa industri menerima main lintas platform.",
  },
  tiktok: {
    blurb:
      "Umpan vertikal yang sepenuhnya disusun model rekomendasi, tempat jumlah pengikut berhenti penting.",
    significance:
      "TikTok merampungkan pergeseran dari graf sosial ke graf rekomendasi — audiens dipilih oleh model, bukan dirakit oleh penerbit.",
  },
  "generative-ai": {
    blurb:
      "Pertama kali internet menjawab balik: kotak teks yang menghasilkan prosa, kode, dan gambar sesuai permintaan.",
    significance:
      "Asisten generatif mengubah web dari sesuatu yang dicari menjadi sesuatu yang merespons. Mereka juga menjadikan provenans syarat desain: watermark, pengungkapan, dan atribusi sumber kini menjadi fitur antarmuka.",
  },
  "fediverse-mastodon": {
    blurb:
      "Jejaring sosial tanpa pemilik: ribuan server yang dijalankan independen, terhubung oleh satu protokol terbuka.",
    significance:
      "Fediverse adalah alternatif nyata atas kepemilikan platform. Ia menunjukkan graf sosial bisa portabel, pemeringkatan tak harus komersial, dan harga kebebasan itu adalah koordinasi.",
  },
  "ai-overviews": {
    blurb:
      "Jawaban tiba sebelum tautan. Dua puluh enam tahun sepuluh tautan biru digantikan sebuah paragraf generatif.",
    significance:
      "AI Overviews menandai akhir daftar sebagai bentuk bawaan jawaban. Arsip web kini sering dikonsultasikan lewat ringkasan, sehingga provenans dan sitasi menjadi masalah desain utama pencarian.",
  },
};

/** Return the record with its translated short texts applied (if any). */
export const localizeArtifact = (artifact: Artifact, lang: Lang): Artifact => {
  if (lang !== "id") return artifact;
  const text = artifactTextId[artifact.id];
  if (!text) return artifact;
  return { ...artifact, blurb: text.blurb, significance: text.significance };
};

/* ---------------- Record-card labels ---------------- */

const impactLabelId: Record<string, string> = {
  Technology: "Teknologi",
  Culture: "Budaya",
  Design: "Desain",
};

const factLabelId: Record<string, string> = {
  Launched: "Diluncurkan",
  Developer: "Pengembang",
  Founders: "Pendiri",
  Founder: "Pendiri",
  Founded: "Didirikan",
  "First release": "Rilis pertama",
  Released: "Dirilis",
  Origin: "Asal",
  "Shut down": "Ditutup",
  Renamed: "Berganti nama",
  Platform: "Platform",
  Operator: "Operator",
  Manufacturer: "Produsen",
  Introduced: "Diperkenalkan",
  Discontinued: "Dihentikan",
  Creator: "Pencipta",
  Announced: "Diumumkan",
  Designer: "Perancang",
  Format: "Format",
  Model: "Model",
  Protocol: "Protokol",
  Structure: "Struktur",
  Started: "Dimulai",
  Retired: "Dipensiunkan",
  Incorporated: "Berbadan hukum",
  "Company founded": "Perusahaan didirikan",
  "Company incorporated": "Perusahaan berbadan hukum",
  "Opened to the public": "Dibuka untuk publik",
  "First public site": "Situs publik pertama",
  "Public rollout": "Peluncuran publik",
  "Full release": "Rilis penuh",
  "First released": "Pertama dirilis",
  "First public build": "Build publik pertama",
  "First video": "Video pertama",
  "First set": "Set pertama",
  "Final version": "Versi final",
  "Development ended": "Pengembangan berakhir",
  "Browser support ended": "Dukungan peramban berakhir",
  "End of life announced": "Akhir hayat diumumkan",
  "Service shut down": "Layanan ditutup",
  "Social network closed": "Jejaring sosial ditutup",
  "Original browser version ended": "Versi peramban asli berakhir",
  "Directory closed": "Direktori ditutup",
  "Line discontinued": "Lini dihentikan",
  "Player blocked": "Pemutar diblokir",
  "Archive founded": "Arsip didirikan",
  "Domain registered": "Domain didaftarkan",
  "Wayback opened": "Wayback dibuka",
  "Research project": "Proyek riset",
  Predecessors: "Pendahulu",
  "Predecessor experiment": "Eksperimen pendahulu",
  Counterparts: "Padanan",
  "Later variants": "Varian kemudian",
  "Later pivot": "Putar haluan",
  Adoption: "Adopsi",
  Inventor: "Penemu",
  Proposed: "Diusulkan",
  "Key authors": "Penulis utama",
  "First-month sales": "Penjualan bulan pertama",
  "In-game concert": "Konser dalam gim",
  "Battle Royale mode": "Mode Battle Royale",
  "Hashtag proposed": "Tagar diusulkan",
  "News Feed introduced": "Kabar Beranda diperkenalkan",
  "Stories added": "Stories ditambahkan",
  "Musical.ly merged": "Musical.ly digabung",
  "Renamed parent company": "Induk berganti nama",
  "Released royalty-free": "Dibebaskan tanpa royalti",
  "Largest adoption surge": "Lonjakan adopsi terbesar",
  "Largest social network": "Jejaring sosial terbesar",
  "OpenAI research announcements": "Pengumuman riset OpenAI",
  "ChatGPT released": "ChatGPT dirilis",
  "GPT-3 paper": "Makalah GPT-3",
  "TikTok launched": "TikTok diluncurkan",
  "Douyin launched": "Douyin diluncurkan",
  "Launched on Facebook": "Diluncurkan di Facebook",
  "Launched (iOS)": "Diluncurkan (iOS)",
  "Android release": "Rilis Android",
  "iOS launch": "Peluncuran iOS",
  "App Store": "App Store",
  "iTunes Store opened": "iTunes Store dibuka",
  "Navigator 1.0": "Navigator 1.0",
  "Most visited US site": "Situs AS paling dikunjungi",
  "Two billion downloads": "Dua miliar unduhan",
  "Downloads in 2016": "Unduhan pada 2016",
  "Unicode adoption": "Adopsi Unicode",
  "Appeal ruling": "Putusan banding",
  IPO: "IPO",
};

/**
 * Translate an impact/fact label. Unknown labels fall back to the original —
 * most of those are proper-noun phrases ("Acquired by Google") that stay
 * legible in either language.
 */
export const localizeLabel = (label: string, lang: Lang): string => {
  if (lang !== "id") return label;
  const direct = impactLabelId[label] ?? factLabelId[label];
  if (direct) return direct;
  const acquired = label.match(/^Acquired by (.+)$/);
  if (acquired) return `Diakuisisi ${acquired[1]}`;
  const acquiredBy = label.match(/^(.+) acquired by (.+)$/);
  if (acquiredBy) return `${acquiredBy[1]} diakuisisi ${acquiredBy[2]}`;
  return label;
};
