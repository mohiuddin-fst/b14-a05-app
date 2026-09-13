import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

interface IAvailableTechnologiesProps {
  technologies: ITechnology[];
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const AvailableTechnologies = ({
  technologies,
  stack,
  setStack,
}: IAvailableTechnologiesProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {technologies.map((technology: ITechnology, ind: number) => {
        return (
          <TechnologyCard
            key={ind}
            technology={technology}
            stack={stack}
            setStack={setStack}
          />
        );
      })}
    </div>
  );
};

export default AvailableTechnologies;
