import { defineConfig } from "vite"
import injectHTML from "vite-plugin-html-inject"

export default defineConfig({
  plugins: [injectHTML()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      } as any,
    },
    //devSourcemap: true,
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})
