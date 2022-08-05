import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy } from "@loadable/component";

import Header from "components/Header";

const Home = lazy(() => import("pages/home"));
const Destination = lazy(() => import("pages/destination"));
const Crew = lazy(() => import("pages/crew"));
const Technology = lazy(() => import("pages/technology"));

const fallback = <div>Loading...</div>;

function App() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <div className={`content ${location === "" ? `home` : location}`}>
      <Suspense fallback={fallback}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination/:id" element={<Destination />} />
          <Route path="/crew/:id" element={<Crew />} />
          <Route path="/technology/:id" element={<Technology />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
