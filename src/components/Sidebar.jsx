import Package2Icon from "../icons/Package";

export default function Sidebar() {
  const packages = [
    { label: "All", link: "#all", count: 12 },
    { label: "JavaScript", link: "#javascript", count: 3 },
    { label: "CSS", link: "#css", count: 5 },
    { label: "React", link: "#react", count: 4 },
  ];
  return (
    <div
      id="sidebar"
      className="max-w-sm w-full border-r border-b border-slate-300 h-screen bg-base-300"
    >
      <div
        className="flex items-center justify-center
         p-4 text-2xl border-b border-slate-300"
      >
        <Package2Icon className="mr-2" /> Snippets
      </div>
      <div className="p-4">
        <ul className="max-w-xs space-y-2">
          {packages.map(({ label, link, count }, i) => (
            <li
              id={label}
              key={i}
              className="flex rounded-lg items-center p-2 text-xl justify-between active:bg-base-100 focus:bg-base-100 hover:bg-base-100 hover:cursor-pointer"
            >
              <a href={link}>{label}</a>
              <div className="badge badge-info badge-lg">{count}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
