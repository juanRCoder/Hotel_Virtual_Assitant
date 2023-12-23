import React, { useState } from "react";

function Acordeon({ question, response }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        <div className="py-2 px-2">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="flex justify-between w-full border border-black rounded-lg  bg-red-200  py-1"
          >
            <span>{question}</span>
            {accordionOpen ? <span>-</span> : <span>+</span>}
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-slate-600 text-sm ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100 "
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden"> {response} </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Acordeon;
