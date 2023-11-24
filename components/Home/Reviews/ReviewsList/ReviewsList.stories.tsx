import type { Meta, StoryObj } from '@storybook/react'
import ReviewsList from './ReviewsList'

const sampleReviews = [
  {
    rating: 4,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sit enim molestias, voluptatem dolor nisi quis, cumque fugit porro optio sed temporibus omnis doloribus soluta assumenda facilis minus rem modi?',
    author: 'John Doe',
  },
  {
    rating: 3,
    content: 'Hello there!',
    author: 'Adam Smith',
  },
  {
    rating: 1,
    content: 'Lorem ipsum todo dolor',
    author: 'Anna Doe',
  },
]

const meta: Meta<typeof ReviewsList> = {
  component: ReviewsList,
}

export default meta
type Story = StoryObj<typeof ReviewsList>

export const Default: Story = {
  args: {
    reviews: sampleReviews,
  },
}
