import { useParams } from "react-router";
import Title from "./Title";
import data from "../data/data.json";
import type { TitleType } from "../types";

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

      <div className="flex items-center gap-2 md:gap-4">
        <img
          className="size-4 md:size-6"
          src="/images/icon-sun-dark.svg"
          alt=""
        />
        Switcher
        <img
          className="size-4 md:size-6"
          src="/images/icon-moon-dark.svg"
          alt=""
        />
      </div>
    </header>
  );
}
