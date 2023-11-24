import type { Meta, StoryObj } from '@storybook/react'
import SingleReview from './SingleReview'

const sampleReview = {
  rating: 4,
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit enim molestias, voluptatem dolor nisi quis, cumque fugit porro optio sed temporibus omnis doloribus soluta assumenda facilis minus rem modi?',
  author: 'John Doe',
}

const meta: Meta<typeof SingleReview> = {
  component: SingleReview,
}

export default meta
type Story = StoryObj<typeof SingleReview>

export const Default: Story = {
  args: {
    rating: sampleReview.rating,
    content: sampleReview.content,
    author: sampleReview.author,
  },
}
