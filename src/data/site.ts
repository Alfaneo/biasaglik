// İşletme bilgileri tek yerde: header, footer, iletişim sayfası ve schema buradan okur.
export const site = {
  ad: 'Bia Sağlık',
  slogan: 'Evde Sağlık & Fizik Tedavi Hizmetleri',
  url: 'https://www.biasaglik.com.tr',
  kurulusYili: 2010,
  telefon: '+90 (538) 700 13 74',
  telefonLink: 'tel:+905387001374',
  whatsapp: 'https://wa.me/905387001374',
  whatsappNo: '905387001374',
  eposta: 'biasaglikhizmetleri@gmail.com',
  adres: {
    satir1: 'İncirli Merkez Mh, Neyire Neyir Sk. Ödülkent Sitesi No:23 A1 Blok K:4 D:21',
    ilce: 'Bahçelievler',
    il: 'İstanbul',
    postaKodu: '34180',
    sokak: 'Neyire Neyir Sokak No:23',
  },
  haritaLink: 'https://maps.app.goo.gl/Md2mzNFnbBAtmsN59',
  calismaSaatleri: 'Pazartesi – Cumartesi 09:00 – 20:00',
  calismaSaatleriSchema: 'Mo-Sa 09:00-20:00',
};

export const tecrubeYili = new Date().getFullYear() - site.kurulusYili;

export const menu = [
  { ad: 'Anasayfa', url: '/' },
  { ad: 'Hakkımızda', url: '/hakkimizda' },
  { ad: 'Uzmanlarımız', url: '/ekibimiz' },
  { ad: 'Hizmetlerimiz', url: '/hizmetlerimiz' },
  { ad: 'İletişim', url: '/iletisim' },
];

export const kategoriSirasi = ['Nörolojik', 'Ortopedik', 'Pediatrik', 'Kardiyopulmoner', 'Tedavi Yöntemleri'] as const;

export const kategoriBaslik: Record<string, string> = {
  'Nörolojik': 'Nörolojik rehabilitasyon',
  'Ortopedik': 'Ortopedik rehabilitasyon ve ağrı',
  'Pediatrik': 'Çocuk (pediatrik) rehabilitasyon',
  'Kardiyopulmoner': 'Solunum ve yoğun bakım sonrası',
  'Tedavi Yöntemleri': 'Tedavi yöntemleri',
};
