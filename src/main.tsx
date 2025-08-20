import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import WelcomePage from "./pages/WelcomePage.tsx";
import App from "./App.tsx";
import QuizPage from "./pages/QuizPage.tsx";
import ResultPage from "./pages/ResultPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/frontend-quiz-app/">
      <Routes>
        <Route element={<App />}>
          <Route index element={<WelcomePage />} />
          <Route path="quiz/:topic" element={<QuizPage />} />
          <Route path="result/:topic" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
