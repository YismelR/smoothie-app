import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/home/App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./routes/about/About.tsx";
import Bowls from "./routes/bowls/Bowls.tsx";
import ContactUs from "./routes/contact-us/ContactUs.tsx";
import HomeHeader from "./routes/home/HomeHeader.tsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/",
    element: <HomeHeader />,
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
