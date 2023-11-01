import LanguagePicker from './LanguagePicker';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('LanguagePicker', () => {
	beforeEach(() => {
		render(<LanguagePicker />);
	});

	const checkDropdownState = (button: HTMLElement, shouldContain: boolean) => {
		const buttonAttributes = button.getAttribute('class');
		return shouldContain
			? expect(buttonAttributes).toContain('ant-dropdown-open')
			: expect(buttonAttributes).not.toContain('ant-dropdown-open');
	};

	test('dropdown responds to hover', async () => {
		const button = screen.getByRole('button');

		// dropdown starts out hidden
		checkDropdownState(button, false);

		// dropdown appears upon mouseover of button
		fireEvent.mouseEnter(button);
		await waitFor(() => {
			checkDropdownState(button, true);
		});

		//dropdown disappears when we mouseout
		fireEvent.mouseLeave(button);
		await waitFor(() => {
			checkDropdownState(button, false);
		});
	});
});
