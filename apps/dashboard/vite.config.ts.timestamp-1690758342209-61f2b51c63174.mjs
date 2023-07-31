// vite.config.ts
import { defineConfig } from "file:///Users/fm-pc-lt-364/Desktop/Stuff/Fusemachines/monorepo-vite-microfrontend-react/node_modules/.pnpm/vite@4.3.2_@types+node@18.15.11/node_modules/vite/dist/node/index.js";
import react from "file:///Users/fm-pc-lt-364/Desktop/Stuff/Fusemachines/monorepo-vite-microfrontend-react/node_modules/.pnpm/@vitejs+plugin-react@4.0.0_vite@4.3.2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import federation from "file:///Users/fm-pc-lt-364/Desktop/Stuff/Fusemachines/monorepo-vite-microfrontend-react/node_modules/.pnpm/@originjs+vite-plugin-federation@1.2.2/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
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
      shared: ["react", "react-dom", "card"],
      remotes: {
        playlist: `http://localhost:3001/assets/remoteEntry.js`
      }
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZm0tcGMtbHQtMzY0L0Rlc2t0b3AvU3R1ZmYvRnVzZW1hY2hpbmVzL21vbm9yZXBvLXZpdGUtbWljcm9mcm9udGVuZC1yZWFjdC9hcHBzL2Rhc2hib2FyZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ZtLXBjLWx0LTM2NC9EZXNrdG9wL1N0dWZmL0Z1c2VtYWNoaW5lcy9tb25vcmVwby12aXRlLW1pY3JvZnJvbnRlbmQtcmVhY3QvYXBwcy9kYXNoYm9hcmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ZtLXBjLWx0LTM2NC9EZXNrdG9wL1N0dWZmL0Z1c2VtYWNoaW5lcy9tb25vcmVwby12aXRlLW1pY3JvZnJvbnRlbmQtcmVhY3QvYXBwcy9kYXNoYm9hcmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IGZlZGVyYXRpb24gZnJvbSBcIkBvcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGZlZGVyYXRpb24oe1xuICAgICAgbmFtZTogXCJkYXNoYm9hcmRcIixcbiAgICAgIGZpbGVuYW1lOiBcInJlbW90ZUVudHJ5LmpzXCIsXG4gICAgICAvLyBleHBvc2VzOiB7XG4gICAgICAvLyAgIFwiLi9Nb3ZpZXNcIjogXCIuL3NyYy9Nb3ZpZXNDb250ZW50LnRzeFwiLFxuICAgICAgLy8gICBcIi4vTW92aWVzQ2FyZFwiOiBcIi4vc3JjL01vdmllc0NhcmQudHN4XCIsXG4gICAgICAvLyAgIFwiLi9Ib21lXCI6IFwiLi9zcmMvSG9tZS50c3hcIixcbiAgICAgIC8vIH0sXG4gICAgICBzaGFyZWQ6IFtcInJlYWN0XCIsIFwicmVhY3QtZG9tXCIsIFwiY2FyZFwiXSxcbiAgICAgIHJlbW90ZXM6IHtcbiAgICAgICAgcGxheWxpc3Q6IGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXNzZXRzL3JlbW90ZUVudHJ5LmpzYCxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbW9kdWxlUHJlbG9hZDogZmFsc2UsXG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiBmYWxzZSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErYyxTQUFTLG9CQUFvQjtBQUM1ZSxPQUFPLFdBQVc7QUFDbEIsT0FBTyxnQkFBZ0I7QUFFdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1WLFFBQVEsQ0FBQyxTQUFTLGFBQWEsTUFBTTtBQUFBLE1BQ3JDLFNBQVM7QUFBQSxRQUNQLFVBQVU7QUFBQSxNQUNaO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
