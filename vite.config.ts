import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "data": path.resolve(__dirname, "./src/data"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "./build"),
    assetsInlineLimit: 4096
  }
})
