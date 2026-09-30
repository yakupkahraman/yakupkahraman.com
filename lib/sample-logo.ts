const SAMPLE_SIZE = 180; // logo is sampled on a grid this wide
const BRIGHTNESS_THRESHOLD = 140;

export type Point = { x: number; y: number };

/** Reads the logo's bright pixels as normalized points plus the bounding box aspect ratio. */
export function sampleLogo(image: HTMLImageElement) {
  const canvas = document.createElement("canvas");
  canvas.width = SAMPLE_SIZE;
  canvas.height = SAMPLE_SIZE;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;

  ctx.drawImage(image, 0, 0, SAMPLE_SIZE, SAMPLE_SIZE);
  const { data } = ctx.getImageData(0, 0, SAMPLE_SIZE, SAMPLE_SIZE);

  const points: Point[] = [];
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  for (let y = 0; y < SAMPLE_SIZE; y += 2) {
    for (let x = 0; x < SAMPLE_SIZE; x += 2) {
      const i = (y * SAMPLE_SIZE + x) * 4;
      const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
      if (brightness < BRIGHTNESS_THRESHOLD) continue;
      points.push({ x, y });
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }

  const width = maxX - minX || 1;
  const height = maxY - minY || 1;
  return {
    points: points.map((p) => ({
      x: (p.x - minX) / width,
      y: (p.y - minY) / height,
    })),
    aspect: width / height,
    sampleSize: SAMPLE_SIZE,
  };
}
