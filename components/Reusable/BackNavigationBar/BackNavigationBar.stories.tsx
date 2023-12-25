import type { Meta, StoryObj } from '@storybook/react'

import BackNavigationBar from './BackNavigationBar'

const meta: Meta<typeof BackNavigationBar> = {
  component: BackNavigationBar,
}

export default meta
type Story = StoryObj<typeof BackNavigationBar>

export const Default: Story = {
  args: {
    currentPageName: 'Test Page',
  },
}
