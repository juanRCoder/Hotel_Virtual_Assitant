import React, { useState } from "react";

function Acordeon({ question, response }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div className="
      flex 
      flex-col 
      mb-1
      justify-center
      items-center">
        <div className="">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className=" 
            w-96 
            h-auto 
            border
            border-green-800
            border-l-8
            border-y-2 
            rounded-lg  
            bg-gray-100 
            py-3
            px-3
            -mt-4
            flex
            justify-between
            mb-1
            text-green-700
            text-xl
             "
          >
            <span>{question}</span>
            {accordionOpen ? <span>-</span> : <span>+</span>}
          </button>
          <div
            className={`
            grid 
            overflow-hidden 
            transition-all 
            duration-300 
            ease-in-out  
            text-green-800 
            text-sm  
            justify-end
            ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100 "
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="
            overflow-hidden
            bg-green-100
            border
            border-green-800
            w-96
            h-auto
            py-3
            px-3
            rounded-md
            "> {response} </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Acordeon;
