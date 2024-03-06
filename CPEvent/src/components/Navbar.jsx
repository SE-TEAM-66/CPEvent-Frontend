// import { useState } from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";
import Notify from "./Notify";
import icons from "../images/icons.png";
import CPEvent from "../images/CPEvent.png";
import { repository } from "../repository/repository";

export default function Navbar() {
  const [isBellOpen, setIsBellOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [profile, setProfile] = useState({});
  useEffect(() => {
    if (isBellOpen) {
      // Fetch notifications when the bell icon is clicked
      getNotifications();
    }
  }, [isBellOpen]);
  const toggleBellDropdown = () => {
    setIsBellOpen(!isBellOpen);
  };

  const getNotifications = async () => {
    await repository
      .get("/notify/get")
      .then((res) => {
        setNotifications(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <nav className="bg-baseblue-300 border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          to="/login"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={icons} className="h-8" alt="iconsLogo" />
          <img src={CPEvent} className="h-8" alt="Logo" />
        </Link>

        <div className="flex flex-wrap item-left ">
          <div className="flex flex-wrap items-center space-x-5 md:order-1 ">
            {/* bell icons hidden when size screen smaller than md */}
            <div className="relative">
              <button
                className="hidden md:flex md:w-auto ml-5"
                onClick={toggleBellDropdown}
              >
                <svg
                  className="w-6 h-6 text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.1 12.6v-1.8A5.4 5.4 0 0 0 13 5.6V3a1 1 0 0 0-2 0v2.4a5.4 5.4 0 0 0-4 5.5v1.8c0 2.4-1.9 3-1.9 4.2 0 .6 0 1.2.5 1.2h13c.5 0 .5-.6.5-1.2 0-1.2-1.9-1.8-1.9-4.2ZM8.8 19a3.5 3.5 0 0 0 6.4 0H8.8Z" />
                </svg>
              </button>
              {notifications.length > 0 && isBellOpen && (
                <div className="absolute top-0 left-0 mt-8 bg-white border border-gray-200 rounded-md shadow-lg w-96 max-h-80 overflow-y-auto">
                  {/* Notify component goes here */}
                  {notifications.reverse().map((notify) => (
                    <Notify
                      key={notify.ID}
                      sender={notify.Sender}
                      message={notify.Message}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Profile */}
            <ProfileDropdown />
          </div>

          {/* tab */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-baseblue-300 ">
              <li>
                <Link
                  to="/createGroup"
                  className="block py-2 px-3 text-white font-mitr rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-baseblue-100 md:p-0 "
                  aria-current="page"
                >
                  My Group
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white font-mitr rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-baseblue-100 md:p-0 "
                >
                  Bookmark
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
