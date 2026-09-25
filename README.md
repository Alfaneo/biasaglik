# Bia Sağlık — yeni site (Astro)

www.biasaglik.com.tr'nin Wix'ten çıkarılmış, aynı tasarımda, statik ve hızlı sürümü.
Analiz: [`ANALIZ.md`](ANALIZ.md) · Sunum notları: [`SUNUM.md`](SUNUM.md)

## Çalıştırma

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # dist/ klasörüne statik site üretir
npm run preview   # dist/ klasörünü yerelde sunar
```

## Klasör yapısı

```
src/
  content/
    hizmetler/*.md     ← her hizmet sayfası bir dosya (içerik burada)
    uzmanlar/*.md      ← ekip üyeleri
  content.config.ts    ← içerik alanları ve kuralları (eksik/uzun alan derlemeyi durdurur)
  data/site.ts         ← telefon, adres, saatler, menü (tek yerden)
  data/schema.ts       ← JSON-LD yapılandırılmış veri
  pages/               ← anasayfa, hakkımızda, ekibimiz, iletişim, hizmetlerimiz, [slug] şablonu
  components/          ← header, footer, SSS, randevu, ikon şeridi vb.
  assets/img/          ← görseller (derlemede otomatik AVIF/WebP ve boyutlara çevrilir)
public/
  _redirects           ← eski Wix adreslerinden 301 yönlendirme
  _headers             ← önbellek başlıkları
```

## Hizmet sayfası içerik modeli

Bir hizmet dosyasının alanları ve sayfada göründüğü sıra:

| Alan | Sayfada | Başlık |
|---|---|---|
| `baslik`, `altBaslik`, `ozet`, `hero` | Üst görsel + beyaz kart | **H1** |
| `bilgiKutusu` | Tedavi bilgisi tablosu (süre, seans, ağrı…) | – |
| Markdown gövde + `gorsel` | Nedir, yöntemler tablosu, nasıl çalışır… | H2 |
| `endikasyonlar` | Hangi durumlarda uygulanır (kartlar) | H2 → H3 |
| — | İkon şeridi (tasarım öğesi) | – |
| `adimlar` | Tedavi süreci adım adım (numaralı) | H2 → H3 |
| `avantajlar` | Avantajlar (kartlar) | H2 → H3 |
| `onemli` | Sarı "Önemli" kutusu | H2 |
| `sss` | Sıkça sorulan sorular + FAQPage schema | H2 → H3 |
| `kontrolEden`, `guncelleme` | "İçeriği kontrol eden uzman" satırı | – |
| — | Randevu çağrısı, ilgili hizmetler | H2 |

Boş bırakılan bölüm sayfada hiç görünmez. Tam örnek: [`src/content/hizmetler/elektro-terapi.md`](src/content/hizmetler/elektro-terapi.md).

## İçerik güncelleme (admin paneli yok)

1. `src/content/hizmetler/<sayfa>.md` dosyasını düzenle (GitHub'da kalem ikonu da olur).
2. Commit → push. Cloudflare Pages kullanılıyorsa site ~1 dakikada kendiliğinden yenilenir; Hostinger'da `dist/` yeniden yüklenir.

`seoBaslik` en fazla 65, `aciklama` 70–160, `kisaAciklama` 20–140 karakter olmalı; kurala uymayan dosyada derleme hata verir.

## Yayına alma

Site derlendiğinde `dist/` klasöründe hazır HTML dosyaları oluşur; herhangi bir statik barındırmada çalışır.
Yönlendirme ve önbellek ayarları iki biçimde hazır:
- **Hostinger / Apache / LiteSpeed:** `public/.htaccess` ve `public/_astro/.htaccess`
- **Cloudflare Pages / Netlify:** `public/_redirects` ve `public/_headers`

### Seçenek A: Hostinger

1. `npm run build` çalıştır.
2. hPanel → Dosya Yöneticisi → `public_html` klasörünü boşalt (Wix'ten taşınıyorsa zaten boştur).
3. `dist/` klasörünün **içindekileri** (`.htaccess` dahil; gizli dosyaları göster) `public_html`'e yükle.
4. hPanel → Güvenlik → SSL: ücretsiz SSL'i etkinleştir.
5. Domain DNS'ini Hostinger'a yönlendir (Wix'teki domain ayarlarından nameserver değişikliği).
6. Kontrol: `/elektro-terapi` açılmalı, `/elektro-terapi.html` ve `/kuru-ıgneleme` 301 ile yeni adrese gitmeli.

Her içerik güncellemesinde 1 ve 3. adımlar tekrarlanır. Bunu otomatikleştirmek için GitHub Actions + FTP kurulabilir.

### Seçenek B: Cloudflare Pages

1. Cloudflare → Workers & Pages → Create → Pages → bu GitHub reposunu bağla.
2. Build command: `npm run build` · Output: `dist`.
3. Custom domain: `www.biasaglik.com.tr` (ve `biasaglik.com.tr` → www yönlendirmesi).
4. Her `git push` sonrası site otomatik yeniden yayınlanır.

## Performans kuralları

- Sayfada çalışan JS yok (yalnızca iletişim formunda WhatsApp mesajını birleştiren ~400 baytlık satır içi kod).
- CSS sayfaya gömülü, fontlar sitede barındırılıyor (Exo 700, iki küçük dosya), gövde metni sistem fontu.
- Üst görsel `<picture>` + AVIF/WebP + `fetchpriority="high"`; diğer tüm görseller lazy.
- Harita, slider, animasyon kütüphanesi ve 3. parti takip kodu yok. Takip kodu eklenecekse çerez onayından sonra yüklenmeli.
