import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import * as stories from './PricingOptions.stories'
import { composeStories } from '@storybook/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { PricingProps } from '@/interfaces/PricingProps'

const { Default } = composeStories(stories)

describe('PricingOptions', () => {
  it('should render PricingOptions correctly with mock data', () => {
    const pricingOptions = Default.args as Array<PricingProps>
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )

    expect(screen.getByText(/Choose the right pricing for you/)).toBeInTheDocument()

    expect(screen.getByText(pricingOptions[0].type)).toBeInTheDocument()
    expect(screen.getByText(/free/i)).toBeInTheDocument()
    expect(screen.getByText(pricingOptions[0].features[0])).toBeInTheDocument()

    expect(screen.getByText(pricingOptions[1].type)).toBeInTheDocument()
    expect(screen.getByText(pricingOptions[1].price)).toBeInTheDocument()
    expect(screen.getByText(pricingOptions[1].features[1])).toBeInTheDocument()
  })
})
