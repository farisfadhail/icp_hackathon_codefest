import { Link } from "react-router-dom";
import AppLogo from "../atoms/AppLogo";
import SidebarLink from "../atoms/SidebarLink";

const Sidebar = () => {
  return (
    <aside className="w-72 h-screen p-6 fixed">
      <div className="bg-indigo-900 bg-opacity-80 w-full h-full rounded-lg px-4 py-8 space-y-8">
        <div className="w-fit mx-auto">
          <AppLogo />
        </div>
        <div className="h-fit">
          <ul className="space-y-3">
            <SidebarLink link="/company" text="Company">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 16 16">
                <path fill="currentColor" d="M7.5 1a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15m0 13.5a6 6 0 1 1 0-12a6 6 0 0 1 0 12M8 8V6h2V5H8V4H7v1H5v4h2v2H5v1h2v1h1v-1h2V8zM7 8H6V6h1zm2 3H8V9h1z" />
              </svg>
            </SidebarLink>
            <SidebarLink link="/token" text="Token">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 16 16">
                <path fill="currentColor" d="M7.5 1a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15m0 13.5a6 6 0 1 1 0-12a6 6 0 0 1 0 12M8 8V6h2V5H8V4H7v1H5v4h2v2H5v1h2v1h1v-1h2V8zM7 8H6V6h1zm2 3H8V9h1z" />
              </svg>
            </SidebarLink>
            <SidebarLink link="/wallet" text="Wallet">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 16 16">
                <path fill="currentColor" d="M7.5 1a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15m0 13.5a6 6 0 1 1 0-12a6 6 0 0 1 0 12M8 8V6h2V5H8V4H7v1H5v4h2v2H5v1h2v1h1v-1h2V8zM7 8H6V6h1zm2 3H8V9h1z" />
              </svg>
            </SidebarLink>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
