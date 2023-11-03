import { render, screen } from '@testing-library/react';
import BurgerMenu from './BurgerMenu';

describe('BurgerMenu', () => {
	const linkTexts = ['Home', 'Contact', 'About', 'Texts'];

	it('should render the menu with links and be in view when isOpen is true', () => {
		render(<BurgerMenu isOpen={true} />);

		linkTexts.forEach((text) => {
			const link = screen.getByText(text);
			expect(link).toBeInTheDocument();
		});

		const menu = screen.getByRole('list');
		expect(menu).toHaveStyle(`transform: translateY(30%)`);
	});

	it('should render the menu with links and be out of view when isOpen is false', () => {
		render(<BurgerMenu isOpen={false} />);

		linkTexts.forEach((text) => {
			const link = screen.getByText(text);
			expect(link).toBeInTheDocument();
		});

		const menu = screen.getByRole('list');
		expect(menu).toHaveStyle(`transform: translateY(-170%)`);
	});

	it('should check if links have correct paths', () => {
		render(<BurgerMenu isOpen={true} />);

		linkTexts.forEach((text) => {
			const link = screen.getByText(text);
			if (text === 'Home') {
				expect(link).toHaveAttribute('href', '/');
			} else {
				expect(link).toHaveAttribute('href', `/${text.toLowerCase()}`);
			}
		});
	});

	it('should capitalize the first letter of each menu item', () => {
		render(<BurgerMenu isOpen={true} />);

		linkTexts.forEach((text) => {
			const link = screen.getByText(text);
			expect(link.textContent).toBe(text);
			expect(link.textContent?.charAt(0)).toMatch(/[A-Z]/);
		});
	});
});
