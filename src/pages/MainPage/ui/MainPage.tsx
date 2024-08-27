import { ProblemInfo } from "@/entities/Problem";
import { QuestionsBlock } from "@/widgets/QuestionsBlock";
import { FC } from "react";

export const MainPage: FC = () => {
  const { title, description, questions } = window.problem;
  return (
    <article className="p-5 flex flex-col gap-12 relative">
      <ProblemInfo title={title} description={description} />
      <QuestionsBlock questions={questions.row} isRow />
      <QuestionsBlock questions={questions.column} />
    </article>
  );
};
