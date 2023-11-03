import LanguagePicker from './LanguagePicker';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('LanguagePicker', () => {
	beforeEach(() => {
		render(<LanguagePicker />);
	});

	it('should respond to hover actions; show/hide', async () => {
		const button = screen.getByRole('button');

		await userEvent.hover(button);
		await waitFor(() => {
			expect(button).toHaveClass('ant-dropdown-open');
		});

		await userEvent.unhover(button);
		await waitFor(() => {
			expect(button).not.toHaveClass('ant-dropdown-open');
		});
	});
});
