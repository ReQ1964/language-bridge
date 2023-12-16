enum AuthMethods {
  Login = 'login',
  Signup = 'signup',
  PasswordReset = 'password-reset',
}

type InputTypes = 'username' | 'email' | 'password'

type AuthFormInputs = {
  username: string
  email: string
  password: string
}

type SignUpFormInputs = {
  username: string
  email: string
  password: string
}

type LogInFormInputs = {
  email: string
  password: string
}

type PasswordResetFormInputs = {
  email: string
}

export {
  AuthMethods,
  type InputTypes,
  type AuthFormInputs,
  type SignUpFormInputs,
  type LogInFormInputs,
  type PasswordResetFormInputs,
}
