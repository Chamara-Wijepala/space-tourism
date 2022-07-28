import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/destination/:id" element={<Destination />} />
      <Route path="/crew/:id" element={<Crew />} />
      <Route path="/technology/:id" element={<Technology />} />
    </Routes>
  );
}

export default App;
