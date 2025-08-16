/* import { useState } from "react";
import QuestionButton from "./components/QuestionButton";
import VariantButton from "./components/VariantButton";
import ThemeButton from "./components/ThemeButton"; */
import Main from "./pages/Main";

function App() {
  /* const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false); */

  return (
    <div className="bg-background text-text-primary font-display min-h-dvh px-6 leading-none font-medium md:px-16 xl:px-[8.75rem]">
      <div className="mx-auto max-w-[1157px]">
        <Main />
      </div>
    </div>
  );
}

export default App;
