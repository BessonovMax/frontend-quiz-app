import QuizButton from "../QuizButton";

interface Props {
  isAnswered?: boolean | null;
  /* setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>; */
  setIsAnswered: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const AnswerButton = ({ isAnswered, setIsAnswered }: Props) => {
  const onClickHandler = () => {
    /* setIsCorrect((prev) => !prev); */

    setIsAnswered((prev): boolean => !prev);
  };

  return (
    <QuizButton onClickHandler={onClickHandler}>
      {isAnswered ? <span>Next Question</span> : <span>Submit Answer</span>}
    </QuizButton>
  );
};

export default AnswerButton;
