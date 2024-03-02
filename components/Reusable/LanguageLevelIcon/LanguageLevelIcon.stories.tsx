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

export const A1_Filled: Story = {
  args: {
    level: 'a1',
    type: 'filled',
    ...defaultSizes,
  },
}
export const A2_Filled: Story = {
  args: {
    level: 'a2',
    type: 'filled',
    ...defaultSizes,
  },
}
export const B1_Filled: Story = {
  args: {
    level: 'b1',
    type: 'filled',
    ...defaultSizes,
  },
}
export const B2_Blank: Story = {
  args: {
    level: 'b2',
    type: 'blank',
    ...defaultSizes,
  },
}
export const C1_Blank: Story = {
  args: {
    level: 'c1',
    type: 'blank',
    ...defaultSizes,
  },
}
export const C2_Blank: Story = {
  args: {
    level: 'c2',
    type: 'blank',
    ...defaultSizes,
  },
}
