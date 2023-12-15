import logo from '../assets/images/logo-removebg-preview.png'
import frontdesk from '../assets/images/frontdesk.png' 
const Dashboard = () => {
  return (
    <>
  <div className=''>
    <div className="flex flex-col items-center">
      <div className="w-40 h-1 mt-5 mr-auto">
        <img className="bg-white hover:bg-slate-400 " src={logo} alt="LOGO" />
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-ab text-6xl text-center pt-5">
          HOTEL OTELERO
        </h1>
        <div className="flex justify-center items-center pt-10">
          <img
            className="bg-slate-100 w-60 h-60 rounded-3xl"
            src={frontdesk}
            alt="frontdesk"
          />
        </div>
        <div className='display pt-40 space-x-4'>
          <button className=' font-mono text-4xl bg-zinc-400 rounded-xl py-10 px-16 hover:bg-zinc-600'>
            SERVICIOS
          </button>
          <button className='font-mono text-4xl bg-zinc-400 rounded-xl py-10 px-16 hover:bg-zinc-600'>
            PREGUNTAS FRECUENTES
          </button>
          <button className='font-mono text-4xl bg-zinc-400 rounded-xl py-10 px-16 hover:bg-zinc-600'>
            TECNICO 
          </button>
          <button className='font-mono text-4xl bg-zinc-400 rounded-xl py-10 px-16 hover:bg-zinc-600'>
            RESTAURANTE
          </button>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Dashboard