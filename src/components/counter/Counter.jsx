import React from "react";

function Counter({ count, setCount, max }) {
  return (
    <div className="flex flex-col">
      <label
        className="w-full text-gray-700 text-sm font-semibold">
        تعداد:
      </label>
      <div className="flex flex-row ">
        <button
          onClick={() => {
            if (count < max) {
              setCount(count + 1);
            }
          }}
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 py-1 px-3 rounded-s cursor-pointer">
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
        <p className="bg-gray-300 text-gray-600 py-2 px-3">
          {count}
        </p>
        <button
          onClick={() => {
            if (count > 1) {
              setCount(count - 1);
            }
          }}
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 py-1 px-3 rounded-l cursor-pointer outline-none">
          <span className="m-auto text-2xl font-thin">-</span>
        </button>
      </div>
    </div>
  );
}

export default Counter;
