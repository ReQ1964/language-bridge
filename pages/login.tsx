import SignUpForm from '@/components/Login/SignUpForm/SignUpForm'

const LoginPage = () => {
  return (
    <>
      <SignUpForm />
    </>
  )
}

export default LoginPage

// Check Auth on every page that requires it and redirect when needed. Check user login status before adding to favorite or doing tests and quizzes and display error popup + check auth on the page for more protection.
