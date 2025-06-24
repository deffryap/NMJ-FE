# Struktur Folder NMJ Frontend

## 📁 Organisasi Folder

### `/src`

Root folder untuk semua source code React.

### `/src/Pages`

Berisi semua halaman utama aplikasi.

- `HomePage.jsx` - Halaman utama website

### `/src/Home`

Berisi komponen-komponen khusus untuk halaman Home.

- `/Components/` - Komponen-komponen yang digunakan di HomePage
  - `HeroSection.jsx` - Section hero dengan background image
  - `InfoCard.jsx` - Card info lokasi dan telepon
  - `AboutSection.jsx` - Section about dengan video dan progress
  - `ValuesSection.jsx` - Section values dengan background biru
  - `ServicesSection.jsx` - Section services dengan 3 card
  - `TestimonialSection.jsx` - Section testimonial dengan slider
  - `FAQSection.jsx` - Section FAQ dengan accordion
  - `NewsletterSection.jsx` - Section newsletter dengan form

### `/src/Shared`

Berisi komponen-komponen yang dapat digunakan di seluruh aplikasi.

- `/Components/` - Komponen shared
  - `Navbar.jsx` - Navigation bar yang digunakan di semua halaman

### `/src/Utils`

Berisi utility functions, helpers, dan constants.

- (Siap untuk utility functions)

### `/src/Hooks`

Berisi custom React hooks.

- (Siap untuk custom hooks)

### `/src/Context`

Berisi React Context untuk state management.

- (Siap untuk context providers)

### `/src/assets`

Berisi assets seperti images, icons, dan file statis lainnya.

## 🎯 Keuntungan Struktur Ini

1. **Separation of Concerns** - Setiap folder memiliki tanggung jawab yang jelas
2. **Scalability** - Mudah menambah halaman dan komponen baru
3. **Maintainability** - Kode terorganisir dengan baik
4. **Reusability** - Komponen shared dapat digunakan di berbagai tempat
5. **Team Collaboration** - Struktur yang jelas memudahkan kolaborasi tim

## 📝 Cara Menambah Komponen Baru

### Untuk Halaman Spesifik:

1. Buat folder baru di `/src/[PageName]/Components/`
2. Tambahkan komponen di folder tersebut
3. Import di halaman yang sesuai

### Untuk Komponen Shared:

1. Tambahkan komponen di `/src/Shared/Components/`
2. Import di halaman yang membutuhkan

### Untuk Halaman Baru:

1. Buat file baru di `/src/Pages/[PageName].jsx`
2. Buat folder `/src/[PageName]/Components/` jika diperlukan
3. Update routing di `App.jsx`
