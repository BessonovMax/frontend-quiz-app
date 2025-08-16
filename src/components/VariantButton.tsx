import Correct from "/images/icon-correct.svg";
import inCorrect from "/images/icon-error.svg";

interface Props {
  isAnswered: boolean;
  isCorrect?: boolean;
  option: string;
  letter: string;
}

const VariantButton = ({ isAnswered, isCorrect, option, letter }: Props) => {
  return (
    <button
      className={`bg-variant-background border-variant-background flex min-w-[20.4375rem] items-center justify-between gap-4 rounded-[12px] border-3 p-[13px] hover:cursor-pointer md:min-w-[40rem] md:gap-8 md:rounded-[24px] xl:min-w-[35.25rem] xl:p-[21px] ${isCorrect === false ? "!border-incorrect" : ""}`}
    >
      <div
        className={`bg-variant-foreground text-text-secondary flex size-[2.5rem] items-center justify-center rounded-[6px] text-[1.125rem] uppercase md:size-[3.5rem] md:rounded-[12px] md:text-[1.75rem] xl:rounded-[8px] ${isCorrect === false ? "!bg-incorrect text-white" : ""}`}
      >
        {letter}
      </div>
      <div className="grow-1 text-left text-[1.125rem] md:text-[1.75rem]">
        {option}
      </div>
      <div className={isAnswered ? "block" : "hidden"}>
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
