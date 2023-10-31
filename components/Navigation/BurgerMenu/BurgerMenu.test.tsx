import BurgerMenu from './BurgerMenu';
import { fireEvent, render, screen } from '@testing-library/react';

describe('BurgerMenu', () => {
	beforeEach(() => {
		render(<BurgerMenu />);
	});

	test('should change the icon to burger_close', () => {
		const openIcon = screen.getByAltText(/Icon to open the navigation bar/i);
		fireEvent.click(openIcon);

		const closeIcon = screen.getByAltText(/Icon to close the navigation bar/i);
		expect(closeIcon).toBeDefined();
	});

	test('should change the icon to burger_menu', () => {
		const openIcon = screen.getByAltText(/Icon to open the navigation bar/i);
		fireEvent.click(openIcon);

		const closeIcon = screen.getByAltText(/Icon to close the navigation bar/i);
		fireEvent.click(closeIcon);
		expect(openIcon).toBeDefined();
	});
});
