import { Dispatch, SetStateAction } from "react";

export type QuestionsBlockProps = {
  isRow?: boolean;
  questions: Problem.Question[];
  setAnswer: Dispatch<SetStateAction<Problem.Answer>>
};