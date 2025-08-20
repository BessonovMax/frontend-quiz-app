import type { QuestionType } from "../../types";
import VariantButton from "./VariantButton";
import AnswerButton from "./AnswerButton";

type QuizPageProps = {
  question: QuestionType;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  selectedOption: number | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<number | null>>;
  isAnswered: boolean | null;
  setIsAnswered: React.Dispatch<React.SetStateAction<boolean | null>>;
  handleNextQuestion: () => void;
  handleSelectedOption: (index: number) => void;
};

export default function Options({
  question,
  selectedOption,
  isAnswered,
  setIsAnswered,
  handleNextQuestion,
  handleSelectedOption,
}: QuizPageProps) {
  const options = question.options;
  const correctAnswerIndex = options.indexOf(question.answer || "");

  return (
    <div className="flex min-w-[20.4375rem] grow-1 flex-col gap-4 md:gap-6 xl:gap-4">
      {options?.map((option: string, index: number) => (
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
        handleNextQuestion={handleNextQuestion}
        selectedOption={selectedOption}
        isAnswered={isAnswered}
        setIsAnswered={setIsAnswered}
      />
    </div>
  );
}
