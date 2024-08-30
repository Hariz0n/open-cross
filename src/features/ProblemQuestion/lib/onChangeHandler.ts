import { ChangeEvent } from "react";
import { ProblemQuestionProps } from "../types/ProblemQuestionProps";

export const onChangeHandler = (onChange: ProblemQuestionProps['onChange'], e: ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  onChange(value)
}