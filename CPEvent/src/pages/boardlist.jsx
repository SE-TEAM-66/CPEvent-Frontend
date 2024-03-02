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
  const [eventsInfo, setEventsInfo] = useState([]);

  const fetchGroupInfo = async () => {
    await repository
      .get("/group/all")
      .then((res) => {
        setGroupsInfo(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  const fetchEventInfo = async () => {
    await repository
      .get("/event/all")
      .then((res) => {
        setEventsInfo(res.data.message);
        console.log(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchGroupInfo();
    fetchEventInfo()
  }, []);

  return (
    <div className="flex flex-col max-h-screen overflow-auto">
      <Navbar />
      <div className="w-full p-10 px-60 space-y-5">
        <div className="w-full flex justify-between items-center space-x-5">
          <SearchBar />
          <div className="flex flex-row gap-3">
            {/* <Button label={"Add course"} color={"baseblue-300"}
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 5.84531L12 0.84375L0 5.84531L12 10.8469L24 5.84531ZM12 12.8438L5.20781 9.675L0 11.8453L12 16.8469L24 11.8453L18.7922 9.675L12 12.8438ZM12 18.8438L5.45625 15.5719L0 17.8453L12 22.8469L24 17.8453L18.5438 15.5719L12 18.8438Z" fill="white"/>
                </svg>}
          /> */}
            <Button
              label={"Create"}
              color={"baseblue-300"}
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM11 7V11H7V13H11V17H13V13H17V11H13V7H11ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </div>
        </div>
        <FilterDropdown />
        <div className="flex flex-col gap-24">
          <div className="flex flex-col gap-5">
            <span className="inline-block text-2xl text-baseblue-300 font-bold">
              Groups
            </span>
            <hr />
            <div className="w-full grid grid-cols-3 justify-between gap-10">
              {groupsInfo.reverse().map((group) => (
                <GroupCard
                  key={group.ID}
                  gid={group.ID}
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
                  description={group.Description}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="inline-block text-2xl text-baseblue-300 font-bold">
              Events
            </span>
            <hr />
            <div className="w-full grid grid-cols-3 justify-between gap-10">
                {eventsInfo.map((event)=>(
                  <EventCard 
                    key={event.ID}
                    picUrl={event.PicUrl}
                    title={event.Etitle}
                    desc={event.Edesc}
                    date={event.Edate}
                    time={event.Etime}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
