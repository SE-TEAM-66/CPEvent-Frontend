import { Button } from "./button";
import { Card } from "./card";

const roles = ["admin", "front-end"];
export function NewGroup() {
  return (
    <div className="w-full max-w-2xl">
      <form className="bg-white px-8 pt-6 pb-8 mb-4">
        <div className="mb-5 space-y-4">
          <input
            id="groupName"
            type="text"
            placeholder="กรุณาใส่ชื่อกลุ่ม"
            className="text-xl"
          />
          <Button label="เพิ่มสมาชิก" />
        </div>
        <div className="space-y-5 mb-3">
          <p>รายชื่อสมาชิกกลุ่ม</p>
          <Card
            image="src/assets/groom.png"
            title="ทนวย คงควรคอย"
            roles={roles}
          />
        </div>
        <div className="flex justify-end">
          <Button label="สร้าง" />
        </div>
      </form>
    </div>
  );
}
