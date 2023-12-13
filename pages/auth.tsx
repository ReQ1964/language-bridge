import * as yup from 'yup'
import { useState } from 'react'
import withRouteProtection from '@/utils/withRouteProtection'
import AuthForm from '@/components/Auth/AuthForm/AuthForm'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { TopImage } from '@/components/Auth/AuthForm/AuthForm.styles'
import { auth } from '@/firebase/config'
import formsPic from '@/public/images/login/forms-pic.jpg'
import AuthErrorModal from '@/components/Auth/AuthErrorModal/AuthErrorModal'

enum AuthMethods {
  Login = 'login',
  Signup = 'signup',
  PasswordReset = 'password-reset',
}

const AuthPage = () => {
  const [authMethod, setAuthMethod] = useState(AuthMethods.Login)
  const [errorCode, setErrorCode] = useState('')

  const handleAuthError = (error: { code: string }) => {
    console.error(`Authentication error: ${error.code}`)
    setErrorCode(error.code)
  }

  type SignUpFormInputsData = {
    username?: string
    email: string
    password: string
  }

  const signUpSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, 'username must be at least 3 characters')
      .required('username is required'),
    email: yup.string().email('email must be valid').required('email is required'),
    password: yup.string().password().required('password is required'),
  })

  const onSignUp = (data: SignUpFormInputsData) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: data.username,
          })
        }
      })
      .catch(handleAuthError)
  }

  type LogInFormInputsData = {
    email: string
    password: string
  }

  const loginSchema = yup.object().shape({
    email: yup.string().email().required('email is required'),
    password: yup.string().required('password is required'),
  })

  const onLogin = (data: LogInFormInputsData) => {
    signInWithEmailAndPassword(auth, data.email, data.password).catch(handleAuthError)
  }

  type PasswordResetFormInputsData = {
    email: string
  }

  const passwordResetSchema = yup.object().shape({
    email: yup.string().email().required('emial is required'),
  })

  const onPasswordReset = (data: PasswordResetFormInputsData) => {
    sendPasswordResetEmail(auth, data.email).catch(handleAuthError)
  }

  return (
    <>
      <TopImage
        src={formsPic}
        alt="Two people learning"
        priority={true}
        height={100}
        width={100}
        unoptimized
      />

      {authMethod === AuthMethods.Login && (
        <AuthForm
          title="Log In"
          btnText="Log In"
          inputs={[
            { name: 'email', type: 'text' },
            { name: 'password', type: 'password' },
          ]}
          setAuthMethod={setAuthMethod}
          onSubmit={onLogin}
          schema={loginSchema}
        />
      )}

      {authMethod === AuthMethods.Signup && (
        <AuthForm
          title="Sign Up"
          btnText="Sign Up"
          inputs={[
            { name: 'username', type: 'text' },
            { name: 'email', type: 'text' },
            { name: 'password', type: 'password' },
          ]}
          setAuthMethod={setAuthMethod}
          onSubmit={onSignUp}
          schema={signUpSchema}
        />
      )}

      {authMethod === AuthMethods.PasswordReset && (
        <AuthForm
          title="Password Reset"
          btnText="Continue"
          inputs={[{ name: 'email', type: 'text' }]}
          setAuthMethod={setAuthMethod}
          onSubmit={onPasswordReset}
          schema={passwordResetSchema}
        />
      )}
      <AuthErrorModal errorCode={errorCode} setErrorCode={setErrorCode} />
    </>
  )
}

export default withRouteProtection(AuthPage, '/account', true)
