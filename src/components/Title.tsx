import { type TitleType } from "../types";
import { getAssetUrl } from "../utils/getAssetUrl";

const iconMap: Record<string, { bg: string }> = {
  CSS: { bg: "bg-css-background" },
  JavaScript: { bg: "bg-js-background" },
  HTML: { bg: "bg-html-background" },
  Accessibility: { bg: "bg-accessibility-background" },
};

export default function Title({ title, iconPath }: TitleType) {
  const { bg } = iconMap[title];
  return (
    <div className="flex min-w-[167px] items-center justify-start gap-4 md:min-w-[253px] md:gap-6">
      <div
        className={`${bg} flex size-[2.5rem] items-center justify-center rounded-[6px] text-[1.125rem] uppercase md:size-[3.5rem] md:rounded-[12px] md:text-[1.75rem] xl:rounded-[8px]`}
      >
        <img
          className="w-[28px] md:w-[40px]"
          src={getAssetUrl(iconPath)}
          alt={`${title} icon`}
        />
      </div>
      <div className="text-[1.125rem] md:text-[1.75rem]">{title}</div>
    </div>
  );
}
