import { useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  const drawerCheckbox = useRef(null);

  const closeDrawer = () => {
    if (drawerCheckbox.current) {
      drawerCheckbox.current.checked = false; // Tutup drawer secara manual
    }
  };

  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerCheckbox}
      />
      <div className="bg-blue-700 p-4">
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div className="w-screen py-5 flex justify-center gap-5">
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li
            onClick={() => {
              navigate("/");
              closeDrawer();
            }}
          >
            <a>Home</a>
          </li>
          <li
            onClick={() => {
              navigate("/about");
              closeDrawer();
            }}
          >
            <a>About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
