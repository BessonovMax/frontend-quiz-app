import Header from "./components/Header";
import data from "./data/data.json";
import QuizPage from "./pages/QuizPage";

import { type Question, type Quiz } from "./types";
function App() {
  const quiz: Quiz = data.quizzes[3];
  const question: Question = quiz.questions[4];

  return (
    <div className="bg-background text-text-primary font-display min-h-dvh px-6 leading-none font-medium md:px-16 xl:px-[8.75rem]">
      <div className="mx-auto max-w-[1440px] gap-[2.5rem] md:gap-[4rem] xl:gap-[8rem] 2xl:max-w-[1650px]">
        <Header title={quiz.title} iconPath={quiz.icon} />
        {/* <WelcomePage /> */}
        <QuizPage question={question} />
      </div>
    </div>
  );
}

export default App;
