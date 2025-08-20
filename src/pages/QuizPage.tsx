import Options from "../components/quiz/Options";
import QuestionArea from "../components/quiz/QuestionArea";
import { useNavigate } from "react-router";
import { useState } from "react";
import useQuiz from "../hooks/useQuiz";
import { useStore } from "../store/store";

export default function QuizPage() {
  const navigate = useNavigate();

  const { topic, quiz } = useQuiz();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean | null>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showSelectionError, setShowSelectionError] = useState(false);

  const increaseScore = useStore((state) => state.increaseScore);

  if (!quiz) {
    return <div>Quiz not found.</div>;
  }

  const handleNextQuestion = () => {
    const isLastQuestion = questionIndex === quiz.questions.length - 1;

    if (isLastQuestion) {
      navigate(`/result/${topic}`);
    } else {
      setIsAnswered((prev): boolean => !prev);
      setSelectedOption(null);
      setQuestionIndex((prev) => prev + 1);
    }
  };

  const onAnswerHandler = () => {
    const isCorrect =
      selectedOption ===
      quiz.questions[questionIndex].options.indexOf(
        quiz.questions[questionIndex].answer,
      );

    if (selectedOption === null) {
      setShowSelectionError(true);
      return;
    }

    setShowSelectionError(false);

    if (isCorrect) {
      increaseScore();
    }

    setIsAnswered((prev): boolean => !prev);
  };

  const handleSelectedOption = (index: number) => {
    setSelectedOption(index);
    if (showSelectionError) {
      setShowSelectionError(false);
    }
  };

  return (
    <section className="flex flex-col gap-[2.5rem] xl:flex-row xl:gap-32">
      <QuestionArea questions={quiz.questions} questionIndex={questionIndex} />
      <Options
        question={quiz.questions[questionIndex]}
        selectedOption={selectedOption}
        isAnswered={isAnswered}
        handleNextQuestion={handleNextQuestion}
        handleSelectedOption={handleSelectedOption}
        onAnswerHandler={onAnswerHandler}
        showSelectionError={showSelectionError}
      />
    </section>
  );
}
