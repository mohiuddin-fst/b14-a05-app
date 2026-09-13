import { use, useState } from "react";
import type { ITechnology } from "../types/Technology";
import AvailableTechnologies from "./AvailableTechnologies";
import YourStack from "./YourStack";

interface ITechnologiesProps {
  technologiesPromise: Promise<ITechnology[]>;
}

const Technologies = ({ technologiesPromise }: ITechnologiesProps) => {
  const technologies = use(technologiesPromise);
  const [stack, setStack] = useState<ITechnology[]>([]);

  return (
    <div className="container mx-auto px-4 my-10">
      <h2 className="font-bold text-3xl mb-1">Explore the Technologies</h2>
      <p className="text-base-content/60 mb-6">
        Pick the technologies you want in your stack.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 items-start">
        <div className="lg:col-span-3">
          <AvailableTechnologies
            technologies={technologies}
            stack={stack}
            setStack={setStack}
          />
        </div>

        <YourStack stack={stack} setStack={setStack} />
      </div>
    </div>
  );
};

export default Technologies;
