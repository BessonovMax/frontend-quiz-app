import QuizButton from "./QuizButton";

const NewGameButton = () => {
  const onClickHandler = () => {};

  return (
    <QuizButton onClickHandler={onClickHandler}>
      <span>Play Again</span>
    </QuizButton>
  );
};

export default NewGameButton;
