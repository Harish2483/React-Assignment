import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-cyan-950 px-5 py-10">
        <div className="text-3xl mt-2 text-white">Order Confirmed</div>
        <button
          className="rounded-full bg-slate-200 px-8 py-3 mt-8"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </>
  );
};
