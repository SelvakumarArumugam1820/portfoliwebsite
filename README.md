# SELVAKUMAR ARUMUGAM - 2026 Trending Portfolio

An award-winning level, premium, and highly animated portfolio website built for **2026 Design Trends**. It features Apple-level polish, GSAP magnetic interactions, and immersive mesh gradients.

## ✨ 2026 Premium Features

- **Immersive Visuals**: Animated mesh gradients + floating blobs + subtle noise texture overlay.
- **Magnetic UI**: GSAP-driven buttons and icons that attract to the cursor.
- **3D Perspective**: Interactive 3D tilt effects on project cards and profile portraits.
- **Custom Motion**: Follower cursor with interactive states and scroll-triggered neon reveals.
- **Full Architecture**: Detailed Home, Projects, Professional Resume (Timeline), and Contact pages.
- **EmailJS Integration**: Real-time form submissions with elegant toast notifications.

## 🛠️ Advanced Tech Stack

- **Core**: React 18+ (Vite)
- **Animation**: GSAP (Magnetic/3D logic) + Framer Motion (Transitions/Reveals)
- **Styling**: CSS Modules with modern 2026 design tokens
- **Communication**: EmailJS + React Hot Toast
- **Icons**: React Icons (Hi, Fa, Si)

## 🚀 Setup & Launch

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Local Development**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

## 📝 Customization Guide

### Personal Information
Everything is centralized in `src/data/`:
- `profileData.js`: Name, roles, skills, and timeline content.
- `projectsData.js`: Project metadata, colors, and descriptions.

### Contact Form (EmailJS)
1. Get your keys from [EmailJS](https://www.emailjs.com/).
2. Update the following placeholders in `src/pages/Contact/Contact.jsx`:
   - `SERVICE_ID`
   - `TEMPLATE_ID`
   - `PUBLIC_KEY`

### Styling
Customize colors and tokens in `src/styles/variables.css`.

---
**Designed & Built for Excellence by SELVAKUMAR ARUMUGAM**
