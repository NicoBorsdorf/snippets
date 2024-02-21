import Sidebar from "../components/Sidebar";
import PlusIcon from "../components/icons/PlusIcon";
import Search from "../components/icons/Search";

export default function Home() {
  const snippets = [
    {
      titel: "Responsice Tabel",
      description: "Create a responsive table using Tailwind CSS",
      tags: ["ui", "react", "table"],
    },
    {
      titel: "Dark mode toggle",
      description: "Add a dark mode toggle to your website using shadcn",
      tags: ["ui", "react", "theme"],
    },
    {
      titel: "Hero section",
      description: "Create a beautiful hero section for your website",
      tags: ["ui", "react", "card"],
    },
    {
      titel: "Modal popup",
      description: "Implement a modal popup using shadcn components",
      tags: ["ui", "react", "popup"],
    },
  ];
  return (
    <div className="min-w-full min-h-screen flex">
      <Sidebar />
      <div className="w-full">
        <div
          className="flex items-center
          p-2 pl-4  text-2xl border-b border-slate-300"
        >
          <div
            id="Search"
            className="border border-slate-300 rounded-md p-2 flex items-center bg-base-300"
          >
            <Search className="w-6 h-6 mr-2" />
            <input
              type="search"
              placeholder="Search..."
              className="bg-base-300"
            />
          </div>
          <button type="button" className="btn-primary ml-4 btn btn-md">
            <PlusIcon className="w-6 h-6" /> New
          </button>
        </div>
        <div className="p-10 grid grid-cols-2 gap-4">
          {snippets.map(({ titel, description, tags }, i) => (
            <div className="card w-full bg-base-300 shadow-xl group" key={i}>
              <div className="card-body group-item">
                <h2 className="card-title">{titel}</h2>
                <p>{description}</p>
                <div className="flex">
                  <div className="card-actions items-center pt-4 w-[50%]">
                    <button className="btn btn-sm btn-outline btn-primary w-full hover:cursor-pointer">
                      View Snippet
                    </button>
                    <div className="divider divider-primary w-full my-0">
                      OR
                    </div>
                    <button className="btn btn-sm btn-outline w-full btn-primary hover:cursor-pointer">
                      Copy to Clipboard
                    </button>
                  </div>
                  <div className="w-[50%] items-end justify-end flex flex-wrap p-2 space-x-2">
                    {tags.map((tag) => (
                      <div
                        key={tag}
                        className="badge badge-secondary badge-md badge-outline"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
