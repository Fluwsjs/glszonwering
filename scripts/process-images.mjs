import sharp from "sharp";
import { readdirSync, existsSync } from "fs";
import { join, extname } from "path";

const PUBLIC = "public";

const products = [
  { folder: "rolluiken", mainOut: "rolluiken/main.jpg" },
  { folder: "screens",   mainOut: "screens/main.jpg"   },
  { folder: "zonnescherm", mainOut: "zonnescherm/main.jpg" },
];

const MAIN_W = 1200;
const MAIN_H = 900;   // 4:3
const GALLERY_W = 800;
const GALLERY_H = 800; // 1:1

for (const product of products) {
  const dir = join(PUBLIC, product.folder);

  const files = readdirSync(dir)
    .filter((f) => {
      const ext = extname(f).toLowerCase();
      if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return false;
      // skip previously generated output files
      if (f === "main.jpg" || f.startsWith("gallery-")) return false;
      return true;
    })
    .sort();

  if (files.length < 4) {
    console.error(`⚠️  ${product.folder}: slechts ${files.length} afbeeldingen gevonden (verwacht 4)`);
    continue;
  }

  console.log(`\n📁 ${product.folder} — ${files.length} bestanden:`);
  files.forEach((f, i) => console.log(`   [${i}] ${f}`));

  // First image → main (4:3)
  const mainSrc = join(dir, files[0]);
  const mainDst = join(PUBLIC, product.mainOut);
  await sharp(mainSrc)
    .trim({ background: "#000000", threshold: 30 })
    .resize(MAIN_W, MAIN_H, { fit: "cover", position: "attention" })
    .jpeg({ quality: 85, progressive: true })
    .toFile(mainDst);
  console.log(`   ✅ main   → ${product.mainOut}`);

  // Remaining 3 images → gallery (1:1)
  for (let i = 1; i <= 3; i++) {
    const src = join(dir, files[i]);
    const dst = join(dir, `gallery-${i}.jpg`);
    await sharp(src)
      .trim({ background: "#000000", threshold: 30 })
      .resize(GALLERY_W, GALLERY_H, { fit: "cover", position: "attention" })
      .jpeg({ quality: 85, progressive: true })
      .toFile(dst);
    console.log(`   ✅ gallery-${i} → ${product.folder}/gallery-${i}.jpg`);
  }
}

console.log("\n✅ Klaar! Vergeet data.ts te updaten naar de nieuwe paden.");
