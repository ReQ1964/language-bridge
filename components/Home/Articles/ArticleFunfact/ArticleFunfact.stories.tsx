import type { Meta, StoryObj } from '@storybook/react'

import ArticleFunfact from './ArticleFunfact'

const meta: Meta<typeof ArticleFunfact> = {
  component: ArticleFunfact,
}

export default meta
type Story = StoryObj<typeof ArticleFunfact>

export const Default: Story = {
  render: () => <ArticleFunfact content="Here is your funfact." />,
}

export const Empty: Story = {
  render: () => <ArticleFunfact content="" />,
}
