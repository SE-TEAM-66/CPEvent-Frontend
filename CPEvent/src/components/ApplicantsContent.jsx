import { Group, Text, Accordion, PillsInput, Pill } from "@mantine/core";
import { Badges } from "./Badges";
import AcceptJoinBtn from "./AcceptJoinBtn";
import RejectJoinBtn from "./RejectJoinBtn";

const charactersList = [
  {
    id: "bender",
    label: "Bender Bending Rodríguez",
    badges: [
      {
        color: "#9EC4FA",
        text: "Design",
      },
      {
        color: "#C3ADEB",
        text: "Front End",
      },
      {
        color: "#FAB49E",
        text: "Project Manager",
      },
    ],
    member: {
      id: 4,
      Fname: "สมปอง",
      Lname: "ใจงาม",
      ProfilePicture: "https://picsum.photos/200/300?random=4",
      badges: [
        { color: "#F6D860", text: "Python" },
        { color: "#E69C26", text: "Java" },
        { color: "#52B4E1", text: "JavaScript" },
        { color: "#663399", text: "C++" },
        { color: "#A9B7C6", text: "PHP" },
      ],
    },
  },

  {
    id: "carol",
    label: "Carol Miller",
    badges: [
      { color: "#9EC4FA", text: "Design" },
      { color: "#FAB49E", text: "Project Manager" },
    ],
    member: {
      id: 4,
      Fname: "สมปอง",
      Lname: "ใจงาม",
      ProfilePicture: "https://picsum.photos/200/300?random=4",
      badges: [
        { color: "#9EC4FA", text: "PostgreSQL" },
        { color: "#E69C26", text: "MongoDB" },
        { color: "#C3ADEB", text: "Redis" },
        { color: "#52B4E1", text: "Firebase" },
        { color: "#A9B7C6", text: "SQLite" },
      ],
    },
  },

  {
    id: "homer",
    label: "Homer Simpson",
    badges: [
      { color: "#FAB49E", text: "Project Manager" },
      { color: "#C3ADEB", text: "Front End" },
    ],
    member: {
      id: 4,
      Fname: "สมปอง",
      Lname: "ใจงาม",
      ProfilePicture: "https://picsum.photos/200/300?random=4",
      badges: [
        { color: "#F6D860", text: "Cloud Computing" },
        { color: "#E69C26", text: "Machine Learning" },
        { color: "#C3ADEB", text: "Data Analysis" },
        { color: "#52B4E1", text: "UI/UX Design" },
      ],
    },
  },
];

function Applicants({ label, badges }) {
  return (
    <Group wrap="nowrap">
      <div>
        <Text>{label}</Text>
        {badges.map((badge) => (
          <Badges
            key={badge.text}
            color={badge.color}
            text={badge.text}
            className="mr-2"
          />
        ))}
      </div>
    </Group>
  );
}

export default function ApplicantsContent({ isEditMode }) {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <Applicants {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <div className="flex flex-row items-center">
          <img
            className="object-cover w-12 h-12 rounded-full mr-4"
            src={
              item.member.ProfilePicture ||
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
            }
            alt="user photo"
          />
          <div className="flex-1 ml-4">
            <Text size="sm">
              {item.member.Fname} {item.member.Lname}
            </Text>
            {item.member.badges.map((badge) => (
              <Badges
                key={badge.text}
                color={badge.color}
                text={badge.text}
                className="mr-2"
              />
            ))}
          </div>
          <AcceptJoinBtn />
          <RejectJoinBtn />
        </div>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion className="bg-white drop-shadow-lg px-5 py-2 rounded-lg ">
      {items}
    </Accordion>
  );
}
