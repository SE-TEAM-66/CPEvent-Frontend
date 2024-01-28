import { UnstyledButton, Group, Avatar, Text } from "@mantine/core";

export function MemberList() {
  return (
    <UnstyledButton className="p-4 bg-gray-100 hover:bg-gray-300">
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />

        <div className="flex-1 ml-4">
          <Text size="sm" fw={500}>
            Harriette Spoonlicker
          </Text>

          <Text className="text-gray-500 text-xs">
            hspoonlicker@outlook.com
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  );
}
