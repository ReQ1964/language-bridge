import type { Meta, StoryObj } from '@storybook/react'

import BurgerIcon from './BurgerIcon'

const meta: Meta<typeof BurgerIcon> = {
  component: BurgerIcon,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'Toggle Burger / Close icons',
    },
    handleIconChange: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof BurgerIcon>

export const Burger: Story = {
  args: {
    isOpen: false,
  },
}

export const Close: Story = {
  args: {
    isOpen: true,
  },
}
