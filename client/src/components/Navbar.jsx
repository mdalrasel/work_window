import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setIsDark(savedTheme === "dark");
  }, []);

  const handleThemeToggle = (checked) => {
    const newTheme = checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDark(checked);
  };

  const navLink = (
    <>
      <li data-aos="zoom-in"><NavLink to='/'>Home</NavLink></li>
      {user && <li data-aos="zoom-in"><NavLink to='/add-task'>Add Task</NavLink></li>}
      <li data-aos="zoom-in"><NavLink to='/tasks'>Browse Tasks</NavLink></li>
      {user && <li data-aos="zoom-in"><NavLink to='/my-tasks'>My Posted Tasks</NavLink></li>}
    </>
  );

  const handleSignOut = () => {
    logOut().then().catch();
  };

  return (
    <div className="navbar bg-base-100 shadow-lg px-4">
      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="md:hidden cursor-pointer pr-2">
            <GiHamburgerMenu size={25} />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow oswald bg-base-100 rounded-box w-30">
            {navLink}
          </ul>
        </div>
        <Link to='/' data-aos="fade-right" className="text-2xl font-bold rancho">WorkWindow</Link>
      </div>

      
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 oswald ">
          {navLink}
        </ul>
      </div>

     
      <div className="navbar-end gap-3 items-center" data-aos="fade-left">

        <label className="flex cursor-pointer gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            className="toggle theme-controller"
            onChange={(e) => handleThemeToggle(e.target.checked)}
            checked={isDark}
          />

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>

        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="User" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-40">
              <li><button className="btn btn-sm btn-ghost">{user.displayName}</button></li>
              <li><button onClick={handleSignOut} className="btn btn-sm">Sign Out</button></li>
            </ul>
          </div>
        ) : (
          <Link to='/logIn' className="btn">Sign In</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
