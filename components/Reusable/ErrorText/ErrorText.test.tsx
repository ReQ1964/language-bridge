import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './ErrorText.stories'
import ThemesProvider from '@/theme/ThemesProvider'

const { Default } = composeStories(stories)

describe('LoadingIcon', () => {
  it('should render an ErrorText with sample sentence', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
    const errorText = screen.getByText('Example error message')
    expect(errorText).toBeInTheDocument()
  })
})
