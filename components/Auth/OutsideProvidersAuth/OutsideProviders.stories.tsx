import type { Meta, StoryObj } from '@storybook/react'

import OutsideProvidersAuth from './OutsideProvidersAuth'

const meta: Meta<typeof OutsideProvidersAuth> = {
  component: OutsideProvidersAuth,
}

export default meta
type Story = StoryObj<typeof OutsideProvidersAuth>

export const Default: Story = {
  render: () => <OutsideProvidersAuth />,
}
