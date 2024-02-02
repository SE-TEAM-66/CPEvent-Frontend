import { Avatar, Dropdown } from "flowbite-react";
export default function ProfileDropdown() {
  return (
    <Dropdown
      label={
        <Avatar
          alt="User settings"
          img="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
          rounded
        />
      }
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </Dropdown.Header>
      <div class="md:hidden">
        <Dropdown.Item>My group</Dropdown.Item>
        <Dropdown.Item>Bookmark</Dropdown.Item>
      </div>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
