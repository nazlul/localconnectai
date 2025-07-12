# LocalConnect AI

> **Live Site:** [https://localconnectai.vercel.app](https://localconnectai.vercel.app)
>
> **Repo:** [https://github.com/nazlul/localconnectai](https://github.com/nazlul/localconnectai)

LocalConnect AI is a cutting-edge, fully responsive, scroll-animated web experience that introduces the vision and mission of LocalConnect AI. At LocalConnect AI, we’re building the future of local engagement empowering small businesses, communities, and local governments with AI driven digital tools.

This README provides a **comprehensive guide** to the architecture, tech stack, core functionality, and deployment strategy for the MVP website.

---

## ✨ Features

* Smooth scroll interactions using **Lenis**
* AI-powered **Dialogflow chatbot** integration
* Animated **3D particle sphere** using **React Three Fiber**
* Section-based lazy loading for performance
* Tailwind-based responsive design
* Styled hero section with 3D shaders and animated background
* Fully responsive layout

---

## 🌎 Architecture Overview

```
localconnectai/
├── app/                  # Next.js App Router pages and layout
│   ├── page.tsx         # HomePage component with all sections
├── components/          # All sections and components
│   ├── Hero.tsx         # Hero section 
│   ├── Sphere.tsx       # R3F 3D particle sphere
│   ├── Mission.tsx      # Mission Content
│   ├── ...              # Join, Contact, WhyUs, etc.
├── public/              # Static assets 
├──  globals.css         # global.css 
├── lib/                 # FontAwesome and utility scripts
├── README.md            
```

---

## 🚀 Technology Stack

| Tech                  | Purpose                              |
| --------------------- | ------------------------------------ |
| **Next.js**           | App router, routing, SSR/CSR hybrid  |
| **Tailwind CSS**      | Utility-first styling                |
| **React Three Fiber** | Declarative 3D graphics rendering    |
| **Framer Motion**     | Entrance animations + scroll effects |
| **GSAP + Lenis**      | Scroll-based smooth animations       |
| **Dialogflow**        | AI chatbot integration               |
| **Vercel**            | Hosting & automatic CI/CD            |
| **FontAwesome**       | Icons for social, contact, etc.      |

---

## 📊 Key Components Overview

### Hero Section (`Hero.tsx`)

* 3D canvas overlay
* Title with animated gradient text
* Custom `Sphere.tsx` orbiting background
* Dialogflow chatbot floating button

### Sphere Visual (`Sphere.tsx`)

* R3F particle field grouped by category
* Zoom controlled by scroll depth
* Animated on entry using `react-spring`

### Scroll Sections

* `Mission`, `Problem`, `Solution`, `WhyUs`, `Join`, `Contact`
* Lazy-loaded via dynamic imports using `<LazySection>` wrapper
* Each styled with glassmorphism background and hover effects

---

## 📅 Deployment Process

### 1. Clone the Repo

```bash
git clone https://github.com/nazlul/localconnectai.git
cd localconnectai
```

### 2. Install Dependencies

```bash
npm install  # or yarn / pnpm
```

### 3. Run Locally

```bash
npm dev
```

### 4. Deploy to Vercel

* Connect repo to [Vercel Dashboard](https://vercel.com)
* Set `main` as deployment branch
* Add any environment variables if needed

---


## 🔧 Commands

| Command         | Description       |
| --------------- | ----------------- |
| `npm run dev`   | Start dev server  |
| `npm run build` | Production build  |

---

## 📊 Performance & Responsiveness

* All sections are responsive 
* Scroll performance is GPU-accelerated
* Lazy-loading avoids unnecessary hydration
* Components scaled to remain centered on zoom or resize

---

## 📏 Hero Section


![HeroSection](hero.png)


---

## 🎓 Developer Notes

* All code is client-side rendered currently
* MVP does not include backend API
* Built with scalability and team handoff in mind

---

## 🙏 Credits & Attribution

* Developed by [Nazlul Rizan](https://github.com/nazlul)
* 3D animations via [Three.js](https://threejs.org/), [R3F](https://docs.pmnd.rs)
* Chatbot by [Dialogflow Messenger](https://cloud.google.com/dialogflow)
* Hosting via [Vercel](https://vercel.com/)

---

> Built with ❤️ by the LocalConnect AI team
