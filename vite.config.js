import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["gsap"], // Явно включаем gsap для предобработки
  },
  build: {
    rollupOptions: {
      external: [], // Убираем внешние зависимости
    },
  },
});
