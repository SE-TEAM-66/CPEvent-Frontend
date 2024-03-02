import { UnstyledButton, Group, Text } from "@mantine/core";
import { Badges } from "./Badges";
import GroupJoinBtn from "./GroupJoinBtn";
import WaitingBtn from "./waitingBtn";
import { useState } from "react";
import CancelBtn from "./cancelBtn";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

export function MemberRequire({ badges, name }) {
  const [isJoinBtnActive, setIsJoinBtnActive] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const handleJoinBtnToggle = () => {
    setIsJoinBtnActive(!isJoinBtnActive);
    open();
  };

  const handleCancel = () => {
    setIsJoinBtnActive(false);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between bg-white drop-shadow-lg px-5 py-2 rounded-lg ">
      <UnstyledButton className="p-4 justify-center">
        <Group>
          <div className="flex-1 ml-4">
            <p className="font-bold" size="base" fw={500}>
              {name}
            </p>
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
        <div className="flex flex-row">
          {isJoinBtnActive ? (
            <>
              <div className="mx-2"></div>
              <WaitingBtn />
              <div />
              <div className="mx-2"></div>
              <CancelBtn onClick={handleCancel} />
              <div />
            </>
          ) : (
            <>
              <GroupJoinBtn onClick={handleJoinBtnToggle} />
            </>
          )}

          <Modal
            opened={opened}
            onClose={close}
            title="Are you sure you want to join the group?"
          ></Modal>
        </div>
      </div>
    </div>
  );
}
