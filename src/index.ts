import { getPalette, getRandomHex } from './palettes.js'
import { formatColourLog } from './utils/formatter.js'

export function castColour(theme = 'random', log = true) {
  const colour = theme === 'random'
    ? getRandomHex()
    : getPalette(theme)

  if (log) formatColourLog(colour, theme)
  return colour
}
