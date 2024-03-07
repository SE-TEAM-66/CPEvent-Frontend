import { Group, Text, Accordion, PillsInput, Pill, Button, Loader } from "@mantine/core";
import { Badges } from "./Badges";
import { useState, useEffect } from "react";
import { repository } from "../repository/repository";
import AcceptJoinBtn from "./AcceptJoinBtn";
import RejectJoinBtn from "./RejectJoinBtn";

function Position({ role, Skills }) {
  return (
    <Group wrap="nowrap">
      
      <div className="flex flex-row gap-2 justify-center items-center">
        <Text>{role}</Text>
        {Skills.map((skill) => (
          <Badges
            key={skill.ID}
            color={"#52B4E1"}
            text={skill.name}
            className="mr-2"
          />
        ))}
      </div>
    </Group>
  );
}

function Applicant({ applicant, position, onChange, isYourGroup }) {
  const [loading, setLoading] = useState(false);

  const Accept = async () => {
    try {
      setLoading(true);
      const response = await repository.post("accept-applicant/" + position.GroupID + "/" + position.ID + "/" + applicant.ID);
      await onChange();
    } catch (err) {
      console.log(err);
    }  finally {
      setLoading(false);
    }
  };

  const Reject = async () => {
    try {
      setLoading(true);
      const response = await repository.post("reject-applicant/" + position.GroupID + "/" + position.ID + "/" + applicant.ID);
      await onChange();
    } catch (err) {
      console.log(err);
    }  finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-row items-center">
          <div className="flex items-center ">
            <button
              type="button"
              className="flex text-sm rounded-full md:me-0 w-12 h-12"
              id="user-menu-button"
            >
              <img
                className="object-cover w-12 h-12 rounded-full "
                src={
                  applicant.ProfilePicture ||
                  "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                }
                alt="user photo"
              />
            </button>
          </div>
          <div className="flex-1 ml-4">
            <Text className="uppercase" size="sm" fw={500}>
              {applicant.Fname} {applicant.Lname}
            </Text>
          </div>
          
          {loading ? <Loader size="sm" /> :isYourGroup && (<div className="flex gap-1">
                <AcceptJoinBtn onClick={Accept}/>
                <RejectJoinBtn onClick={Reject}/>
                </div>)}
              
          
        </div>
  );
}

export default function ApplicantsContent({ isEditMode, ReqPositions, onChange, isYourGroup }) {
  const items = ReqPositions.map((item) => {
    return (
      <Accordion.Item value={item.role + item.ID} key={item.ID}>
        <Accordion.Control>
          <Position {...item} />
        </Accordion.Control>
        <Accordion.Panel>
          {item.Applicants.length > 0 ? (
            item.Applicants.map((applicant) => (
              <Applicant key={applicant.ID} position={item} applicant={applicant} onChange={onChange} isYourGroup={isYourGroup} />
            ))
          ) : (
            <div className="flex font-poppin p-3 justify-center items-center font-normal text-slate-400">
              ยังไม่มีผู้สมัครในตำแหน่งนี้
            </div>
          )}
        </Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <>
    
      <Accordion className="bg-white drop-shadow-lg px-5 py-2 rounded-lg ">
      {ReqPositions.length > 0 ?
        <>{items}</> : <div className="flex font-poppin p-3 justify-center items-center text-slate-400">ยังไม่ได้เพิ่มตำแหน่งที่เปิดรับ</div>
      }
      </Accordion>
      
    
    </>
  );
}
