import { useNavigate } from "react-router";
import QuizButton from "./QuizButton";

const NewGameButton = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/");
  };

  return (
    <QuizButton onClickHandler={onClickHandler}>
      <span>Play Again</span>
    </QuizButton>
  );
};

export default NewGameButton;
