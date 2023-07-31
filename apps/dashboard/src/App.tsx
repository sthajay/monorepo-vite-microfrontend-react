import React, { lazy, Suspense } from "react";
const PlaylistViteReactPage = lazy(() => import("playlist/page"));
const MoviesViteReactPage = lazy(() => import("movies/page"));
const MoviesViteHomeReactComponent = lazy(() => import("movies/Home"));

function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense>
        <PlaylistViteReactPage/>
      </Suspense>
      <Suspense>
        <MoviesViteReactPage/>
      </Suspense>
      <Suspense>
        <MoviesViteHomeReactComponent/>
      </Suspense>
    </div>
  );
}

export default App;
