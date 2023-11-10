import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './ArticleFunfact.stories'
import ThemesProvider from '@/theme/ThemesProvider'

const { Default } = composeStories(stories)

describe('ArticleFunfact', () => {
  it('should render ArticleFunfact div with content', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )

    const h4 = screen.getByText('Did you know?')
    const p = screen.getByText('Here is your funfact.')

    expect(h4).toBeInTheDocument()
    expect(p).toBeInTheDocument()
  })
})
