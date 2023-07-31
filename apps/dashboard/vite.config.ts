import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      filename: "remoteEntry.js",
      // exposes: {
      //   "./Movies": "./src/MoviesContent.tsx",
      //   "./MoviesCard": "./src/MoviesCard.tsx",
      //   "./Home": "./src/Home.tsx",
      // },
      // shared: ["react", "react-dom", "card"],
      remotes: {
        playlist: `http://localhost:3001/assets/remoteEntry.js`,
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
