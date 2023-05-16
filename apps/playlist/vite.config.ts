import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react({
      // jsxRuntime: "classic",
    }),
    federation({
      name: "playlist",
      exposes: {
        "./test": "./src/test.tsx",
      },
      remotes: {
        movies: "http://localhost:3000/dist/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "card", "store"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
