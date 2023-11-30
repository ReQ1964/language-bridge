import type { Meta, StoryObj } from '@storybook/react'

import PricingOptions from './PricingOptions'

const meta: Meta<typeof PricingOptions> = {
  component: PricingOptions,
}

export default meta
type Story = StoryObj<typeof PricingOptions>

const features1 = [
  'Amazing source of information1',
  'Perfect for learners1',
  'Simply wonderful!1',
  'Try it yourself!1',
]
const features2 = [
  'Amazing source of information2',
  'Perfect for learners2',
  'Simply wonderful!2',
  'Try it yourself!2',
]

const MockPricingOptions = [
  { type: 'Basic', price: 0, features: features1, featured: false },
  { type: 'Premium', price: 49.99, features: features2, featured: true },
]

export const Default: Story = {
  args: {
    pricingOptions: MockPricingOptions,
  },
}
