import { FC } from "react";
import { useRoutes } from "react-router-dom";
import Hero from "../components/Hero";
import Saved from "../components/Saved";
import Details from "../pages/Details";
import Layout from "../pages/Layout";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Router: FC = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Hero />,
            },
            {
              path: "/saved",
              element: <Saved />,
            },
            {
              path: "/register",
              element: <Register />,
            },
            {
              path: "/login",
              element: <Login />,
            },
            {
              path: "/recipes/:id",
              element: <Details />,
            },
          ],
        },
      ])}
    </>
  );
};

export default Router;
