import type { Meta, StoryObj } from '@storybook/react'

import AuthModal from './AuthModal'

const meta: Meta<typeof AuthModal> = {
  component: AuthModal,
}

export default meta
type Story = StoryObj<typeof AuthModal>

export const VisibleError: Story = {
  args: {
    title: 'Error!',
    type: 'error',
    content: 'error ocurred!',
    onOk: () => {},
    isVisible: true,
  },
}
export const VisibleInfo: Story = {
  args: {
    title: 'Info',
    type: 'info',
    content: 'is it okay with you?',
    onOk: () => {},
    isVisible: true,
  },
}
