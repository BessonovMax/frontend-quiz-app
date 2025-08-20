import type { QuestionType } from "../../types";

type QuizPageProps = {
  questions: QuestionType[];
  questionIndex: number;
};

export default function QuestionArea({
  questions,
  questionIndex,
}: QuizPageProps) {
  const totalQuestions = questions.length;

  // Calculate the progress percentage
  const progressPercentage = ((questionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="flex flex-col gap-6 md:gap-10 xl:max-w-[472px] xl:gap-[11.5rem]">
      <div className="flex flex-col gap-4 md:gap-6">
        <div className="text-text-secondary font-display-italic font-normal">
          Question {questionIndex + 1} of {totalQuestions}
        </div>
        <div className="text-xl md:text-[2.25rem]">
          {questions[questionIndex].question}
        </div>
      </div>
      <div className="flex h-4 items-center rounded-4xl bg-white p-1">
        <div
          className={`bg-primary transition-width h-2 rounded-4xl duration-300`}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
