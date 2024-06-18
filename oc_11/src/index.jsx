// index.jsx
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import About from "./routes/about";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Logement, { loader as logementLoader } from "./routes/logement";
import Root, { loader as rootLoader } from "./routes/root";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, // Error element for the Logement route
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />, // Error element for the Home route
      },
      {
        path: "logements/:logementId",
        element: <Logement />,
        loader: logementLoader,
        errorElement: <ErrorPage />, // Error element for the Logement route
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorPage />, // Error element for the About route
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
