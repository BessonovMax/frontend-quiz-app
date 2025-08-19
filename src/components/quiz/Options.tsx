import { useState } from "react";
import type { Question } from "../../types";
import VariantButton from "./VariantButton";
import AnswerButton from "./AnswerButton";

type QuizPageProps = { question: Question };

export default function Options({ question }: QuizPageProps) {
  const [isAnswered, setIsAnswered] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const options = question.options;
  const correctAnswerIndex = options.indexOf(question.answer);

  const handleSelectedOption = (index: number) => {
    setSelectedOption(index);
  };
  return (
    <div className="flex min-w-[20.4375rem] grow-1 flex-col gap-4 md:gap-6 xl:gap-4">
      {options.map((option, index) => (
        <VariantButton
          key={index}
          isAnswered={isAnswered}
          isActive={selectedOption === index}
          onClick={() => handleSelectedOption(index)}
          isCorrect={index === correctAnswerIndex}
          optionText={option}
          letter={String.fromCharCode(97 + index)} // 'a' + index
        />
      ))}
      <AnswerButton isAnswered={isAnswered} setIsAnswered={setIsAnswered} />
    </div>
  );
}
