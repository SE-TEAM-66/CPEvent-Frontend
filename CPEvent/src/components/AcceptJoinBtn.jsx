import { Button } from "@mantine/core";
import { RiUserReceived2Fill } from "react-icons/ri";
export default function AcceptJoinBtn({ onClick }) {
  return (
    <Button
      onClick={onClick}
      variant="gradient"
      gradient={{ from: "#76D582", to: "#5FA969", deg: 151 }}
      radius="md"
    >
      <RiUserReceived2Fill size={15} className="mr-2" />
      Accept
    </Button>
  );
}
