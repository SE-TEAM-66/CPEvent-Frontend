import { UnstyledButton, Group, Text } from "@mantine/core";
import { Badges } from "./Badges";
import GroupJoinBtn from "./GroupJoinBtn";
import WaitingBtn from "./waitingBtn";
import { useState } from "react";

export function MemberRequire({ badges, name }) {
  const [isJoinBtnActive, setJoinBtnActive] = useState(false);

  const handleJoinBtnToggle = () => {
    setJoinBtnActive((prev) => !prev);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between bg-white drop-shadow-lg px-5 py-2 rounded-lg ">
      <UnstyledButton className="p-4 justify-center">
        <Group>
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
        {isJoinBtnActive ? (
          <WaitingBtn />
        ) : (
          <GroupJoinBtn onClick={handleJoinBtnToggle} />
        )}
      </div>
    </div>
  );
}
