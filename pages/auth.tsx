import * as yup from 'yup'
import { useState } from 'react'
import withRouteProtection from '@/utils/withRouteProtection'
import AuthForm from '@/components/Auth/AuthForm/AuthForm'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth } from '@/firebase/config'

const AuthPage = () => {
  const [authMethod, setAuthMethod] = useState('login')
  const [errorCode, setErrorCode] = useState('')

  const switchAuthMethod = () => {
    setAuthMethod((prevState) => {
      return prevState === 'login' ? 'signup' : 'login'
    })
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
      .catch((error) => {
        setErrorCode(error.code)
      })
  }

  type LogInFormInputsData = {
    email: string
    password: string
  }

  const loginSchema = yup.object().shape({
    email: yup.string().email().required('Email is a required field'),
    password: yup.string().required('Password is a required field'),
  })

  const onLogin = (data: LogInFormInputsData) => {
    signInWithEmailAndPassword(auth, data.email, data.password).catch((error) => {
      setErrorCode(error.code)
    })
  }

  return (
    <>
      {authMethod === 'login' ? (
        <AuthForm
          title="Log In"
          setAuthMethod={switchAuthMethod}
          onSubmit={onLogin}
          schema={loginSchema}
          errorCode={errorCode}
          setErrorCode={setErrorCode}
        />
      ) : (
        <AuthForm
          title="Sign Up"
          setAuthMethod={switchAuthMethod}
          onSubmit={onSignUp}
          schema={signUpSchema}
          errorCode={errorCode}
          setErrorCode={setErrorCode}
        />
      )}
    </>
  )
}

export default withRouteProtection(AuthPage, '/account', true)
