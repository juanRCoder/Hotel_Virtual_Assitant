import frontdesk from '../../assets/images/frontdesk.png';
import React from 'react';

function Main() {
  return (
    <>
      <div className="flex justify-center items-center pt-60">
        <img
          className="bg-slate-100 w-80 h-70 rounded-3xl"
          src={frontdesk}
          alt="frontdesk"
        />
      </div>
      <br />
      <div className="w-full max-w-xs mt-5 bg-slate-800 mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastname"
            >
              Lastname
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Lastname"
            />
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="code"
            >
              Code
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="code"
              type="text"
              placeholder="Type your code here, please!!"
            />
            <p className="text-red-500 text-xs italic">
              Please type your code here.
            </p>
          </div>
          <div className="flex items-center justify-between pl-20">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
    </>
  );
}

export default Main;
