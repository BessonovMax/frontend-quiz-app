import { useState } from "react";
import QuestionButton from "./components/QuestionButton";
import VariantButton from "./components/VariantButton";

function App() {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  return (
    <>
      <div className="bg-background text-text font-display min-h-dvh p-12 leading-none">
        <VariantButton isAnswered={isAnswered} option="2.5 : 1" letter="a" />
        <QuestionButton
          setIsAnswered={setIsAnswered}
          setIsCorrect={setIsCorrect}
          isAnswered={isAnswered}
        />
        {/* <!-- Quiz menu start -->*/}
        Welcome to the Frontend Quiz! Pick a subject to get started. HTML CSS
        JavaScript Accessibility
        {/*<!-- Quiz menu end --> */}
        {/*<!-- Quiz question start --> */}
        Question
        {/*<!-- number --> */}
        of 10 A B C D Submit answer
        {/*<!-- Quiz question end --> */}
        {/*<!-- Quiz completed start --> */}
        Quiz completed You scored...
        {/*<!-- score --> */}
        out of 10
        {/*<!-- Quiz completed end --> */}
      </div>
    </>
  );
}

export default App;
