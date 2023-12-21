import React, { useState } from "react";

function Acordeon() {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordionOpen1, setAccordionOpen1] = useState(false);
  const [accordionOpen2, setAccordionOpen2] = useState(false);
  const [accordionOpen3, setAccordionOpen3] = useState(false);

  return (
    <>
      <div className="flex flex-col">
        <div className="py-2 px-2">
          <button
            onClick={() => setAccordionOpen(!accordionOpen)}
            className="flex justify-between w-full border border-black rounded-lg  bg-red-200  py-1"
          >
            <span>pregunta 1</span>
            {accordionOpen ? <span>-</span> : <span>+</span>}
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-slate-600 text-sm ${
              accordionOpen
                ? "grid-rows-[1fr] opacity-100 "
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              {" "}
              this is the answer Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Voluptatibus illo ullam error asperiores
              cupiditate deleniti velit consequatur reprehenderit ipsam et
              necessitatibus repellendus eos quae consectetur autem, nihil
              reiciendis aut praesentium?{" "}
            </div>
          </div>
        </div>

        <div className="py-2 px-2">
          <button
            onClick={() => setAccordionOpen1(!accordionOpen1)}
            className="flex justify-between w-full border  border-black rounded-lg  bg-red-200  py-1"
          >
            <span>pregunta2</span>
            {accordionOpen1 ? <span>-</span> : <span>+</span>}
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-slate-600 text-sm ${
              accordionOpen1
                ? "grid-rows-[1fr] opacity-100 "
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              {" "}
              this is the answer Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Voluptatibus illo ullam error asperiores
              cupiditate deleniti velit consequatur reprehenderit ipsam et
              necessitatibus repellendus eos quae consectetur autem, nihil
              reiciendis aut praesentium?{" "}
            </div>
          </div>
        </div>

        <div className="py-2 px-2">
          <button
            onClick={() => setAccordionOpen2(!accordionOpen2)}
            className="flex justify-between w-full border border-black rounded-lg  bg-red-200  py-1"
          >
            <span>pregunta3</span>
            {accordionOpen2 ? <span>-</span> : <span>+</span>}
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-slate-600 text-sm ${
              accordionOpen2
                ? "grid-rows-[1fr] opacity-100 "
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              {" "}
              this is the answer Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Voluptatibus illo ullam error asperiores
              cupiditate deleniti velit consequatur reprehenderit ipsam et
              necessitatibus repellendus eos quae consectetur autem, nihil
              reiciendis aut praesentium?{" "}
            </div>
          </div>
        </div>
        <div className="py-2 px-2">
          <button
            onClick={() => setAccordionOpen3(!accordionOpen3)}
            className="flex justify-between w-full border border-black rounded-lg  bg-red-200  py-1"
          >
            <span>pregunta4</span>
            {accordionOpen3 ? <span>-</span> : <span>+</span>}
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-slate-600 text-sm ${
              accordionOpen3
                ? "grid-rows-[1fr] opacity-100 "
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              {" "}
              this is the answer Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Voluptatibus illo ullam error asperiores
              cupiditate deleniti velit consequatur reprehenderit ipsam et
              necessitatibus repellendus eos quae consectetur autem, nihil
              reiciendis aut praesentium?{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Acordeon;
