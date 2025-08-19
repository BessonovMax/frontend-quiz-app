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
  const isSelectedAndWrong = isAnswered && isActive && isCorrect === false;
  const isSelectedAndCorrect = isAnswered && isActive && isCorrect === true;

  // This is for revealing the correct answer if the user chose wrong
  const isTheRevealedAnswer = isAnswered && !isActive && isCorrect === true;

  return (
    <button
      className={clsx(
        // --- Base classes that are ALWAYS applied ---
        "bg-variant-background hover:border-primary border-variant-background group flex min-w-[20.4375rem] items-center justify-between gap-4 rounded-[12px] border-3 p-[13px] hover:cursor-pointer md:min-w-[40rem] md:gap-8 md:rounded-[24px] xl:min-w-[35.25rem] xl:p-[21px]",
        {
          // --- Logic for UNANSWERED state ---
          "!border-primary": isActive && !isAnswered,
          // State: The user has answered, and all the options are not active
          "hover:border-variant-background": isAnswered,
        },
        // --- Logic for ANSWERED states ---
        {
          // State: This was the WRONG answer and the user selected it
          "!border-incorrect": isSelectedAndWrong,
          // State: This was the CORRECT answer and the user selected it
          "!border-correct": isSelectedAndCorrect,
        },
      )}
      onClick={onClick}
      disabled={isAnswered ? true : false}
    >
      <div
        className={clsx(
          // --- Base classes that are ALWAYS applied ---
          "flex size-[2.5rem] items-center justify-center rounded-[6px] text-[1.125rem] uppercase md:size-[3.5rem] md:rounded-[12px] md:text-[1.75rem] xl:rounded-[8px]",

          // --- Logic for UNANSWERED states ---
          {
            // State: The user has NOT answered yet
            "bg-variant-foreground text-text-letter group-hover:bg-primary group-hover:text-white":
              !isAnswered,
            // State: The user has NOT answered yet, and this is the currently selected option
            "!bg-primary text-white": isActive && !isAnswered,
          },

          // --- Logic for ANSWERED states ---
          {
            // State: This was the WRONG answer and the user selected it
            "!bg-incorrect text-white": isSelectedAndWrong,
            // State: This was the CORRECT answer and the user selected it
            "!bg-correct text-white":
              isSelectedAndCorrect || isTheRevealedAnswer,
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
