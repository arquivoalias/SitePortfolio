import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.resolve("src/imports");
const outputDir = path.resolve("src/assets-web");

const supportedExtensions = [".png", ".jpg", ".jpeg"];

async function optimizeImages() {
  if (!fs.existsSync(inputDir)) {
    console.error(`Pasta não encontrada: ${inputDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir);

  const images = files.filter((file) =>
    supportedExtensions.includes(
      path.extname(file).toLowerCase()
    )
  );

  if (images.length === 0) {
    console.log("Nenhuma imagem PNG/JPG encontrada.");
    return;
  }

  console.log(`\nEncontradas ${images.length} imagens.\n`);

  for (const file of images) {
    const inputPath = path.join(inputDir, file);
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
      console.error(`Erro ao otimizar ${file}:`, error.message);
    }
  }

  console.log("Otimização concluída!");
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

optimizeImages();