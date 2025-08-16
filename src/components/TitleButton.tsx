import Title from "./Title";

interface Props {
  title: string;
  iconPath: string;
}

const TitleButton = ({ title, iconPath }: Props) => {
  return (
    <button className="bg-variant-background border-variant-background flex min-w-[20.4375rem] items-center justify-start gap-4 rounded-[12px] border-3 p-[13px] hover:cursor-pointer md:min-w-[40rem] md:gap-8 md:rounded-[24px] xl:min-w-[35.25rem] xl:p-[21px]">
      <Title title={title} iconPath={iconPath} />
    </button>
  );
};

export default TitleButton;
