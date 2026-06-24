import sharp from 'sharp'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(__dirname, '..', 'public')
const svgPath = resolve(publicDir, 'app-icon.svg')

const sizes = [192, 512]

for (const size of sizes) {
  await sharp(svgPath)
    .resize(size, size)
    .png()
    .toFile(resolve(publicDir, `pwa-icon-${size}x${size}.png`))
  console.log(`Generated pwa-icon-${size}x${size}.png`)
}

console.log('All PWA icons generated!')
