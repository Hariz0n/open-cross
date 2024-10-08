import { FC, useEffect } from "react";
import { ProblemQuestionProps } from "../types/ProblemQuestionProps";
import { Input } from "@/shared";
import { onChangeHandler } from "../lib/onChangeHandler";
import { useIMask } from "react-imask";

export const ProblemQuestion: FC<ProblemQuestionProps> = ({
  question,
  onChange,
  value,
}) => {
  const { question: questionText } = question;

  const { ref, setTypedValue } = useIMask<HTMLInputElement>({
    mask: "*".repeat(question.charactersCount),
    prepare: (chars) => chars.toLowerCase(),
  });

  useEffect(() => {
    setTypedValue(value)
  }, [setTypedValue, value])

  return (
    <div className="flex flex-col gap-4 items-start">
      <li className="list-item ml-6">{questionText}</li>
      <Input
        ref={ref}
        className="w-64"
        onChange={onChangeHandler.bind(undefined, onChange)}
      />
    </div>
  );
};
