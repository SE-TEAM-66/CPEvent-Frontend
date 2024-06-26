import React, { useState } from "react";

export function DropdownRadio({ onFilter }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterTerm, setFilterTerm] = useState("All");

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilter = (event) => {
    const value = event.target.value;
    setFilterTerm(value);
    onFilter(value);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownCheckboxButton"
        data-dropdown-toggle="dropdownDefaultCheckbox"
        onClick={handleDropdownToggle}
        className="text-white bg-[#37628D] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-[#44546A]"
        type="button"
      >
        Filter
        <svg
          className={`w-2.5 h-2.5 ms-3 transform transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      <div
        id="dropdownDefaultCheckbox"
        className={`${
          isDropdownOpen ? "block" : "hidden"
        } z-10 absolute left-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownCheckboxButton"
        >
          {/* Dropdown items go here */}
          <li>
            <div className="flex items-center">
              <input
                id="radio-item-1"
                type="radio"
                name="filterType"
                value="All"
                checked={filterTerm === "All"}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleFilter}
              />
              <label
                htmlFor="radio-item-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                All
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="radio-item-2"
                type="radio"
                name="filterType"
                value="Event"
                checked={filterTerm === "Event"}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleFilter}
              />
              <label
                htmlFor="radio-item-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Event
              </label>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <input
                id="radio-item-3"
                type="radio"
                name="filterType"
                value="Group"
                checked={filterTerm === "Group"}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                onChange={handleFilter}
              />
              <label
                htmlFor="radio-item-3"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Group
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownRadio;
