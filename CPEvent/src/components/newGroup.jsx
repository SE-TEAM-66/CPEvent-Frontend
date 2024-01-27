import { Button } from "./button";

export function NewGroup() {
  return (
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-5">
          <input id="groupName" type="text" placeholder="กรุณาใส่ชื่อกลุ่ม" />
          <Button label="เพิ่มสมาชิก" />
        </div>
        <div className="flex justify-end">
          <Button label="สร้าง" />
        </div>
      </form>
    </div>
  );
}
