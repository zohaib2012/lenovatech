import { writeFileSync } from 'fs';
import { deflateSync } from 'zlib';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xEDB88320 : 0);
    }
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function createChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeB = Buffer.from(type, 'ascii');
  const crcData = Buffer.concat([typeB, data]);
  const crcB = Buffer.alloc(4);
  crcB.writeUInt32BE(crc32(crcData), 0);
  return Buffer.concat([len, typeB, data, crcB]);
}

function createPNG(width, height, r, g, b) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = createChunk('IHDR', ihdr);

  const stride = 1 + width * 4;
  const raw = Buffer.alloc(height * stride);
  for (let y = 0; y < height; y++) {
    const off = y * stride;
    raw[off] = 0;
    for (let x = 0; x < width; x++) {
      const po = off + 1 + x * 4;
      raw[po] = r;
      raw[po + 1] = g;
      raw[po + 2] = b;
      raw[po + 3] = 255;
    }
  }
  const compressed = deflateSync(raw);
  const idatChunk = createChunk('IDAT', compressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));
  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

const publicDir = resolve(__dirname, '..', 'public');

const sizes = [192, 512];
const colors = [
  [0, 191, 165],
  [0, 191, 165]
];

for (let i = 0; i < sizes.length; i++) {
  const size = sizes[i];
  const png = createPNG(size, size, colors[i][0], colors[i][1], colors[i][2]);
  writeFileSync(resolve(publicDir, `pwa-icon-${size}x${size}.png`), png);
  console.log(`Generated pwa-icon-${size}x${size}.png`);
}

console.log('All PWA icons generated!');
