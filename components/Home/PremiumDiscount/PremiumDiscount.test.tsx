import { render, screen } from '@testing-library/react';
import ThemeProviders from '@/theme/ThemesProvider';
import { composeStories } from '@storybook/react';
import * as stories from './PremiumDiscount.stories';

const { Default } = composeStories(stories);

describe('Logo', () => {
	beforeEach(() => {
		render(
			<ThemeProviders>
				<Default />
			</ThemeProviders>
		);
	});

	it('should render the discount message', () => {
		const paragraph = screen.getByText(
			'Unlock new language superpowers with 50% off LanguageBridge Premium!'
		);

		expect(paragraph).toBeInTheDocument();
	});
});
