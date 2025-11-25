import { getPalette, getRandomHex } from './palettes.js'
import { formatColourLog } from './utils/formatter.js'

export function castColour(
  theme: string = 'random', 
  log: boolean = true
): string {
  const colour = theme === 'random'
    ? getRandomHex()
    : getPalette(theme)

  if (log) formatColourLog(colour, theme)
  return colour
}
