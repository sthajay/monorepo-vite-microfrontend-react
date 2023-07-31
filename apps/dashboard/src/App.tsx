import React, { lazy, Suspense } from "react";
const RemoteViteReactPage = lazy(() => import("playlist/page"));
// const RemoteViteReactComponent = lazy(
//   () => import("remote_vite_react/component")
// );


function App() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense>
        <RemoteViteReactPage/>
      </Suspense>  
    </div>
  );
}

export default App;
