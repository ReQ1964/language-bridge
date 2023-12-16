import type { Meta, StoryObj } from '@storybook/react'
import AuthForm from './AuthForm'
import { signUpSchema, loginSchema, passwordResetSchema } from '@/schema/auth.schema'

const meta: Meta<typeof AuthForm> = {
  component: AuthForm,
}

export default meta
type Story = StoryObj<typeof AuthForm>

export const SignUpSchema: Story = {
  args: {
    title: 'Sign Up',
    inputs: [
      { name: 'email', type: 'text' },
      { name: 'username', type: 'text' },
      { name: 'password', type: 'password' },
    ],
    btnText: 'Sign Up',
    setAuthMethod: () => {},
    onSubmit: () => console.log('SignUp Request Sent!'),
    schema: signUpSchema,
  },
}

export const LoginSchema: Story = {
  args: {
    title: 'Log In',
    inputs: [
      { name: 'email', type: 'text' },
      { name: 'password', type: 'password' },
    ],
    btnText: 'Log In',
    setAuthMethod: () => {},
    onSubmit: () => console.log('Login Request Sent!'),
    schema: loginSchema,
  },
}

export const PasswordResetSchema: Story = {
  args: {
    title: 'Password Reset',
    inputs: [{ name: 'email', type: 'text' }],
    btnText: 'Continue',
    setAuthMethod: () => {},
    onSubmit: () => console.log('Password Reset Request Sent!'),
    schema: passwordResetSchema,
  },
}
