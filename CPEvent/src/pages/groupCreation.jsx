import { MemberList } from "../components/MemberList";
import Navbar from "../components/Navbar";
import MyGroupCol from "../components/myGroupCol";
import ProgressBar from "../components/ProgressBar";
import ApplicantsContent from "../components/ApplicantsContent";
import { RiEditLine } from "react-icons/ri";
import { CloseButton, TextInput, NumberInput, Button } from "@mantine/core";
import { useState } from "react";
const fakeGroups = [
  {
    key: 3,
    name: "กลุ่มคนรักแมว",
    GroupPicURL: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
  },
  {
    key: 4,
    name: "กลุ่มนักเดินทาง",
    GroupPicURL: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
  },
  {
    key: 5,
    name: "กลุ่มคนเขียนเว็บ",
    GroupPicURL: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
  },
];

const members = [
  {
    ID: 1,
    Fname: "สมชาย",
    Lname: "ใจดี",
    ProfilePicture: "https://picsum.photos/200/300?random=1",
    badges: [
      { color: "#FAB49E", text: "Project Manager" },
      { color: "#C3ADEB", text: "Front End" },
    ],
  },
  {
    ID: 2,
    Fname: "สมหญิง",
    Lname: "ใจเย็น",
    ProfilePicture: "https://picsum.photos/200/300?random=2",
    badges: [
      { color: "#9EC4FA", text: "Design" },
      { color: "#FAB49E", text: "Project Manager" },
    ],
  },
  {
    ID: 3,
    Fname: "สมศักดิ์",
    Lname: "ใจกล้า",
    ProfilePicture: "https://picsum.photos/200/300?random=3",
    badges: [{ color: "#C3ADEB", text: "Front End" }],
  },
  {
    ID: 4,
    Fname: "สมปอง",
    Lname: "ใจงาม",
    ProfilePicture: "https://picsum.photos/200/300?random=4",
    badges: [
      { color: "#9EC4FA", text: "Design" },
      { color: "#C3ADEB", text: "Front End" },
      { color: "#FAB49E", text: "Project Manager" },
    ],
  },
];

export function Create() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [titleValue, setTitleValue] = useState("My brain is not braining");
  const [memberValue, setMemberValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const handleEditButtonClick = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
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

  return (
    <div>
      <Navbar />
      <div className="sm:mx-40 md:mx-52 lg:mx-64 pb-24 mt-10">
        <div className="flex flex-row pt-1 gap-2">
          <div className=" bg-gray-50 px-6 pt-3 pb-10 rounded-lg">
            <div className="flex flex-col pt-1 gap-2">
              {fakeGroups.map((fakeGroups) => (
                <MyGroupCol
                  key={fakeGroups.key}
                  name={fakeGroups.name}
                  GroupPicURL={fakeGroups.GroupPicURL}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col pt-1 gap-2 w-full">
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
                  onClick={handleEditButtonClick}
                >
                  {titleValue}
                </p>
              )}

              {isEditMode ? (
                <NumberInput
                  label="จำนวนสมาชิก"
                  value={memberValue}
                  onChange={handleMemberChange}
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
            {members.map((member) => (
              <MemberList
                key={member.ID}
                name={member.Fname + " " + member.Lname}
                OwnerPicURL={member.ProfilePicture}
                badges={member.badges}
              />
            ))}

            {/* เป็นส่วน เพิ่มและลบสมาชิก */}
            {isEditMode && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  // Add member functionality
                }}
              >
                เพิ่มสมาชิก
              </Button>
            )}
            <div className="mt-10">
              <p className="font-poppin mb-2 sm:mb-0 pr-3 pb-3 text-base text-gray-500">
                ตำแหน่งที่เปิดรับ
              </p>
              <ApplicantsContent isEditMode={isEditMode} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
