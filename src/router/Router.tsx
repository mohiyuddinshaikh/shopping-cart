import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const Router: React.FC = () => {
  const element = useRoutes(routes);
  return element;
};

export default Router;
