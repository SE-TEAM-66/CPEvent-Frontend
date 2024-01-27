import { GroupList } from "../components/groupList";
import { NewGroup } from "../components/newGroup";

export function Create() {
  return (
    <div className="h-screen">
      <div>
        <div className="flex justify-between">
          <NewGroup />
          <GroupList />
        </div>
      </div>
    </div>
  );
}
