import type { Question } from "../types";
import Options from "../components/quiz/Options";

type QuizPageProps = { question: Question };

export default function QuizPage({ question }: QuizPageProps) {
  return (
    <div className="flex flex-col">
      <div className="text-text-secondary font-display-italic font-normal">
        Question 6 of 10
      </div>
      <div className="text-xl">{question.question}</div>
      <Options question={question} />;
    </div>
  );
}
