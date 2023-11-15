import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './SingleText.stories'

const { Default } = composeStories(stories)

describe('SingleText', () => {
  beforeEach(() => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
  })

  it('should render with provided props', () => {
    expect(screen.getByText(Default.args.title ?? '')).toBeInTheDocument()
    expect(screen.getByText(Default.args.snippet ?? '')).toBeInTheDocument()
    expect(screen.getByAltText(Default.args.imageAlt ?? '')).toBeInTheDocument()
  })

  it('should render "Start reading" button and LanguageLevelIcon', () => {
    expect(screen.getByRole('button', { name: /start reading/i })).toBeInTheDocument()
    expect(screen.getByAltText('Level: a1')).toBeInTheDocument()
  })
})
