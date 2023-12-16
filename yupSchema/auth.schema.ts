import * as yup from 'yup'
import YupPassword from 'yup-password'

YupPassword(yup)

const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'username must be at least 3 characters')
    .required('username is required'),
  email: yup.string().email('email must be valid').required('email is required'),
  password: yup.string().password().required('password is required'),
})

const loginSchema = yup.object().shape({
  email: yup.string().email().required('email is required'),
  password: yup.string().required('password is required'),
})

const passwordResetSchema = yup.object().shape({
  email: yup.string().email().required('email is required'),
})

export { signUpSchema, loginSchema, passwordResetSchema }
