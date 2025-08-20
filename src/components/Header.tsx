import { useParams } from "react-router";
import Title from "./Title";
import data from "../data/data.json";
import type { TitleType } from "../types";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const { topic } = useParams();

  const title: TitleType = {
    title: data.quizzes.find((quiz) => quiz.title === topic)?.title || "",
    iconPath: data.quizzes.find((quiz) => quiz.title === topic)?.icon || "",
  };

  return (
    <header className="pb- flex justify-between pt-4 pb-[48px] md:py-[3.125rem] xl:py-[83px]">
      <div>
        {topic ? <Title title={title.title} iconPath={title.iconPath} /> : ""}
      </div>
      <ThemeSwitcher />
    </header>
  );
}
