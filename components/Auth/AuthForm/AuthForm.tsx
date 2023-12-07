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
  NextImage,
  ErrorMessage,
} from './AuthForm.styles'
import formsPic from '@/public/images/login/forms-pic.jpg'
import OutsideProvidersAuth from '../OutsideProvidersAuth/OutsideProvidersAuth'
import { getMessageFromErrorCode } from '@/utils/getMessageFromAuthError'

YupPassword(yup)

type AuthFormInputsData = {
  username?: string
  email: string
  password: string
}

type AuthFormProps = {
  title: string
  setAuthMethod: (method: 'login' | 'signup') => void
  onSubmit: (data: AuthFormInputsData) => void
  schema: yup.AnyObjectSchema
  errorCode: string
  setErrorCode: (arg0: string) => void
}

const AuthForm = ({
  title,
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
      <NextImage
        src={formsPic}
        alt="Two people learning"
        priority={true}
        height={100}
        width={100}
        unoptimized
      />
      <SForm onSubmit={handleSubmit(onFormSubmit)}>
        <h2>{title}</h2>
        {schema.fields.username && (
          <div>
            <Typography.Title level={5}>Username</Typography.Title>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur } }) => (
                <>
                  <Input
                    size="large"
                    placeholder="Enter your username"
                    type="text"
                    onChange={onChange}
                    onBlur={onBlur}
                    status={errors.username ? 'error' : ''}
                  />
                  {errors.username && <ErrorMessage>{errors.username?.message}</ErrorMessage>}
                </>
              )}
            ></Controller>
          </div>
        )}
        <div>
          <Typography.Title level={5}>Email</Typography.Title>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur } }) => (
              <>
                <Input
                  size="large"
                  placeholder="Enter your email"
                  type="text"
                  onChange={onChange}
                  onBlur={onBlur}
                  status={errors.email ? 'error' : ''}
                />
                {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
              </>
            )}
          ></Controller>
        </div>
        <div>
          <Typography.Title level={5}>Password</Typography.Title>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur } }) => (
              <>
                <Input
                  size="large"
                  placeholder="Enter your password"
                  type="password"
                  onChange={onChange}
                  onBlur={onBlur}
                  status={errors.password ? 'error' : ''}
                  autoComplete="on"
                />
                {errors.password && <ErrorMessage>{errors.password?.message}</ErrorMessage>}
              </>
            )}
          ></Controller>
        </div>
        <Btn size="large" htmlType="submit">
          {title}
        </Btn>
        <OutsideProvidersAuth />
        <HighlightedSpanContainer>
          {title === 'Log In' ? (
            <>
              New to Language Bridge?{' '}
              <HighlightedSpan onClick={() => setAuthMethod('signup')}>Sign up</HighlightedSpan>
            </>
          ) : (
            <>
              Already have an account?{' '}
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
