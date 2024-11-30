import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AdventureExperience from "../components/AdventureExperience/AdventureExperience";
import AdventureDetails from "../pages/AdventureDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/adventure.json"),
      },
      {
        path: "adventureDetails/:id",
        element: <AdventureDetails></AdventureDetails>,
        loader: () => fetch("/adventure.json"),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
