export type Option = {
  id: string;
  image: string;
  text: string;
  correct?: boolean;
};

export type QuestionProp = {
  question: {
    question: string;
    options: Option[];
  };
  onCorrectAnswer: () => void;
  onWrongAnser: () => void;
};
