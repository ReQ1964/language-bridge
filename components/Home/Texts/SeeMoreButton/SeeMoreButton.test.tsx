import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './SeeMoreButton.stories'
import ThemesProvider from '@/theme/ThemesProvider'

const { Default } = composeStories(stories)

describe('SeeMoreButton', () => {
  test('should render the button', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
    const btn = screen.getByText('See More')
    expect(btn).toBeInTheDocument()
  })
})
