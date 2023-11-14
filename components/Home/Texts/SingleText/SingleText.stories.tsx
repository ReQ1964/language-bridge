import type { Meta, StoryObj } from '@storybook/react'
import hero_online_studying from '@/public/images/home/hero_online_studying.png'

import SingleText from './SingleText'

const sampleText = {
  image: hero_online_studying,
  imageAlt: 'Image Alt Text',
  title: 'Sample Story',
  snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

const meta: Meta<typeof SingleText> = {
  component: SingleText,
}

export default meta
type Story = StoryObj<typeof SingleText>

export const Default: Story = {
  render: () => (
    <SingleText
      image={sampleText.image}
      imageAlt={sampleText.imageAlt}
      title={sampleText.title}
      snippet={sampleText.snippet}
    />
  ),
}
