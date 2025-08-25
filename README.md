# CityMyCityApp 🏙️

A modern city management and citizen engagement mobile application built with React Native and Expo.

## 🚀 Features

- **Home Dashboard** - Quick actions, city statistics, and activity feed
- **Interactive Map** - View and report city issues with location-based markers
- **Photo Gallery** - Share and view community photos (Selfie screen)
- **City Services** - Browse and rate municipal departments and services
- **User Profile** - Manage personal settings and view activity history

## 🛠️ Tech Stack

- **React Native** 0.79.5
- **Expo SDK** 53.0.22  
- **Expo Router** 5.1.5 (File-based routing)
- **TypeScript** 5.8.3
- **MaterialIcons** for UI icons

## 📁 Project Structure

```
CityMyCityApp/
├── app/                    # Screen files (Expo Router)
│   ├── _layout.tsx        # Tab navigation layout
│   ├── index.tsx          # Home screen
│   ├── harita.tsx         # Map screen
│   ├── selfie.tsx         # Photo gallery
│   ├── kurumlar.tsx       # City services
│   └── profil.tsx         # Profile screen
├── src/
│   ├── components/        # Reusable components
│   ├── constants/         # Colors, typography, spacing
│   ├── screens/           # Screen components
│   ├── services/          # Mock data and services
│   └── utils/             # Helper functions
└── assets/               # Images and fonts
```

## 🎨 Design System

The app uses a Starbucks-inspired color palette with custom styling:

```typescript
// src/constants/colors.ts
export const colors = {
  primary: '#00704A',      // Starbucks green
  secondary: '#00A862',    // Light green
  accent: '#D4AF37',       // Gold
  background: '#F8F9FA'    // Light background
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- Expo Go app (for mobile testing)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/taylandeveci/CityMyCityApp.git
   cd CityMyCityApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx expo start
   ```

4. **Test the app:**
   - **Mobile**: Scan QR code with Expo Go
   - **Web**: Press `w` in terminal
   - **iOS Simulator**: Press `i` in terminal
   - **Android Emulator**: Press `a` in terminal

## 📚 Documentation

- **[CUSTOMIZATION_GUIDE_TR.md](./CUSTOMIZATION_GUIDE_TR.md)** - Complete Turkish customization guide with 18 detailed sections
- **[Customize.txt](./Customize.txt)** - Project overview for non-technical users

## 🎯 Key Features

- **File-based Routing** with Expo Router
- **TypeScript** for type safety
- **Custom Design System** with consistent styling
- **Mock Data Service** for development
- **Responsive Design** with device-specific adaptations
- **Material Icons** for consistent UI

## 🔧 Customization

The app is highly customizable. You can easily modify:
- **Colors**: Edit `src/constants/colors.ts`
- **Typography**: Adjust font sizes and spacing
- **Navigation**: Modify tab layout in `app/_layout.tsx`
- **Data**: Update mock data in `src/services/mockData.ts`
- **Screens**: Add or modify screens in `src/screens/`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


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
