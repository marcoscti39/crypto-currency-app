import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReducerProvider } from "react-redux";
import "./styles/index.css";
import { store } from "./redux/store";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages";
import CryptoCurrencies from "./pages/CryptoCurrencies";
import Exchange from "./pages/Exchange";
import CryptoDetail from "./pages/CryptoDetail";
import News from "./pages/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cryptoCurrencies",
    element: <CryptoCurrencies />,
  },
  {
    path: "/exchanges",
    element: <Exchange />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/coin-details/:coinId",
    element: <CryptoDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReducerProvider store={store}>
      <RouterProvider router={router} />
    </ReducerProvider>
  </React.StrictMode>
);
