import type { Meta, StoryObj } from '@storybook/react';

import BurgerMenu from './BurgerMenu';

const meta: Meta<typeof BurgerMenu> = {
	component: BurgerMenu,
};

export default meta;
type Story = StoryObj<typeof BurgerMenu>;

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
