const WorkoutForm = () => {
  return (
    <form method="post" className="space-y-4">
      {/* workout */}
      <label className="flex flex-col">
        <span className="font-bold capitalize text-gray-700">Workout</span>
        <input
          className="focus:outline-green-600 placeholder:text-gray-500 p-2"
          placeholder="e.g Situps"
          type="text"
          name="workout_title"
          id="workout_title"
        />
      </label>
      {/* reps */}
      <label className="flex flex-col">
        <span className="font-bold capitalize text-gray-700">Reps</span>
        <input
          className="focus:outline-green-600 placeholder:text-gray-500 p-2"
          placeholder="e.g 20"
          type="number"
          name="reps"
          id="reps"
        />
      </label>
      {/* load */}
      <label className="flex flex-col">
        <span className="font-bold capitalize text-gray-700">load(kgs)</span>
        <input
          className="focus:outline-green-600 placeholder:text-gray-500 p-2"
          placeholder="e.g 30"
          type="number"
          name="loads"
          id="loads"
        />
      </label>
      <button type="submit" className="bg-green-600 text-white p-3 rounded-md">
        Add workout
      </button>
    </form>
  );
};

export default WorkoutForm;
