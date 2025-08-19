import NewGameButton from "../components/NewGameButton";
import Title from "../components/Title";
import type { TitleType } from "../types";

export default function ResultPage({ title, iconPath }: TitleType) {
  return (
    <section className="flex flex-col gap-[2.5rem] md:gap-[4rem] xl:flex-row xl:gap-36">
      <div className="flex flex-col gap-2 text-[2.5rem] md:text-[4rem]">
        <span className="font-light">Quiz completed</span>
        <span className="font-medium">You scored...</span>
      </div>
      <div className="flex grow-1 flex-col gap-4 md:gap-8">
        <div className="bg-variant-background flex flex-col items-center justify-center gap-4 rounded-[12px] p-8 md:gap-10 md:rounded-[24px] md:p-12">
          <Title title={title} iconPath={iconPath} />
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-[5.5rem] font-medium md:text-[9rem]">8</div>
            <div className="text-text-secondary text-[1.125rem] leading-[150%] md:text-[1.5rem]">
              out of 10
            </div>
          </div>
        </div>
        <NewGameButton />
      </div>
    </section>
  );
}
