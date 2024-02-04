import { Button } from "@mantine/core";

const CancelBtn = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      color="#8E9186"
      className="bg-basegray-100 text-basegray-200  "
    >
      Cancel
    </Button>
  );
};

export default CancelBtn;
