import type { QuizType } from "../types";
import Options from "../components/quiz/Options";
import QuestionArea from "../components/quiz/QuestionArea";
import data from "../data/data.json";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";

export default function QuizPage() {
  const navigate = useNavigate();

  const { topic } = useParams<{ topic: string }>();
  const quiz: QuizType | undefined = data.quizzes.find(
    (quiz: QuizType) => quiz?.title === topic,
  );
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  if (!quiz) {
    return <div>Quiz not found.</div>;
  }

  if (questionIndex > quiz.questions.length - 1) {
    navigate(`/result/${topic}`);
  }

  return (
    <section className="flex flex-col gap-[2.5rem] xl:flex-row xl:gap-32">
      <QuestionArea questions={quiz.questions} questionIndex={questionIndex} />
      <Options
        setQuestionIndex={setQuestionIndex}
        question={quiz.questions[questionIndex]}
      />
    </section>
  );
}
