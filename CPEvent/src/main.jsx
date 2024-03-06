import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import GroupInfoPage from "./pages/GroupSettingPage";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { MyGroup } from "./pages/myGroup";
import Register from "./pages/Register";
import { isExpired } from "react-jwt";
import Cookies from "js-cookie";
import Login from "./pages/Login";
import BoardList from "./pages/boardlist";
import { GoogleOAuthProvider } from "@react-oauth/google";
import EventSettingPage from "./pages/EventSettingPage";
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
          navigate("/login");
          // Redirect to login page or handle as needed
        }
      } catch (error) {
        // Token verification failed
        setIsLoggedIn(false);
        navigate("/login");
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
    element: <PrivateRoute element={<GroupInfoPage />} />,
  },
  {
    path: "/event/:eid",
    element: <PrivateRoute element={<EventSettingPage />} />,
  },
  {
    path: "/my-group",
    element: <PrivateRoute element={<MyGroup />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="945403094249-qlcdv5r0ju6n3a17effe3osffaesub9k.apps.googleusercontent.com">
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
