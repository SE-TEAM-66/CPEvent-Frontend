import Navbar from "../components/Navbar";
import { Image } from "@mantine/core";
import { Divider } from "@mantine/core";
import { MemberList } from "../components/MemberList";
import { MemberRequire } from "../components/MemberRequire";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { repository } from "../repository/repository";

export default function GroupSettingPage() {
  const [groupInfo, setGroupInfo] = useState();
  const [members, setMembers] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [ownerInfo, setOwnerInfo] = useState([]);
  const { gid } = useParams();

  const fetchGroupInfo = async () => {
    try {
      const response = await repository.get("/group/" + gid);
      setGroupInfo(response.data.message);
      const ownerInfo = response.data.message.Profiles.find(
        (profile) => profile.ID === response.data.message.Owner_id
      );
      setOwnerInfo(ownerInfo);
    } catch (err) {
      console.log(err);
    }
  };
  
  const fetchMembers = async () => {
    try {
      const response = await repository.get("/group/" + gid + "/all-members");
      setMembers(response.data.message);
      console.log(response.data.message)
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      await fetchGroupInfo();
      await fetchMembers();
    };
  
    fetchData();
  }, []);

  return (
    !isLoading ? (
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
                My brain is not braining
              </p>
              <p className="mb-2 sm:mb-0 font-normal text-sm md:text-left  sm:text-center">
                สมาชิก
              </p>
            </div>
          </div>
          <div className="flex flex-col text-left pt-5 gap-4">
          {members.map((member) => (
              <MemberList
                key={member.ID}
                name={member.Fname + " " + member.Lname}
                OwnerPicURL={member.ProfilePicture}
                badges={[
                  { color: "#FAB49E", text: "project manager" },
                  { color: "#C3ADEB", text: "front end" },
                  { color: "#9EC4FA", text: "Design" },
                ]}
              />
          ))}
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

          <div className="text-left pt-5">
            <div className="my-4">
              <MemberRequire
                name="Front end"
                badges={[
                  { color: "#FAB49E", text: "JavaScript" },
                  { color: "#C3ADEB", text: "HTML/CSS" },
                  { color: "#9EC4FA", text: "Design" },
                ]}
              />
            </div>
            <div className="my-4">
              <MemberRequire
                name="Back end"
                badges={[
                  { color: "#C3ADEB", text: "Golang" },
                  { color: "#B0E8E4", text: "MySQL" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div> ) : (<></>)
  );
}
