import Title from "./Title";

interface Props {
  title: string;
  iconPath: string;
}

export default function Header({ title, iconPath }: Props) {
  return (
    <header className="flex justify-between py-6 md:py-[3.125rem] xl:py-[6.125rem]">
      <div className="flex min-w-[167px] items-center justify-start gap-4 md:min-w-[253px] md:gap-6">
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
