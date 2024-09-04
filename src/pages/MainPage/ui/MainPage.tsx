import { ProblemInfo } from "@/entities/Problem";
import { Crossword } from "@/shared";
import { QuestionsBlock } from "@/widgets/QuestionsBlock";
import { FC, useEffect, useState } from "react";

export const MainPage: FC = () => {
  const { title, description, questions } = window.problem;
  const [answer, setAnswer] = useState<Problem.Answer>({
    row: Array.from({ length: questions.row.length }).map(() => ''),
    column: Array.from({ length: questions.column.length }).map(() => ''),
  });

  useEffect(() => {
    window.getState = () => JSON.stringify(answer)
    window.setState = (json) => {
      setAnswer(JSON.parse(json))
    }
  }, [answer, setAnswer])

  return (
    <article className="p-5 flex flex-col gap-12 relative">
      <ProblemInfo title={title} description={description} />
      <QuestionsBlock answers={answer} questions={questions.row} setAnswer={setAnswer} isRow />
      <QuestionsBlock answers={answer} questions={questions.column} setAnswer={setAnswer} />
      <Crossword data={questions} answer={answer} />
    </article>
  );
};
