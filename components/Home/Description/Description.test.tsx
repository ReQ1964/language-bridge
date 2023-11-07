import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import * as stories from './Description.stories';
import ThemesProvider from '@/theme/ThemesProvider';

const { Default } = composeStories(stories);

describe('Description', () => {
	it('should render description div with content', () => {
		render(
			<ThemesProvider>
				<Default />
			</ThemesProvider>
		);

		const h1 = screen.getByText('Learn wherever you are!');
		const h4 = screen.getByText(
			/Language Bridge, we understand that the modern world demands flexibility/
		);

		expect(h1).toBeInTheDocument();
		expect(h4).toBeInTheDocument();
	});
});
