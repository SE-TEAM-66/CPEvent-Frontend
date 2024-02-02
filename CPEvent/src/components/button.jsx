export const Button = ({ label, imageSrc, btnType }) => (
  <div className="flex items-center ">
    <button
      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type={btnType}
    >
      <div className="flex">
        <div>
          {imageSrc && (
            <img src={imageSrc} style={{ width: "20px", height: "20px" }} />
          )}
        </div>
        <div>{label}</div>
      </div>
    </button>
  </div>
);
