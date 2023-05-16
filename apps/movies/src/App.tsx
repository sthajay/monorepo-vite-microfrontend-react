import React from "react";
import { AppShell } from "ui";
import MoviesContent from "./MoviesContent";

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
          { path: "/playlist", element: () => <div>Playlist </div> },
        ]}
        title="Movies"
      />
    </div>
  );
}

export default App;
