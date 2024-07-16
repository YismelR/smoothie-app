import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/homePage/App.tsx";
import "./index.css";
import {
  Params,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import About from "./features/about/About.tsx";
import Bowls from "./features/bowls/Bowls.tsx";
import ContactUs from "./features/contact-us/ContactUs.tsx";
import Root from "./routes/root/Root.tsx";
import SmoothieDetails from "./features/smoothie-details/SmoothieDetails.tsx";
import { smoothiesList } from "@/store/smoothiesList.ts";
import { ShoppingCart } from "./features/cart/ShoppingCart.tsx";
import PaymentInfo from "./features/checkout/payment-info/PaymentInfo.tsx";
import { HeaderSeparator } from "./features/checkout/header-separator/HeaderSeparator.tsx";

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
    element: <Root />,
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
  {
    path: "",
    element: <HeaderSeparator />,
    children: [
      {
        path: "/payment-info",
        element: <PaymentInfo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
