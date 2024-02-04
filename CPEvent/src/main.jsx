import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Create } from "./pages/groupCreation";
import Register from "./pages/Register";
import { isExpired } from "react-jwt";
import Cookies from "js-cookie";
import Login from "./pages/login";
import BoardList from "./pages/boardlist";

const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const jwtToken = Cookies.get("Authorization");
  useEffect(() => {
    if (jwtToken) {
      setIsLoggedIn(true);
    } else navigate("/login");
  }, [navigate, jwtToken]);
  return isLoggedIn ? <React.StrictMode>{element}</React.StrictMode> : null;
};

const PublicRoute = ({ element }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // Retrieve the JWT token from the cookie
    const jwtToken = Cookies.get("Authorization");

    if (jwtToken) {
      try {
        // Verify the JWT token
        if (!isExpired(jwtToken)) {
          // Token is valid
          setIsLoggedIn(true);
          navigate("/");
        } else {
          // Token has expired
          setIsLoggedIn(false);
          // Redirect to login page or handle as needed
        }
      } catch (error) {
        // Token verification failed
        setIsLoggedIn(false);
      }
    } else {
      // Token not found in the cookie
      setIsLoggedIn(false);
    }
  }, [navigate]);

  return !isLoggedIn ? <React.StrictMode>{element}</React.StrictMode> : null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute element={<BoardList />} />,
  },
  {
    path: "/login",
    element: <PublicRoute element={<Login />} />,
  },
  {
    path: "/register",
    element: <PublicRoute element={<Register />} />,
  },
  {
    path: "/createGroup",
    element: <PrivateRoute element={<Create />} />,
  },
  {
    path: "/page3",
    element: <PrivateRoute element={<div>pong</div>} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
