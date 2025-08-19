import TitleButton from "../components/TitleButton";
import type { QuizType } from "../types";

type QuizPageProps = { quizzes: QuizType[] };

export default function WelcomePage({ quizzes }: QuizPageProps) {
  const titles = quizzes.map((quiz) => ({
    title: quiz.title,
    icon: quiz.icon,
  }));

  return (
    <>
      <main className="flex flex-col gap-[2.5rem] md:gap-[4rem] xl:flex-row xl:gap-32">
        <div className="flex flex-col gap-4 xl:gap-12">
          <h1 className="flex flex-col gap-[8px] text-[2.5rem] md:text-[4rem]">
            <span className="font-light">Welcome to the </span>Frontend Quiz!
          </h1>
          <p className="font-display-italic text-text-secondary text-[0.825rem] leading-[150%] font-light md:text-[1.25rem]">
            Pick a subject to get started.
          </p>
        </div>
        <div className="flex min-w-[20.4375rem] grow-1 flex-col gap-4 md:gap-6 xl:gap-4">
          {titles.map((title) => (
            <TitleButton
              key={title.title}
              title={title.title}
              iconPath={title.icon}
            />
          ))}
        </div>
      </main>
    </>
  );
}
