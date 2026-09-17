import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.resolve(
  "src/imports/BentoGridVerticalScrollHeroBanner"
);

const outputDir = path.resolve(
  "src/imports/BentoGridVerticalScrollHeroBanner/webp"
);

const files = [
  "c03d2627e48623155db261670d164eeb04aecb75.png",
  "706f235535651ea82b8a8ee21a4ce6f6b071afdc.png",
  "58c297329c1ac1ecf8640cf710a833d5b9f66889.png",
  "5c23cdb286671bb32713c9f44d544e5992214dee.png",
  "3bf02a77c104a53c65dbc421ef258ee25a8e3185.png",
  "04642ce666e1ebe1f353055c84e7a66ed9ed48ac.png",
  "1c2e7bb5772e3f1e4e1b66b067a2e27c830c1bfc.png",
  "a494829f78b94076d42063c7cac197ac956da5af.png",
  "466c4a25c909f31cd0e89bf07738181956d6233d.png",
  "c6846af0cd20c49df3e5bc7683e2d9284ace4d0c.png",
    "e009d3f2ee7824ea26946910f14ad0fca7a38920.png",
  "f74b5cbae58aea17716137638b3554e7220d5a8d.png",
  "31b987d48b55ae0d380d55b606e724bf3544c6c9.png",
  "34aefeaf36b4ca18c8a894382fc4d73849990d94.png",
  "b2b15ef80d9af22949f9aad71867e2ff81733955.png",
  "48098828d3da16fd14d65dea3adf57a6afbf4b07.png",
    "64afe0d58fb470265c3455222edb0766c8da5baf.png",
  "24a5be9b0cdcced0649b79b79e9846387dc13b6c.png",
];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

for (const file of files) {
  const inputPath = path.join(inputDir, file);

  if (!fs.existsSync(inputPath)) {
    console.log(`Arquivo não encontrado: ${file}`);
    continue;
  }

  const outputName =
    path.basename(file, path.extname(file)) + ".webp";

  const outputPath = path.join(outputDir, outputName);

  try {
    await sharp(inputPath)
      .webp({
        quality: 82,
        effort: 6,
      })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;

    const reduction =
      (1 - optimizedSize / originalSize) * 100;

    console.log(
      `${file}\n` +
      `  Original: ${formatBytes(originalSize)}\n` +
      `  WebP:     ${formatBytes(optimizedSize)}\n` +
      `  Redução:  ${reduction.toFixed(1)}%\n`
    );
  } catch (error) {
    console.error(`Erro em ${file}:`, error.message);
  }
}

console.log("Otimização do Bento concluída!");

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}