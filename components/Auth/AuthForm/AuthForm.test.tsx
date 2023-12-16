import { render, screen, waitFor } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import * as stories from './AuthForm.stories'

const { SignUpSchema, LoginSchema } = composeStories(stories)

describe('AuthForm Component', () => {
  const mockSubmit = vi.fn()
  const mockSetAuthMethod = vi.fn()

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should render AuthForm correctly', () => {
    render(
      <ThemesProvider>
        <SignUpSchema onSubmit={mockSubmit} setAuthMethod={mockSetAuthMethod} />
      </ThemesProvider>
    )
    expect(screen.getByRole('heading', { name: /Sign Up/i })).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Password')).toBeInTheDocument()
  })

  it('should call onSubmit when the form is submitted', async () => {
    render(
      <ThemesProvider>
        <LoginSchema onSubmit={mockSubmit} setAuthMethod={mockSetAuthMethod} />
      </ThemesProvider>
    )

    const emailInput = screen.getByPlaceholderText(/enter your email/i)
    const passwordInput = screen.getByPlaceholderText(/enter your password/i)

    await userEvent.click(emailInput)
    await userEvent.type(emailInput, 'example@gmail.com')

    await userEvent.click(passwordInput)
    await userEvent.type(passwordInput, 'Example123!')

    const loginButton = screen.getByRole('button', { name: /log in/i })
    await userEvent.click(loginButton)

    await waitFor(() => expect(mockSubmit).toBeCalled())
  })

  it('should not call onSubmit when the form has values inconsisten with schema', async () => {
    render(
      <ThemesProvider>
        <LoginSchema onSubmit={mockSubmit} setAuthMethod={mockSetAuthMethod} />
      </ThemesProvider>
    )

    const emailInput = screen.getByPlaceholderText(/enter your email/i)
    const passwordInput = screen.getByPlaceholderText(/enter your password/i)

    await userEvent.click(emailInput)
    await userEvent.type(emailInput, 'mail!')

    await userEvent.click(passwordInput)
    await userEvent.type(passwordInput, 'basicpassword')

    const loginButton = screen.getByRole('button', { name: /log in/i })
    await userEvent.click(loginButton)

    await waitFor(() => expect(mockSubmit).not.toBeCalled())
  })
})
