import React from "react";
import { AppShell } from "ui";
import PlaylistContent from "./PlaylistContent";

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
          { path: "/", element: () => <div>Movies </div> },
          { path: "/playlist", element: PlaylistContent },
        ]}
        colorScheme="dark"
      />
    </div>
  );
}

export default App;
