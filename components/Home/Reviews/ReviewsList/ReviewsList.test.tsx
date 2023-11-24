import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './ReviewsList.stories'

const { Default } = composeStories(stories)

describe('ReviewsList', () => {
  it('should render with provided props', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )

    const heading = screen.getByText(/what others love about Language Bridge/i)
    expect(heading).toBeInTheDocument()
    Default.args.reviews?.forEach((review) => {
      const author = screen.getByText(review.author)
      const content = screen.getByText(review.content)
      const starRatings = screen.getAllByRole('radiogroup')

      expect(author).toBeInTheDocument()
      expect(content).toBeInTheDocument()
      starRatings.forEach((rating) => expect(rating).toBeInTheDocument())
    })
  })
})
