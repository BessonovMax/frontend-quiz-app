/* import { useState } from "react";
import QuestionButton from "./components/QuestionButton";
import VariantButton from "./components/VariantButton";
import ThemeButton from "./components/ThemeButton"; */
import Main from "./pages/Main";

function App() {
  /* const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false); */

  return (
    <div className="bg-background text-text-primary font-display min-h-dvh p-12 leading-none font-medium">
      <Main />
    </div>
  );
}

export default App;
