import { create } from 'zustand';

interface UIState {
  title: string;
  setTitle: (title: string) => void;
}

export const useUIStore = create<UIState>((set) => ({
  title: 'Dashboard',
  setTitle: (title: string) => set({ title }),
}));
