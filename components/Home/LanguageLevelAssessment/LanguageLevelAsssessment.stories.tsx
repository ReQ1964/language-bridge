import type { Meta, StoryObj } from '@storybook/react'

import LanguageLevelAssessment from './LanguageLevelAssessment'

const meta: Meta<typeof LanguageLevelAssessment> = {
  component: LanguageLevelAssessment,
}

export default meta
type Story = StoryObj<typeof LanguageLevelAssessment>

export const Spanish: Story = {
  args: {
    language: 'spanish',
  },
}
export const English: Story = {
  args: {
    language: 'english',
  },
}
