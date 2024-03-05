import { Avatar, Dropdown } from "flowbite-react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  useNavigate,
} from "react-router-dom";
import { repository } from "../repository/repository";

export default function ProfileDropdown() {
  const [profile, setProfile] = useState({});
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

  const fetchProfile = async () => {
    try {
      const response = await repository.get("/user_profile");
      setProfile(response.data.profile);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Dropdown
      label={
        <button
              type="button"
              className="flex text-sm rounded-full md:me-0 w-12 h-12"
              id="user-menu-button"
            >
              <img
                className="object-cover w-12 h-12 rounded-full "
                src={profile.ProfilePicture || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"}
                alt="user photo"
              />
            </button>
      }
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-sm">{(profile.Fname || "") + " " + (profile.Lname || "")}</span>
        <span className="block truncate text-sm font-medium">
          {profile.Email || ""}
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
