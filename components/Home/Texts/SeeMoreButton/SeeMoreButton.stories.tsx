import type { Meta, StoryObj } from '@storybook/react'

import SeeMoreButton from './SeeMoreButton'

const meta: Meta<typeof SeeMoreButton> = {
  component: SeeMoreButton,
}

export default meta
type Story = StoryObj<typeof SeeMoreButton>

export const Default: Story = {
  render: () => <SeeMoreButton />,
}
