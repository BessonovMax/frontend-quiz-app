import Title from "./Title";

interface Props {
  title: string;
  iconPath: string;
}

export default function Header({ title, iconPath }: Props) {
  return (
    <header className="pb- flex justify-between pt-4 pb-[48px] md:py-[3.125rem] xl:py-[83px]">
      <div>
        <Title title={title} iconPath={iconPath} />
      </div>

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
    </header>
  );
}
