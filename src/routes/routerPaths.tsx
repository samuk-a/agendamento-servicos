import {
  createBrowserRouter
} from "react-router-dom";

import App from '../pages/index/App';
import ErrorPage from "../pages/Errors/default";
import Admin from "../pages/Admin/Admin";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import AvailableTime from "../pages/Admin/AvailableTime";

const routerPaths = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/availableTime",
        element: <AvailableTime />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <ErrorPage />,
      },
    ]
  }
]);

export default routerPaths;