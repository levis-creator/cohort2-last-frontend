import { X } from "lucide-react"

const Workout = () => {
  return (
    <div className="flex w-full bg-white shadow-md p-5 rounded-md">
        {/* Data */}
        <div className=" h-full flex-grow">
        <h2 className="text-emerald-600 font-bold text-lg mb-3">Bench press</h2>
        <h3 className="font-bold">Loads(kg): <span className="font-normal">35</span></h3>
        <h3 className="font-bold" >Reps: <span className="font-normal">35</span></h3>
        <time className="font-light ">2022955</time>
        </div>
        {/* delete */}
        <div className="">
        <button>

        <X/>
        </button>
        </div>
    </div>
  )
}

export default Workout