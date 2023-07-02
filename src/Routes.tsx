import React from "react";
import { BrowserRouter, Routes as MyRoutes, Route } from "react-router-dom";
import DividerComponent from "./components/DividerComponent";
import GridComponent from "./components/GridComponent";
import LayoutComponent from "./components/LayoutComponent";
import SpaceComponent from "./components/SpaceComponent";
import User from "./pages/user/User";

export default function Routes() {
  return (
    <BrowserRouter>
      <MyRoutes>
        <Route path="/" element={<DividerComponent />} />
        <Route path="/users" element={<User />} />
        <Route path="/grid" element={<GridComponent />} />
        <Route path="/layout" element={<LayoutComponent />} />
        <Route path="/spacing" element={<SpaceComponent />} />
      </MyRoutes>
    </BrowserRouter>
  );
}
