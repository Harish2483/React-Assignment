import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div className="bg-cyan-950 px-5 py-5">
        <h3 className="text-3xl text-white">Products</h3>
        <input
          className="rounded border-current mt-4 px-4 py-3 border"
          type="search"
          placeholder="Search"
        />
      </div>
      <nav className="bg-indigo-100 px-8 py-3 text-orange-400 mt-5">
        <Link className="mr-4 text-2xl mt-11 underline" to="featured">
          Featured
        </Link>
        <Link className="mr-4 text-2xl underline" to="new">
          New
        </Link>
      </nav>
      <Outlet />
    </>
  );
};
