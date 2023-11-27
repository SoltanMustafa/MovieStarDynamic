import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main/pages/MainLayout";
import Detail from "./layouts/main/pages/detail/Detail";
import Home from "./layouts/main/pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <Detail />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
