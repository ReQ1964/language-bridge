import type { Meta, StoryObj } from '@storybook/react';

import PremiumDiscount from './PremiumDiscount';

const meta: Meta<typeof PremiumDiscount> = {
	component: PremiumDiscount,
};

export default meta;
type Story = StoryObj<typeof PremiumDiscount>;

export const Primary: Story = {
	render: () => <PremiumDiscount />,
};
