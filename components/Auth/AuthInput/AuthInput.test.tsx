import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import userEvent from '@testing-library/user-event'
import * as stories from './AuthInput.stories'

const { ExampleInput } = composeStories(stories)

describe('AuthInput Component', () => {
  it('should render the input and be editable', async () => {
    render(
      <ThemesProvider>
        <ExampleInput />
      </ThemesProvider>
    )

    const input = screen.getByPlaceholderText(/enter your email/i)
    expect(input).toBeInTheDocument()

    await userEvent.click(input)
    await userEvent.type(input, 'hello there')

    expect(input).toHaveValue('hello there')
  })
})
