import React from "react";
import { AppShell } from "ui";
import { MoviesContent } from "movies-content";
import { PlaylistContent } from "playlist-content";
// import Test from "playlist/test";

function App() {
  return (
    <div>
      <AppShell
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
          // { path: "/test", element: Test },
          { path: "/playlist", element: PlaylistContent },
        ]}
        title="Movies"
      />
    </div>
  );
}

export default App;
