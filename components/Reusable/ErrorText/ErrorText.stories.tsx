import type { Meta, StoryObj } from '@storybook/react'

import ErrorText from './ErrorText'

const meta: Meta<typeof ErrorText> = {
  component: ErrorText,
}

export default meta
type Story = StoryObj<typeof ErrorText>

export const Default: Story = {
  render: () => <ErrorText>Example error message</ErrorText>,
}
