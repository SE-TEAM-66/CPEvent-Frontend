import Navbar from "../components/Navbar";
import { Image } from "@mantine/core";
import { Divider } from "@mantine/core";
import { MemberList } from "../components/MemberList";
import { MemberRequire } from "../components/MemberRequire";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { repository } from "../repository/repository";

export default function GroupSettingPage() {
  const [groupInfo, setGroupInfo] = useState();
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [ownerInfo, setOwnerInfo] = useState([]);
  const [positions, setPositions] = useState([]);
  const { gid } = useParams();

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

  return !isLoading ? (
    <div className="text-center">
      {" "}
      {/* Center the content */}
      <Navbar />
      <Image
        src="..\src\images\Rectangle 133.png"
        style={{ height: "35vh", width: "100%", objectFit: "cover" }}
      />
      <div className="flex flex-col pt-7 h-8">
        <div className="sm:mx-40 md:mx-52 lg:mx-64 pb-24">
          <div>
            <p className="font-poppin font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:text-left md:text-left  sm:text-center">
              {groupInfo.Topic}
            </p>
            <div className="font-poppin text-sm pt-2 flex flex-col sm:flex-row justify-between">
              <div className="flex flex-row">
                <p className="mb-2 sm:mb-0 pr-3">Created by </p>
                <p className="mb-2 sm:mb-0 font-semibold uppercase">
                  {ownerInfo.Fname + " " + ownerInfo.Lname}
                </p>
              </div>
              <p>{new Date(groupInfo.CreatedAt).toLocaleString()}</p>
            </div>

            <Divider my="md" />

            <p className="font-poppin text-md pt-2 flex flex-col text-left">
              {groupInfo.Description}
            </p>
          </div>

          <div className="pt-10">
            <div className="flex flex-col">
              <p className="font-poppin font-medium text-md sm:text-lg md:text-xl lg:text-xl xl:text-2xl xl:text-left md:text-left  sm:text-center">
                {groupInfo.Gname}
              </p>
              <p className="mt-3 mb-2 sm:mb-0 font-poppin font-medium text-lg md:text-left  sm:text-center">
                สมาชิก
              </p>
            </div>
          </div>
          <div className="flex flex-col text-left pt-5 gap-4">
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
                />
              );
            })}
            {/* <div className="my-4">
              <MemberList
                name="Harriette Spoonlicker"
                badges={[
                  { color: "#C3ADEB", text: "front end" },
                  { color: "#B0E8E4", text: "Design" },
                ]}
              />
            </div> */}
          </div>

          <div className="pt-10">
            <div className="flex flex-col">
              <p className="mt-3 sm:mb-0 font-poppin font-medium text-lg md:text-left  sm:text-center">
                ตำแหน่งที่เปิดรับ
              </p>
            </div>
          </div>
          <div className="flex flex-col text-left gap-4 mt-3">
            {positions.length > 0 ? (
              positions.map((pos) => (
                <MemberRequire
                  key={pos.ID}
                  name={pos.role}
                  badges={[
                    { color: "#FAB49E", text: "JavaScript" },
                    { color: "#C3ADEB", text: "HTML/CSS" },
                    { color: "#9EC4FA", text: "Design" },
                  ]}
                />
              ))
            ) : (
              <div className="flex font-poppin p-3 justify-center items-center text-slate-400">
                ยังไม่เปิดรับ ณ ขณะนี้
              </div>
            )}
            {/* <div className="my-4">
              <MemberRequire
                name="Back end"
                badges={[
                  { color: "#C3ADEB", text: "Golang" },
                  { color: "#B0E8E4", text: "MySQL" },
                ]}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
