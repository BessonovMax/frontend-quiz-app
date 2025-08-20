import { useParams } from "react-router";
import type { QuizType } from "../types";
import data from "../data/data.json";

export default function useQuiz() {
  const { topic } = useParams<{ topic: string }>();
  const quiz: QuizType | undefined = data.quizzes.find(
    (quiz: QuizType) => quiz?.title === topic,
  );

  return { quiz, topic };
}
