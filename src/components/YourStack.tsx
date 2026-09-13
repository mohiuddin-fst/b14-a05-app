import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { ITechnology } from "../types/Technology";
import StackItemCard from "./StackItemCard";

interface IYourStackProps {
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const YourStack = ({ stack, setStack }: IYourStackProps) => {
  const handleRemoveAll = () => {
    setStack([]);
    toast.info("Stack cleared");
  };

  return (
    <div className="card bg-base-100 border border-base-300 p-5 h-fit sticky top-6">
      <h2 className="font-bold text-xl">Your Stack</h2>
      <p className="text-sm text-base-content/60 mb-4">
        {stack.length === 0 ? "No technologies selected yet." : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-base-300 rounded-xl py-10 text-center text-sm text-base-content/40">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 mb-4">
            {stack.map((technology: ITechnology, ind: number) => {
              return (
                <StackItemCard
                  key={ind}
                  technology={technology}
                  stack={stack}
                  setStack={setStack}
                />
              );
            })}
          </div>

          <button onClick={handleRemoveAll} className="btn btn-outline btn-error">
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;
