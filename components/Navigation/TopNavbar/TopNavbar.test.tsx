import TopNavbar from './TopNavbar';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('TopNavbar', () => {
	beforeEach(() => {
		render(<TopNavbar />);
	});

	it('should render the navbar', () => {
		const navbar = screen.getByRole('navigation');
		expect(navbar).toBeInTheDocument();
	});

	it('should slide navigation links into screen when BurgerIcon is clicked', async () => {
		const burgerIcon = screen.getByAltText(/icon to open the navigation bar/i);
		expect(burgerIcon).toBeInTheDocument();
		await userEvent.click(burgerIcon);

		const navLinks = screen.getByRole('list');
		expect(navLinks).toHaveStyle(`transform: translateY(30%)`);
	});

	it('should slide navigation links out of the screen when CloseIcon is clicked', async () => {
		const burgerIcon = screen.getByAltText(/icon to open the navigation bar/i);
		expect(burgerIcon).toBeInTheDocument();
		await userEvent.click(burgerIcon);

		const closeIcon = screen.getByAltText(/icon to close the navigation bar/i);
		expect(closeIcon).toBeInTheDocument();
		await userEvent.click(closeIcon);

		const navLinks = screen.getByRole('list');
		expect(navLinks).toHaveStyle(`transform: translateY(-170%)`);
	});
});
