import React from "react";

export default function InfoRegister() {
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
            <div className="w-full py-10 px-5 md:px-10 font-poppin ">
              <div className="text-left mb-10 ">
                <h1 className=" text-3xl text-basegray-200 font-bold">
                  Register
                </h1>
                <p>Enter your information to register</p>
              </div>
              <div>
                <label for="" className="text-xs font-semibold px-1">
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
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
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
                        type="text"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label for="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="user@example.com"
                      />
                    </div>
                  </div>
                </div>
                {/* password */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label for="" className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                {/* comfirm password */}
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label for="" className="text-xs font-semibold px-1">
                      Confirm Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button className="block w-full max-w-xs mx-auto bg-baseblue-300 hover:bg-baseblue-100 text-white rounded-lg px-3 py-3 ">
                      REGISTER
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
