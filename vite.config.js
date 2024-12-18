import { defineConfig } from "vite";
import path from "path";
import createSvgSpritePlugin from "vite-plugin-svg-spriter";
import injectHTML from "vite-plugin-html-inject";

const SRC_PATH = path.resolve(__dirname, "src");
const SVG_FOLDER_PATH = path.resolve(SRC_PATH, "assets", "svg-sprite");

export default defineConfig({
   plugins: [injectHTML(), createSvgSpritePlugin({ svgFolder: SVG_FOLDER_PATH })],
});
