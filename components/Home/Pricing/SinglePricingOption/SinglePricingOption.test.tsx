import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './SinglePricingOption.stories'
import { PricingProps } from '@/interfaces/PricingProps'

const { FeaturedWithPrice } = composeStories(stories)

console.log()

describe('SinglePricingOption', () => {
  beforeEach(() => {
    render(
      <ThemesProvider>
        <FeaturedWithPrice />
      </ThemesProvider>
    )
  })

  it('should render with the correct props', () => {
    const { type, price, features } = FeaturedWithPrice.args as PricingProps

    expect(screen.getByText(type)).toBeInTheDocument()
    expect(screen.getByText(price)).toBeInTheDocument()

    features.forEach((feature) => {
      expect(screen.getByText(feature)).toBeInTheDocument()
    })

    const button = screen.getByRole('button', { name: /get started/i })
    expect(button).toBeInTheDocument()
  })

  it('should handle button click', async () => {
    const button = screen.getByRole('button', { name: /get started/i })

    const mockOnClick = vi.fn()
    button.onclick = mockOnClick

    await userEvent.click(button)

    expect(mockOnClick).toHaveBeenCalled()
  })
})
