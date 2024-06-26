import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/home/App.tsx";
import "./index.css";
import {
  Params,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import About from "./routes/about/About.tsx";
import Bowls from "./routes/bowls/Bowls.tsx";
import ContactUs from "./routes/contact-us/ContactUs.tsx";
import Header from "./routes/header/Header.tsx";
import SmoothieDetails from "./routes/smoothie-details/SmoothieDetails.tsx";
import { smoothiesList } from "@/store/smoothiesList.ts";
import { ShoppingCart } from "./routes/cart/ShoppingCart.tsx";

type DetailParams = { params: Params };

async function detailsLoader({ params }: DetailParams) {
  let id = parseInt(params.id || "1");

  const smoothie =
    smoothiesList.find((smoothie) => smoothie.id === id) ||
    Navigate({ to: "/" });

  return smoothie;
}

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
        path: "/details/:id",
        loader: detailsLoader,
        element: <SmoothieDetails />,
      },
      {
        path: "/shopping-cart",
        element: <ShoppingCart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
