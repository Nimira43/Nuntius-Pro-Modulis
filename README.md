# 🌈 Nuntius Pro Modulis

“Cast colours like spells. Let the terminal speak in glyphs and hues.”

Nuntius Pro Modulis is a lightweight Node.js package that casts random or themed colours to the terminal using chalk. Whether you're debugging, decorating, or just vibing, this emissary of hue brings visual flair to your CLI.

## 📦 Installation

```
npm install nuntius-pro-modulis
```

## 🚀 Usage

```
import { castColour } from 'nuntius-pro-modulis'

// Cast a random colour
castColour()

// Cast a themed colour
castColour('rave')

// Cast without logging to terminal
const hex = castColour('scroll', false)
```