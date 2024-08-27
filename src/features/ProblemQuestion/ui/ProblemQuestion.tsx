import { FC } from "react";
import { ProblemQuestionProps } from "../types/ProblemQuestionProps";
import { Input } from "@/shared";

export const ProblemQuestion: FC<ProblemQuestionProps> = ({ question }) => {
  const { question: questionText } = question;

  return (
    <div className="flex flex-col gap-4 items-start">
      <li className="list-item ml-6">{questionText}</li>
      <Input className="w-64" />
    </div>
  );
};
