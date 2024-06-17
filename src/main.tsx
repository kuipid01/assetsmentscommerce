import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { CartProvider } from "./contexts/CartContext.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    <Footer />
  </React.StrictMode>
);
