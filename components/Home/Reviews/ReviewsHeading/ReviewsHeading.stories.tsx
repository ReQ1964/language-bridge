import type { Meta, StoryObj } from '@storybook/react'
import ReviewsHeading from './ReviewsHeading'

const meta: Meta<typeof ReviewsHeading> = {
  component: ReviewsHeading,
}

export default meta
type Story = StoryObj<typeof ReviewsHeading>

export const Default: Story = {
  render: () => <ReviewsHeading />,
}
