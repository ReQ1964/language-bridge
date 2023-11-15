import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import * as stories from './LanguagePicker.stories'

const { Default } = composeStories(stories)

describe('LanguagePicker', () => {
  beforeEach(() => {})

  it('should show two language options on select click', async () => {
    render(<Default />)

    const select = screen.getByRole('combobox')

    await userEvent.click(select)

    const spanish = screen.getByText('spanish')
    const english = screen.getByText('english')
    expect(spanish).toBeInTheDocument()
    expect(english).toBeInTheDocument()
  })
})
