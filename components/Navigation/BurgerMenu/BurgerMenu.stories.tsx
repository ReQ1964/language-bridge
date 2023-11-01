import type { Meta, StoryObj } from '@storybook/react'

import BurgerMenu from './BurgerMenu'

const meta: Meta<typeof BurgerMenu> = {
  component: BurgerMenu,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: 'Open / close the menu',
    },
  },
}

export default meta
type Story = StoryObj<typeof BurgerMenu>

export const Open: Story = {
  args: {
    isOpen: true,
  },
}

export const Close: Story = {
  args: {
    isOpen: false,
  },
}
