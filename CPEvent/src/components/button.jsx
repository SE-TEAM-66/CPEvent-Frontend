export const Button = ({ label, imageSrc, btnType, icon , color, onClick }) => (
  <div className="flex items-center ">
    <button
      className={`text-white bg-${ color } font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-${ color }`}
      type={btnType}
      onClick={onClick}
    >
      <div className="flex justify-center items-center">
        <div>
          {imageSrc && (
            <img src={imageSrc} style={{ width: "20px", height: "20px" }} />
          )}
        </div>
        <div className="mr-2">{icon}</div>
        <span className="inline-block align-bottom">{label}</span>
      </div>
    </button>
  </div>
);
