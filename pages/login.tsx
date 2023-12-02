import SignUpForm from '@/components/Login/SignUpForm/SignUpForm'
import LogInForm from '@/components/Login/LoginForm/LogInForm'
import { useState } from 'react'

const LoginPage = () => {
  const [authMethod, setAuthMethod] = useState('login')

  return (
    <>
      {authMethod === 'login' ? (
        <LogInForm setAuthMethod={setAuthMethod} />
      ) : (
        <SignUpForm setAuthMethod={setAuthMethod} />
      )}
    </>
  )
}

export default LoginPage

// Check Auth on every page that requires it and redirect when needed. Check user login status before adding to favorite or doing tests and quizzes and display error popup + check auth on the page for more protection.
