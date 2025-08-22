import Title from "./Title";
import type { TitleType } from "../types";
import ThemeSwitcher from "./ThemeSwitcher";
import useQuiz from "../hooks/useQuiz";

export default function Header() {
  const { quiz } = useQuiz();

  const title: TitleType = {
    title: quiz?.title ?? "",
    iconPath: quiz?.icon ?? "",
  };

  return (
    <header className="pb- flex justify-between pt-4 pb-[48px] md:pt-[2.5rem] md:pb-[3.125rem] xl:pt-[83px] xl:pb-[94px]">
      <div>
        {quiz ? <Title title={title.title} iconPath={title.iconPath} /> : ""}
      </div>
      <ThemeSwitcher />
    </header>
  );
}
