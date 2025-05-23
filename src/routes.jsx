import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";
import MainLayout from "./pages/MainLayout";
// import ProductDetails from "./components/ProductDetails";
import Products from "./pages/Products";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "about", element: <About /> },
      { path: "contactUs", element: <Contact /> },
      {path : "product/:id",element:<Products/>}
    ],
  },
]);
