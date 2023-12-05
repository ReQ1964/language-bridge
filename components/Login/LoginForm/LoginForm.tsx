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
  NextImage,
  ErrorMessage,
  ForgotPassword,
  HighlightedSpanContainer,
} from '../AuthForms.styles'
import formsPic from '@/public/images/login/forms-pic.jpg'
import OutsideProvidersAuth from '../OutsideProvidersAuth/OutsideProvidersAuth'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

type LogInFormInputsData = {
  email: string
  password: string
}

type LogInFormProps = {
  setAuthMethod: (method: 'login' | 'signup') => void
}

const schema = yup.object().shape({
  email: yup.string().email().required('email is a required field'),
  password: yup.string().password().required('password is a required field'),
})

const LogInForm = ({ setAuthMethod }: LogInFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormInputsData>({ resolver: yupResolver(schema) })
  const auth = getAuth()

  const onSubmit = (data: LogInFormInputsData) => {
    signInWithEmailAndPassword(auth, data.email, data.password).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode + errorMessage)
    })
  }

  const setAuthMethodToSignUp = () => {
    setAuthMethod('signup')
  }

  return (
    <>
      <NextImage src={formsPic} alt="Two people learning" />
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Log In</h2>
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
        <ForgotPassword>Forgot password?</ForgotPassword>
        <Btn size="large" htmlType="submit">
          Log In
        </Btn>
        <OutsideProvidersAuth />
        <HighlightedSpanContainer>
          New to Language Bridge?{' '}
          <HighlightedSpan onClick={setAuthMethodToSignUp}>Sign up</HighlightedSpan>
        </HighlightedSpanContainer>
      </SForm>
    </>
  )
}

export default LogInForm
