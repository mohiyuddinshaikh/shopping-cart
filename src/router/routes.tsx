import { RouteObject } from "react-router-dom";
import ProductListing from "../components/ProductListing";
import Cart from "../components/Cart";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <ProductListing />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];
