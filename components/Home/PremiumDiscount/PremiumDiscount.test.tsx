import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './PremiumDiscount.stories'

const { Default } = composeStories(stories)

describe('PremiumDiscount', () => {
  it('should render the discount message', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )

    const paragraph = screen.getByText(
      'Unlock new language superpowers with 50% off LanguageBridge Premium!'
    )

    expect(paragraph).toBeInTheDocument()
  })
})
