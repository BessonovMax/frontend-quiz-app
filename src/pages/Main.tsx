import TitleButton from "../components/TitleButton";
import data from "../data/data.json";

const titles = data.quizzes.map((quiz) => ({
  title: quiz.title,
  icon: quiz.icon,
}));

export default function Main() {
  return (
    <>
      <nav className="flex justify-between py-6 md:py-[3.125rem] xl:py-[6.125rem]">
        <div></div>
        <div className="flex items-center gap-2 md:gap-4">
          <img
            className="size-4 md:size-6"
            src="/images/icon-sun-dark.svg"
            alt=""
          />
          themeSwitcher
          <img
            className="size-4 md:size-6"
            src="/images/icon-moon-dark.svg"
            alt=""
          />
        </div>
      </nav>
      <main className="flex flex-col gap-[2.5rem] md:gap-[4rem] xl:flex-row xl:gap-[8rem]">
        <div className="flex flex-col gap-4 xl:gap-12">
          <h1 className="flex flex-col gap-[8px] text-[2.5rem] md:text-[4rem]">
            <span className="font-light">Welcome to the </span>Frontend Quiz!
          </h1>
          <p className="font-display-italic text-text-secondary text-[0.825rem] leading-[150%] font-light md:text-[1.25rem]">
            Pick a subject to get started.
          </p>
        </div>
        <div className="flex grow-1 flex-col gap-4 md:gap-6 xl:gap-4">
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
