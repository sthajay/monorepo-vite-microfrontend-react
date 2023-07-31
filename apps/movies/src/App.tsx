import React from "react";
import { AppShell } from "ui";
import { MoviesContent } from "movies-content";
import { PlaylistContent } from "playlist-content";

function App() {
  return (
    <div>
      <h1>Movies</h1>
      {/* <AppShell
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
          // { path: "/playlist", element: PlaylistContent },
        ]}
        title="Movies"
      /> */}
    </div>
  );
}

export default App;
