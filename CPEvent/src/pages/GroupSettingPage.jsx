import GroupJoinBtn from "../components/GroupJoinBtn";
import AcceptJoinBtn from "../components/AcceptJoinBtn";
import ContectBtn from "../components/ContectBtn";
import RejectJoinBtn from "../components/RejectJoinBtn";

import ProgressBar from "../components/ProgressBar";
import { MemberList } from "../components/MemberList";
import { Badges } from "../components/Badges";

export default function GroupSettingPage() {
  return (
    <div className="flex flex-col items-center  pt-7  h-screen">
      <div>GroupSettingPage</div>
      <GroupJoinBtn />
      <ContectBtn />
      <AcceptJoinBtn />

      <RejectJoinBtn />

      <ProgressBar progress="50" />
      <MemberList />
      <Badges color="#FFDDA7" />
    </div>
  );
}
