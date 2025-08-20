import { useNavigate } from "react-router";
import QuizButton from "./QuizButton";
import { useStore } from "../store/store";

const NewGameButton = () => {
  const navigate = useNavigate();
  const resetScore = useStore((state) => state.resetScore);
  const onClickHandler = () => {
    resetScore();
    navigate("/");
  };

  return (
    <QuizButton onClickHandler={onClickHandler}>
      <span>Play Again</span>
    </QuizButton>
  );
};

export default NewGameButton;
