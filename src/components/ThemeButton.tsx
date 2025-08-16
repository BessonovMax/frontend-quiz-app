interface Props {
  title: string;
  iconPath: string;
}

const iconMap: Record<string, { bg: string }> = {
  CSS: { bg: "bg-css-background" },
  JavaScript: { bg: "bg-js-background" },
  HTML: { bg: "bg-html-background" },
  Accessibility: { bg: "bg-accessibility-background" },
};

const titleButton = ({ title, iconPath }: Props) => {
  const { bg } = iconMap[title];
  return (
    <button className="bg-variant-background border-variant-background flex min-w-[20.4375rem] items-center justify-start gap-4 rounded-[12px] border-3 p-[13px] hover:cursor-pointer md:min-w-[40rem] md:gap-8 md:rounded-[24px] xl:min-w-[35.25rem] xl:p-[21px]">
      <div
        className={`${bg} flex size-[2.5rem] items-center justify-center rounded-[6px] text-[1.125rem] uppercase md:size-[3.5rem] md:rounded-[12px] md:text-[1.75rem] xl:rounded-[8px]`}
      >
        <img
          className="w-[16px] md:w-[22.5px]"
          src={iconPath}
          alt={`${title} icon`}
        />
      </div>
      <div className="text-[1.125rem] md:text-[1.75rem]">{title}</div>
    </button>
  );
};

export default titleButton;
