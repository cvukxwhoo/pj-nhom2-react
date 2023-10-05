import Home from "../pages/Home";
import Destination from "../pages/Destination";
import React from "react";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/destination", component: Destination },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
