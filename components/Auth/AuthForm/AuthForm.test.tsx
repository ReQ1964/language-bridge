import { render, screen, waitFor } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import * as stories from './AuthForm.stories'

const { LogIn, SignUp, Error } = composeStories(stories)

describe('AuthForm Component', () => {
  const mockSubmit = vi.fn()
  const mockSetAuthMethod = vi.fn()

  it('renders AuthForm correctly', () => {
    render(
      <ThemesProvider>
        <LogIn />
      </ThemesProvider>
    )
    expect(screen.getByRole('heading', { name: /Log In/i })).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Password')).toBeInTheDocument()
  })

  it('calls onSubmit when the form is submitted', async () => {
    render(
      <ThemesProvider>
        <LogIn onSubmit={mockSubmit} />
      </ThemesProvider>
    )
    userEvent.type(screen.getByPlaceholderText('Enter your email'), 'test@example.com')
    userEvent.type(screen.getByPlaceholderText('Enter your password'), 'testpassword')

    const logInButton = screen.getByRole('button', { name: /Log In/i })
    userEvent.click(logInButton)

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled()
    })
  })

  it('calls setAuthMethod when "Sign up" is clicked', () => {
    render(
      <ThemesProvider>
        <SignUp setAuthMethod={mockSetAuthMethod} />
      </ThemesProvider>
    )
    const signUpLinks = screen.getAllByText(/Sign up/i)
    userEvent.click(signUpLinks[2])
  })

  it('displays error modal when errorCode is present', async () => {
    render(
      <ThemesProvider>
        <Error />
      </ThemesProvider>
    )

    await waitFor(() => {
      expect(screen.getByText('Error!')).toBeInTheDocument()
    })
  })
})
