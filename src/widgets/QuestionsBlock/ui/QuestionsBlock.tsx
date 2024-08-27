import { Badge } from "@/shared";
import { FC } from "react";
import { QuestionsBlockProps } from "../types/QuestionBlockProps";
import { ProblemQuestion } from "@/features/ProblemQuestion";

export const QuestionsBlock: FC<QuestionsBlockProps> = ({
  questions,
  isRow = false,
}) => {
  return (
    <section className="flex flex-col items-start gap-6">
      <Badge
        char={isRow ? "1" : "2"}
        text={isRow ? "Вопросы по горизонтали" : "Вопросы по вертикали"}
      />

      <ol className="list-decimal flex flex-col gap-8">
        {questions.map((question, index) => <ProblemQuestion key={index} question={question} />)}
      </ol>
    </section>
  );
};
