import type { Question, Quiz } from "../types";
import Options from "../components/quiz/Options";
import QuestionArea from "../components/quiz/QuestionArea";

type QuizPageProps = { quiz: Quiz };

export default function QuizPage({ quiz }: QuizPageProps) {
  const question: Question = quiz.questions[4];

  return (
    <div className="flex flex-col gap-[2.5rem] xl:flex-row xl:gap-32">
      <QuestionArea quiz={quiz} />
      <Options question={question} />
    </div>
  );
}
