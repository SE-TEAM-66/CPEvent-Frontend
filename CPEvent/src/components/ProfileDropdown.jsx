import { Avatar, Dropdown } from "flowbite-react";
import axios from "axios";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
export default function ProfileDropdown() {
  const navigate = useNavigate();
  const handleSignout = async () => {
    try {
      await axios.get("http://localhost:4000/log_out", {
        withCredentials: true,
      });
      navigate("/login");
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Get users fail:", error);
    }
  };
  return (
    <Dropdown
      label={
        <Avatar
          alt="User settings"
          img="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
          rounded
        />
      }
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <div className="md:hidden">
        <Dropdown.Item>My group</Dropdown.Item>
        <Dropdown.Item>Bookmark</Dropdown.Item>
      </div>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
