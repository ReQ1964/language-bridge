import type { Meta, StoryObj } from '@storybook/react'
import hero_online_studying from '@/public/images/home/hero_online_studying.png'

import TextsList from './TextsList'

const sampleTexts = [
  {
    image: hero_online_studying,
    imageAlt: 'Image Alt Text 1',
    title: 'Sample Story 1',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 1.',
    level: 'a1',
  },
  {
    image: hero_online_studying,
    imageAlt: 'Image Alt Text 2',
    title: 'Sample Story 2',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 2.',
    level: 'b2',
  },
  {
    image: hero_online_studying,
    imageAlt: 'Image Alt Text 3',
    title: 'Sample Story 3',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 3.',
    level: 'c3',
  },
]

const meta: Meta<typeof TextsList> = {
  component: TextsList,
}

export default meta
type Story = StoryObj<typeof TextsList>

export const Default: Story = {
  args: {
    texts: sampleTexts,
    isLoading: false,
    error: false,
  },
}
export const Loading: Story = {
  args: {
    texts: sampleTexts,
    isLoading: true,
    error: false,
  },
}
export const Error: Story = {
  args: {
    texts: sampleTexts,
    isLoading: false,
    error: true,
  },
}
