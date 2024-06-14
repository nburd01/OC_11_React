import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import About from "./routes/about";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Logement, { loader as logementLoader } from "./routes/logement";
import Root, { loader as rootLoader } from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  },
  {
    path: "logements/:logementId",
    element: <Logement />,
    loader: logementLoader,
  },
  {
    path: "about",
    element: <About />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
