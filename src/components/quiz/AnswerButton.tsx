import { useState } from "react";
import QuizButton from "../QuizButton";

interface Props {
  selectedOption: number | null;
  isAnswered?: boolean | null;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsAnswered: React.Dispatch<React.SetStateAction<boolean | null>>;
  setSelectedOption: React.Dispatch<React.SetStateAction<number | null>>;
}

const AnswerButton = ({
  selectedOption,
  isAnswered,
  setIsAnswered,
  setQuestionIndex,
  setSelectedOption,
}: Props) => {
  const [notSelected, setNotSelected] = useState<boolean>(false);
  const onAnswerHandler = () => {
    if (selectedOption === null) {
      setNotSelected(true);
      return;
    }
    setIsAnswered((prev): boolean => !prev);
    setNotSelected(false);
  };

  const onNextQuestion = () => {
    setIsAnswered((prev): boolean => !prev);
    setSelectedOption(null);
    setQuestionIndex((prev) => prev + 1);
  };

  return isAnswered ? (
    <QuizButton onClickHandler={onNextQuestion}>
      <span>Next Question</span>
    </QuizButton>
  ) : (
    <div className="flex flex-col items-center gap-4">
      <QuizButton onClickHandler={onAnswerHandler}>
        <span>Submit Answer</span>
      </QuizButton>
      {notSelected && (
        <div className="text-incorrect flex items-center gap-2 text-[1.125rem] font-medium md:text-[1.5rem] md:font-normal">
          <img className="size-8" src="/images/icon-error.svg" alt="error" />
          <span>Please select an answer</span>
        </div>
      )}
    </div>
  );
};

export default AnswerButton;
