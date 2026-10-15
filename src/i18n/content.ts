import {
  categories,
  categoryById,
  eraById,
  eras,
  siteConfig,
  type Category,
  type CategoryId,
  type Era,
  type EraId,
} from "@/config";
import type { Lang } from "./types";

/**
 * Localised mirrors of the site/era/category content.
 * English is the source of truth in `src/config.ts`; Indonesian lives here.
 * Structural fields (ids, years, codes, numbers) are shared — only prose is mirrored.
 */

export interface SiteText {
  name: string;
  volume: string;
  tagline: string;
  intro: string;
}

const siteText: Record<Lang, SiteText> = {
  en: {
    name: siteConfig.name,
    volume: siteConfig.volume,
    tagline: siteConfig.tagline,
    intro: siteConfig.intro,
  },
  id: {
    name: siteConfig.name,
    volume: siteConfig.volume,
    tagline: "Perjalanan menyusuri memori digital yang membentuk kita.",
    intro:
      "Arsip interaktif berisi situs web, teknologi, gim, dan budaya digital yang membentuk dunia kita yang terhubung.",
  },
};

export const localizedSite = (lang: Lang): SiteText => siteText[lang];

/* ---------------- Eras ---------------- */

interface EraText {
  title: string;
  kicker: string;
  summary: string;
  markers: { label: string; text: string }[];
  signature: string;
}

const eraTextId: Record<EraId, EraText> = {
  early: {
    title: "Web Awal",
    kicker: "Dokumen, direktori, dan dial-up",
    summary:
      "Web bermula sebagai sistem dokumen untuk fisikawan lalu tumbuh menjadi ruang publik. Halaman ditulis tangan dalam HTML, ditautkan secara manual ke dalam direktori, dan dijangkau lewat modem yang mengumumkan dirinya dengan bunyi berisik. Belum ada yang menetapkan model bisnis, bahasa visual, atau audiens — dan justru itulah alasan dasawarsa ini tampak seperti apa adanya.",
    markers: [
      {
        label: "Akses",
        text: "Modem dial-up lewat saluran telepon; koneksi dihitung per menit dan salurannya tidak dapat dipakai menelepon pada saat yang sama.",
      },
      {
        label: "Penemuan",
        text: "Direktori kurasi manusia (Yahoo!) dan pencarian berperingkat tautan (Google, sejak 1998) adalah dua jawaban bersaing atas pertanyaan “bagaimana menemukan sesuatu”.",
      },
      {
        label: "Kepengarangan",
        text: "Hos gratis seperti GeoCities menyerahkan pembuatan halaman ke tangan remaja; situs pribadi adalah perkampungan, bukan profil.",
      },
    ],
    signature: "GIF “Under construction”",
  },
  social: {
    title: "Web Sosial",
    kicker: "Profil, umpan, dan perang peramban",
    summary:
      "Pitalebar membuat web menjadi permanen, dan subjek web berubah dari dokumen menjadi manusia. Profil menggantikan halaman muka, linimasa menggantikan direktori, dan peramban menjadi sistem operasi. Dasawarsa yang sama melahirkan wiki terbuka sekaligus jejaring sosial tertutup — dua gagasan yang sangat berbeda tentang siapa yang boleh menulis.",
    markers: [
      {
        label: "Akses",
        text: "Pitalebar (DSL dan kabel) menyebar sepanjang 2000-an, sehingga daring berhenti menjadi peristiwa yang harus dijadwalkan.",
      },
      {
        label: "Identitas",
        text: "Profil nama asli, jumlah teman, dan pembaruan status mengubah web menjadi peta tentang siapa yang Anda kenal.",
      },
      {
        label: "Media",
        text: "YouTube (2005) membuat video dapat diunggah siapa pun; iPod dan iTunes memindahkan musik dari rak ke dalam katalog.",
      },
    ],
    signature: "Daftar “Top 8” teman",
  },
  mobile: {
    title: "Era Seluler",
    kicker: "Umpan pindah ke saku Anda",
    summary:
      "Layar menyusut dan peramban menjadi satu ikon di antara banyak ikon. Aplikasi menggantikan situs, gestur menggantikan tautan, dan foto persegi menggantikan paragraf. Karena ponsel selalu bersama Anda, internet berhenti menjadi tempat yang dikunjungi dan menjadi lapisan di atas dunia fisik — dan di titik itulah sistem rekomendasi mulai menentukan apa yang pertama Anda lihat.",
    markers: [
      {
        label: "Antarmuka",
        text: "Sentuh, gesek, gulir tak berujung, dan kisi aplikasi; tautan digantikan umpan yang tak bisa ditinggalkan.",
      },
      {
        label: "Format",
        text: "Foto persegi (Instagram), tayangan enam detik (Vine), lalu video pendek vertikal — format yang dibuat untuk jempol, bukan tetikus.",
      },
      {
        label: "Tempat",
        text: "Pokémon GO (2016) menaruh internet di atas peta; pembayaran seluler dan perpesanan menggantikan SMS di banyak pasar.",
      },
    ],
    signature: "Gulir tak berujung",
  },
  algo: {
    title: "Internet Algoritmik",
    kicker: "Pemeringkatan, rekomendasi, dan teks generatif",
    summary:
      "Dua hal menentukan periode kini: umpan yang tidak Anda pilih, disusun model pemeringkat, dan mesin yang menulis balasan. Sistem generatif berpindah dari demo riset ke perkakas harian pada 2022–2023, pencarian mulai menjawab alih-alih mendaftar, dan pertanyaan “siapa yang menerbitkan ini?” menjadi lebih sulit dari sebelumnya. Jejaring terdesentralisasi muncul kembali sebagai jawaban atas platform yang mengubah aturannya.",
    markers: [
      {
        label: "Pemeringkatan",
        text: "Umpan “untuk Anda” mengoptimalkan durasi; linimasa kronologis kini menjadi opsi yang harus dipilih.",
      },
      {
        label: "Generasi",
        text: "ChatGPT meluncur November 2022; dalam dua tahun, generasi teks, gambar, dan kode tertanam di produk arus utama.",
      },
      {
        label: "Kepemilikan",
        text: "Layanan fediverse seperti Mastodon memakai protokol ActivityPub, sehingga sebuah akun dapat hidup lebih lama dari keputusan satu perusahaan.",
      },
    ],
    signature: "Umpan “For You”",
  },
};

const mergeEra = (era: Era, text?: EraText): Era =>
  text
    ? {
        ...era,
        title: text.title,
        kicker: text.kicker,
        summary: text.summary,
        markers: text.markers,
        signature: text.signature,
      }
    : era;

export const localizedEras = (lang: Lang): Era[] =>
  lang === "id" ? eras.map((e) => mergeEra(e, eraTextId[e.id])) : eras;

export const localizedEra = (id: EraId, lang: Lang): Era =>
  lang === "id" ? mergeEra(eraById(id), eraTextId[id]) : eraById(id);

/* ---------------- Categories ---------------- */

interface CategoryText {
  name: string;
  note: string;
}

const categoryTextId: Record<CategoryId, CategoryText> = {
  web: {
    name: "Web & Peramban",
    note: "Halaman, peramban, direktori, dan pencarian.",
  },
  social: {
    name: "Media Sosial",
    note: "Profil, umpan, perpesanan, dan komunitas.",
  },
  gaming: {
    name: "Gim",
    note: "Dunia, peluncuran, dan bermain sebagai ruang sosial.",
  },
  devices: {
    name: "Perangkat",
    note: "Perangkat keras yang mengubah cara mengakses internet.",
  },
  culture: {
    name: "Budaya Digital",
    note: "Berbagi, pengetahuan, dan mesin yang mencipta.",
  },
  design: {
    name: "Desain & Antarmuka",
    note: "Invensi antarmuka yang menjadi kebiasaan.",
  },
};

const mergeCategory = (cat: Category, text?: CategoryText): Category =>
  text ? { ...cat, name: text.name, note: text.note } : cat;

export const localizedCategories = (lang: Lang): Category[] =>
  lang === "id" ? categories.map((c) => mergeCategory(c, categoryTextId[c.id])) : categories;

export const localizedCategory = (id: CategoryId, lang: Lang): Category =>
  lang === "id" ? mergeCategory(categoryById(id), categoryTextId[id]) : categoryById(id);
