import type { Meta, StoryObj } from '@storybook/react'

import LanguageLevelIcon from './LanguageLevelIcon'

const defaultSizes = {
  width: 50,
  height: 50,
}

const meta: Meta<typeof LanguageLevelIcon> = {
  component: LanguageLevelIcon,
  tags: ['autodocs'],
  argTypes: {
    level: {
      description: 'Change icon type by levels',
    },
    width: {
      description: 'Set Icon width',
    },
    height: {
      description: 'Set Icon height',
    },
  },
}

export default meta
type Story = StoryObj<typeof LanguageLevelIcon>

export const A1: Story = {
  args: {
    level: 'a1',
    ...defaultSizes,
  },
}
export const A2: Story = {
  args: {
    level: 'a2',
    ...defaultSizes,
  },
}
export const B1: Story = {
  args: {
    level: 'b1',
    ...defaultSizes,
  },
}
export const B2: Story = {
  args: {
    level: 'b2',
    ...defaultSizes,
  },
}
export const C1: Story = {
  args: {
    level: 'c1',
    ...defaultSizes,
  },
}
export const C2: Story = {
  args: {
    level: 'c2',
    ...defaultSizes,
  },
}
