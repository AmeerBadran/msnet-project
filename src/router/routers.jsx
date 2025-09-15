import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Product";
import RootLayout from "../components/HOC/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product", element: <Product /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
