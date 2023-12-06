import SignUpForm from '@/components/Login/SignUpForm/SignUpForm'
import LogInForm from '@/components/Login/LoginForm/LogInForm'
import { useState } from 'react'
import withRouteProtection from '@/utils/withRouteProtection'

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

export default withRouteProtection(LoginPage, '/account', true)
