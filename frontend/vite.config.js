import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"

import vue from "@vitejs/plugin-vue"
import vuetify from "vite-plugin-vuetify"

export default defineConfig({
  plugins: [vue(), vuetify()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    sourcemap: true,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  publicDir: "./src/public/",
})
