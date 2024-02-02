import React from "react";
import img from "../images/loginimage.png";

export default function GroupCard() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <div className="p-5">
        {/* Profile */}
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <button
              type="button"
              className="flex text-sm bg-gray-500 rounded-full md:me-0 w-12 h-12"
              id="user-menu-button"
            >
              <img
                className="object-cover w-12 h-12 rounded-full "
                src="https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="user photo"
              />
            </button>
            <div className="ml-2">
              <strong className="block">John Kappa</strong>
              <span className="block text-[#8E9186]">@johnkappa</span>
            </div>
          </div>

          <div>
            <div className="flex justify-end">
              <svg
                className="w-6 h-6 text-basegreen"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m17 21-5-4-5 4V3.9c0-.2 0-.5.2-.6l.6-.3h8.4c.2 0 .4 0 .6.3l.2.6V21Z"
                />
              </svg>
              <svg
                className="w-6 h-6 text-basegreen"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 10.9a8.7 8.7 0 0 1 6.4-3.6V6a2 2 0 0 1 2.3-2c.4 0 .7.1 1 .3l5.5 4.3a2.1 2.1 0 0 1 0 3.3l-5.5 4.3a2 2 0 0 1-2 .3 2 2 0 0 1-1.2-1.9v-1C6 15 5.2 19 5.2 19.3a1 1 0 0 1-1 .8 1 1 0 0 1-1-.7A10.2 10.2 0 0 1 5 10.9Z" />
              </svg>
            </div>
            <div>
              <a className="text-xs text-[#8E9186]">12.30 PM - Apr 21,2021</a>
            </div>
          </div>
        </div>

        {/* img */}
        <div>
          <a href="#">
            <img
              className="object-cover mt-2 mb-2 bg-gray-200 h-40 w-auto mx-auto"
              src={img}
              alt="Photo"
            />
          </a>
        </div>

        {/* content */}
        <div>
          <a href="#">
            <h5 className="mb-2 text-2xl tracking-tight text-textgreen">
              Blick in die Zukunft-(name topic)
            </h5>
          </a>
          <p className="mb-3 font-normal text-[#8E9186]">
            Saturday • 5:00 PM Minnesota Street Project (รายละเอียด)
          </p>
        </div>
      </div>
    </div>
  );
}
