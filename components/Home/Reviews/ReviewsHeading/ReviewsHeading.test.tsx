import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './ReviewsHeading.stories'

const { Default } = composeStories(stories)

describe('ReviewsHeading', () => {
  it('should render two headers', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )

    const h3 = screen.getByText(/what others love about Language Bridge/i)
    const h4 = screen.getByText(/Our strong community are all learning together./i)

    expect(h3).toBeInTheDocument()
    expect(h4).toBeInTheDocument()
  })
})
