import { UnstyledButton, Group, Text } from "@mantine/core";
import { Badges } from "./Badges";
import GroupJoinBtn from "./GroupJoinBtn";
import WaitingBtn from "./waitingBtn";
import { useState, useEffect } from "react";
import CancelBtn from "./cancelBtn";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import PropTypes from "prop-types";
import axios from "axios";
import { repository } from "../repository/repository";
import { useParams } from "react-router-dom";

export function MemberRequire({ badges, name }) {
  const [groupInfo, setGroupInfo] = useState();
  const { gid } = useParams();
  const [isJoinBtnActive, setIsJoinBtnActive] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    try {
      const response = await repository.get("/user_profile");
      setProfile(response.data.profile);
      console.log(response.data.profile);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchGroupInfo = async () => {
    try {
      const response = await repository.get("/group/" + gid);
      setGroupInfo(response.data.message);
      const owner = response.data.message.Members.find(
        (member) => member.ProfileID === response.data.message.Owner_id
      );
      setOwnerInfo(owner.Profile);
      setMembers(response.data.message.Members);
      setPositions(response.data.message.ReqPositions);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchGroupInfo();
      console.log(groupInfo);
    };

    fetchData();
    console.log(groupInfo);
  }, []);
  const handleJoinBtnToggle = () => {
    try {
      axios.post("http://localhost:4000/notify/new", {
        Rec_id: groupInfo.Owner_id,
        Sender: profile.Fname + " " + profile.Lname,
        Message: " Request to join your " + groupInfo.Topic,
      });
      setIsJoinBtnActive(!isJoinBtnActive);
      open();
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Create Notify Error:", error);
    }
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
              <GroupJoinBtn
                text="Apply"
                onClick={() => {
                  handleJoinBtnToggle();
                  fetchProfile();
                }}
              />
            </>
          )}

          <Modal opened={opened} onClose={close} title="Request Sent!"></Modal>
        </div>
      </div>
    </div>
  );
}
