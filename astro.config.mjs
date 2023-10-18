import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  prerender: false,
  integrations: [tailwind(), react()],
  importMap: {
    imports: {
      "@": "./src/", // Alias para src/
    },
  },
});
