import { Text, CloseButton } from "@mantine/core";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "./button";

export default function MyGroupCol({ name, isSelect, onClick }) {
  return (
    <div
      className={`${
        isSelect ? 'bg-baseblue-300' : 'hover:bg-blue-200 active:bg-gray-200 bg-white'
      } drop-shadow-lg rounded-lg`}
      onClick={onClick}
    >
      <div className="px-4 py-2 flex flex-row items-center justify-between">
        <div
          className={`${
            isSelect ? 'text-white text-sm' : 'text-sm'
          }`}
        >
          {name}
        </div>
        <div className="flex items-center ">
    <button
      className={`text-white ${
        isSelect ? 'bg-baseblue-300' : 'hover:bg-white active:bg-white'
      } font-medium rounded-lg text-sm p-1 text-center inline-flex items-center`}
    >
      <BsThreeDotsVertical size={18} stroke={1.5} color={isSelect ? 'white' : 'black'} />
    </button>
  </div>
        
      </div>
    </div>
  );
}
