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
import CheckoutSummary from "./features/checkout/summary/CheckoutSummary.tsx";
import Checkout from "./features/checkout/checkout-page/Checkout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
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
      {
        path: "/summary",
        element: <CheckoutSummary />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
