import imagen from '../../assets/images/frontdesk.png';

function BodyTecnico  ()  {
  return (
    <> 
    <div className="flex mx-4">
    <div className="w-40%">
      <img src={imagen} alt="" className="w-full h-auto" />
    </div>
    <div className='flex flex-col bg-red-400 ml-20  w-1/2 rounded-xl'>
      <form action="" className=''>
        <input className='w-full bg-green-100 mt-2 h-20' type="text" placeholder='Agua' />
        <div className='flex justify-center items-center mt-2'><button className=' bg-yellow-500 py-2 w-20 rounded-lg border boder-black'>enviar </button></div>
        <input className='w-full bg-green-100 mt-2 h-20' type="text" placeholder='luz' />
        <div className='flex justify-center items-center mt-2'><button className=' bg-yellow-500 py-2 w-20 rounded-lg border boder-black'>enviar </button></div>
      </form>
      <div className='flex items-center justify-center mt-72'>
      <button className='bg-green-400 py-2 w-20 flex justify-center border border-black rounded-xl'>REGRESAR</button>
      </div>
    </div>
    </div>
     </>
  )
}

export default BodyTecnico;