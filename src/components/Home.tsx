import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-cyan-950 px-5 py-10">
        <div className="text-3xl mt-2 text-white">Welcome</div>
        <p className="text-1xl mt-5 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem
          dapibus, semper orci a, pulvinar lectus. Duis tristique pretium
          finibus. Etiam vel viverra arcu, vel efficitur nunc. Aenean in lacinia
          enim. Donec ac augue sit amet quam tempor posuere et vitae leo. Nulla
          ut erat viverra, mollis orci sit amet, pellentesque dui. Donec ut
          lorem sit amet leo ullamcorper luctus. Quisque eu ligula non ante
          consequat imperdiet a sit amet sem. Sed lorem ex, dapibus non diam
          nec, facilisis ultricies sem. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Etiam molestie commodo
          porta. Phasellus in felis quis augue lacinia ullamcorper.{" "}
        </p>
        <button
          className="rounded-full bg-slate-200 px-8 py-3 mt-10 mb-5"
          onClick={() => navigate("order-summary")}
        >
          Place Order
        </button>
      </div>
    </>
  );
};
