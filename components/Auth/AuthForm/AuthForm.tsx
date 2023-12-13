import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import YupPassword from 'yup-password'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input, Typography, Modal } from 'antd'
import {
  SForm,
  Btn,
  HighlightedSpan,
  HighlightedSpanContainer,
  ErrorMessage,
  ForgotPassword,
} from './AuthForm.styles'
import OutsideProvidersAuth from '../OutsideProvidersAuth/OutsideProvidersAuth'
import { getMessageFromErrorCode } from '@/utils/getMessageFromAuthError'
import capitalizeWord from '@/utils/capitalizeWord'

YupPassword(yup)

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
  setAuthMethod: (method: 'login' | 'signup' | 'password-reset') => void
  onSubmit: (data: AuthFormInputsData) => void
  schema: yup.AnyObjectSchema
  errorCode: string
  setErrorCode: (arg0: string) => void
}

const AuthForm = ({
  title,
  inputs,
  btnText,
  setAuthMethod,
  onSubmit,
  schema,
  errorCode,
  setErrorCode,
}: AuthFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputsData>({ resolver: yupResolver(schema) })
  const [modal, contextHolder] = Modal.useModal()

  const onFormSubmit = (data: AuthFormInputsData) => {
    if (errorCode) {
      showModal()
    } else {
      onSubmit(data)
    }
  }

  const showModal = () => {
    const errorMessage = getMessageFromErrorCode(errorCode)

    modal.error({
      title: 'Error!',
      content: <ErrorMessage>{errorMessage}</ErrorMessage>,
      centered: true,
      onOk: () => {
        setErrorCode('')
      },
    })
  }

  useEffect(() => {
    if (errorCode) {
      showModal()
    }
  })

  return (
    <>
      <SForm onSubmit={handleSubmit(onFormSubmit)}>
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
        {title === 'Log In' ? (
          <ForgotPassword onClick={() => setAuthMethod('password-reset')}>
            Forgot Password?
          </ForgotPassword>
        ) : null}
        <Btn size="large" htmlType="submit">
          {btnText}
        </Btn>
        {title === 'Password Reset' ? null : <OutsideProvidersAuth />}
        <HighlightedSpanContainer>
          {title === 'Log In' ? (
            <>
              New to Language Bridge?{' '}
              <HighlightedSpan onClick={() => setAuthMethod('signup')}>Sign up</HighlightedSpan>
            </>
          ) : title === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <HighlightedSpan onClick={() => setAuthMethod('login')}>Log In</HighlightedSpan>
            </>
          ) : (
            <>
              Return to{' '}
              <HighlightedSpan onClick={() => setAuthMethod('login')}>Log In</HighlightedSpan>
            </>
          )}
        </HighlightedSpanContainer>
      </SForm>
      {contextHolder}
    </>
  )
}

export default AuthForm
