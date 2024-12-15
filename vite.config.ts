import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

const ReactCompilerConfig = {
  target: "19", // '17' | '18' | '19'
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
