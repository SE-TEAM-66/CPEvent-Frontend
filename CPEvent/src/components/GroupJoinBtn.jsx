import { Button } from "@mantine/core";
import { FaUserPlus } from "react-icons/fa";
export default function GroupJoinBtn() {
  return (
    <Button
      color="#37628D"
      className=" hover:bg-blueP-7 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
      radius="md"
    >
      <FaUserPlus className="mr-4" />
      Group Join
    </Button>
  );
}
