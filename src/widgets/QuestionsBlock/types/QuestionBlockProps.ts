import { Dispatch, SetStateAction } from "react";

export type QuestionsBlockProps = {
  isRow?: boolean;
  questions: Problem.Question[];
  answers: Problem.Answer;
  setAnswer: Dispatch<SetStateAction<Problem.Answer>>
};