import type { Meta, StoryObj } from '@storybook/react'
import hero_online_studying from '@/public/images/home/hero_online_studying.png'

import SingleArticle from './SingleArticle'

const sampleArticle = {
  image: hero_online_studying,
  imageAlt: 'Image Alt Text',
  title: 'Sample Article Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  funfact: 'Did you know? This is a fun fact!',
}

const meta: Meta<typeof SingleArticle> = {
  component: SingleArticle,
}

export default meta
type Story = StoryObj<typeof SingleArticle>

export const Default: Story = {
  args: {
    ...sampleArticle,
  },
}

export const WithoutFunFact: Story = {
  args: {
    ...sampleArticle,
    funfact: '',
  },
}
