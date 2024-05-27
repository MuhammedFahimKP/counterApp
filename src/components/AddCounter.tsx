import { CiCirclePlus } from "react-icons/ci";
import { AppDispatch } from "../store";

interface Props {
  onClick: () => AppDispatch;
}

const AddCounter = ({ onClick }: Props) => {
  return (
    <div
      className="w-2/4 h-10 rounded-lg mx-auto bg-gray-200 border border-gray-100 shadow-2xl text-gray-400 flex flex-col  items-center justify-center"
      onClick={() => {
        onClick();
      }}
    >
      <CiCirclePlus className="size-8 " />
    </div>
  );
};

export default AddCounter;
