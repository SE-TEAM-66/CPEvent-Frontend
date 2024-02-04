import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { PageOne } from "./pages/page1";
import { Create } from "./pages/groupCreation";
import Register from "./pages/Register";
import InfoRegister from "./pages/InfoRegister";
import { isExpired, decodeToken } from "react-jwt";
import Cookies from "js-cookie";

const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const jwtToken = Cookies.get("Authorization");
  console.log(isExpired(jwtToken));
  console.log(isLoggedIn);
  useEffect(() => {
    if (jwtToken) {
      setIsLoggedIn(true);
    } else navigate("/login");
  }, [jwtToken]);
  return isLoggedIn ? <React.StrictMode>{element}</React.StrictMode> : null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={<PageOne />} />,
  },
  {
    path: "/login",
    element: <Register />,
  },
  {
    path: "/createGroup",
    element: <PrivateRoute element={<Create />} />,
  },
  {
    path: "/page3",
    element: <PrivateRoute element={<div>pong</div>} />,
  },
  {
    path: "/register",
    element: <InfoRegister />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
