import {
  createBrowserRouter
} from "react-router-dom";

import App from './pages/index/App';
import ErrorPage from "./pages/Errors/default";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <Admin />,
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
]);

export default router;