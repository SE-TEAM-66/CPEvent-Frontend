import { Button } from "@mantine/core";
import { FaClock } from "react-icons/fa6";

export default function WaitingBtn() {
  return (
    <Button
      color="#B2DB75"
      className="hover:bg-blueP-7 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
      radius="md"
    >
      <FaClock className="mr-4" color="#546B34" />
      <p className="text-basegreen-200">waiting for acceptance</p>
    </Button>
  );
}
