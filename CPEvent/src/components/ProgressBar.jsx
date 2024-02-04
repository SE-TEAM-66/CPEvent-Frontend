import { Progress } from "@mantine/core";

export default function ProgressBar({ progress }) {
  return (
    <div>
      <Progress
        color="#37628D"
        value={progress}
        style={{ height: "0.55rem", borderRadius: "0.75rem", width: "10rem" }}
        animated
      />
      <div className="flex items-center">
        <p className="mr-20">Member</p> <p>2/4</p>
      </div>
    </div>
  );
}
