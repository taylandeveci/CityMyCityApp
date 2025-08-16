# CityMyCity Mobile App

Modern şehir yönetimi ve vatandaş katılımı uygulaması. Starbucks'tan ilham alınan tasarım sistemi ile React Native ve Expo kullanılarak geliştirilmiştir.

## 🚀 Özellikler

### 🏠 Anasayfa
- Şehir hizmetleri değerlendirme carousel'i
- Hızlı işlem butonları
- Son aktivite beslemesi
- Hava durumu widget'ı
- İstatistik kartları

### 🗺️ Harita & Şikayetler
- İnteraktif harita ile şikayet işaretçileri
- Harita ve liste görünümü arasında geçiş
- Kategori/durum filtreleme
- Şikayet ekleme floating button
- Gerçek zamanlı güncellemeler

### 📸 Selfie Galerisi
- Grid layout galeri
- Kamera entegrasyonu
- Fotoğraf yükleme
- Filtre seçenekleri
- Beğeni/yorum sistemi

### 🏢 Kurumlar
- Belediye kartları ve değerlendirmeler
- Arama ve filtreleme
- İletişim bilgileri
- Performans metrikleri

### 👤 Profil
- Kullanıcı istatistik widget'ları
- Başarı rozetleri
- Ayarlar paneli
- Geçmiş bölümleri

## 🎨 Tasarım Sistemi

### Renk Paleti
```javascript
const colors = {
  primary: '#00704A',      // Starbucks yeşili
  secondary: '#00A862',    // Açık yeşil
  accent: '#D4AF37',       // Altın
  background: '#F8F9FA',
  white: '#FFFFFF',
  gray: '#6C757D',
  success: '#28A745',
  warning: '#FFC107',
  error: '#DC3545'
};
```

### Tipografi
- 12px, 14px, 16px, 20px, 24px, 32px skalası
- Tutarlı font ağırlıkları

### Spacing
- 8px grid sistemi
- 4px, 8px, 12px, 16px, 20px, 24px, 32px

### Border Radius
- 8px, 12px, 16px, 20px değerleri

## 📱 Ekranlar

1. **Anasayfa**: Ana dashboard ve hızlı işlemler
2. **Harita**: Şikayet haritası ve liste görünümü
3. **Selfie**: Fotoğraf galerisi ve kamera
4. **Kurumlar**: Kurum listesi ve iletişim
5. **Profil**: Kullanıcı profili ve ayarlar

## 🛠️ Teknolojiler

- **React Native**: Mobil uygulama çerçevesi
- **Expo**: Geliştirme ve dağıtım platformu
- **React Navigation**: Navigasyon yönetimi
- **TypeScript**: Tip güvenliği
- **@expo/vector-icons**: İkonlar

## 📦 Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Uygulamayı başlatın:
```bash
npx expo start
```

3. Expo Go uygulaması ile QR kodu tarayın veya simulator'da çalıştırın

## 📁 Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
├── screens/            # Ekran bileşenleri
├── navigation/         # Navigasyon yapılandırması
├── constants/          # Sabitler ve tasarım sistemi
├── services/           # Mock data ve API servisleri
└── utils/              # Yardımcı fonksiyonlar
```

## 🎯 Özellik Roadmap

### Versiyon 1.1
- [ ] Gerçek harita entegrasyonu (react-native-maps)
- [ ] Kamera entegrasyonu (expo-camera)
- [ ] Push notification desteği
- [ ] Offline destek

### Versiyon 1.2
- [ ] Dark mode desteği
- [ ] Animasyonlar (react-native-reanimated)
- [ ] Çoklu dil desteği
- [ ] API entegrasyonu

### Versiyon 1.3
- [ ] Sosyal özellikler
- [ ] Gamification sistemi
- [ ] AI destekli şikayet kategorilendirme

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🆘 Destek

Sorularınız için issue açabilir veya iletişime geçebilirsiniz.

---

**CityMyCity** - Şehir Yaşamını Geliştiriyoruz 🌟
