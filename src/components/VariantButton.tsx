import clsx from "clsx";
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
  const isSelectedAndWrong = isActive && isCorrect === false;
  const isSelectedAndCorrect = isActive && isCorrect === true;

  // This is for revealing the correct answer if the user chose wrong
  const isTheRevealedAnswer = !isActive && isCorrect === true;

  return (
    <button
      className={clsx(
        // --- Base classes that are ALWAYS applied ---
        "bg-variant-background group flex min-w-[20.4375rem] items-center justify-between gap-4 rounded-[12px] border-3 p-[13px] hover:cursor-pointer md:min-w-[40rem] md:gap-8 md:rounded-[24px] xl:min-w-[35.25rem] xl:p-[21px]",
        isAnswered
          ? {
              "border-incorrect": isSelectedAndWrong,
              "border-correct": isSelectedAndCorrect,
              "border-variant-background":
                !isSelectedAndWrong && !isSelectedAndCorrect,
            }
          : {
              "border-primary": isActive,
              "border-variant-background hover:border-primary": !isActive,
            },
      )}
      onClick={onClick}
      disabled={isAnswered ? true : false}
    >
      <div
        className={clsx(
          // --- Base classes that are ALWAYS applied ---
          "flex size-[2.5rem] items-center justify-center rounded-[6px] text-[1.125rem] uppercase md:size-[3.5rem] md:rounded-[12px] md:text-[1.75rem] xl:rounded-[8px]",

          isAnswered
            ? {
                "bg-incorrect text-white": isSelectedAndWrong,
                "bg-correct text-white":
                  isSelectedAndCorrect || isTheRevealedAnswer,
                "bg-variant-foreground text-text-letter":
                  !isSelectedAndWrong &&
                  !isSelectedAndCorrect &&
                  !isTheRevealedAnswer,
              }
            : {
                "bg-primary text-white": isActive,
                "bg-variant-foreground text-text-letter group-hover:bg-primary group-hover:text-white":
                  !isActive,
              },
        )}
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
