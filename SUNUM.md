# Bia Sağlık — aynı site, daha hızlı, daha hafif, daha bilgilendirici

Mevcut Wix sitesi ile yeni sitenin **aynı tasarımda** karşılaştırması.
Ölçüm: Lighthouse 12, mobil (yavaş 4G simülasyonu), 25.09.2026.

## 1. Hız ve ağırlık

### Anasayfa

| | Mevcut site (Wix) | Yeni site | Fark |
|---|---|---|---|
| **Mobil performans skoru** | 48 🔴 | **100** 🟢 | +52 puan |
| Ana içeriğin görünmesi (LCP) | 5,9 sn | **1,5 sn** | 4× hızlı |
| Sayfanın donma süresi (TBT) | 1.510 ms | **0 ms** | donma yok |
| Sayfa ağırlığı | 3.149 KB | **174 KB** | 18× hafif |
| İstek sayısı | 220 | **10** | 22× az |
| Erişilebilirlik | 88 | **100** | |
| En iyi uygulamalar | 79 | **100** | |
| SEO | 100 | **100** | |

### Hizmet sayfası (Elektroterapi)

| | Mevcut site (Wix) | Yeni site |
|---|---|---|
| **Mobil performans skoru** | 57 🔴 | **100** 🟢 |
| LCP | 6,3 sn | **1,1 sn** |
| TBT | 800 ms | **0 ms** |
| Sayfa ağırlığı | 2.071 KB | **80 KB** (26× hafif) |
| İstek sayısı | 166 | **7** |

Test edilen tüm yeni sayfalar (anasayfa, hizmetlerimiz, iletişim, hakkımızda, ekibimiz, evde fizik tedavi, 4 hizmet sayfası) **4 kategoride de 100** aldı.

> Not: Yeni site henüz yayında değil. Ölçüm yerel sunucuda yapıldı. Cloudflare'in İstanbul sunucusundan yayınlandığında sonuç aynı veya daha iyi olur.

## 2. Daha bilgilendirici (içerik)

| Sayfa | Mevcut kelime | Yeni kelime |
|---|---|---|
| Elektroterapi | 625 | **1.089** (+%74) |
| Evde Fizik Tedavi | 397 (anasayfanın kopyası) | **862**: ayrı, özgün rehber sayfası |
| Anasayfa | 385 | **666** |

Elektroterapi sayfasına eklenen yeni içerik türleri:

- **Tedavi bilgisi kutusu:** seans süresi, seans sayısı, anestezi, günlük hayata dönüş…
- **Yöntemler tablosu:** TENS, EMS, enterferansiyel akım, ultrason; ne işe yarar, nerede kullanılır
- **"Nasıl çalışır?"** bölümü
- **"Kimlere uygulanmaz?"** listesi (hasta güvenliği)
- **Avantajlar** kartları
- **"Önemli" kutusu:** "Elektroterapi tek başına yeterli midir?"
- **Sıkça sorulan sorular** (Google'da soru-cevap olarak görünebilir)
- **"İçeriği kontrol eden uzman"** ve güncelleme tarihi (Google sağlık içeriklerinde bunu arıyor)

Yeni sayfalar:
- **/hizmetlerimiz:** tüm hizmetler kategori kategori (eski sitede böyle bir sayfa yoktu)
- **/evde-fizik-tedavi:** gerçek bir rehber sayfası; evde ve klinikte tedavi karşılaştırması, süreç, SSS

## 3. Daha SEO uyumlu

| Konu | Mevcut site | Yeni site |
|---|---|---|
| Anasayfada H1 | **Yok** | "İstanbul'da Evde Fizik Tedavi" |
| Hizmet sayfalarında H2/H3 | **Hiç yok** (yalnızca H1 + düz metin) | Her bölüm H2, her madde H3 |
| H1'den önce H5 ("Ücretsiz İlk Muayene!") | 23 sayfanın hepsinde | Kaldırıldı |
| Boş H6 başlıklar | Var | Yok |
| Anasayfa title | 173 karakter (adres dahil) | 38 karakter |
| Meta açıklamalar | Çoğu 250–350 karakter, iletişimde yok | Hepsi 120–155 karakter |
| Görsel alt metinleri | "Adsız tasarım - 2024-04-08T061339.160.jpg" | Açıklayıcı Türkçe metin |
| Yapılandırılmış veri | LocalBusiness (eksik) | Physiotherapy + çalışma saatleri, Breadcrumb, FAQPage, MedicalWebPage |
| Türkçe karakterli adresler | /kuru-ıgneleme, /lenfödem-tedavi… | /kuru-igneleme… (eskilerden 301 yönlendirme) |
| İç linkleme | Zayıf | Kategori listeleri, ilgili hizmetler, sayfa yolu (breadcrumb) |

## 4. Mevcut sitede bulunan hatalar

Bunlar yeni sitede düzeltildi:

1. **Elektroterapi** sayfasının alt başlığında **"Skolyoz: Doğal Hareketin Yeniden Keşfi"** yazıyor (kopyala-yapıştır hatası).
2. **Kırık Sonrası Tedavi** sayfasında **"Kuru İğneleme ile Ağrıları Hafifletin"** başlığı var.
3. Yoğun bakım sayfasının başlığında yazım hatası: **"Yoğu Bakım Sonrası"**.
4. **İki farklı adres:** anasayfada *Esenler (Menderes Mah.)*, footer ve iletişimde *Bahçelievler (İncirli Merkez Mh.)*. Google'da yerel sıralamayı zayıflatır.
5. Sitenin kodunda şablondan kalma, gizli bir İngilizce menü var: **"Home, Our Services, Our Dentists (Diş Hekimlerimiz)…"**.
6. "2010'dan beri" deniyor ama "14 yıllık tecrübe" ve "10 yıllık deneyim" yazıyor. Yeni sitede yıl sayısı otomatik hesaplanıyor.
7. `/evde-fizik-tedavi` sayfası anasayfanın %94 kopyası. İki sayfa aynı aramada birbiriyle yarışıyor.

## 5. Maliyet

| | Wix | Yeni site |
|---|---|---|
| Barındırma | Aylık Wix aboneliği | **0 ₺** (Cloudflare Pages ücretsiz katman) |
| Domain | Var | Aynı domain |
