import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Workout from "./components/Workout";
import get_data from "./lib/get_data";
import WorkoutForm from "./components/WorkoutForm";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    get_data().then((res) => setData(res));
  }, []);
  console.log(data.current);
  return (
    <>
      <Navbar />
      <div className="flex gap-6 h-[calc(100vh-6em)] py-10 px-20 bg-slate-100">
        {/* workouts */}
        <div className="flex flex-col h-full gap-5 basis-3/4">
          {data.map((workout, i) => (
            <Workout key={i} data={workout} />
          ))}
        </div>
        {/* inputs */}
        <div className="h-full  basis-1/4">
          <WorkoutForm />
        </div>
      </div>
    </>
  );
}

export default App;
