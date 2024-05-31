import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/App";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Contact from "./routes/contact";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
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
