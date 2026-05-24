# GhostStrings React Web Demo 👻⚛️

**A stunning, real-time React Showcase app utilizing the live `@ghoststrings/ai` NPM SDK.**

This web-demo demonstrates how seamlessly GhostStrings integrates into a modern React + TypeScript application built on Vite. It connects directly to the live Showcase project (`030d17f9`) and showcases zero-latency caching, background synchronization, automated UI re-renders, and dynamic multi-language switching (English, Spanish, Urdu).

---

## 🎨 Features Demonstrated
* **Zero-Latency Cache Servicing**: Translations are loaded instantly from `localStorage` on page mount, preventing layout shifts (CLS).
* **Automated Background Sync**: The SDK checks and fetches copy updates silently in the background, updating the UI reactively.
* **Declarative React Components**: Uses the sleek `<GhostText />` component to pull and render OTA content in a single line.
* **Instant Locale Switching**: Dynamic language updates using the `setLanguage` method.
* **Interactive Cache Debugger**: A live client-side memory visualizer rendering exactly what strings are active in memory.

---

## 🛠️ Quick Start

Follow these 3 simple commands to launch the showcase app locally:

### 1. Install Dependencies
Run the install command inside this folder to install React, Vite, TypeScript, and the `@ghoststrings/ai` SDK:
```bash
npm install
```

### 2. Launch the Development Server
Fire up the lightning-fast Vite dev server:
```bash
npm run dev
```

### 3. Open in Browser
Click the generated link in your terminal or open:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🧩 Code Architecture Highlight

Here is how simple the integration looks inside the demo:

### 1. Global Setup (`src/App.tsx`)
We wrap our application once at the root with `GhostStringsProvider`:
```tsx
import { GhostStringsProvider } from '@ghoststrings/ai';

const gsConfig = {
  projectId: '030d17f9', // Live showcase Project ID
  track: 'prod' as const,
  cacheTtl: 0, // Instant sync updates for live sandbox testing
  fallbacks: {
    hero_title: 'GhostStrings Showcase',
    hero_subtitle: 'Change any word in your app instantly.'
  }
};

export default function App() {
  return (
    <GhostStringsProvider config={gsConfig}>
      <ShowcaseApp />
    </GhostStringsProvider>
  );
}
```

### 2. Consuming OTA Content Reactively
Inside the app layout, standard HTML typography is driven 100% reactively:
```tsx
import { useGhostStrings, GhostText } from '@ghoststrings/ai';

function ShowcaseApp() {
  const { getString, setLanguage } = useGhostStrings();

  return (
    <div>
      {/* 1. Declarative text components */}
      <h1><GhostText id="hero_title" /></h1>
      
      {/* 2. Programmatic string interpolation with custom variable parsing */}
      <p>{getString('welcome_msg', 'Hello {name}!', { name: 'Ahmad' })}</p>

      {/* 3. Real-time language switching */}
      <button onClick={() => setLanguage('es')}>Español</button>
    </div>
  );
}
```

---

Built with ❤️ by [GhostStrings](https://ghoststrings.ai)
