const groups = [
  {
    name: "group1",
  },
  {
    name: "group2",
  },
  {
    name: "group3",
  },
];

export default function GroupList() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {groups.map((group) => (
        <li key={group.name} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {group.name}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
