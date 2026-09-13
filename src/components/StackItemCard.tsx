import type { Dispatch, SetStateAction } from "react";
import { TbTrash } from "react-icons/tb";
import { toast } from "react-toastify";
import type { ITechnology } from "../types/technology";

interface IStackItemCardProps {
  technology: ITechnology;
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const StackItemCard = ({ technology, stack, setStack }: IStackItemCardProps) => {
  const handleRemove = (technology: ITechnology) => {
    // Keep every item EXCEPT the one whose id matches — removes just this one.
    const restStack = stack.filter((item) => item.id !== technology.id);
    setStack(restStack);
    toast.info(`${technology.name} removed from your stack`);
  };

  return (
    <div className="flex justify-between items-center border border-base-300 rounded-xl p-3">
      <div className="flex items-center gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-8 h-8 object-contain"
        />
        <div>
          <h3 className="font-semibold">{technology.name}</h3>
          <p className="text-xs text-base-content/60">{technology.category}</p>
        </div>
      </div>

      <span
        className="text-error text-lg cursor-pointer"
        onClick={() => handleRemove(technology)}
      >
        <TbTrash />
      </span>
    </div>
  );
};

export default StackItemCard;
