import { MemberList } from "../components/MemberList";
import Navbar from "../components/Navbar";
import MyGroupCol from "../components/myGroupCol";
import ProgressBar from "../components/ProgressBar";
import ApplicantsContent from "../components/ApplicantsContent";
import { RiEditLine } from "react-icons/ri";
import { CloseButton, TextInput, NumberInput, Button, Loader } from "@mantine/core";
import { useState, useEffect } from "react";
import { repository } from "../repository/repository";
import AddPositionModal from "../components/AddPositionModal";
import AddGroupMemberModal from '../components/AddGroupMemberModal';

export function MyGroup() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [titleValue, setTitleValue] = useState("My brain is not braining");
  const [memberValue, setMemberValue] = useState(0);
  const [progress, setProgress] = useState(0);

  // All Group
  const [groupList, setGroupList] = useState([]);
  const [selectedGroupID, setSelectedGroupID] = useState(0);

  // Selected Group
  const [groupInfo, setGroupInfo] = useState();
  const [isYourGroup, setIsYourGroup] = useState(false);
  const [members, setMembers] = useState([]);
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingGroup, setIsLoadingGroup] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
  };

  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false);
  const [isPositionModalOpen, setIsPositionModalOpen] = useState(false);

  const fetchMyGroup = async () => {
    try {
      const response = await repository.get("/user/groups");
      setGroupList(response.data.message.reverse())
      if (response.data.message.length > 0) {
        setSelectedGroupID(response.data.message[0].ID)
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSelectedGroup = async () => {
    try {
      const response = await repository.get("/group/" + selectedGroupID);
      setGroupInfo(response.data.message);
      setMembers(response.data.message.Members);
      setPositions(response.data.message.ReqPositions);
      setIsYourGroup(response.data.isYour);
      setTitleValue(response.data.message.Topic)
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteMember = async (profileID) => {
    try {
      setIsLoading(true);

      const postData = {
        group_id: selectedGroupID,
        profile_id: profileID,
      };

      await repository.post('/remove-member', postData);
      await fetchSelectedGroup();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitleValue(e.target.value);
  };
  const handleMemberChange = (value) => {
    setMemberValue(value);
    if (isEditMode) {
      if (isNaN(value) || value < 0 || value > 100) {
        return;
      }
      setProgress(value);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchMyGroup();
    };
  
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingGroup(true);
      await fetchSelectedGroup();
      setIsLoadingGroup(false);
    };
    if (selectedGroupID != 0) {
      fetchData();
    }
  }, [selectedGroupID]);

  return (
    <div>
      <Navbar />
      <div className="sm:mx-40 md:mx-52 lg:mx-64 pb-24 mt-10">
        <div className="flex flex-row pt-1 gap-2">
          <div className=" bg-gray-50 px-6 pt-3 pb-10 w-3/12 rounded-lg mr-4 h-fit">
            <div className="text-2xl text-baseblue-300 font-bold mb-3">
              My Groups
            </div>
            <div className="flex flex-col pt-1 gap-2">
              {groupList.map((group) => (
                <MyGroupCol
                  key={group.ID}
                  name={group.Topic}
                  isSelect={selectedGroupID===group.ID}
                  onClick={() => {setSelectedGroupID(group.ID)}}
                />
              ))}
            </div>
          </div>
          {groupList.length > 0 ? (
          <div className="flex flex-col pt-1 gap-2 w-full">
            {isLoadingGroup ? ( // Display loader while data is being fetched
                  <Loader size={48} style={{ margin: "auto" }} />
                ) : ( <>
            <div className="flex flex-row items-end w-full pb-3">
              <div className="flex-1"></div>
              <div className="items-end">
                <CloseButton
                  icon={<RiEditLine size={25} stroke={1.5} />}
                  onClick={handleEditButtonClick}
                />
              </div>
            </div>
            <div className="font-poppin  flex justify-between pb-10">
              {isEditMode ? (
                <TextInput
                  label="ชื่อกลุ่ม"
                  value={titleValue}
                  onChange={handleTitleChange}
                />
              ) : (
                <p
                  className="flex-grow mb-2 sm:mb-0 pr-3 text-2xl"
                >
                  {titleValue}
                </p>
              )}

              {isEditMode ? (
                <NumberInput
                  label="จำนวนสมาชิก"
                  value={memberValue}
                  onChange={handleMemberChange}
                  min={1}
                  max={100}
                />
              ) : (
                <ProgressBar
                  progress={progress}
                  value={memberValue}
                  onClick={handleEditButtonClick}
                />
              )}
            </div>
            <p className="font-poppin mb-2 sm:mb-0 pr-3 pb-3 text-base text-gray-500">
              สมาชิก
            </p>
            {members.map((member) => {
            const profile = member.Profile;

            const getBadges = () => {
              // Customize this logic based on your requirements
              const badges = [];

              // Example: Add a badge for the role
              badges.push({ color: "#FAB49E", text: member.Role });

              // Example: Add badges for each skill
              member.Skills.forEach((skill) => {
                badges.push({ color: "#C3ADEB", text: skill.Name });
              });

              return badges;
            };

            return (
              <MemberList
                key={profile.ID}
                name={`${profile.Fname} ${profile.Lname}`}
                OwnerPicURL={profile.ProfilePicture}
                badges={getBadges()}
                isYourGroup={isYourGroup}
                isEditMode={true}
                isLoading={isLoading}
                isOwner={profile.ID === groupInfo.Owner_id}
                handleDeleteMember={() => handleDeleteMember(profile.ID)}
              />
            );
          })}

            {/* เป็นส่วน เพิ่มและลบสมาชิก */}
            {isYourGroup && (
              <Button
                variant="outline" color="#5D8FD8"
                size="sm"
                onClick={() => setIsAddMemberModalOpen(true)}
              >
                เพิ่มสมาชิก
              </Button>
            )}
            <div className="mt-10">
              <div className="flex flex-row w-full justify-between items-center align-middle mt-2 mb-2">
              <span className="inline-block font-poppin text-base text-gray-500 text-center align-middle">
                ตำแหน่งที่เปิดรับ
              </span>
              <Button 
                variant="filled" 
                color="#5D8FD8"
                onClick={() => setIsPositionModalOpen(true)}
              >เพิ่มตำแหน่ง</Button>
              </div>
              <ApplicantsContent isEditMode={isEditMode} ReqPositions={positions} isYourGroup={isYourGroup} onChange={fetchSelectedGroup}/>
            </div></>)}
          </div>
          ) : (
            <div className="flex font-poppin p-3 justify-center items-center font-normal text-slate-400">
              คุณยังไม่มีกลุ่ม
            </div>
          )}
        </div>
      </div>
      <AddGroupMemberModal
        isOpen={isAddMemberModalOpen}
        onClose={() => setIsAddMemberModalOpen(false)}
        selectedGroupID={selectedGroupID}
        onAddMember={fetchSelectedGroup}
      />
      <AddPositionModal
        isOpen={isPositionModalOpen}
        onClose={() => setIsPositionModalOpen(false)}
        selectedGroupID={selectedGroupID}
        onAddMember={fetchSelectedGroup}
      />
    </div>
  );
}
