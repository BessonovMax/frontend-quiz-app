# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

![](<./screenshot(light).png>)
![](<./screenshot(dark).png>)

### Links

- Solution URL: https://github.com/BessonovMax/frontend-quiz-app
- Live Site URL: https://bessonovmax.github.io/frontend-quiz-app/

## My process

### Built with

- React - A JavaScript library for building user interfaces.
- Vite - A blazing-fast, next-generation frontend build tool.
- TypeScript - For static typing, ensuring code quality and maintainability.
- Tailwind CSS - A utility-first CSS framework for rapid, responsive UI development.
- React Router v7 (Declarative mode) - For client-side routing.
- Zustand - A small, fast, and scalable state management library.
- GitHub Actions - For Continuous Integration and Continuous Deployment (CI/CD) to automatically build and deploy the application to GitHub Pages.
- Mobile-first workflow - Designing for mobile screens first, then scaling up to tablet and desktop.
- Semantic HTML5 markup - For improved accessibility and SEO.

### What I learned

This project was a fantastic opportunity to solidify my understanding of building a complete React application from scratch. Here are some of the key learnings:

State Management Architecture

I used local state (useState) within the QuizPage for session-specific data like the current question index and selected answer. For state that needed to be shared across different routes, like the user's score and the selected theme, I implemented Zustand. This provided a clean, lightweight solution for global state without the boilerplate of more complex libraries.

```js
	// Example of my Zustand store for managing the score
	import { create } from "zustand";

	type State = {
	  score: number;
	};

	type Actions = {
	  increaseScore: () => void;
	  resetScore: () => void;
	};

	export const useStore = create<State & Actions>((set) => ({
	  score: 0,
	  increaseScore: () => set((state) => ({ score: state.score + 1 })),
	  resetScore: () => set({ score: 0 }),
	}));
```

Advanced Conditional Styling

To handle the complex styling states of the answer buttons (default, hover, active, correct, incorrect), I used the clsx library. This allowed me to write clean, readable, and mutually exclusive conditional classes, avoiding CSS specificity wars and the overuse of !important.

```js
// Example of using clsx for complex button states
<button
  className={clsx(
    "base-styles",
    isAnswered
      ? {
          "border-incorrect": isSelectedAndWrong,
          "border-correct": isSelectedAndCorrect,
        }
      : {
          "border-primary": isActive,
          "hover:border-primary": !isActive,
        },
  )}
>
  {/* ... */}
</button>
```

## Author

- Frontend Mentor - [@BessonovMax](https://www.frontendmentor.io/profile/BessonovMax)
- Twitter - [@BessonovMax](https://github.com/BessonovMax)
