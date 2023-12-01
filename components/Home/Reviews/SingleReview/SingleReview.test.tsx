import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './SingleReview.stories'

const { Default } = composeStories(stories)

describe('SingleReview', () => {
  it('should render with provided props', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
    const author = screen.getByText(Default.args.author ?? '')
    const content = screen.getByText(Default.args.content ?? '')
    const starRating = screen.getByRole('radiogroup')

    expect(author).toBeInTheDocument()
    expect(content).toBeInTheDocument()
    expect(starRating).toBeInTheDocument()
  })
})
