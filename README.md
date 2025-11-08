# 🌈 Nuntius Pro Modulis

“Cast colours like spells. Let the terminal speak in glyphs and hues.”

Nuntius Pro Modulis is a lightweight Node.js package that casts random or themed colours to the terminal using chalk. Whether you're debugging, decorating, or just vibing, this emissary of hue brings visual flair to your CLI.

## 📦 Installation

```bash
npm install nuntius-pro-modulis
```

## 🚀 Usage

```js
import { castColour } from 'nuntius-pro-modulis'

// Cast a random colour
castColour()

// Cast a themed colour
castColour('rave')

// Cast without logging to terminal
const hex = castColour('scroll', false)
```

## 🎨 Available Themes

| Theme      | Palette Colours                                |
|------------|-------------------------------------------------|
| glyphwave  | `#8A2BE2`, `#FF69B4`, `#00FFFF`, `#FFD700`      |
| scroll     | `#F5DEB3`, `#D2B48C`, `#EEE8AA`, `#DEB887`      |
| rave       | `#FF00FF`, `#00FF00`, `#FFFF00`, `#00FFFF`      |

You can also pass 'random' to generate a random hex colour.

## 🧪 Testing

```bash
npm test
```

Runs the test script located in test/nuntius-pro-modulis.test.js.

## 🛠️ API

### `castColour(theme = 'random', log = true): string`

- **theme**: `'random'` or one of the predefined themes (`glyphwave`, `scroll`, `rave`)
- **log**: `true` to log to terminal, `false` to return silently
- **returns**: A hex colour string like `#FF00FF`

## 📚 Purpose

This package was created as a learning exercise in publishing NPM modules. The name Nuntius Pro Modulis is a playful nod to Roman messengers and modular design—because every colour cast is a message.

## 📄 License

MIT © 2025 Nick Rabone
