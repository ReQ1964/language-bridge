import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input, Typography } from 'antd'
import {
  SForm,
  Btn,
  HighlightedSpan,
  HighlightedSpanContainer,
  ErrorMessage,
  ForgotPassword,
} from './AuthForm.styles'
import OutsideProvidersAuth from '../OutsideProvidersAuth/OutsideProvidersAuth'
import capitalizeWord from '@/utils/capitalizeWord'

YupPassword(yup)

enum AuthMethods {
  Login = 'login',
  Signup = 'signup',
  PasswordReset = 'password-reset',
}

type AuthFormInputsData = {
  username?: string
  email: string
  password: string
}

type InputsProps = {
  name: 'email' | 'username' | 'password'
  type: string
}

type AuthFormProps = {
  title: string
  inputs: Array<InputsProps>
  btnText: string
  setAuthMethod: (method: AuthMethods) => void
  onSubmit: (data: AuthFormInputsData) => void
  schema: yup.AnyObjectSchema
}

const AuthForm = ({ title, inputs, btnText, setAuthMethod, onSubmit, schema }: AuthFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputsData>({ resolver: yupResolver(schema) })

  return (
    <>
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <h2>{title}</h2>
        {inputs.map((input) => {
          const { name, type } = input

          return (
            <div key={name}>
              <Typography.Title level={5}>{capitalizeWord(name)}</Typography.Title>
              <Controller
                control={control}
                name={name}
                render={({ field: { onChange, onBlur } }) => (
                  <>
                    <Input
                      size="large"
                      placeholder={`Enter your ${name}`}
                      type={type}
                      onChange={onChange}
                      onBlur={onBlur}
                      status={errors.username ? 'error' : ''}
                    />
                    {errors[name] && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
                  </>
                )}
              ></Controller>
            </div>
          )
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
