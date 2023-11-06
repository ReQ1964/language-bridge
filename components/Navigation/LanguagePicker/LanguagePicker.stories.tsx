import type { Meta, StoryObj } from '@storybook/react';

import LanguagePicker from './LanguagePicker';

const meta: Meta<typeof LanguagePicker> = {
	component: LanguagePicker,
};

export default meta;
type Story = StoryObj<typeof LanguagePicker>;

export const Default: Story = {
	render: () => <LanguagePicker />,
};
