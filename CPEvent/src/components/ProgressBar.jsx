import { Progress } from "@mantine/core";

export default function ProgressBar({ progress, value }) {
  return (
    <div>
      <Progress
        color="#37628D"
        value={progress} // รับค่า progress จาก NumberInput
        style={{ height: "0.55rem", borderRadius: "0.75rem", width: "10rem" }}
        animated
      />
      <div className="flex items-center">
        <p className="mr-20">Member</p>{" "}
        <p>
          {value}/{value}
        </p>
      </div>
    </div>
  );
}
