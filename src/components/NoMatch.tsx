import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <div className="bg-cyan-950 px-5 py-10">
      <h2 className="text-3xl mt-2 text-white">Page Not Found</h2>
      <p className="text-1xl mt-5 text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem
        dapibus, semper orci a, pulvinar lectus. Duis tristique pretium finibus.
        Etiam vel viverra arcu, vel efficitur nunc. Aenean in lacinia enim.
        Donec ac augue sit amet quam tempor posuere et vitae leo. Nulla ut erat
        viverra, mollis orci sit amet, pellentesque dui.
      </p>
      <p className="text-1xl mt-5 text-white">
        Go the the{" "}
        <Link className="underline" to="/">
          Homepage
        </Link>
        .
      </p>
    </div>
  );
};
