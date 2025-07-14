

import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../Pages/Dashboard/Home";
import SignUp from "../Pages/Authentication/SignIn";
import KYC from "../Pages/Dashboard/KYC";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";


// import AgentSalesReport from "../Pages/Dashboard/AgentSalesReport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        index: true, 
        element: <AdminHome />
      },
      {
        path: "home",
        element: <AdminHome />
      },
      {
        path: "kyc",
        element: <KYC/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "register",
        element: <Register/>
      },
    ]
  },

  {
    path: "/sign_up",
    element: <SignUp/>
  }
]);
