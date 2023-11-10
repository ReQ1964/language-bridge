import type { Meta, StoryObj } from '@storybook/react'
import hero_online_studying from '@/public/images/home/hero_online_studying.png'

import ArticlesList from './ArticlesList'

const articles = [
  {
    image: hero_online_studying,
    imageAlt: 'Image Alt Text 1',
    title: 'Sample Article Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    funfact: 'Did you know? This is a fun fact!',
  },
  {
    image: hero_online_studying,
    imageAlt: 'Image Alt Text 2',
    title: 'Sample Article Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

const meta: Meta<typeof ArticlesList> = {
  component: ArticlesList,
}

export default meta
type Story = StoryObj<typeof ArticlesList>

export const Default: Story = {
  render: () => <ArticlesList articles={articles} />,
}
