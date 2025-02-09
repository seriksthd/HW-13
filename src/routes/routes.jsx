import { createBrowserRouter, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import About from "../pages/About";
import MobaileInfo from "../pages/MobaileInfo";
import Main from "../components/layout/Main";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import CartInfo from "../pages/CartInfo";
import NotFondPage from "../pages/NotFondPage";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "Orders",
        element: <Orders />,
      },
      {
        path: "/products/:blogId",
        element: <MobaileInfo />,
      },
      { path: "/order/:orderId", element: <CartInfo /> },
    ],
  },
  { path: "*", element: <NotFondPage /> },
]);
