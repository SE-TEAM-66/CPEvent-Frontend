import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";
import ContectBtn from "./ContectBtn";
import { Badges } from "./Badges";

export function MemberList({ badges, name }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between bg-white drop-shadow-lg px-5 py-2 rounded-lg ">
      <UnstyledButton className="p-4 justify-center">
        <Group>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            radius="xl"
          />

          <div className="flex-1 ml-4">
            <Text size="sm" fw={500}>
              {name}
            </Text>
            <div className="flex flex-row pt-1">
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
