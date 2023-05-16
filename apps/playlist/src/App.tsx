import React, { lazy } from "react";
import { lazyWithRetry } from "./lazyWithRetry";

const MoviesContentRuntime = lazyWithRetry(() => import("movies/Movies"));
import { AppShell } from "ui";
import { PlaylistContent } from "playlist-content";
import { MoviesContent } from "movies-content";
/* @vite-ignore */

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
      // return <MoviesContent />;
      return <div>Error</div>;
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
            label: "Playlist",
            path: "/playlist",
          },
        ]}
        routes={[
          {
            path: "/",
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
