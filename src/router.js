import {
  createBrowserRouter
} from "react-router-dom";

import App from './pages/index/App';
import Admin from "./pages/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;