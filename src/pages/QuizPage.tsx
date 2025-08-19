import type { QuestionType, QuizType } from "../types";
import Options from "../components/quiz/Options";
import QuestionArea from "../components/quiz/QuestionArea";

type QuizPageProps = { quizzes: QuizType[] };

export default function QuizPage({ quizzes }: QuizPageProps) {
  const question: QuestionType = quizzes[0].questions[4];

  return (
    <section className="flex flex-col gap-[2.5rem] xl:flex-row xl:gap-32">
      <QuestionArea quizzes={quizzes} />
      <Options question={question} />
    </section>
  );
}
