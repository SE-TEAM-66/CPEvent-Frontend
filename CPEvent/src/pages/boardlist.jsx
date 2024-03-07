import React, { useEffect, useState } from "react";
import GroupCard from "../components/GroupCard";
import SearchBar from "../components/SearchBar";
import { Button } from "../components/button";
import EventCard from "../components/eventcard";
import Navbar from "./../components/Navbar";
import { repository } from "../repository/repository";
import DropdownCheckbox from "../components/filterdropdown"; // Import DropdownCheckbox
import CreateGroupModal from "../components/CreateGroupModal";

export default function BoardList() {
  const [groupsInfo, setGroupsInfo] = useState([]);
  const [eventsInfo, setEventsInfo] = useState([]);
  const [filteredGroups, setFilteredGroups] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filterValue, setFilterValue] = useState(""); // State to hold filter value
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);

  const fetchGroupInfo = async () => {
    await repository
      .get("/group/all")
      .then((res) => {
        setGroupsInfo(res.data.message);
        setFilteredGroups(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  const fetchEventInfo = async () => {
    await repository
      .get("/event/all")
      .then((res) => {
        setEventsInfo(res.data.message);
        setFilteredEvents(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchGroupInfo();
    fetchEventInfo();
  }, []);
  const handleSearch = (searchTerm) => {
    const filteredGroups = groupsInfo.filter((group) => {
      const matchFound = group.ReqPositions.some((position) =>
        position.role.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
        group.Gname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.Topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.Description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        group.Members.some(
          (member) =>
            member.Profile.Fname.toLowerCase().includes(
              searchTerm.toLowerCase()
            ) ||
            member.Profile.Lname.toLowerCase().includes(
              searchTerm.toLowerCase()
            )
        ) ||
        matchFound
      );
    });

    const filteredEvents = eventsInfo.filter(
      (event) =>
        event.Etitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.Edesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.Edate.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredGroups(filteredGroups);
    setFilteredEvents(filteredEvents);
  };

  // Function to handle filtering based on dropdown selection
  const handleFilter = (value) => {
    setFilterValue(value);
    console.log(value);
  };

  return (
    <div className="flex flex-col max-h-screen overflow-auto">
      <Navbar />
      <div className="w-full p-10 px-8 md:px-16 lg:px-32 xl:px-60 space-y-5">
        <div className="w-full flex justify-between items-center space-x-5">
          <SearchBar onSearch={handleSearch} />
          <div className="flex flex-row gap-3">
            <Button
              label={"Create"}
              color={"baseblue-300"}
              onClick={() => setIsCreateGroupModalOpen(true)}
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM11 7V11H7V13H11V17H13V13H17V11H13V7H11ZM4 12C4 16.41 7.59 20 12 20C16.41 20 20 16.41 20 12C20 7.59 16.41 4 12 4C7.59 4 4 7.59 4 12Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </div>
        </div>
        <DropdownCheckbox onFilter={handleFilter} />
        <div className="flex flex-col gap-24">
          {filterValue !== "Group" && (
            <div className="flex flex-col gap-5">
              <span className="inline-block text-2xl text-baseblue-300 font-bold">
                Events
              </span>
              <hr />
              <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 justify-between gap-10">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.ID}
                    eid={event.ID}
                    picUrl={event.PicUrl}
                    title={event.Etitle}
                    desc={event.Edesc}
                    date={event.Edate}
                    time={event.Etime}
                  />
                ))}
              </div>
            </div>
          )}
          {filterValue !== "Event" && (
            <div className="flex flex-col gap-5">
              <span className="inline-block text-2xl text-baseblue-300 font-bold">
                Groups
              </span>
              <hr />
              <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 justify-between gap-10">
                {filteredGroups.reverse().map((group) => (
                  <GroupCard
                    key={group.ID}
                    gid={group.ID}
                    fname={
                      group.Members[
                        group.Members.findIndex(
                          (member) => member.ProfileID === group.Owner_id
                        )
                      ].Profile.Fname
                    }
                    lname={
                      group.Members[
                        group.Members.findIndex(
                          (member) => member.ProfileID === group.Owner_id
                        )
                      ].Profile.Lname
                    }
                    gname={group.Gname}
                    topic={group.Topic}
                    OwnerPicURL={
                      group.Members[
                        group.Members.findIndex(
                          (member) => member.ProfileID === group.Owner_id
                        )
                      ].Profile.ProfilePicture
                    }
                    description={group.Description}
                    positions={group.ReqPositions}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <CreateGroupModal
        isOpen={isCreateGroupModalOpen}
        onClose={() => setIsCreateGroupModalOpen(false)}
        onAddMember={fetchGroupInfo}
      />
    </div>
  );
}
