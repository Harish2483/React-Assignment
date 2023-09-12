import { Outlet } from "react-router-dom";

export const CareersLayout = () => {
  return (
    <>
      <div className="bg-cyan-950 px-5 py-10">
        <h2 className="text-3xl mt-2 text-white">Careers</h2>
        <p className="text-1xl mt-5 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
        <Outlet />
      </div>
    </>
  );
};
