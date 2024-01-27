export const Card = ({ image, title, roles }) => (
  <div className="flex justify-between items-center w-full h-16 shadow-lg rounded-xl p-4">
    <div className="flex space-x-4">
      {image && <img src={image} className="h-12 rounded-full " />}
      <div>
        <div>{title}</div>
        <div className="flex space-x-2">
          {roles.map((role) => (
            <div
              key={role}
              className="shadow-lg rounded-lg bg-lime-300 text-lime-900 text-center w-fit px-3"
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    </div>
    <button>
      <img src="src/assets/speech.png" className="w-8" />
    </button>
  </div>
);
