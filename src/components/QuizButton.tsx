interface Props {
  onClickHandler?: () => void;
  children?: React.ReactNode;
}

const QuizButton = ({ onClickHandler, children }: Props) => {
  return (
    <button
      onClick={onClickHandler}
      className={`bg-primary relative isolate flex items-center justify-center overflow-hidden rounded-[12px] py-[19px] transition-colors duration-300 before:absolute before:inset-0 before:bg-white/50 before:opacity-0 before:transition-opacity before:duration-300 hover:cursor-pointer hover:before:opacity-100 focus:outline-0 focus:before:opacity-100 md:rounded-[24px] md:p-8`}
    >
      <div className="text-[1.125rem] text-white md:text-[1.75rem]">
        {children}
      </div>
    </button>
  );
};

export default QuizButton;
