import { useState } from "react";
import data from "./data/data.json";
import VariantButton from "./components/VariantButton";
import AnswerButton from "./components/AnswerButton";

function App() {
  /* const [isCorrect, setIsCorrect] = useState(false); */
  const [isAnswered, setIsAnswered] = useState<boolean | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const options = data.quizzes[0].questions[0].options;
  const correctAnswerIndex = options.indexOf(
    data.quizzes[0].questions[0].answer,
  );

  const handleSelectedOption = (index: number) => {
    setSelectedOption(index);
  };

  return (
    <div className="bg-background text-text-primary font-display min-h-dvh px-6 leading-none font-medium md:px-16 xl:px-[8.75rem]">
      <div className="mx-auto flex max-w-[1157px] flex-col gap-6">
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
    </div>
  );
}

export default App;
