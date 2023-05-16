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
        "./Movies": "./src/MoviesContent.tsx",
        "./MoviesCard": "./src/MoviesCard.tsx",
      },
      shared: ["react", "react-dom", "card"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
