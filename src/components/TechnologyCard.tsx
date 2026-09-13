import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/Technology";
import { Bounce, toast } from "react-toastify";

interface ITechnologyCardProps {
  technology: ITechnology;
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({ technology, stack, setStack }: ITechnologyCardProps) => {
  const isSelected = stack.some((item) => item.id === technology.id);

  const handleAddToStack = () => {
    if (isSelected) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack`, {
      position: "top-center",
      autoClose: 3000,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="card bg-base-100 border border-base-300 shadow-md hover:shadow-xl transition-all">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-10 h-10 object-contain"
          />
          <span className="badge badge-secondary">{technology.badge}</span>
        </div>

        <h2 className="card-title">{technology.name}</h2>
        <p className="text-sm text-base-content/60">{technology.description}</p>

        <div className="flex items-center gap-2 text-xs text-base-content/60 my-2 flex-wrap">
          <span className="badge badge-outline">{technology.category}</span>
          <span>{technology.difficulty}</span>
          <span className="ml-auto font-semibold text-base-content">
            ⭐ {technology.rating}
          </span>
        </div>

        <button
          onClick={() => handleAddToStack()}
          className="btn btn-primary rounded-xl"
          disabled={isSelected}
        >
          {isSelected ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
