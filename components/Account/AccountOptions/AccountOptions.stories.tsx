import type { Meta, StoryObj } from '@storybook/react'

import AccountOptions from './AccountOptions'

const meta: Meta<typeof AccountOptions> = {
  component: AccountOptions,
}

export default meta
type Story = StoryObj<typeof AccountOptions>

export const Default: Story = {
  render: () => <AccountOptions />,
}
