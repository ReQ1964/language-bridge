import Logo from './Logo';
import { render, screen } from '@testing-library/react';
import ThemesProvider from '@/theme/ThemesProvider';

describe('Logo', () => {
	beforeEach(() => {
		render(
			<ThemesProvider>
				<Logo />
			</ThemesProvider>
		);
	});

	it('should render a link with correct href attribute', () => {
		const link = screen.getByRole('link');
		expect(link).toHaveAttribute('href', '/');
	});

	it('should render a h3 with correct text', () => {
		const h3 = screen.getByText('Language Bridge');
		expect(h3).toBeInTheDocument();
	});
});
