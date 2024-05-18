import {
  createBrowserRouter
} from "react-router-dom";

import App from './pages/index/App';
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;