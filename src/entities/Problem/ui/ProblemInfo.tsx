import { FC } from "react";
import type { ProblemInfoProps } from "../types/ProblemInfoProps";

export const ProblemInfo: FC<ProblemInfoProps> = ({ title, description }) => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="font-bold text-[2rem] leading-[2.375rem]">{title}</h1>
      <p className="font-medium text-[1.125rem] leading-[1.5625rem]">
        {description}
      </p>
    </section>
  );
};
