import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(yup)
import { yupResolver } from '@hookform/resolvers/yup'
import { Input, Typography, Modal } from 'antd'
import {
  SForm,
  Btn,
  HighlightedSpan,
  HighlightedSpanContainer,
  NextImage,
  ErrorMessage,
} from '../AuthForms.styles'
import formsPic from '@/public/images/login/forms-pic.jpg'
import OutsideProvidersAuth from '../OutsideProvidersAuth/OutsideProvidersAuth'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getMessageFromErrorCode } from '@/utils/getMessageFromAuthError'

type SignUpFormInputsData = {
  username: string
  email: string
  password: string
}

type SignUpFormProps = {
  setAuthMethod: (method: 'login' | 'signup') => void
}

const schema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'username must be at least 3 characters')
    .required('username is required'),
  email: yup.string().email('email must be valid').required('email is required'),
  password: yup.string().password().required('password is required'),
})

const SignUpForm = ({ setAuthMethod }: SignUpFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputsData>({ resolver: yupResolver(schema) })
  const auth = getAuth()
  const [loginError, setLoginError] = useState('')
  const [modal, contextHolder] = Modal.useModal()

  const onSubmit = (data: SignUpFormInputsData) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: data.username,
          })
        }
      })
      .catch((error) => {
        console.log(error.code)
        setLoginError(getMessageFromErrorCode(error.code))
        showModal()
      })
  }

  const setAuthMethodToLogin = () => {
    setAuthMethod('login')
  }

  const modalConfig = {
    title: 'Error!',
    content: <ErrorMessage>{loginError}</ErrorMessage>,
    centered: true,
  }

  const showModal = () => {
    modal.error(modalConfig)
  }

  return (
    <>
      <NextImage src={formsPic} alt="Two people learning" priority={true} />
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>
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
          Sign Up
        </Btn>
        <OutsideProvidersAuth />
        <HighlightedSpanContainer>
          Already have an account?{' '}
          <HighlightedSpan onClick={setAuthMethodToLogin}>Log In</HighlightedSpan>
        </HighlightedSpanContainer>
      </SForm>
      {contextHolder}
    </>
  )
}

export default SignUpForm
