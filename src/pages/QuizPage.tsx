import Options from "../components/quiz/Options";
import QuestionArea from "../components/quiz/QuestionArea";
import { useNavigate } from "react-router";
import { useState } from "react";
import useQuiz from "../hooks/useQuiz";

export default function QuizPage() {
  const navigate = useNavigate();

  const { topic, quiz } = useQuiz();
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [isAnswered, setIsAnswered] = useState<boolean | null>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

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

  const handleSelectedOption = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <section className="flex flex-col gap-[2.5rem] xl:flex-row xl:gap-32">
      <QuestionArea questions={quiz.questions} questionIndex={questionIndex} />
      <Options
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        isAnswered={isAnswered}
        setIsAnswered={setIsAnswered}
        setQuestionIndex={setQuestionIndex}
        question={quiz.questions[questionIndex]}
        handleNextQuestion={handleNextQuestion}
        handleSelectedOption={handleSelectedOption}
      />
    </section>
  );
}
