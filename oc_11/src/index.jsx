import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "root",
    element: <Root />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <Banner />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
