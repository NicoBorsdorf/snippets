import CodeIcon from "../icons/CodeIcon";
import Search from "../icons/Search";

export default function Header() {
  return (
    <header
      id="topbar"
      className="w-full h-fit border-b border-slate-300 flex p-2 items-center"
    >
      <a
        className="flex items-center pr-10 text-2xl hover:cursor-pointer hover:bg-base-100"
        href="/"
      >
        <CodeIcon className="w-8 h-8 mr-2" /> Snipptes
      </a>

      <div
        id="Search"
        className="border border-slate-300 rounded-md p-2 flex items-center bg-base-300"
      >
        <Search className="w-6 h-6 mr-2" />
        <input type="search" placeholder="Search..." className="bg-base-300" />
      </div>

      <div className="dropdown dropdown-end ml-auto">
        <div
          tabIndex={0}
          role="button"
          className="btn bg-slate-600 text-white text-xl rounded-full"
        >
          NB
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <div className="text-xl pt-1 font-semibold self-center">
            My Account
          </div>
          <div className="divider my-0" />

          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Support</a>
          </li>
          <div className="divider my-0" />
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
