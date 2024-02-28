import { Text, CloseButton } from "@mantine/core";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function MyGroupCol({ name, GroupPicURL }) {
  return (
    <button className="hover:bg-blue-200 active:bg-gray-200 bg-white drop-shadow-lg rounded-lg">
      <div className=" px-5 py-2  flex justify-center">
        <div className="flex flex-row justify-center items-center ">
          <div className="flex items-center ">
            <button
              type="button"
              className="flex text-sm rounded-full md:me-0 w-12 h-12"
              id="user-menu-button"
            >
              <img
                className="object-cover w-12 h-12 rounded-full "
                src={
                  GroupPicURL ||
                  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                }
                alt="user photo"
              />
            </button>
          </div>

          <div className="ml-4 flex flex-row">
            <Text className="uppercase w-32" size="sm" fw={500}>
              {name}
            </Text>
            <Text className="uppercase" size="sm" fw={500}>
              2/4
            </Text>
          </div>

          <CloseButton icon={<BsThreeDotsVertical size={18} stroke={1.5} />} />
        </div>
      </div>
    </button>
  );
}
