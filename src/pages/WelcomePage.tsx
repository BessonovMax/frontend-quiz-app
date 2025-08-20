import type { QuizType } from "../types";
import data from "../data/data.json";
import { Link } from "react-router";
import Title from "../components/Title";

export default function WelcomePage() {
  const titles = data.quizzes.map((quiz: QuizType) => ({
    title: quiz.title,
    icon: quiz.icon,
  }));

  return (
    <>
      <div className="flex flex-col gap-[2.5rem] md:gap-[4rem] xl:flex-row xl:gap-32">
        <div className="flex flex-col gap-4 xl:gap-12">
          <h1 className="flex flex-col gap-[8px] text-[2.5rem] md:text-[4rem]">
            <span className="font-light">Welcome to the </span>Frontend Quiz!
          </h1>
          <p className="font-display-italic text-text-secondary text-[0.875rem] leading-[150%] font-light md:text-[1.25rem]">
            Pick a subject to get started.
          </p>
        </div>
        <ul className="flex min-w-[20.4375rem] grow-1 flex-col gap-4 md:gap-6 xl:gap-4">
          {titles.map((title) => (
            <li key={title.title}>
              <Link
                className="bg-variant-background border-variant-background flex w-full cursor-pointer items-center justify-start gap-4 rounded-[12px] border-3 p-[13px] md:gap-8 md:rounded-[24px] xl:p-[21px]"
                to={`quiz/${title.title}`}
              >
                <Title title={title.title} iconPath={title.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
