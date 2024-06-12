import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../store/CounterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold mb-5 text-gray-800">
        Counter: {count}
      </h1>
      <div className="flex space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
