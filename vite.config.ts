import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [reactRouter(), tailwindcss(), tsconfigPaths()],
  build: {
    // esbuild chokes on Tailwind v4 empty :is() from @apply motion-reduce
    cssMinify: "lightningcss",
  },
});
