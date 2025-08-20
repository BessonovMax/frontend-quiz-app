import { useState } from "react";
import QuizButton from "../QuizButton";

interface Props {
  selectedOption: number | null;
  isAnswered?: boolean | null;
  setIsAnswered: React.Dispatch<React.SetStateAction<boolean | null>>;
  handleNextQuestion: () => void;
}

const AnswerButton = ({
  selectedOption,
  isAnswered,
  setIsAnswered,
  handleNextQuestion,
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

  return isAnswered ? (
    <QuizButton onClickHandler={handleNextQuestion}>
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
