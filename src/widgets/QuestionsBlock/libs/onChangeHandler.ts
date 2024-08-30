import { QuestionsBlockProps } from "../types/QuestionBlockProps";

export const onChangeHandler = (
  setAnswer: QuestionsBlockProps["setAnswer"],
  isRow: boolean,
  index: number,
  value: string
) => {
  setAnswer((prev) => {
    const copy: typeof prev = {
      ...prev,
    };
    if (isRow) {
      copy.row[index] = value;
    } else {
      copy.column[index] = value;
    }

    return copy;
  });
};
