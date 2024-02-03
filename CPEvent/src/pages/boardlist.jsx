import GroupCard from "../components/GroupCard";
import SearchBar from "../components/SearchBar";
import { Button } from "../components/button";
import EventCard from "../components/eventcard";
import FilterDropdown from "../components/filterDropdown";
import Navbar from "./../components/Navbar";

export default function BoardList() {
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
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <GroupCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
}
