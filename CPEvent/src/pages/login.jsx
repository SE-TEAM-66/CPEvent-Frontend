import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [userGoogleData, setUserGoogleData] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Password: "",
    Password_conf: "",
  });

  const [userGLData, setUserGLData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    console.log(userGoogleData);
    axios.post("http://localhost:4000/sign_up", userGoogleData, {
      withCredentials: true,
    });
    setUserGLData((prevState) => ({
      ...prevState,
      username: userGoogleData.Email,
      password: userGoogleData.Password,
    }));
  }, [userGoogleData]);

  useEffect(() => {
    handleGLLogin();
  }, [userGLData]);

  const handleGLLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/log_in",
        {
          Email: userGLData.username,
          Password: userGLData.password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      Cookies.set("Authorization", response.data, { expires: 10 });
      navigate("/");
      // Handle the response as needed (e.g., show a success message)
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Login Error:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault(); //essential for button(guard band)
    try {
      const response = await axios.post(
        "http://localhost:4000/log_in",
        {
          Email: userData.username,
          Password: userData.password,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      Cookies.set("Authorization", response.data, { expires: 10 });
      navigate("/");
      // Handle the response as needed (e.g., show a success message)
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Login Error:", error);
    }
  };

  const handleGetUsers = async () => {
    try {
      const response = await axios.get("http://localhost:4000/get_users", {
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Get users fail:", error);
    }
  };
  return (
    <div>
      <div className="flex h-screen">
        {/* <!-- Left --> */}
        <div className="bg-baseblue-300 flex items-center w-2/3 ">
          {/* container of detail */}
          <div className="px-4 py-6 text-white ml-44">
            <span className="my-4 text-4xl font-bold font-poppin">CPEvent</span>
            <p className="my-4 text-xl font-poppin">
              LinkedIn for academic purposes
            </p>
            <button
              onClick={() => {
                window.open("https://cmu.to/VrEmm", "_blank");
              }}
              type="button"
              className="text-white bg-baseblue-200 hover:bg-baseblue-100 font-poppin rounded-lg text-xs px-7 py-2 me-2 mb-2 "
            >
              Read More
            </button>
          </div>
          {/* circle border */}
          <div className="static">
            <div className="absolute bottom-0 left-0">
              <div className=" absolute -left-60 -bottom-60 rounded-full border-0.5 border-white bg-transparent size-128"></div>
            </div>
            <div className="absolute bottom-0 left-0">
              <div className=" absolute -left-32 -bottom-72 rounded-full border-0.5 border-white bg-transparent size-128"></div>
            </div>
          </div>
        </div>

        {/* <!-- Right --> */}
        <div className="px-4 md:px-0 w-1/3 flex items-center justify-center">
          {/* container */}
          <div className="max-w-md ">
            <form onSubmit={handleLogin}>
              {/* greeting title */}
              <div>
                <span className="mb-2 font-poppin font-bold text-2xl text-basegray-200">
                  Hello!
                </span>
                <p className="mb-6 font-poppin text-md text-basegray-200">
                  Sign Up to Get Started
                </p>
              </div>

              {/* <!--Username input--> */}
              <div className="relative mb-4" data-te-input-wrapper-init>
                <input
                  required
                  type="email"
                  value={userData.username}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                  className="peer block min-h-[auto] w-full rounded border-1 border-basegray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>

              {/* <!--Password input--> */}
              <div className="relative mb-4" data-te-input-wrapper-init>
                <input
                  required
                  type="password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  className="peer block min-h-[auto] w-full rounded border-1 border-basegray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none"
                  id="exampleFormControlInput11"
                  placeholder="Password"
                />
              </div>

              {/* <!--Submit button--> */}
              <div className="mb-2 pb-1 pt-1 text-center">
                <button
                  className="mb-3 inline-block w-full bg-baseblue-300 rounded px-6 pb-2 pt-2.5 text-xs font-medium font-poppin uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  type="submit"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Log in
                </button>

                {/* <!--Forgot password link--> */}
                <a href="#!" className="font-poppin">
                  Forgot password?
                </a>
              </div>

              {/* divide here */}
              <div className="flex justify-between item-center mb-5 ">
                <div className="border border-basegray-30 w-5/12 h-0 my-auto"></div>
                <div className="font-poppin w-2/12 text-center">OR</div>
                <div className="border border-basegray-300 w-5/12 h-0 my-auto"></div>
              </div>

              {/* google login */}
              <div className="flex justify-center mb-4">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    var credentialResponseDecode = jwtDecode(
                      credentialResponse.credential
                    );

                    setUserGoogleData((prevState) => ({
                      ...prevState,
                      Email: credentialResponseDecode.email,
                      Fname: credentialResponseDecode.given_name,
                      Lname: credentialResponseDecode.family_name,
                      Password: "123sadfdg45yrty345t",
                      Password_conf: "123sadfdg45yrty345t",
                    }));
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </div>

              {/* <!--Register button--> */}
              <div className="flex items-center justify-between pb-6">
                <p className="mb-0 mr-2 font-poppin text-sm">
                  Don't have an account?
                </p>
                <button
                  type="button"
                  onClick={() => navigate("/register")}
                  className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
