export type QuestionType = {
  question: string;
  options: string[];
  answer: string;
};

export type QuizType = {
  title: string;
  icon: string;
  questions: QuestionType[];
};

export type TitleType = {
  title: string;
  iconPath: string;
};
