import { createBrowserRouter } from "react-router-dom";
import Layout from "./MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import MakeUp from "../Pages/MakeUp/MakeUp";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import SkinCare from "../Pages/SkinCare/SkinCare";
import Cart from "../Pages/Cart/Cart";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Profile from "../Pages/Profile/Profile";
import P404 from "../Pages/P404/P404";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/MakeUp",
        element: <MakeUp />,
      },
      {
        path: "/MakeUp/:id",
        element: <SingleProduct />,
      },
      {
        path: "/SkinCare",
        element: <SkinCare />,
      },
      {
        path: "/Cart/:id",
        element: <Cart />,
      },
      {
        path: "/CheckOut",
        element: <CheckOut />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <P404 />,
      },

    ],
  },
]);

export default router;