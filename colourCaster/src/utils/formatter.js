import chalk from 'chalk'

export function formatColourLog(hex, theme) {
  const styled = chalk.hex(hex)(`[${theme.toUpperCase()}] ${hex}`)
  console.log(styled)
}