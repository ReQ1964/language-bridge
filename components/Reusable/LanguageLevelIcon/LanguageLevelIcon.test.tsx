import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import ThemesProvider from '@/theme/ThemesProvider'
import * as stories from './LanguageLevelIcon.stories'

const { A1, A2, B1, B2, C1, C2 } = composeStories(stories)

describe('LanguageLevelIcon', () => {
  it('should render A1 icon correctly', () => {
    render(
      <ThemesProvider>
        <A1 />
      </ThemesProvider>
    )
    const a1Icon = screen.getByAltText('Level: a1')
    expect(a1Icon).toBeInTheDocument()
  })

  it('should render A2 icon correctly', () => {
    render(
      <ThemesProvider>
        <A2 />
      </ThemesProvider>
    )
    const a2Icon = screen.getByAltText('Level: a2')
    expect(a2Icon).toBeInTheDocument()
  })

  it('should render B1 icon correctly', () => {
    render(
      <ThemesProvider>
        <B1 />
      </ThemesProvider>
    )
    const b1Icon = screen.getByAltText('Level: b1')
    expect(b1Icon).toBeInTheDocument()
  })

  it('should render B2 icon correctly', () => {
    render(
      <ThemesProvider>
        <B2 />
      </ThemesProvider>
    )
    const b2Icon = screen.getByAltText('Level: b2')
    expect(b2Icon).toBeInTheDocument()
  })

  it('should render C1 icon correctly', () => {
    render(
      <ThemesProvider>
        <C1 />
      </ThemesProvider>
    )
    const c1Icon = screen.getByAltText('Level: c1')
    expect(c1Icon).toBeInTheDocument()
  })

  it('should render C2 icon correctly', () => {
    render(
      <ThemesProvider>
        <C2 />
      </ThemesProvider>
    )
    const c2Icon = screen.getByAltText('Level: c2')
    expect(c2Icon).toBeInTheDocument()
  })
})
