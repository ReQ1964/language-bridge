import { PartialStoryFn } from '@storybook/csf'
import { ReactNode } from 'react'
import ThemesProvider from '@/theme/ThemesProvider'

const ThemeDecorator = (storyFn: PartialStoryFn) => {
  return <ThemesProvider>{storyFn() as ReactNode}</ThemesProvider>
}

export default ThemeDecorator
