import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Menu } from "../pages/Menu";

export function CostumerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}
