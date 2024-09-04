export type ProblemQuestionProps = {
  question: Problem.Question;
  onChange: (str: string) => void;
  value?: string;
}