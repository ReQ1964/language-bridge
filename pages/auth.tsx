import { useState } from 'react'
import { auth } from '@/firebase/config'
import {
  AuthMethods,
  SignUpFormInputs,
  LogInFormInputs,
  PasswordResetFormInputs,
} from '@/types/authTypes'
import { signUpSchema, loginSchema, passwordResetSchema } from '@/yupSchema/auth.schema'
import withRouteProtection from '@/utils/withRouteProtection'
import { handleAuthError } from '@/utils/handleAuthError'

import AuthForm from '@/components/Auth/AuthForm/AuthForm'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { TopImage } from '@/components/Auth/AuthForm/AuthForm.styles'
import formsPic from '@/public/images/login/forms-pic.jpg'

const AuthPage = () => {
  const [authMethod, setAuthMethod] = useState(AuthMethods.Login)
  const [error, setError] = useState('')
  const [isLinkSent, setIsLinkSent] = useState(false)

  const onSignUp = ({ email, password, username }: SignUpFormInputs) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        }
      })
      .catch((error) => handleAuthError(error.code, setError))
  }

  const onLogin = ({ email, password }: LogInFormInputs) => {
    signInWithEmailAndPassword(auth, email, password).catch((error) =>
      handleAuthError(error.code, setError)
    )
  }

  const onPasswordReset = ({ email }: PasswordResetFormInputs) => {
    sendPasswordResetEmail(auth, email)
      .then(() => setIsLinkSent(true))
      .catch((error) => handleAuthError(error.code, setError))
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
          error={error}
          setError={setError}
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
          error={error}
          setError={setError}
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
          error={error}
          setError={setError}
          isLinkSent={isLinkSent}
          setIsLinkSet={setIsLinkSent}
        />
      )}
    </>
  )
}

export default withRouteProtection(AuthPage, '/account', true)
