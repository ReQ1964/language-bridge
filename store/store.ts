import { create } from 'zustand'

type State = {
  currentLanguage: 'english' | 'spanish'
}

type Action = {
  changeCurrentLanguage: (language: State['currentLanguage']) => void
}

const useStore = create<State & Action>((set) => ({
  currentLanguage: 'english',
  changeCurrentLanguage: (language) => set(() => ({ currentLanguage: language })),
}))

export default useStore
