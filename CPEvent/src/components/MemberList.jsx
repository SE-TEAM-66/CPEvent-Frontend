import { UnstyledButton, Group, Text, Loader } from "@mantine/core";
import { AiFillCloseCircle } from "react-icons/ai";
import { ActionIcon } from "@mantine/core";
import ContectBtn from "./ContectBtn";
import { Badges } from "./Badges";
import { AddLabel } from "./AddRoleBtn";
import { useState } from "react";
import { repository } from "../repository/repository";
import { useNavigate } from "react-router-dom";

export function MemberList({ profileID, isOwner, badges, name, OwnerPicURL, isYourGroup, isEditMode, handleDeleteMember }) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Get the history object

  const handleClick = () => {
    // Use history.push to navigate to the desired URL
    navigate("/profile/" + profileID);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between bg-white drop-shadow-lg px-5 py-2 rounded-lg ">
      <UnstyledButton className="p-4 justify-center">
        <Group>
          <div className="flex items-center ">
            <button
              type="button"
              className="flex text-sm rounded-full md:me-0 w-12 h-12"
              id="user-menu-button"
              onClick={handleClick}
            >
              <img
                className="object-cover w-12 h-12 rounded-full "
                src={
                  OwnerPicURL ||
                  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                }
                alt="user photo"
              />
            </button>
          </div>

          <div className="flex-1 ml-4"
          onClick={handleClick}>
            <Text className="uppercase" size="sm" fw={500}>
              {name}
            </Text>
            <div className="flex items-center">
              <div className="flex flex-row pt-1 gap-2">
                {badges.map((badge, index) => (
                  <Badges
                    key={index}
                    color={badge.color}
                    text={badge.text}
                    className="mr-2"
                  />
                ))}
              </div>
            </div>
          </div>
        </Group>
      </UnstyledButton>
      <div className="flex items-center sm:justify-center gap-2">
      {isLoading ? (
                  <Loader size="sm" />
                ) : ( <>
      {(isEditMode && isYourGroup && !isOwner) && <ActionIcon
          variant="gradient"
          gradient={{ from: "#ff8080", to: "#ff1a1a", deg: 136 }}
          radius="20"
          onClick={async () => {
            setIsLoading(true)
            await handleDeleteMember()
            setIsLoading(false)
          }}
          disabled={isLoading}
        >
          <AiFillCloseCircle
            size={25}
            className="mt-5 mb-5"
            style={{ width: "70%", height: "70%" }}
            stroke={2.5}
          />
        </ActionIcon>}</>)}
        <ContectBtn />
      </div>
    </div>
  );
}
