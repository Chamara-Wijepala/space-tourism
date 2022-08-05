import { Route, Routes, useLocation } from "react-router-dom";
import loadable from "@loadable/component";

import Header from "components/Header";

const Home = loadable(() => import("pages/home"));
const Destination = loadable(() => import("pages/destination"));
const Crew = loadable(() => import("pages/crew"));
const Technology = loadable(() => import("pages/technology"));

const fallback = <div>Loading...</div>;

function App() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <div className={`content ${location === "" ? `home` : location}`}>
      <Header />
      <Routes>
        <Route path="/" element={<Home fallback={fallback} />} />
        <Route
          path="/destination/:id"
          element={<Destination fallback={fallback} />}
        />
        <Route path="/crew/:id" element={<Crew fallback={fallback} />} />
        <Route
          path="/technology/:id"
          element={<Technology fallback={fallback} />}
        />
      </Routes>
    </div>
  );
}

export default App;
