import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/home"));
const Destination = lazy(() => import("./pages/destination"));
const Crew = lazy(() => import("./pages/crew"));
const Technology = lazy(() => import("./pages/technology"));

function App() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/destination/:id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Destination />
          </Suspense>
        }
      />
      <Route
        path="/crew/:id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Crew />
          </Suspense>
        }
      />
      <Route
        path="/technology/:id"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Technology />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
