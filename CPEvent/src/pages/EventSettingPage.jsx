import Navbar from "../components/Navbar";
import { Image } from "@mantine/core";
import { Divider } from "@mantine/core";
import { MemberList } from "../components/MemberList";
import { MemberRequire } from "../components/MemberRequire";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { repository } from "../repository/repository";
import ApplicantsContent from "../components/ApplicantsContent";
import { OpenGroup } from "../components/OpenGroup";

export default function EventSettingPage() {
  const { eid } = useParams();
  const [eventInfo, setEventInfo] = useState({});
  const [openGroup, setOpenGroup] = useState([]);
  const fetchEventInfo = async () => {
    await repository
      .get(`/event/${eid}`)
      .then((res) => {
        setEventInfo(res.data.message);
        setOpenGroup(res.data.message.Groups);
        // console.log(res.data.message)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchEventInfo();
  }, []);
  console.log(openGroup.Owner_id);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col pt-7 h-8">
        <div className="sm:mx-40 md:mx-52 lg:mx-64 pb-24">
          <p className="font-poppin font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl:text-left md:text-left  sm:text-center text-green-600">
            {eventInfo.Etitle}
          </p>
          <div className="font-poppin text-sm pt-2 flex flex-col text-gray-500">
            <div className="flex flex-row">
              <p className="mb-2 sm:mb-0 pr-3">{eventInfo.Edate} </p>
            </div>
          </div>
          <Divider my="md" />
          <div className="flex justify-center items-center">
            <Image src={eventInfo.PicUrl} style={{ width: "70%" }} />
          </div>
          <Divider my="md" />
          <div className="font-poppin  text-lg pt-2 flex flex-col">
            <p>Date : {eventInfo.Edate}</p>
            <p>Location : {eventInfo.Eloc}</p>
            <p className="font-poppin text-md pt-2 flex flex-col text-left mt-3">
              {eventInfo.Edesc}
            </p>
            <div className="pt-10">
              <div className="flex flex-col">กลุ่มที่เข้าร่วม</div>
            </div>
            <div className="pt-5">
              {openGroup > 0 ? (
                openGroup.map((group) => (
                  <OpenGroup
                    key={group.ID}
                    name={group.Gname}
                    gid={group.ID}
                    OwnerPicURL={
                      group.Members[
                        group.Members.findIndex(
                          (member) => member.ProfileID === group.Owner_id
                        )
                      ].Profile.ProfilePicture
                    }
                  />
                ))
              ) : (
                <div className="flex font-poppin p-3 justify-center items-center text-slate-400">
                  ไม่มีกลุ่มที่เข้าร่วม
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
