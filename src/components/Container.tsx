import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { initItem, resetAll } from "../slices/counterSlice";

import AddCounter from "./AddCounter";
import Counter from "./Counter";
import { IoMdRefresh } from "react-icons/io";

const Container = () => {
  const dispatch = useDispatch<any>();
  const { counterSlice } = useSelector((state: RootState) => state);

  return (
    <div className="w-full h-[100vh] bg-sky-500 grid place-items-center ">
      <div className="w-[400px] rounded-3xl h-[90vh] bg-white mx-auto flex flex-col items-center  pt-10 px-3 ">
        <div className="w-full flex items-center  justify-between mt-4  px-8">
          <h1 className="text-3xl font-rubik">Counter</h1>
          <button
            className="bg-sky-300 text-white px-2 flex items-center justify-between  font-rubik text-md py-1 rounded-md"
            onClick={() => dispatch(resetAll())}
          >
            <IoMdRefresh className="mr-1" />
            reset
          </button>
        </div>
        <div className="w-full  flex flex-col  py-10 min-h-[89%] gap-8  overflow-y-scroll no-scrollbar">
          <AddCounter onClick={() => dispatch(initItem())} />

          {Object.keys(counterSlice).map((key: string, index) => (
            <Counter
              value={counterSlice[key]}
              key={key + 1}
              no={index + 1}
              id={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
