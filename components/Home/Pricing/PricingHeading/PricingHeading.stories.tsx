import type { Meta, StoryObj } from '@storybook/react'

import PricingHeading from './PricingHeading'

const meta: Meta<typeof PricingHeading> = {
  component: PricingHeading,
}

export default meta
type Story = StoryObj<typeof PricingHeading>

export const Default: Story = {
  render: () => <PricingHeading />,
}
