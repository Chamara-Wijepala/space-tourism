import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const Home = loadable(() => import("pages/home"));
const Destination = loadable(() => import("pages/destination"));
const Crew = loadable(() => import("pages/crew"));
const Technology = loadable(() => import("pages/technology"));

const fallback = <div>Loading...</div>;

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home fallback={fallback} />} />
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
