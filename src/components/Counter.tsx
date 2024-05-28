import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import {
  decrementItem,
  destroyItem,
  increamentItem,
  resetItem,
} from "../slices/counterSlice";

import { toast } from "react-hot-toast";

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

  const onDelete = (key: string) => {
    dispatch(destroyItem({ key: key }));
    toast.success("counter removed");
  };

  const onReset = (key: string) => {
    if (value != 0) {
      dispatch(resetItem({ key: key }));
      toast.success("counter reseted");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="w-full   rounded-lg h-20  text-white flex items-center shadow-xl border-slate-700 border justify-center overflow-hidden ">
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
          className={
            "text-sky-100  bg-blue-500 px-4 py-2 rounded-md " +
            `${value == 0 ? "opacity-75" : ""}`
          }
          onClick={() => {
            onReset(id);
          }}
        >
          <IoMdRefresh className="size-4 " />
        </button>
        <button
          className="text-rose-100  bg-red-500 px-4 py-2 rounded-md "
          onClick={() => onDelete(id)}
        >
          <RiDeleteBin6Line className="size-4 " />
        </button>
      </div>
    </div>
  );
};

export default Counter;
