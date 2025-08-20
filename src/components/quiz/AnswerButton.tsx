import QuizButton from "../QuizButton";

interface Props {
  isAnswered?: boolean | null;
  setQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsAnswered: React.Dispatch<React.SetStateAction<boolean | null>>;
  setSelectedOption: React.Dispatch<React.SetStateAction<number | null>>;
}

const AnswerButton = ({
  isAnswered,
  setIsAnswered,
  setQuestionIndex,
  setSelectedOption,
}: Props) => {
  const onAnswerHandler = () => {
    setIsAnswered((prev): boolean => !prev);
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
    <QuizButton onClickHandler={onAnswerHandler}>
      <span>Submit Answer</span>
    </QuizButton>
  );
};

export default AnswerButton;
