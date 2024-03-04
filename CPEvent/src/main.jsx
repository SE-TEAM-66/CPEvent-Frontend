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
import { isExpired, decodeToken } from "react-jwt";
import Cookies from "js-cookie";
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";

const PrivateRoute = ({ element }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Retrieve the JWT token from the cookie
    const jwtToken = Cookies.get("Authorization");

    console.log(jwtToken);

    if (jwtToken) {
      try {
        // Verify the JWT token
        if (!isExpired(jwtToken)) {
          // Token is valid
          setIsLoggedIn(true);
        } else {
          // Token has expired
          setIsLoggedIn(false);
          // Redirect to login page or handle as needed
          navigate("/login");
        }
      } catch (error) {
        // Token verification failed
        setIsLoggedIn(false);
        // Redirect to login page or handle as needed
        navigate("/login");
      }
    } else {
      // Token not found in the cookie
      setIsLoggedIn(false);
      // Redirect to login page or handle as needed
      navigate("/login");
    }
  }, [navigate]);

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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/edit",
    element: <ProfileEdit />,
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
