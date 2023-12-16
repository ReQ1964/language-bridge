import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  SForm,
  Btn,
  HighlightedSpan,
  HighlightedSpanContainer,
  ForgotPassword,
} from './AuthForm.styles'
import OutsideProvidersAuth from '../OutsideProvidersAuth/OutsideProvidersAuth'
import AuthInput from '../AuthInput/AuthInput'
import { InputTypes } from '@/types/Auth/InputTypes'
import { AuthFormInputs } from '@/types/Auth/AuthFormInputs'

YupPassword(yup)

enum AuthMethods {
  Login = 'login',
  Signup = 'signup',
  PasswordReset = 'password-reset',
}

type InputsProps = {
  name: InputTypes
  type: string
}

type AuthFormProps = {
  title: string
  inputs: Array<InputsProps>
  btnText: string
  setAuthMethod: (method: AuthMethods) => void
  onSubmit: (data: AuthFormInputs) => void
  schema: yup.AnyObjectSchema
}

const AuthForm = ({ title, inputs, btnText, setAuthMethod, onSubmit, schema }: AuthFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>({ resolver: yupResolver(schema) })

  return (
    <>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <h2>{title}</h2>

        {inputs.map((input) => {
          const { name, type } = input
          return <AuthInput key={name} control={control} name={name} type={type} errors={errors} />
        })}

        {title === 'Log In' && (
          <ForgotPassword onClick={() => setAuthMethod(AuthMethods.PasswordReset)}>
            Forgot Password?
          </ForgotPassword>
        )}

        <Btn size="large" htmlType="submit">
          {btnText}
        </Btn>

        {title !== 'Password Reset' && <OutsideProvidersAuth />}

        <HighlightedSpanContainer>
          {title === 'Log In' ? (
            <>
              New to Language Bridge?{' '}
              <HighlightedSpan onClick={() => setAuthMethod(AuthMethods.Login)}>
                Sign up
              </HighlightedSpan>
            </>
          ) : title === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <HighlightedSpan onClick={() => setAuthMethod(AuthMethods.Signup)}>
                Log In
              </HighlightedSpan>
            </>
          ) : (
            <>
              Return to{' '}
              <HighlightedSpan onClick={() => setAuthMethod(AuthMethods.Login)}>
                Log In
              </HighlightedSpan>
            </>
          )}
        </HighlightedSpanContainer>
      </SForm>
    </>
  )
}

export default AuthForm
