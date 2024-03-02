import { Button } from "@mantine/core";
import { RiUserForbidFill } from "react-icons/ri";
export default function RejectJoinBtn() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: "#FF827A", to: "#F44336", deg: 151 }}
      radius="md"
    >
      <RiUserForbidFill size={15} className="mr-2" />
      Reject
    </Button>
  );
}
