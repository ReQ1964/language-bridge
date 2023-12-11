import type { Meta, StoryObj } from '@storybook/react'

import LoadingIcon from './LoadingIcon'

const meta: Meta<typeof LoadingIcon> = {
  component: LoadingIcon,
}

export default meta
type Story = StoryObj<typeof LoadingIcon>

export const Default: Story = {
  render: () => <LoadingIcon />,
}

export const Fullscreen: Story = {
  render: () => <LoadingIcon fullscreen />,
}
