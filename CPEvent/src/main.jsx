import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import GroupSettingPage from "./pages/GroupSettingPage";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
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
      try {
        // Verify the JWT token
        if (!isExpired(jwtToken)) {
          // Token is valid
          setIsLoggedIn(true);
        } else {
          // Token has expired
          setIsLoggedIn(false);
          navigate("/login")
          // Redirect to login page or handle as needed
        }
      } catch (error) {
        // Token verification failed
        setIsLoggedIn(false);
        navigate("/login")
      }
    } else navigate("/login");
  }, [navigate, jwtToken]);
  return isLoggedIn ? <>{element}</> : null;
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

  return !isLoggedIn ? <>{element}</> : null;
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
    path: "/group/:gid",
    element: <PrivateRoute element={<GroupSettingPage />} />,
  },
  { 
    path: "/createGroup",
    element: <PrivateRoute element={<GroupSettingPage/>} /> 
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
