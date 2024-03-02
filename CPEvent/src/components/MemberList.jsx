import { UnstyledButton, Group, Text } from "@mantine/core";
import ContectBtn from "./ContectBtn";
import { Badges } from "./Badges";

export function MemberList({ badges, name, OwnerPicURL }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between bg-white drop-shadow-lg px-5 py-2 rounded-lg ">
      <UnstyledButton className="p-4 justify-center">
        <Group>
          <div className="flex items-center ">
            <button
              type="button"
              className="flex text-sm rounded-full md:me-0 w-12 h-12"
              id="user-menu-button"
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

          <div className="flex-1 ml-4">
            <Text className="uppercase" size="sm" fw={500}>
              {name}
            </Text>
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
        </Group>
      </UnstyledButton>
      <div className="flex items-center sm:justify-center">
        <ContectBtn />
      </div>
    </div>
  );
}
