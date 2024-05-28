import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import {
  decrementItem,
  destroyItem,
  increamentItem,
  resetItem,
} from "../slices/counterSlice";

import CounterBtn from "./CounterBtn";
import { IoMdRefresh } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

interface Props {
  id: string;
  no: number;
  value: number;
}

const Counter = ({ value, no, id }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex flex-col">
      <div className="w-full   rounded-lg h-20   flex items-center shadow-xl  border border-gray-200 justify-center overflow-hidden ">
        <div className="flex-2 w-full h-full flex items-center   overflow-hidden px-4">
          <div className="flex  items-center  gap-14">
            <h1 className="text-xl">Counter {no}</h1>
            <CounterBtn
              value={value}
              onDecrement={() => dispatch(decrementItem({ key: id }))}
              onIncrement={() => dispatch(increamentItem({ key: id }))}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-8 flex items-center justify-end px-4 mt-2 gap-2">
        <button
          className="bg-sky-100  text-blue-500 px-4 py-2 rounded-md border border-blue-500"
          onClick={() => dispatch(resetItem({ key: id }))}
        >
          <IoMdRefresh className="size-4 " />
        </button>
        <button
          className="bg-rose-100  text-red-500 px-4 py-2 rounded-md border border-red-500"
          onClick={() => dispatch(destroyItem({ key: id }))}
        >
          <RiDeleteBin6Line className="size-4 " />
        </button>
      </div>
    </div>
  );
};

export default Counter;
