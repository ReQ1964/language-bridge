import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as stories from './PricingHeading.stories'
import { composeStories } from '@storybook/react'
import ThemesProvider from '@/theme/ThemesProvider'

const { Default } = composeStories(stories)

describe('PricingHeading', () => {
  it('should render PricingHeading correctly', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
  })

  const h3 = screen.getByText('Pricing plan')
  const paragraph = screen.getByText(/choose the right pricing/i)

  expect(h3).toBeInTheDocument()
  expect(paragraph).toBeInTheDocument()
})
