import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dashboard",
      filename: "dashboardEntry.js",
      // exposes: {
      //   "./Movies": "./src/MoviesContent.tsx",
      //   "./MoviesCard": "./src/MoviesCard.tsx",
      //   "./Home": "./src/Home.tsx",
      // },
      // shared: ["react", "react-dom", "card"],
      remotes: {
        playlist: `http://localhost:3001/dist/assets/playlistEntry.js`,
        movies: `http://localhost:3000/dist/assets/moviesEntry.js`
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
