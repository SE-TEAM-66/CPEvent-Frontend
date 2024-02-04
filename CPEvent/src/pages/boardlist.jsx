import { useEffect, useState } from "react";
import GroupCard from "../components/GroupCard";
import SearchBar from "../components/SearchBar";
import { Button } from "../components/button";
import EventCard from "../components/eventcard";
import FilterDropdown from "../components/filterDropdown";
import Navbar from "./../components/Navbar";
import { repository } from "../repository/repository";

export default function BoardList() {
  const [groupsInfo, setGroupsInfo] = useState([]);

  const fetchGroupInfo = async () => {
    await repository
      .get("/group/all")
      .then((res) => {
        setGroupsInfo(res.data.message);
        //console.log(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchGroupInfo();
  }, []);

  return (
    <div className="max-h-screen overflow-auto">
      <Navbar />
      <div className="w-full p-10 px-80 space-y-5">
        <div className="w-full flex justify-center items-center space-x-5">
          <SearchBar />
          <Button label={"CREATE"} />
        </div>
        <FilterDropdown />
        <div className="w-full grid grid-cols-3 justify-between gap-10">
          {groupsInfo.map((group) => (
            <GroupCard
              key={group.ID}
              fname={
                group.Profiles[
                  group.Profiles.findIndex(
                    (profile) => profile.ID === group.Owner_id
                  )
                ].Fname
              }
              lname={
                group.Profiles[
                  group.Profiles.findIndex(
                    (profile) => profile.ID === group.Owner_id
                  )
                ].Lname
              }
              gname={group.Gname}
              topic={group.Topic}
              OwnerPicURL={
                group.Profiles[
                  group.Profiles.findIndex(
                    (profile) => profile.ID === group.Owner_id
                  )
                ].ProfilePicture
              }
            />
          ))}

          <EventCard />
        </div>
      </div>
    </div>
  );
}
