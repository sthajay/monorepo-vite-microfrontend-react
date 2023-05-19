import React from "react";
import { AppShell } from "ui";
import { PlaylistContent } from "playlist-content";
import { MoviesContent } from "movies-content";
import Home from "movies/Home";
/* @vite-ignore */
const MoviesContentRuntime = React.lazy(() => import("movies/Movies"));

class ErrorBoundary extends React.Component<
  {
    children: React.ReactNode;
  },
  {
    hasError: boolean;
  }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return <MoviesContent />;
    }

    return this.props.children;
  }
}

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
            label: "Movies",
            path: "/movies",
          },
          {
            label: "Playlist",
            path: "/playlist",
          },
        ]}
        routes={[
          { path: "/", element: Home },
          {
            path: "/movies",
            element: () => (
              <ErrorBoundary>
                <MoviesContentRuntime />
              </ErrorBoundary>
            ),
          },
          { path: "/playlist", element: PlaylistContent },
        ]}
        colorScheme="dark"
      />
    </div>
  );
}

export default App;
