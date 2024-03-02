import type { Meta, StoryObj } from '@storybook/react'

import DailyAnnouncement from './DailyAnnouncement'

const meta: Meta<typeof DailyAnnouncement> = {
  component: DailyAnnouncement,
}

export default meta
type Story = StoryObj<typeof DailyAnnouncement>

export const Default: Story = {
  args: {
    textsQuantity: 2,
    wordsQuantity: 600,
  },
}
