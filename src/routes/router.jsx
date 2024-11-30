import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import AdventureDetails from "../pages/AdventureDetails";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoute from "./PrivateRoot";
import ResetPassword from "../components/ResetPassword/ResetPassword";

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
        element: (
          <PrivateRoute>
            <AdventureDetails></AdventureDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/adventure.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/resetPassword",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
