import React from "react";
import { AppShell } from "ui";
import { PlaylistContent } from "playlist-content";
// import { MoviesContent } from "movies-content";
import MoviesContent from "movies/Movies";

function App() {
  return (
    <div>
      <AppShell
        title="Playlist"
        navLinks={[
          {
            label: "Home",
            path: "/",
          },
          {
            label: "Playlist",
            path: "/playlist",
          },
        ]}
        routes={[
          { path: "/", element: MoviesContent },
          { path: "/playlist", element: PlaylistContent },
        ]}
        colorScheme="dark"
      />
    </div>
  );
}

export default App;
