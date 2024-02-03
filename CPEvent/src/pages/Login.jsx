import React from "react";
import { Link } from "react-router-dom";
import InfoRegister from "./InfoRegister";

export default function Register() {
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
            <form>
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
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-1 border-basegray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Username"
                />
                <label
                  for="exampleFormControlInput1"
                  className="pointer-events-none absolute left-3 top-0 mb-0  font-poppin max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                >
                  Username
                </label>
              </div>

              {/* <!--Password input--> */}
              <div className="relative mb-4" data-te-input-wrapper-init>
                <input
                  type="password"
                  className="peer block min-h-[auto] w-full rounded border-1 border-basegray-300 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput11"
                  placeholder="Password"
                />
                <label
                  for="exampleFormControlInput11"
                  className="pointer-events-none absolute left-3 top-0 mb-0 font-poppin max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                >
                  Password
                </label>
              </div>

              {/* <!--Submit button--> */}
              <div className="mb-2 pb-1 pt-1 text-center">
                <button
                  className="mb-3 inline-block w-full bg-baseblue-300 rounded px-6 pb-2 pt-2.5 text-xs font-medium font-poppin uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  type="button"
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

              {/* goole login */}
              <div className="flex justify-center mb-4">
                <button className="flex items-center bg-white border border-gray-300 rounded-lg  px-14 py-2 text-sm font-medium text-gray-800 shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="-0.5 0 48 48"
                    version="1.1"
                  >
                    <g
                      id="Icons"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Color-"
                        transform="translate(-401.000000, -860.000000)"
                      >
                        <g
                          id="Google"
                          transform="translate(401.000000, 860.000000)"
                        >
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          >
                            {" "}
                          </path>
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          >
                            {" "}
                          </path>
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          >
                            {" "}
                          </path>
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          >
                            {" "}
                          </path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>

              {/* <!--Register button--> */}
              <div className="flex items-center justify-between pb-6">
                <p className="mb-0 mr-2 font-poppin text-sm">
                  Don't have an account?
                </p>
                <Link to="/infoRegister">
                  <button
                    type="button"
                    className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 "
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Register
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
