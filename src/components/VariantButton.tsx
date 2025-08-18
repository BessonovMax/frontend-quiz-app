import Correct from "/images/icon-correct.svg";
import inCorrect from "/images/icon-error.svg";

interface Props {
  isAnswered?: boolean | null;
  isCorrect?: boolean;
  isActive?: boolean;
  optionText: string;
  letter: string;
  onClick?: () => void;
}

const VariantButton = ({
  isAnswered,
  isCorrect,
  isActive,
  optionText,
  letter,
  onClick,
}: Props) => {
  return (
    <button
      className={`bg-variant-background hover:border-primary flex min-w-[20.4375rem] items-center justify-between gap-4 rounded-[12px] border-3 p-[13px] ${isAnswered ? "hover:border-variant-background" : "hover:border-primary"} ${isActive && !isAnswered ? "border-primary" : "border-variant-background"} hover:cursor-pointer md:min-w-[40rem] md:gap-8 md:rounded-[24px] xl:min-w-[35.25rem] xl:p-[21px] ${isAnswered && isActive && isCorrect === false ? "!border-incorrect" : ""} group`}
      onClick={onClick}
      disabled={isAnswered ? true : false}
    >
      <div
        className={`flex size-[2.5rem] items-center justify-center rounded-[6px] text-[1.125rem] uppercase md:size-[3.5rem] md:rounded-[12px] md:text-[1.75rem] xl:rounded-[8px] ${isAnswered ? "text-text-letter bg-variant-foreground" : "group-hover:bg-primary group-hover:text-white"} ${isActive && !isAnswered ? "bg-primary text-white" : "bg-variant-foreground text-text-letter"} ${isAnswered && isActive && isCorrect === false ? "!bg-incorrect text-white" : "bg-correct"}`}
      >
        {letter}
      </div>
      <div className="grow-1 text-left text-[1.125rem] md:text-[1.75rem]">
        {optionText}
      </div>
      <div
        className={isAnswered && (isActive || isCorrect) ? "block" : "hidden"}
      >
        <img
          className="h-[24px] w-[24px] md:h-[30px] md:w-[30px]"
          src={isCorrect ? Correct : inCorrect}
          alt={isCorrect ? "correct answer" : "incorrect answer"}
        />
      </div>
    </button>
  );
};

export default VariantButton;
