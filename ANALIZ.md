# biasaglik.com.tr — SEO / Hız / Ağırlık Analizi

**Tarih:** 25.09.2026 · **Ölçüm:** Lighthouse 12, mobil (Moto G Power emülasyonu, yavaş 4G) · **Ham rapor:** [`olcumler/`](olcumler/)

> **En önemli tespit:** Site **Wix** ile yapılmış. Wix'te sitenin koduna, sunucusuna ve Wix'in kendi JavaScript'ine dokunulamıyor.
> Bu yüzden optimizasyon **Wix paneli içinden yapılabilen ayarlarla** sınırlı. Sınırın ötesine geçmek için siteyi Wix dışına taşımak gerekir (bkz. bölüm 5).

---

## 1. Skorlar (mobil)

| Kategori | Skor |
|---|---|
| Performans | **48** 🔴 |
| Erişilebilirlik | 88 🟠 |
| En İyi Uygulamalar | 79 🟠 |
| SEO | 100 🟢 (teknik temel doğru, ama içerik tarafında sorunlar var — bkz. bölüm 3) |

| Metrik | Değer | Hedef |
|---|---|---|
| LCP (en büyük içerik) | **5,9 sn** 🔴 | < 2,5 sn |
| TBT (engellenen süre) | **1.510 ms** 🔴 | < 200 ms |
| FCP (ilk görüntü) | 2,4 sn 🟠 | < 1,8 sn |
| Speed Index | 3,8 sn 🟠 | < 3,4 sn |
| CLS (kayma) | 0,008 🟢 | < 0,1 |
| Tam etkileşim (TTI) | **21,2 sn** 🔴 | < 3,8 sn |

## 2. Ağırlık — sayfa neden ağır?

**Toplam: 3,1 MB, 220 istek.** Bunun sadece **162 KB'ı görsel**. Sorun görseller değil, **JavaScript (1,9 MB)**.

| Kaynak | Boyut | Ana iş parçacığını bloklama | Kontrol bizde mi? |
|---|---|---|---|
| Wix altyapısı (parastorage) | ~1,5 MB | 410 ms | ❌ Wix'in kendisi |
| **Google Tag Manager + 2× gtag** | **505 KB** | **718 ms** | ✅ Evet |
| **Google Maps (etkileşimli harita)** | **454 KB** | — | ✅ Evet |
| **Facebook Pixel** | **148 KB** | **291 ms** | ✅ Evet |
| Yazı tipleri (4 aile) | 267 KB | — | ✅ Evet |
| Sentry (Wix hata takibi) | 42 KB | — | ❌ |

**Sonuç:** Kontrol edebildiğimiz kısım ~**1,1 MB** ve **~1 sn bloklama**. Asıl kazanç buradan gelir.

Takip kodu tekrarı: Sitede **GTM-TVGKMJH**, ayrıca doğrudan **G-Y3TX6Z2NK9** (Analytics) ve **AW-410034382** (Google Ads) yükleniyor. Üçü aynı işi yapan ayrı ayrı yükleniyor.

## 3. SEO bulguları

Teknik temel iyi: `lang="tr"`, canonical, sitemap (23 sayfa), robots.txt, HTTPS, `biasaglik.com.tr → www` yönlendirmesi, LocalBusiness schema var.

### Sorunlar

| # | Sorun | Nerede | Önem |
|---|---|---|---|
| S1 | **H1 başlığı yok** | Ana sayfa, `/evde-fizik-tedavi`, `/hakkimizda` | 🔴 Yüksek |
| S2 | **Title çok uzun (173 karakter)**, adres title'a yazılmış; Google ~60 karakterde keser | Ana sayfa, `/evde-fizik-tedavi` (162) | 🔴 Yüksek |
| S3 | `/evde-fizik-tedavi` **çok zayıf içerik (~124 kelime)** ve title'ı ana sayfayla neredeyse aynı → iki sayfa aynı anahtar kelimede birbiriyle yarışıyor. Oysa en değerli anahtar kelime bu | `/evde-fizik-tedavi` | 🔴 Yüksek |
| S4 | **Görsel alt metinleri dosya adı**: "Adsız tasarım - 2024-04-08T061339.160.jpg", "noröloji.jpg", "skolyoz 2.png" … Sitedeki görsellerin çoğu | Tüm sayfalar | 🟠 Orta |
| S5 | **Meta description çok uzun** (çoğu 250–350 karakter, önerilen ≤ 155) | Hizmet sayfalarının çoğu | 🟠 Orta |
| S6 | **Meta description yok** | `/iletisim` | 🟠 Orta |
| S7 | Yazım hatası H1'de: "**Yoğu** Bakım Sonrası" | `/yogun-bakim-sonrasi-fizik-tedavi` | 🟠 Orta |
| S8 | Türkçe karakterli URL'ler: `/lenfödem-tedavi`, `/kırık-sonrası-tedavi`, `/vestibüler-rehabilitasyon`, `/kuru-ıgneleme` (üstelik "ıgneleme" yanlış). Paylaşımda `%C4%B1...` gibi bozuk görünür | 4 sayfa | 🟡 Düşük* |
| S9 | Başlık sırası bozuk (H2'den sonra H6), rakamlar ("14", "1500+") H3 olarak işaretli | Ana sayfa | 🟡 Düşük |
| S10 | Schema eksik: telefon var ama `openingHours`, `geo`, `areaServed`, `priceRange` yok; tip `LocalBusiness` yerine `MedicalBusiness`/`Physiotherapy` olmalı; schema'daki logo görseli sitedekinden farklı | Ana sayfa | 🟡 Düşük |
| S11 | Title'da "istanbul" küçük harf | Ana sayfa | 🟡 Düşük |

\* URL değiştirmek sıralamayı geçici olarak düşürebilir; yapılırsa mutlaka **301 yönlendirme** eklenmeli.

### Erişilebilirlik (88) / En İyi Uygulamalar (79)

- 3 bağlantının adı yok (harita, e-posta, telefon ikonları) → ekran okuyucular "bağlantı" diye okuyor.
- 1 butonda renk kontrastı yetersiz.
- 1 dokunma hedefi (menü linki) mobilde çok küçük.
- Facebook ve Google Ads 3. parti çerez bırakıyor (En İyi Uygulamalar puanını düşürüyor, KVKK açısından da çerez onayı gerekiyor).

## 4. Yapılacaklar — Wix paneli içinden (öncelik sırasıyla)

### 🔴 Hız — en büyük kazançlar

| # | İş | Wix'te nerede | Beklenen etki |
|---|---|---|---|
| H1 | **Google Analytics ve Google Ads'i tek yerden (GTM) yükle.** Wix *Pazarlama Entegrasyonları*'ndaki ayrı GA4 ve Google Ads bağlantılarını kaldır, ikisini GTM içinde tag olarak tanımla (veya tam tersi: GTM'i kaldır, Wix'in yerel entegrasyonlarını kullan) | Ayarlar → Pazarlama Entegrasyonları + Özel Kod | −300 KB, −400 ms bloklama |
| H2 | **Facebook Pixel gerçekten kullanılıyor mu?** Reklam verilmiyorsa kaldır. Kullanılıyorsa GTM içine taşı | Pazarlama Entegrasyonları | −148 KB, −290 ms |
| H3 | **Etkileşimli Google Haritası'nı kaldır**, yerine haritanın **ekran görüntüsü + "Yol tarifi al" butonu** (maps.app.goo.gl linki) koy | Editör → harita öğesi | **−454 KB** |
| H4 | **Yazı tiplerini 4'ten 2'ye indir** (şu an Playfair Display, Open Sans, Roboto, Exo + Futura/Helvetica/DIN) | Editör → Site Tasarımı → Metin | −100–150 KB |
| H5 | Ana ekrandaki **arka plan görselini** (LCP öğesi) sadeleştir: mobilde video/animasyon varsa kapat, görseli sıkıştırılmış yeniden yükle | Editör → mobil görünüm | LCP −0,5–1 sn |
| H6 | Kaydırma animasyonlarını (özellikle mobilde) kapat | Editör → Animasyonlar | TBT düşer |
| H7 | Kullanılmayan Wix uygulamalarını sil (Uygulamalar menüsü) | Uygulamaları Yönet | Değişken |

### 🔴 SEO — hızlı kazançlar

| # | İş | Wix'te nerede |
|---|---|---|
| S1 | Ana sayfa, `/evde-fizik-tedavi`, `/hakkimizda`'daki ana başlığı **H1 (Başlık 1)** yap. Sayfa başına **tek H1** | Editör → metin → Başlık 1 |
| S2 | Ana sayfa title: `Evde Fizik Tedavi İstanbul \| Bia Sağlık` (≤ 60 karakter). Adresi title'dan çıkar | Sayfa → SEO Temel |
| S3 | `/evde-fizik-tedavi`: title'ı ayrıştır (örn. `Evde Fizik Tedavi Hizmeti – Nasıl Çalışır? \| Bia Sağlık`), içeriği **800+ kelimeye** çıkar (süreç, bölgeler, SSS, fiyatlandırma yaklaşımı) | Sayfa → SEO + içerik |
| S4 | Tüm görsellere **anlamlı alt metin** yaz (örn. "Evde nörolojik rehabilitasyon seansı") | Görsel → Ayarlar → Alt metin |
| S5 | Meta description'ları **140–155 karaktere** kısalt, `/iletisim`'e ekle | Sayfa → SEO Temel |
| S6 | "Yoğu" → "Yoğun" düzelt | `/yogun-bakim-sonrasi-fizik-tedavi` |
| S7 | Ana sayfadaki rakamları ("14", "1500+") başlık yerine **paragraf** yap, H6'ları H3 yap | Editör |
| S8 | Harita/e-posta/telefon ikon linklerine **erişilebilir ad** ver | Öğe → Erişilebilirlik |
| S9 | Schema'yı genişlet: `Physiotherapy` tipi, çalışma saatleri, `areaServed: İstanbul`, koordinat | Ayarlar → SEO → Yapılandırılmış veri |
| S10 | Google Business Profile ile NAP (ad-adres-telefon) bilgilerini birebir aynı yap | Google Business |

### Tahmini sonuç (Wix içinde kalarak)

Mobil performans **48 → ~60–70**, sayfa ağırlığı **3,1 MB → ~2 MB**.
Wix'in kendi ~1,5 MB'lık altyapısı kaldığı sürece **mobilde 90+ gerçekçi değil**.

## 5. Daha ileri gitmek istenirse: Wix'ten çıkış

Site ~23 sayfalık, büyük oranda statik bir tanıtım sitesi. Aynı tasarım statik bir site olarak (ör. Astro / saf HTML + Cloudflare Pages / Netlify) yeniden yapılırsa:

- Sayfa ağırlığı **~200–400 KB** (şu an 3,1 MB)
- Mobil performans **90–100**
- Hosting maliyeti **~0 ₺** (Wix aboneliği yerine)

**Dikkat:** Mevcut URL'ler korunmalı veya 301 ile yönlendirilmeli, form (iletişim) için bir servis (Formspree, Netlify Forms vb.) gerekir, domain DNS ayarı değişir. Bu, site sahibinin kararı.

## 6. Ölçüm notları

- Ölçüm bulut sunucusundan, Wix'in ABD önbelleği üzerinden yapıldı; Türkiye'den ölçüldüğünde sunucu yanıt süresi (burada 1,08 sn) farklı çıkabilir. "HTTP/2 kullanılmıyor" uyarısı ölçüm ortamındaki proxy kaynaklıdır, sitenin sorunu değildir.
- PageSpeed Insights (Google) sonuçları her çalıştırmada ±5–10 puan oynar; karşılaştırmayı hep aynı araçla yapın.
