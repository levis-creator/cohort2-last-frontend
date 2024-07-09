import { useState } from "react";

const WorkoutForm = () => {
  const [workout, setWorkout] = useState({
    workout_title: "",
    reps: 0,
    loads: 0,
  });
  const handleChange = (e) => {
    setWorkout({
      ...workout,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${import.meta.env.VITE_API_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    })
      .then(() => {
        setWorkout({
          workout_title: "",
          reps: 0,
          loads: 0,
        });
        console.log("success");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="space-y-4">
      {/* workout */}
      <label className="flex flex-col">
        <span className="font-bold capitalize text-gray-700">Workout</span>
        <input
          onChange={handleChange}
          className="focus:outline-green-600 placeholder:text-gray-500 p-2"
          placeholder="e.g Situps"
          type="text"
          name="workout_title"
          id="workout_title"
          value={workout.workout_title}
        />
      </label>
      {/* reps */}
      <label className="flex flex-col">
        <span className="font-bold capitalize text-gray-700">Reps</span>
        <input
          onChange={handleChange}
          className="focus:outline-green-600 placeholder:text-gray-500 p-2"
          placeholder="e.g 20"
          type="number"
          name="reps"
          id="reps"
          value={workout.reps}
        />
      </label>
      {/* load */}
      <label className="flex flex-col">
        <span className="font-bold capitalize text-gray-700">load(kgs)</span>
        <input
          onChange={handleChange}
          className="focus:outline-green-600 placeholder:text-gray-500 p-2"
          placeholder="e.g 30"
          type="number"
          name="loads"
          id="loads"
          value={workout.loads}
        />
      </label>
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white p-3 rounded-md"
      >
        Add workout
      </button>
    </div>
  );
};

export default WorkoutForm;
