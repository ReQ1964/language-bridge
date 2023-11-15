import { create } from 'zustand'

export type StoreState = {
  currentLanguage: 'english' | 'spanish'
}

type Action = {
  changeCurrentLanguage: (language: StoreState['currentLanguage']) => void
}

const useStore = create<StoreState & Action>((set) => ({
  currentLanguage: 'english',
  changeCurrentLanguage: (language) => set(() => ({ currentLanguage: language })),
}))

export default useStore
