import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './LoadingIcon.stories'
import ThemesProvider from '@/theme/ThemesProvider'

const { Default } = composeStories(stories)

describe('LoadingIcon', () => {
  it('should render a loading icon, when error is true', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
    const loadingIcon = screen.getByTestId('loading-icon')
    expect(loadingIcon).toBeInTheDocument()
  })
})
