import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "pdp",
      remotes: {
        movies: "http://localhost:3000/dist/assets/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "card",
        "movies-content",
        "playlist-content",
        "ui",
        "store",
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
