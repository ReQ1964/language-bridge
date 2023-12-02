import { useForm, Controller } from 'react-hook-form'
import { Input, Typography } from 'antd'
import { SForm, Btn, HighlightedSpan, NextImage } from './SignUpForm.styles'
import formsPic from '@/public/images/login/forms-pic.jpg'

type FormInputsData = {
  username: string
  email: string
  password: string
}

const SignUpForm = () => {
  const { control, handleSubmit } = useForm<FormInputsData>()

  const onSubmit = (data: FormInputsData) => {
    console.log(data)
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
              <Input
                size="large"
                placeholder="Enter your username"
                type="text"
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          ></Controller>
        </div>
        <div>
          <Typography.Title level={5}>Email</Typography.Title>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur } }) => (
              <Input
                size="large"
                placeholder="Enter your email"
                type="text"
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          ></Controller>
        </div>
        <div>
          <Typography.Title level={5}>Password</Typography.Title>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur } }) => (
              <Input
                size="large"
                placeholder="Enter your password"
                type="password"
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          ></Controller>
        </div>
        <h4>
          Already have an account? <HighlightedSpan>Log In</HighlightedSpan>
        </h4>
        <Btn size="large" htmlType="submit">
          Sign Up
        </Btn>
      </SForm>
    </>
  )
}

export default SignUpForm
