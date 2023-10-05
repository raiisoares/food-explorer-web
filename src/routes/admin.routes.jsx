import { Routes, Route } from "react-router-dom";

import { CreateProduct } from "../pages/CreateProduct";
import { EditProduct } from "../pages/EditProduct";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Menu } from "../pages/Menu";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}
