import type { QuestionType } from "../../types";
import VariantButton from "./VariantButton";
import AnswerButton from "./AnswerButton";

type QuizPageProps = {
  question: QuestionType;
  selectedOption: number | null;
  isAnswered: boolean | null;
  handleNextQuestion: () => void;
  handleSelectedOption: (index: number) => void;
  onAnswerHandler: () => void;
  showSelectionError: boolean;
};

export default function Options({
  question,
  selectedOption,
  isAnswered,
  handleNextQuestion,
  handleSelectedOption,
  onAnswerHandler,
  showSelectionError,
}: QuizPageProps) {
  const correctAnswerIndex = question.options.indexOf(question.answer);

  return (
    <div className="flex min-w-[20.4375rem] grow-1 flex-col gap-4 md:gap-6 xl:gap-4">
      {question.options?.map((option: string, index: number) => (
        <VariantButton
          key={index}
          isAnswered={isAnswered}
          isActive={selectedOption === index}
          onClick={() => handleSelectedOption(index)}
          isCorrect={index === correctAnswerIndex}
          optionText={option}
          letter={String.fromCharCode(97 + index)} // 'a' + index
        />
      ))}
      <AnswerButton
        isAnswered={isAnswered}
        handleNextQuestion={handleNextQuestion}
        onAnswerHandler={onAnswerHandler}
        showSelectionError={showSelectionError}
      />
    </div>
  );
}
