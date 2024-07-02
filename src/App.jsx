import Navbar from './components/Navbar'
import Workout from './components/Workout'


function App() {

  return (
    <>
     <Navbar/>
     <div className='flex h-[calc(100vh-6em)] py-10 px-20 bg-slate-100'>
      {/* workouts */}
      <div className=' h-full basis-3/4 flex flex-col gap-5 '>
        <Workout/>
        <Workout/>
        <Workout/>
        <Workout/>
      </div>
      {/* inputs */}
      <div className='bg-red-600 h-full basis-1/4'></div>
     </div>
    </>
  )
}

export default App
