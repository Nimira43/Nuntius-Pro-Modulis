# 📜 CHANGELOG

## **[1.0.0] – 2025‑11‑08**  

### 🎉 First official release of **Nuntius Pro Modulis**

The inaugural release of the colour‑casting utility library, designed for terminal theming, randomised palettes, and visually expressive CLI output.

---

## ✨ Added

- **`castColour(theme = 'random', log = true)`**  
  Summons a random or theme‑based hex colour, with optional styled terminal output.

- **Predefined themes**
  - `glyphwave`
  - `scroll`
  - `rave`

- **Terminal output styling** via `chalk`, including theme‑tagged colour logs.

- **Utility modules**
  - `palettes.ts` — theme colour pools + random hex generator  
  - `formatter.ts` — chalk‑styled terminal output

- **TypeScript support**
  - Full `.d.ts` declaration output  
  - ES module + CommonJS builds via Rollup  
  - Strict mode enabled

- **Basic test script**  
  `test/nuntius-pro-modulis.test.js` for verifying theme output and random casting.

---

## 📦 Project Setup

- Added `package.json` with metadata, scripts, keywords, and dependency definitions.
- Added `.gitignore` to exclude build artifacts, IDE configs, and environment files.
- Added `LICENSE` (MIT) for open‑source distribution.
- Authored a complete `README.md` with installation, usage examples, API docs, and theme descriptions.
- Configured Rollup with:
  - TypeScript compilation  
  - Declaration output  
  - External dependency handling (`chalk`)  
  - Clean build directory via `rollup-plugin-delete`

---

## 🧭 Purpose

Nuntius Pro Modulis was created as a learning project to explore:

- Publishing and versioning NPM packages  
- Structuring modular TypeScript libraries  
- Producing dual‑format builds (CJS + ESM)  
- Providing colourful, expressive terminal feedback  
- Maintaining clarity, modularity, and developer‑friendly ergonomics
