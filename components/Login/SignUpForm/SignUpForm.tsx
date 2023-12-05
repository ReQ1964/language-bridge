import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import YupPassword from 'yup-password'
YupPassword(yup)
import { yupResolver } from '@hookform/resolvers/yup'
import { Input, Typography } from 'antd'
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

type SignUpFormInputsData = {
  username: string
  email: string
  password: string
}

type SignUpFormProps = {
  setAuthMethod: (method: 'login' | 'signup') => void
}

const schema = yup.object().shape({
  username: yup.string().required('username is a required field'),
  email: yup.string().email().required('email is a required field'),
  password: yup.string().password().required('password is a required field'),
})

const SignUpForm = ({ setAuthMethod }: SignUpFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputsData>({ resolver: yupResolver(schema) })

  const onSubmit = (data: SignUpFormInputsData) => {
    console.log(data)
  }

  const setAuthMethodToLogin = () => {
    setAuthMethod('login')
  }

  return (
    <>
      <NextImage src={formsPic} alt="Two people learning" />
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
    </>
  )
}

export default SignUpForm
