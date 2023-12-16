import type { Meta, StoryObj } from '@storybook/react'
import * as yup from 'yup'

import AuthForm from './AuthForm'

const meta: Meta<typeof AuthForm> = {
  component: AuthForm,
}

export default meta
type Story = StoryObj<typeof AuthForm>

const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'username must be at least 3 characters')
    .required('username is required'),
  email: yup.string().email('email must be valid').required('email is required'),
  password: yup.string().password().required('password is required'),
})

export const BasicSignUpSchema: Story = {
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

const loginSchema = yup.object().shape({
  email: yup.string().email().required('email is required'),
  password: yup.string().required('password is required'),
})

export const BasicLoginSchema: Story = {
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
