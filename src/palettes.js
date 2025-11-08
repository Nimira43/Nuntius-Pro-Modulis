const palettes = {
  glyphwave: ['#8A2BE2', '#FF69B4', '#00FFFF', '#FFD700'],
  scroll: ['#F5DEB3', '#D2B48C', '#EEE8AA', '#DEB887'],
  rave: ['#FF00FF', '#00FF00', '#FFFF00', '#00FFFF']
}

export function getPalette(theme) {
  const pool = palettes[theme] || palettes['glyphwave']
  return pool[Math.floor(Math.random() * pool.length)]
}

export function getRandomHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')
}