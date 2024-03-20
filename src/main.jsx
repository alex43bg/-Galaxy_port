import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import HomePage from "src/HomePage.jsx";
import "src/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage.tsx";

const Skils = lazy(() => import("src/Pages/Skils/Skils.jsx"));
const Projects = lazy(() => import("src/Pages/Projects/Projects.jsx"));

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
    <Suspense fallback={<div className='text-white'>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
