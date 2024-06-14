import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/home/App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./routes/about/About.tsx";
import Bowls from "./routes/bowls/Bowls.tsx";
import ContactUs from "./routes/contact-us/ContactUs.tsx";
import Header from "./routes/header/Header.tsx";
import SmoothieDetails from "./routes/smoothie-details/SmoothieDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/bowls",
        element: <Bowls />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/details",
        element: <SmoothieDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
