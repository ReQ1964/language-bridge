import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemesProvider from '@/theme/ThemesProvider';
import { composeStories } from '@storybook/react';
import * as stories from './TopNavbar.stories';

const { Default } = composeStories(stories);

describe('TopNavbar', () => {
	beforeEach(() => {
		render(
			<ThemesProvider>
				<Default />
			</ThemesProvider>
		);
	});

	it('should render the navbar', () => {
		const navbar = screen.getByRole('navigation');
		expect(navbar).toBeInTheDocument();
	});

	it('should slide navigation links into screen when BurgerIcon is clicked', async () => {
		const burgerIcon = screen.getByAltText(/icon to open the navigation bar/i);
		await userEvent.click(burgerIcon);

		const navLinks = screen.getByRole('list');
		expect(navLinks).toHaveStyle(`transform: translateY(130%)`);
	});

	it('should slide navigation links out of the screen when CloseIcon is clicked', async () => {
		const burgerIcon = screen.getByAltText(/icon to open the navigation bar/i);
		await userEvent.click(burgerIcon);

		const closeIcon = screen.getByAltText(/icon to close the navigation bar/i);
		await userEvent.click(closeIcon);

		const navLinks = screen.getByRole('list');
		expect(navLinks).toHaveStyle(`transform: translateY(-40%)`);
	});
});
