export const Button = ({ label, imageSrc }) => (
  <div className="flex items-center ">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
      type="button"
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
