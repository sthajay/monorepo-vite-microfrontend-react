import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "movies",
      filename: "remoteEntry.js",
      exposes: {
        "./Movies": "./src/Movies.tsx",
      },
      shared: [
        "react",
        "react-dom",
        "card",
        "movies-content",
        "playlist-content",
        "ui",
      ],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
