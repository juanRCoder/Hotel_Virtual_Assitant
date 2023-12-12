import logo from '../assets/images/logo-removebg-preview.png';
import frontdesk from '../assets/images/frontdesk.png';

function Login() {
  return (
    
    <div className="flex flex-col items-center bg-zinc-200">
      <div className="w-40 h-1 mt-5 mr-auto">
        <img className="bg-white hover:bg-slate-400 " src={logo} alt="LOGO" />
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="font-mono text-6xl text-center pt-5">
          HOTEL OTELERO
        </h1>
        <div className="flex justify-center items-center pt-10">
          <img
            className="bg-slate-100 w-60 h-60 rounded-3xl"
            src={frontdesk}
            alt="frontdesk"
          />
        </div>
      </div>
      <br />
      <div className="w-full max-w-xs mt-5 bg-slate-800">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border  border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Lastname"
            >
              Lastname 
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="lastname"
            />
            <label
             className='block text-gray-700 text-sm font-bold mb-2'
             htmlFor="code">
                code
             </label>
            <input
            className='shadow appearance-none border border-red-500 rodunded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus_outline-none  focus:shadow-outline'
            id='code'
            type='code'
            placeholder='type your code here please!!'
            />
            
            <p className="text-red-500 text-xs italic">
              Please type your code here.
            </p>
          </div>
          <div className="flex items-center justify-between pl-20">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Hotel Transilvania. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
