import sharp from "sharp";

const MAIN_W = 1200, MAIN_H = 900;
const GALLERY_W = 800, GALLERY_H = 800;

await sharp("public/solarmotoren/solar.jpg")
  .trim({ background: "#000000", threshold: 30 })
  .resize(MAIN_W, MAIN_H, { fit: "cover", position: "attention" })
  .jpeg({ quality: 85, progressive: true })
  .toFile("public/solarmotoren/main.jpg");
console.log("✅ main.jpg");

await sharp("public/solarmotoren/solar2.jpg")
  .trim({ background: "#000000", threshold: 30 })
  .resize(GALLERY_W, GALLERY_H, { fit: "cover", position: "attention" })
  .jpeg({ quality: 85, progressive: true })
  .toFile("public/solarmotoren/gallery-1.jpg");
console.log("✅ gallery-1.jpg");

console.log("Klaar!");
