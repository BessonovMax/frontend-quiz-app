import type { QuestionType } from "../../types";

type QuizPageProps = {
  questions: QuestionType[];
  questionIndex: number;
};

export default function QuestionArea({
  questions,
  questionIndex,
}: QuizPageProps) {
  return (
    <div className="flex flex-col gap-6 md:gap-10 xl:max-w-[472px] xl:gap-[11.5rem]">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="text-text-secondary font-display-italic font-normal">
          Question {questionIndex} of {questions?.length}
        </div>
        <div className="text-xl">{questions[questionIndex].question}</div>
      </div>
      <div className="h-4 rounded-4xl bg-white">
        <div className="bg-primary mx-1 mt-1 h-2 rounded-4xl"></div>
      </div>
    </div>
  );
}
