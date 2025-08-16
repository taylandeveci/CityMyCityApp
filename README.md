# 🌟 CityMyCity - Modern Şehir Yönetimi Uygulaması

<div align="center">
  <img src="https://img.shields.io/badge/React%20Native-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Starbucks%20Inspired-00704A?style=for-the-badge&logo=starbucks&logoColor=white" alt="Starbucks Inspired" />
</div>

---

**CityMyCity**, modern şehir yönetimi ve vatandaş katılımı için geliştirilmiş bir mobil uygulamadır. Starbucks'tan ilham alınan premium tasarım sistemi ile React Native ve Expo kullanılarak oluşturulmuştur.

## 📱 Özellikler

### 🏠 **Anasayfa**
- 📊 Şehir hizmetleri değerlendirme carousel'i
- ⚡ Hızlı işlem butonları
- 📈 Aktivite beslemesi ve istatistikler
- 🌤️ Hava durumu widget'ı

### 🗺️ **Harita & Şikayetler**
- 🗺️ İnteraktif harita görünümü
- 📝 Şikayet listesi ve filtreleme
- 🏷️ Kategori bazlı arama
- ➕ Floating action button ile hızlı şikayet

### 📸 **Selfie Galerisi**
- 📷 Instagram-tarzı fotoğraf galerisi
- 🎬 Video desteği
- ❤️ Beğeni ve yorum sistemi
- 🔍 Filtre seçenekleri

### 🏢 **Kurumlar**
- 🏛️ Belediye ve kurum kartları
- ⭐ Değerlendirme sistemi
- 📞 Doğrudan iletişim butonları
- 📊 Performans metrikleri

### 👤 **Profil**
- 🏆 Başarı rozet sistemi
- 📈 Kullanıcı istatistikleri
- ⚙️ Ayarlar paneli
- 📱 Kişiselleştirme seçenekleri

## 🎨 Tasarım Sistemi

### 🎯 **Renk Paleti**
```javascript
const colors = {
  primary: '#00704A',      // Starbucks yeşili
  secondary: '#00A862',    // Açık yeşil
  accent: '#D4AF37',       // Altın
  background: '#F8F9FA',   // Ana arkaplan
  white: '#FFFFFF',        // Beyaz
  gray: '#6C757D',         // Gri ton
  success: '#28A745',      // Başarı yeşili
  warning: '#FFC107',      // Uyarı sarısı
  error: '#DC3545'         // Hata kırmızısı
};
```

### ✨ **Tasarım Prensipleri**
- **8px Grid Sistemi**: Tutarlı spacing
- **Card-Based Layout**: Modern kart tasarımları
- **Smooth Shadows**: Premium görünüm
- **Typography Scale**: 12px - 32px arası ölçekli yazı tipleri
- **Border Radius**: 8px, 12px, 16px standartları

## 🚀 Kurulum ve Çalıştırma

### 📋 **Ön Gereksinimler**
- Node.js (v18 veya üzeri)
- npm veya yarn
- Expo CLI
- Expo Go (mobil test için)

### 🛠️ **Kurulum Adımları**

1. **Repository'yi klonlayın:**
   ```bash
   git clone https://github.com/[USERNAME]/CityMyCity.git
   cd CityMyCity
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

3. **Uygulamayı başlatın:**
   ```bash
   npx expo start
   ```

4. **Test edin:**
   - **📱 Mobil**: QR kodu Expo Go ile tarayın
   - **💻 Web**: `w` tuşuna basın
   - **📲 iOS Simulator**: `i` tuşuna basın
   - **🤖 Android Emulator**: `a` tuşuna basın

## 📁 Proje Yapısı

```
src/
├── 🧩 components/          # Yeniden kullanılabilir bileşenler
│   └── QuickActionButton.tsx
├── 📱 screens/             # Ana ekran bileşenleri
│   ├── AnasayfaScreen.tsx
│   ├── HaritaScreen.tsx
│   ├── SelfieScreen.tsx
│   ├── KurumlarScreen.tsx
│   └── ProfilScreen.tsx
├── 🧭 navigation/          # Navigasyon yapılandırması
│   └── TabNavigator.tsx
├── 🎨 constants/           # Tasarım sistemi sabitleri
│   └── colors.ts
├── 📊 services/            # Veri servisleri ve mock data
│   └── mockData.ts
└── 🛠️ utils/               # Yardımcı fonksiyonlar
```

## 🛠️ Teknoloji Stack'i

- **⚛️ React Native**: Cross-platform mobil geliştirme
- **📱 Expo**: Geliştirme ve deployment platformu
- **🔷 TypeScript**: Tip güvenliği ve better DX
- **🧭 Expo Router**: Modern file-based routing
- **🎨 @expo/vector-icons**: Zengin ikon kütüphanesi
- **📐 StyleSheet**: Performanslı stil yönetimi

## 🎯 Roadmap

### 🔮 **v1.1 - Entegrasyonlar**
- [ ] 🗺️ React Native Maps entegrasyonu
- [ ] 📷 Expo Camera entegrasyonu
- [ ] 🔔 Push notification sistemi
- [ ] 💾 Offline data storage

### 🚀 **v1.2 - Animasyonlar**
- [ ] 🎬 React Native Reanimated
- [ ] ✨ Micro-interactions
- [ ] 🌙 Dark mode desteği
- [ ] 🔄 Pull-to-refresh

### 🌍 **v1.3 - Backend & API**
- [ ] 🔐 Authentication sistemi
- [ ] 🌐 REST API entegrasyonu
- [ ] ⚡ Real-time güncellemeler
- [ ] 🤖 AI-powered özellikler

## 📸 Ekran Görüntüleri

*Yakında eklenecek...*

## 🤝 Katkıda Bulunma

1. **🍴 Fork** yapın
2. **🌿 Feature branch** oluşturun:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **💾 Commit** yapın:
   ```bash
   git commit -m "✨ Add amazing feature"
   ```
4. **📤 Push** edin:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **🔄 Pull Request** açın

## 📄 Lisans

Bu proje **MIT** lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👥 Ekip

- **Developer**: [@taylandeveci](https://github.com/taylandeveci)
- **Design**: Starbucks-inspired

## 📞 İletişim

Sorularınız için:
- 🐛 **Bug reports**: GitHub Issues
- 💡 **Feature requests**: GitHub Issues
- 📧 **Email**: [your-email@example.com]

---

<div align="center">
  <p>🌟 <strong>CityMyCity ile şehir yaşamını geliştiriyoruz!</strong> 🌟</p>
  <p>Made with ❤️ and ☕ (Starbucks vibes)</p>
</div>