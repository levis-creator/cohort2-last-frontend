import { X } from "lucide-react";
import { getDateFromDateISOString } from "../lib/date_convertor";
import get_data from "../lib/get_data";

const Workout = ({ data }) => {
  const handleDelete = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => get_data());
  };
  return (
    <div className="flex w-full p-5 bg-white rounded-md shadow-md">
      {/* Data */}
      <div className="flex-grow h-full ">
        <h2 className="mb-3 text-lg font-bold text-emerald-600">
          {data.workout_title}
        </h2>
        <h3 className="font-bold">
          Loads(kg): <span className="font-normal">{data.load}</span>
        </h3>
        <h3 className="font-bold">
          Reps: <span className="font-normal">{data.reps}</span>
        </h3>
        <time className="font-light ">
          {getDateFromDateISOString(data.createdAt)}
        </time>
      </div>
      {/* delete */}
      <div className="">
        <button onClick={() => handleDelete(data._id)}>
          <X />
        </button>
      </div>
    </div>
  );
};

export default Workout;
