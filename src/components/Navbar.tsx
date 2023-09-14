import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-200 px-8 py-3 text-violet-500">
        <NavLink
          className="mr-4 text-2xl active:bg-violet-700 font-bold"
          to="/"
        >
          Home
        </NavLink>
        <NavLink className="mr-4 text-2xl " to="/about">
          About
        </NavLink>
        <NavLink className="mr-4 text-2xl " to="/products">
          Products
        </NavLink>
        <NavLink className="mr-4 text-2xl " to="/careers">
          Careers
        </NavLink>
        <NavLink className="mr-4 text-2xl " to="/contact">
          Contact Us
        </NavLink>
        <NavLink className="mr-4 text-2xl " to="/usersdata">
          Users
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
