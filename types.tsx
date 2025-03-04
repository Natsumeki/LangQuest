export type Option = {
  id: string;
  image: string;
  text: string;
  correct?: boolean;
};

export type QuizQuestion = {
  id: string;
  type: 'OPEN_ENDED' | 'MULTIPLE_CHOICE';
  text: string;
  answer?: string;
  options?: Option;
};

export type QuestionProp = {
  question: {
    question: string;
    options: Option[];
  };
  onCorrectAnswer: () => void;
  onWrongAnser: () => void;
};
export type EndedQuestionProps = {
  question: QuizQuestion;

  onCorrectAnswer: () => void;
  onWrongAnser: () => void;
};
