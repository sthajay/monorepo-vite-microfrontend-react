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
      remotes: {
        playlist: "http://localhost:3001/dist/assets/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "card",
        "ui",
        "movies-content",
        "@mantine/core",
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
