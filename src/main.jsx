import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "src/HomePage.jsx";
import Skils from "src/Pages/Skils/Skils.jsx";
import Projects from "src/Pages/Projects/Projects.jsx";
import "src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Projects",
    element: <Projects />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Skils",
    element: <Skils />,
    errorElement: <NotFoundPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
