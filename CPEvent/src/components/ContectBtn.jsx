import { AiFillMessage } from "react-icons/ai";
import { ActionIcon } from "@mantine/core";

export default function ContectBtn() {
  return (
    <ActionIcon
      variant="gradient"
      gradient={{ from: "#BED2EF", to: "#5D8FD8", deg: 136 }}
      radius="20"
    >
      <AiFillMessage
        size={25}
        className="mt-5 mb-5"
        style={{ width: "70%", height: "70%" }}
        stroke={2.5}
      />
    </ActionIcon>
  );
}
