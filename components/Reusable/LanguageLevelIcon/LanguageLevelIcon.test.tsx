import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import ThemesProvider from '@/theme/ThemesProvider'
import * as stories from './LanguageLevelIcon.stories'

const { A1_Filled, A2_Filled, B1_Filled, B2_Blank, C1_Blank, C2_Blank } = composeStories(stories)

describe('LanguageLevelIcon', () => {
  it('should render A1 icon correctly', () => {
    render(
      <ThemesProvider>
        <A1_Filled />
      </ThemesProvider>
    )
    const a1Icon = screen.getByAltText('Level: a1')
    expect(a1Icon).toBeInTheDocument()
  })

  it('should render A2 icon correctly', () => {
    render(
      <ThemesProvider>
        <A2_Filled />
      </ThemesProvider>
    )
    const a2Icon = screen.getByAltText('Level: a2')
    expect(a2Icon).toBeInTheDocument()
  })

  it('should render B1 icon correctly', () => {
    render(
      <ThemesProvider>
        <B1_Filled />
      </ThemesProvider>
    )
    const b1Icon = screen.getByAltText('Level: b1')
    expect(b1Icon).toBeInTheDocument()
  })

  it('should render B2 icon correctly', () => {
    render(
      <ThemesProvider>
        <B2_Blank />
      </ThemesProvider>
    )
    const b2Icon = screen.getByAltText('Level: b2')
    expect(b2Icon).toBeInTheDocument()
  })

  it('should render C1 icon correctly', () => {
    render(
      <ThemesProvider>
        <C1_Blank />
      </ThemesProvider>
    )
    const c1Icon = screen.getByAltText('Level: c1')
    expect(c1Icon).toBeInTheDocument()
  })

  it('should render C2 icon correctly', () => {
    render(
      <ThemesProvider>
        <C2_Blank />
      </ThemesProvider>
    )
    const c2Icon = screen.getByAltText('Level: c2')
    expect(c2Icon).toBeInTheDocument()
  })
})
