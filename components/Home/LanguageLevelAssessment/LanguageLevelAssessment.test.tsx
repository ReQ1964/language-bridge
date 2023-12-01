import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './LanguageLevelAsssessment.stories'

const { English, Spanish } = composeStories(stories)

vi.mock('next/router', () => require('next-router-mock'))

describe('LanguageLevelAssessment', () => {
  it('should render the LanguageLevelAssessment component with english prop', () => {
    render(
      <ThemesProvider>
        <English />
      </ThemesProvider>
    )
    const gb_icon = screen.getByAltText('Flag of the United Kingdom')
    const text = screen.getByText(/Assess your English language skills/i)
    const btn = screen.getByText('Test Your English')

    expect(gb_icon).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
  })
  it('should render the LanguageLevelAssessment component with spanish prop', () => {
    render(
      <ThemesProvider>
        <Spanish />
      </ThemesProvider>
    )
    const es_icon = screen.getByAltText('Flag of Spain')
    const text = screen.getByText(/Assess your Spanish language skills/i)
    const btn = screen.getByText('Test Your Spanish')

    expect(es_icon).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
  })
})
