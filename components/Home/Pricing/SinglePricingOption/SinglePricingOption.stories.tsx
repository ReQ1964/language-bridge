import type { Meta, StoryObj } from '@storybook/react'

import SinglePricingOption from './SinglePricingOption'

const meta: Meta<typeof SinglePricingOption> = {
  component: SinglePricingOption,
  tags: ['autodocs'],
  argTypes: {
    type: {
      description: 'Change pricing type',
    },
    price: {
      description: 'Change price',
    },
    features: {
      description: 'Modify features that come with the pricing option',
    },
    featured: {
      description: 'Turn on/off pricing option highlight',
    },
  },
}

export default meta
type Story = StoryObj<typeof SinglePricingOption>

const features = [
  'Amazing source of information',
  'Perfect for learners',
  'Simply wonderful!',
  'Try it yourself!',
]

export const Free: Story = {
  args: {
    type: 'Basic',
    price: 0,
    features,
    featured: false,
  },
}

export const WithPrice: Story = {
  args: {
    type: 'Teams',
    price: 99.99,
    features,
    featured: false,
  },
}

export const FeaturedWithPrice: Story = {
  args: {
    type: 'Premium',
    price: 49.99,
    features,
    featured: true,
  },
}
