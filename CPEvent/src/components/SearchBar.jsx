import { Button } from "../components/button";

export default function SearchBar() {
  return (
    <form className="w-1/2">
      <label
        for="default-search"
        className="mb-2 text-sm font-poppins text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.8">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.91705 7.1957C1.91705 4.30025 4.14098 1.95303 6.88433 1.95303C8.20174 1.95303 9.46518 2.50538 10.3967 3.48857C11.3283 4.47177 11.8516 5.80526 11.8516 7.1957C11.8516 10.0911 9.62768 12.4384 6.88433 12.4384C4.14098 12.4384 1.91705 10.0911 1.91705 7.1957ZM11.7694 11.4191L13.2488 12.6661H13.2745C13.5738 12.982 13.5738 13.4941 13.2745 13.81C12.9752 14.1259 12.4899 14.1259 12.1906 13.81L10.9629 12.3408C10.8469 12.2187 10.7816 12.0529 10.7816 11.8799C10.7816 11.707 10.8469 11.5412 10.9629 11.4191C11.1868 11.187 11.5456 11.187 11.7694 11.4191Z" fill="#546B34"/>
          </g>
        </svg>

        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-2 ps-10 text-sm text-basegreen-200 border border-gray-300 rounded-lg bg-gray-50 focus:ring-basegreen-100 focus:border-basegreen-100 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-basegreen-100 dark:focus:border-basegreen-100"
          placeholder="Search"
          required
        />
      </div>
    </form>
  );
}
