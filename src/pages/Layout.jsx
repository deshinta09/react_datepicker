import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    // <div className={`drawer`}>
    <div className={`drawer${isOpen && " drawer-open"}`}>
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isOpen}
      />
      {/* <div className="drawer-content"> */}
      <div className="bg-blue-700 p-4">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Open drawer
        </label>
      </div>
      <div className="w-screen py-5 flex justify-center gap-5">
        <Outlet />
      </div>
      {/* </div> */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label={isOpen ? "close sidebar" : "open sidebar"}
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li
            onClick={() => {
              navigate("/");
              setIsOpen(!isOpen);
            }}
          >
            <a>Home</a>
          </li>
          <li
            onClick={() => {
              navigate("/about");
              setIsOpen(!isOpen);
            }}
          >
            <a>About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
