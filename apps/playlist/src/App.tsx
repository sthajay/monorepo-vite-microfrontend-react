import React from "react";
import { AppShell } from "ui";
import { PlaylistContent } from "playlist-content";
// import MoviesContent from "movies-content";
// import Home from "movies/Home";
/* @vite-ignore */
const MoviesContentRuntime = React.lazy(() => import("movies/Movies"));
// const MoviesContent = React.lazy(() => import("movies/Home"));
const MoviesContent = React.lazy(() => import("movies-content"));

function App() {
  return (
    <div>
      <AppShell
        title="Playlist"
        navLinks={[
          {
            label: "Homes",
            path: "/",
          },
          {
            label: "Movies",
            path: "/movies",
          },
          {
            label: "Playlist",
            path: "/playlist",
          },
        ]}
        routes={[
          { path: "/", element: MoviesContentRuntime },
          {
            path: "/movies",
            element: MoviesContent
          },
          { path: "/playlist", element: PlaylistContent },
        ]}
        colorScheme="dark"
      />
    </div>
  );
}

export default App;
