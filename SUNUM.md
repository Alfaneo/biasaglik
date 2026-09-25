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

Test edilen tüm yeni sayfalar (anasayfa, hizmetlerimiz, iletişim, hakkımızda, ekibimiz, evde fizik tedavi ve 9 hizmet sayfası) **4 kategoride de 100** aldı. İçerik %50 artmasına rağmen hizmet sayfaları 80–110 KB arasında kaldı.

> Not: Yeni site henüz yayında değil. Ölçüm yerel sunucuda yapıldı. Cloudflare'in İstanbul sunucusundan yayınlandığında sonuç aynı veya daha iyi olur.

## 2. Daha bilgilendirici (içerik)

19 hizmet sayfasının hepsi aynı zengin içerik modeline geçirildi:

| Sayfa | Mevcut kelime | Yeni kelime | Artış |
|---|---|---|---|
| 3 Boyutlu Skolyoz Terapisi | 567 | 803 | +%42 |
| Bobath Terapisi | 674 | 870 | +%29 |
| Elektroterapi | 625 | 1.089 | +%74 |
| Evde Fizik Tedavi | 397 | 862 | +%117 |
| Kayropraktik | 586 | 864 | +%47 |
| Kronik Ağrı | 653 | 975 | +%49 |
| Kuru İğneleme | 786 | 930 | +%18 |
| Kırık Sonrası Tedavi | 585 | 941 | +%61 |
| Lenfödem Tedavisi | 634 | 942 | +%49 |
| Mat Pilates | 548 | 850 | +%55 |
| Medikal Masaj | 311 | 807 | +%159 |
| Nörolojik Rehabilitasyon | 561 | 941 | +%68 |
| Ortopedik ve Sporcu Rehab. | 677 | 924 | +%36 |
| Pediatrik Rehabilitasyon | 582 | 879 | +%51 |
| Pelvik Taban Rehab. | 736 | 914 | +%24 |
| Pulmoner Rehabilitasyon | 655 | 889 | +%36 |
| Skolyoz Tedavisi | 553 | 894 | +%62 |
| Vestibüler Rehabilitasyon | 533 | 895 | +%68 |
| Yoğun Bakım Sonrası | 840 | 929 | +%11 |
| **TOPLAM (19 sayfa)** | 11.503 | 17.198 | +%50 |

Her hizmet sayfasında artık şu içerik türleri var (eski sitede yalnızca düz paragraf ve madde listesi vardı):

- **Tedavi bilgisi kutusu:** seans süresi, sıklık, uygulayan, uygulama yeri, ilk değerlendirme
- **"Nedir?"** ve **"Nasıl çalışır?"** bölümleri
- **Karşılaştırma tabloları:** yöntemler, evreler, türler, gelişim basamakları, eski ve yeni yaklaşım farkları
- **"Hangi durumlarda uygulanır?"** kartları
- **Adım adım tedavi süreci**
- **Avantajlar** kartları
- **"Önemli" kutusu:** kimlere uygulanmaz, ne zaman doktora gidilmeli gibi hasta güvenliği bilgileri
- **5 soruluk SSS** ve FAQPage schema (Google'da soru-cevap olarak görünebilir)
- **İç linkler:** ilgili hizmetlere metin içi bağlantılar
- **Güncelleme tarihi** ve tıbbi bilgilendirme notu

Ayrıca:
- **/hizmetlerimiz:** tüm hizmetler kategori kategori (eski sitede yoktu)
- **/evde-fizik-tedavi:** anasayfanın kopyası olmaktan çıkıp gerçek bir rehber sayfası oldu
- Eski metinlerdeki, bir evde fizyoterapi hizmetinin sunmadığı vaatler (ilaç tedavisi, konuşma terapisi, diyetisyen, psikolog ekibi) çıkarıldı

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
