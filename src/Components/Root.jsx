import { createBrowserRouter } from "react-router-dom";
import Layout from "./MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import MakeUp from "../Pages/MakeUp/MakeUp";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import SkinCare from "../Pages/SkinCare/SkinCare";
import Cart from "../Pages/Cart/Cart";

const router = createBrowserRouter([{
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
            element: <SingleProduct/>,
        },
        {
            path: "/SkinCare",
            element: <SkinCare />,
        },
        {
            path: "/Cart",
            element: <Cart />,
        },
    ],
}])


export default router