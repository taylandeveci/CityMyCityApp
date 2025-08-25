## 1. Projeye Genel Bakış


## 2. Proje Yapısı

### Ana Klasörler
```
CityMyCityApp/
├── app/                    # Ekran dosyaları (Expo Router)
├── src/                    # Kaynak kod
│   ├── components/         # Tekrar kullanılan bileşenler
│   ├── constants/          # Sabit değerler (renk, boyut)
│   ├── screens/           # Ekran bileşenleri
│   ├── services/          # Veri hizmetleri
│   └── utils/             # Yardımcı fonksiyonlar
├── assets/                # Görseller ve fontlar
└── package.json           # Proje bağımlılıkları
```

### Önemli Dosyalar
- `app/_layout.tsx` - Tab navigasyon ayarları
- `src/constants/colors.ts` - Tüm renkler
- `src/services/mockData.ts` - Test verileri
- `app.json` - Uygulama konfigürasyonu

---

## 3. Renk Değiştirme

### Ana Renk Dosyası
`src/constants/colors.ts` dosyasını açın. Bu dosyada tüm renkler tanımlıdır:

```typescript
export const colors = {
  primary: '#00704A',      // Ana renk (Yeşil)
  secondary: '#00A862',    // İkincil renk (Açık yeşil)
  accent: '#D4AF37',       // Vurgu rengi (Altın)
  background: '#F8F9FA',   // Arka plan
  white: '#FFFFFF',        // Beyaz
  gray: '#6C757D',         // Gri
  lightGray: '#E9ECEF',    // Açık gri
  darkGray: '#495057',     // Koyu gri
  success: '#28A745',      // Başarı rengi
  warning: '#FFC107',      // Uyarı rengi
  error: '#DC3545',        // Hata rengi
}
```

### Renkleri Değiştirme
**Adım 1**: `src/constants/colors.ts` dosyasını açın
**Adım 2**: İstediğiniz rengi değiştirin
**Adım 3**: Dosyayı kaydedin

**Örnek**: Mavi temaya geçiş:
```typescript
primary: '#1E88E5',      // Mavi
secondary: '#42A5F5',    // Açık mavi
accent: '#FFB74D',       // Turuncu
```

### Hangi Renk Neyi Etkiler
- `primary`: Tab seçili durumu, butonlar, başlıklar
- `secondary`: Kartlar, ikincil butonlar
- `accent`: Önemli vurgular, özel butonlar
- `background`: Ana arka plan rengi
- `gray`: Metin ve çizgiler

---

## 4. Yazı Tipleri ve Boyutları

### Yazı Boyutları
`src/constants/colors.ts` dosyasında `typography` bölümü:

```typescript
export const typography = {
  xs: 12,    // Çok küçük yazılar
  sm: 14,    // Küçük yazılar
  base: 16,  // Normal yazılar
  lg: 20,    // Büyük yazılar
  xl: 24,    // Çok büyük yazılar
  xxl: 32,   // En büyük yazılar
}
```

### Yazı Boyutunu Değiştirme
**Tüm yazıları büyütmek için**: Her değeri 2-4 puan artırın
**Örnek**:
```typescript
xs: 14,    // 12'den 14'e
sm: 16,    // 14'ten 16'ya
base: 18,  // 16'dan 18'e
```

### Boşlukları Ayarlama
`spacing` bölümünde mesafeler ayarlanır:
```typescript
export const spacing = {
  xs: 4,     // Çok küçük mesafe
  sm: 8,     // Küçük mesafe
  md: 12,    // Orta mesafe
  lg: 16,    // Büyük mesafe
  xl: 20,    // Çok büyük mesafe
  xxl: 24,   // En büyük mesafe
}
```

---

## 5. Tab Navigasyon Özelleştirmesi

### Tab Ayarları
`app/_layout.tsx` dosyasında tab navigasyon ayarları bulunur:

```tsx
<Tabs
  screenOptions={{
    tabBarActiveTintColor: colors.primary,     // Seçili tab rengi
    tabBarInactiveTintColor: colors.gray,      // Seçili olmayan tab rengi
    tabBarStyle: {
      backgroundColor: colors.white,           // Tab arka plan
      height: 90,                             // Tab yüksekliği
      paddingBottom: 20,                      // Alt boşluk
    },
  }}
>
```

### Tab İsimlerini Değiştirme
Her ekran için `title` değiştirin:

```tsx
<Tabs.Screen
  name="index"
  options={{
    title: 'Ana Sayfa',  // Bu ismi değiştirin
    tabBarIcon: ({ color, size }) => (
      <MaterialIcons name="home" size={size} color={color} />
    ),
  }}
/>
```

### Tab Simgelerini Değiştirme
`name="home"` kısmını değiştirin. Kullanılabilir simgeler:
- `home` - Ev
- `map` - Harita
- `camera-alt` - Fotoğraf makinesi
- `business` - İş yeri
- `person` - Kişi
- `settings` - Ayarlar
- `favorite` - Kalp
- `star` - Yıldız

### Tab Sırasını Değiştirme
`app/_layout.tsx` dosyasında `<Tabs.Screen>` sıralamasını değiştirin.

---

## 6. Ekranlar Arası Geçiş

### Expo Router Sistemi
Uygulama dosya tabanlı routing kullanır:
- `app/index.tsx` → Ana sayfa (/)
- `app/harita.tsx` → Harita sayfası (/harita)
- `app/selfie.tsx` → Selfie sayfası (/selfie)
- `app/kurumlar.tsx` → Kurumlar sayfası (/kurumlar)
- `app/profil.tsx` → Profil sayfası (/profil)

### Yeni Sayfa Ekleme
**Adım 1**: `app/` klasörüne yeni dosya ekleyin (örn: `app/yeniSayfa.tsx`)
**Adım 2**: Dosya içeriği:
```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { YeniSayfaScreen } from '../src/screens/YeniSayfaScreen';

export default function YeniSayfa() {
  return <YeniSayfaScreen />;
}
```
**Adım 3**: `src/screens/` klasörüne ekran bileşenini ekleyin
**Adım 4**: `app/_layout.tsx` dosyasına tab ekleyin

---

## 7. Anasayfa Özelleştirmesi

### Ana Ekran Dosyası
`src/screens/AnasayfaScreen.tsx` dosyasında anasayfa içeriği bulunur.

### Hızlı İşlem Butonları
Anasayfadaki butonları değiştirmek için `mockData.ts` dosyasını düzenleyin:

```typescript
// src/services/mockData.ts içinde
quickActions: [
  { id: '1', title: 'Şikayet Et', icon: 'report-problem' },
  { id: '2', title: 'Foto Çek', icon: 'camera-alt' },
  { id: '3', title: 'Harita', icon: 'map' },
  { id: '4', title: 'İletişim', icon: 'phone' },
]
```

### Başlık ve Açıklama Metinleri
`AnasayfaScreen.tsx` dosyasında metin değişiklikleri:

```tsx
<Text style={styles.welcomeText}>
  Şehrinizi Daha İyi Hale Getirin! {/* Bu metni değiştirin */}
</Text>
<Text style={styles.subtitle}>
  Şikayetlerinizi bildirin, çözümlere ortak olun {/* Bu metni değiştirin */}
</Text>
```

### Kart İçeriklerini Değiştirme
İstatistik kartları için `mockData.ts` dosyasında:

```typescript
stats: [
  { label: 'Aktif Şikayetler', value: '24', icon: 'trending-up' },
  { label: 'Çözülen Sorunlar', value: '156', icon: 'check-circle' },
  { label: 'Katılım Oranı', value: '%87', icon: 'people' },
]
```

---

## 8. Harita Ekranı

### Harita Ekranı Dosyası
`src/screens/HaritaScreen.tsx` dosyası harita ekranını yönetir.

### Harita Türünü Değiştirme
Harita görünümünü değiştirmek için `MapView` bileşeninde `mapType` ayarını değiştirin:

```tsx
<MapView
  mapType="standard"  // "standard", "satellite", "hybrid" seçenekleri
  showsUserLocation={true}
  showsMyLocationButton={true}
/>
```

### Harita Üzerindeki İşaretçiler
İşaretçileri özelleştirmek için `mockData.ts` dosyasında `mapMarkers` dizisini düzenleyin:

```typescript
mapMarkers: [
  {
    id: '1',
    title: 'Bozuk Kaldırım',
    description: 'Tamir edilmesi gerekiyor',
    coordinate: { latitude: 41.0082, longitude: 28.9784 },
    type: 'problem'
  }
]
```

---

## 9. Selfie Ekranı

### Selfie Ekranı Dosyası
`src/screens/SelfieScreen.tsx` dosyası fotoğraf çekme işlevlerini yönetir.

### Kamera Ayarları
Kamera kalitesi ve ayarları için `expo-camera` konfigürasyonu:

```tsx
// Kamera kalitesi ayarı
const cameraSettings = {
  quality: 0.8,        // 0.1 (düşük) - 1.0 (yüksek)
  base64: false,       // Base64 formatında kayıt
  exif: false,         // EXIF bilgileri
}
```

### Fotoğraf Buton Stilini Değiştirme
Fotoğraf çekme butonunun görünümünü özelleştirin:

```tsx
const captureButtonStyle = {
  backgroundColor: colors.accent,  // Buton rengi
  borderRadius: 50,               // Yuvarlak köşeler
  padding: 20,                   // İç boşluk
}
```

---

## 10. Kurumlar Ekranı

### Kurumlar Listesi
`src/screens/KurumlarScreen.tsx` dosyasında kurum bilgileri görüntülenir.

### Kurum Verilerini Düzenleme
`mockData.ts` dosyasında `cityServices` dizisini düzenleyin:

```typescript
cityServices: [
  { id: '1', name: 'Temizlik Hizmetleri', rating: 4.2, icon: 'cleaning-services' },
  { id: '2', name: 'Ulaşım', rating: 3.8, icon: 'directions-bus' },
  { id: '3', name: 'Park ve Bahçe', rating: 4.5, icon: 'park' },
  // Yeni kurum eklemek için buraya ekleyin
]
```

### Kurum Kartı Tasarımını Değiştirme
Kurum kartlarının görünümünü özelleştirmek için `KurumlarScreen.tsx` dosyasında stil ayarlarını değiştirin:

```tsx
const cardStyle = {
  backgroundColor: colors.white,
  borderRadius: borderRadius.md,
  marginBottom: spacing.md,
  shadowColor: colors.shadow,
  elevation: 3,
}
```

---

## 11. Profil Ekranı

### Profil Bilgileri
`src/screens/ProfilScreen.tsx` dosyasında kullanıcı profili yönetilir.

### Kullanıcı Bilgilerini Değiştirme
`mockData.ts` dosyasında `user` nesnesini düzenleyin:

```typescript
user: {
  id: '1',
  name: 'Ahmet Yılmaz',           // İsim
  email: 'ahmet@example.com',     // E-posta
  city: 'İstanbul',               // Şehir
  district: 'Kadıköy',            // İlçe
  points: 1250,                   // Puan
  level: 'Gold',                  // Seviye
}
```

### Profil Menü Öğeleri
Profil ekranındaki menü öğelerini değiştirmek için:

```typescript
profileMenuItems: [
  { id: '1', title: 'Hesap Ayarları', icon: 'settings' },
  { id: '2', title: 'Bildirim Ayarları', icon: 'notifications' },
  { id: '3', title: 'Gizlilik', icon: 'privacy-tip' },
  { id: '4', title: 'Yardım', icon: 'help' },
]
```

---

## 12. Simgeler ve Görsel Değişiklikler

### MaterialIcons Kullanımı
Uygulama MaterialIcons kütüphanesini kullanır. Simge değiştirmek için:

```tsx
<MaterialIcons name="home" size={24} color={colors.primary} />
```

### Popüler Simgeler
- `home` - Ev
- `map` - Harita
- `camera-alt` - Kamera
- `business` - İş
- `person` - Kişi
- `settings` - Ayarlar
- `notifications` - Bildirimler
- `favorite` - Favori
- `star` - Yıldız
- `phone` - Telefon
- `email` - E-posta
- `search` - Arama

### Uygulama İkonu Değiştirme
`assets/images/` klasöründeki ikon dosyalarını değiştirin:
- `icon.png` - Genel ikon
- `adaptive-icon.png` - Android ikon
- `splash-icon.png` - Açılış ekranı ikonu

### Görsel Boyutları
- `icon.png`: 1024x1024 px
- `adaptive-icon.png`: 1024x1024 px
- `splash-icon.png`: 200x200 px (ayarlarda belirtilmiş)

---

## 13. Veriler ve İçerik

### Test Verilerini Değiştirme
`src/services/mockData.ts` dosyasında tüm test verileri bulunur.

### Şikayet Verilerini Düzenleme
```typescript
complaints: [
  {
    id: '1',
    title: 'Bozuk Kaldırım',                    // Başlık
    description: 'Ana cadde üzerindeki kaldırım çok bozuk',  // Açıklama
    location: 'Kadıköy, İstanbul',             // Konum
    status: 'pending',                         // Durum
    priority: 'high',                          // Öncelik
    date: '2024-01-15',                       // Tarih
    category: 'infrastructure'                 // Kategori
  }
]
```

### Yeni Veri Kategorileri Ekleme
Yeni veri türleri eklemek için `mockData.ts` dosyasına yeni nesneler ekleyin:

```typescript
// Yeni kategori örneği
events: [
  {
    id: '1',
    title: 'Temizlik Kampanyası',
    date: '2024-02-01',
    location: 'Ulus'
  }
]
```

---

## 14. Bildiriler ve Mesajlar

### Bildirim Metinleri
Uygulamadaki tüm metin içerikleri ilgili ekran dosyalarında bulunur.

### Başarı Mesajları
Başarı mesajlarını özelleştirmek için:

```tsx
const messages = {
  success: 'İşlem başarıyla tamamlandı!',
  error: 'Bir hata oluştu, lütfen tekrar deneyin.',
  warning: 'Dikkat! Bu işlem geri alınamaz.',
  info: 'Bilgilendirme mesajı burada görünür.'
}
```

### Form Doğrulama Mesajları
Form hata mesajlarını değiştirmek için:

```tsx
const validationMessages = {
  required: 'Bu alan zorunludur',
  email: 'Geçerli bir e-posta adresi girin',
  minLength: 'En az 6 karakter olmalıdır',
  maxLength: 'En fazla 50 karakter olabilir'
}
```






