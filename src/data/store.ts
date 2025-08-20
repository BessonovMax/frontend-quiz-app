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
