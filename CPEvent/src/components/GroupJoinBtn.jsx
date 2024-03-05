// GroupJoinBtn.js
import { Button } from "@mantine/core";
import { FaRedRiver } from "react-icons/fa";
import PropTypes from "prop-types";

export default function GroupJoinBtn({ onClick }) {
  return (
    <Button
      color="#37628D"
      className="hover:bg-blueP-7 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
      radius="md"
      onClick={onClick} // Ensure the onClick prop is passed to the Button component
    >
      <FaRedRiver className="mr-3" />
      Apply
    </Button>
  );
}

GroupJoinBtn.propTypes = {
  onClick: PropTypes.func.isRequired, // Ensure onClick prop is a function and required
};
