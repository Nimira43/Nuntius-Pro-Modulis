import chalk from 'chalk'

export function formatColourLog(
  hex: string, 
  theme: string
): void {
  const styled = chalk.hex(hex)(`[${theme.toUpperCase()}] ${hex}`)
  console.log(styled)
}