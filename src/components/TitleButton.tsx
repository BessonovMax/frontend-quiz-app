import Title from "./Title";

interface Props {
  title: string;
  iconPath: string;
}

const TitleButton = ({ title, iconPath }: Props) => {
  return (
    <button className="bg-variant-background border-variant-background flex w-full cursor-pointer items-center justify-start gap-4 rounded-[12px] border-3 p-[13px] md:gap-8 md:rounded-[24px] xl:p-[21px]">
      <Title title={title} iconPath={iconPath} />
    </button>
  );
};

export default TitleButton;
