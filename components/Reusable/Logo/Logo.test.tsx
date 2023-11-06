import { render, screen } from '@testing-library/react';
import ThemesProvider from '@/theme/ThemesProvider';
import { composeStories } from '@storybook/react';
import * as stories from './Logo.stories';

const { Default } = composeStories(stories);

describe('Logo', () => {
	beforeEach(() => {
		render(
			<ThemesProvider>
				<Default />
			</ThemesProvider>
		);
	});

	it('should render a link with correct href attribute', () => {
		const link = screen.getByRole('link');
		expect(link).toHaveAttribute('href', '/');
	});

	it('should render a h3 with correct text', () => {
		const h3 = screen.getByText('Language Bridge');
	});
});
