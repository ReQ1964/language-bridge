import type { Meta, StoryObj } from '@storybook/react';

import { TopNavbar } from './TopNavbar';

const meta: Meta<typeof TopNavbar> = {
	component: TopNavbar,
};

export default meta;
type Story = StoryObj<typeof TopNavbar>;

export const Open: Story = {
	args: {
		storyIsOpen: true,
	},
};

export const Close: Story = {
	args: {
		storyIsOpen: false,
	},
};
