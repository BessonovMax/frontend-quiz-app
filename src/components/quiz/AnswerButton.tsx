import QuizButton from "../QuizButton";
import IncorrectIcon from "../../assets/images/icon-error.svg";

interface Props {
  isAnswered?: boolean | null;
  handleNextQuestion: () => void;
  onAnswerHandler: () => void;
  showSelectionError: boolean;
}

const AnswerButton = ({
  isAnswered,
  handleNextQuestion,
  onAnswerHandler,
  showSelectionError,
}: Props) => {
  return isAnswered ? (
    <QuizButton onClickHandler={handleNextQuestion}>
      <span>Next Question</span>
    </QuizButton>
  ) : (
    <div className="flex flex-col items-center gap-4">
      <QuizButton onClickHandler={onAnswerHandler}>
        <span>Submit Answer</span>
      </QuizButton>
      {showSelectionError && (
        <div className="text-incorrect flex items-center gap-2 text-[1.125rem] font-medium md:text-[1.5rem] md:font-normal">
          <img className="size-8" src={IncorrectIcon} alt="error" />
          <span>Please select an answer</span>
        </div>
      )}
    </div>
  );
};

export default AnswerButton;
