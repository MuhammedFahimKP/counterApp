import { setCounterColor } from "../utils";

interface Props {
  onIncrement: () => void;
  onDecrement: () => void;
  value: number;
}

const CounterBtn = ({ onIncrement, onDecrement, value }: Props) => {
  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={() => onDecrement()}
        id="decrement-btn"
        className="flex justify-center text-gray-300 items-center w-10 h-10 rounded-full  focus:outline-none bg-white border border-gray-300 "
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12H4"
          />
        </svg>
      </button>
      <span
        id="counter"
        className="text-md font-bold mx-4"
        style={{
          color: setCounterColor(value),
        }}
      >
        {value}
      </span>
      <button
        id="increment-btn"
        onClick={() => onIncrement()}
        className="flex justify-center text-gray-300 items-center w-10 h-10 rounded-full  focus:outline-none bg-white border border-gray-300 "
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v12M6 12h12"
          />
        </svg>
      </button>
    </div>
  );
};

export default CounterBtn;
