export declare global {
  namespace Problem {
    export interface Config {
      title: string;
      description: string;
      questions: Questions;
    }

    export interface Questions {
      row: Question[];
      column: Question[];
    }

    export interface Question {
      question: string;
      charactersCount: number;
    }
  }

  interface Window {
    problem: Problem.Config;
    getState: () => string;
    setState: (json: string) => void;
  }
}
