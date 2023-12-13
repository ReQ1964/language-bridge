import type { Meta, StoryObj } from '@storybook/react'
import * as yup from 'yup'

import AuthForm from './AuthForm'

const meta: Meta<typeof AuthForm> = {
  component: AuthForm,
}

export default meta
type Story = StoryObj<typeof AuthForm>

export const LogIn: Story = {
  args: {
    title: 'Log In',
    setAuthMethod: () => {},
    onSubmit: () => {},
    schema: yup.object().shape({}),
  },
}

export const SignUp: Story = {
  args: {
    ...LogIn.args,
    title: 'Sign Up',
  },
}

export const Error: Story = {
  args: {
    ...LogIn.args,
  },
}
