interface Props {
  isAnswered?: boolean | null;
  /* setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>; */
  setIsAnswered: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const QuestionButton = ({ isAnswered, setIsAnswered }: Props) => {
  return (
    <button
      onClick={() => {
        /* setIsCorrect((prev) => !prev); */

        setIsAnswered((prev): boolean => !prev);
      }}
      className={`bg-primary relative isolate flex min-w-[20.4375rem] items-center justify-center overflow-hidden rounded-[12px] p-4 transition-colors duration-300 before:absolute before:inset-0 before:bg-white/50 before:opacity-0 before:transition-opacity before:duration-300 hover:cursor-pointer hover:before:opacity-100 md:min-w-[40rem] md:rounded-[24px] md:p-8 xl:min-w-[35.25rem]`}
    >
      <div className="text-[1.125rem] text-white md:text-[1.75rem]">
        {isAnswered ? <span>Next Question</span> : <span>Submit Answer</span>}
      </div>
    </button>
  );
};

export default QuestionButton;
