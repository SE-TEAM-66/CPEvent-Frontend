
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Cookies from "js-cookie";


export default function Register() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    Fname: "",
    Lname: "",
    Email: "",
    Password: "",
    Password_conf: "",
  });
  const handleSignUp = async (e) => {
    e.preventDefault(); //essential for button(guard band)
    try {
      if (userData.Password != userData.Password_conf) return;
      await axios.post("http://localhost:4000/sign_up", userData, {
        withCredentials: true,
      });
      navigate("/login");
      // Handle the response as needed (e.g., show a success message)
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Signup Error:", error);
    }
  };
  return (
    <div>
      <div className="static">
        <div className="absolute bottom-0 left-0">
          <div className=" absolute -left-60 -bottom-60 rounded-full border-0.5 border-white bg-transparent size-128"></div>
        </div>
        <div className="absolute top-0 right-0">
          <div className=" absolute -right-60 -top-60 rounded-full border-0.5 border-white bg-transparent size-128"></div>
        </div>
        <div className="absolute top-0 right-0">
          <div className=" absolute -right-32 -top-72 rounded-full border-0.5 border-white bg-transparent size-128"></div>
        </div>
      </div>

      <div className="min-w-screen min-h-screen bg-baseblue-300 flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-basegray-200 rounded-xl shadow-xl max-w-7xl  overflow-hidden">
          <div className="md:flex w-full">

            <form
              onSubmit={handleSignUp}
              className="w-full py-10 px-5 md:px-10 font-poppin "
            >

              <div className="text-left mb-10 ">
                <h1 className=" text-3xl text-basegray-200 font-bold">
                  Register
                </h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                <label htmlFor="" className="text-xs font-semibold px-1">
                  Full name
                </label>
                {/* Firstname */}
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input

                        required
                        value={userData.Fname}
                        onChange={(e) =>
                          setUserData({ ...userData, Fname: e.target.value })
                        }

                        type="text"
                        className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  {/* Lastname */}
                  <div className="w-1/2 px-3 mb-5">
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input

                        required
                        value={userData.Lname}
                        onChange={(e) =>
                          setUserData({ ...userData, Lname: e.target.value })
                        }

                        type="text"
                        className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input

                        required
                        type="email"
                        value={userData.Email}
                        onChange={(e) =>
                          setUserData({ ...userData, Email: e.target.value })
                        }

                        className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="user@example.com"
                      />
                    </div>
                  </div>
                </div>
                {/* password */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input

                        required
                        value={userData.Password}
                        onChange={(e) =>
                          setUserData({ ...userData, Password: e.target.value })
                        }

                        type="password"
                        className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                {/* comfirm password */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Confirm Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input

                        required
                        value={userData.Password_conf}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            Password_conf: e.target.value,
                          })
                        }

                        type="password"
                        className="w-full -ml-10 pl-2 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-baseblue-300 hover:bg-baseblue-100 text-white rounded-lg px-3 py-3 "
                    >
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
