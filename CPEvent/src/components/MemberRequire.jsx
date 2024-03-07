import { UnstyledButton, Group, Text, Loader } from "@mantine/core";
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

export function MemberRequire({ posID, badges, name, isYourGroup, isApply, groupInfo, onChange }) {
  const { gid } = useParams();
  const [loading, setLoading] = useState(false);
  const [isJoinBtnActive, setIsJoinBtnActive] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [profile, setProfile] = useState({});

  const fetchProfile = async () => {
    try {
      const response = await repository.get("/user_profile");
      setProfile(response.data.profile);
    } catch (err) {
      console.log(err);
    }
  };

  const ApplyPosition = async () => {
    try {
      setLoading(true);
      const response = await repository.post("/group/" + gid + "/position/" + posID);
      await onChange();
      handleNotifyJoin();
      close();
    } catch (err) {
      console.log(err);
    }  finally {
      setLoading(false);
    }
  };

  const CancelPosition = async () => {
    try {
      setLoading(true);
      const response = await repository.post("cancel-applicant/" + gid + "/" + posID);
      await onChange();
    } catch (err) {
      console.log(err);
    }  finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  
  const handleNotifyJoin = () => {
    try {
      axios.post("http://localhost:4000/notify/new", {
        Rec_id: groupInfo.Owner_id,
        Sender: profile.Fname + " " + profile.Lname,
        Message: " Request to join your " + groupInfo.Topic,
      });
      setIsJoinBtnActive(!isJoinBtnActive);
      close();
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
          {!isYourGroup && (isApply ? (
            <>
              <div className="mx-2"></div>
              <WaitingBtn />
              <div />
              <div className="mx-2"></div>
              <Button onClick={CancelPosition} disabled={loading} color="#8E9186">
                {loading ? <Loader size="sm" /> : <CancelBtn />}
              </Button>
              
              <div />
            </>
          ) : (
            <>
              <GroupJoinBtn
                text="Apply"
                onClick={() => {
                  open();
                }}
              />
            </>
          ))}

          <Modal opened={opened} onClose={close} title="กรุณากดยืนยันเพื่อสมัคร" disabled={loading}>
          <div className="flex flex-col pt-4 items-end justify-end">
            <Button onClick={ApplyPosition} disabled={loading} color="#37628D">
              {loading ? <Loader size="sm" /> : 'ยืนยัน'}
            </Button>
          </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
