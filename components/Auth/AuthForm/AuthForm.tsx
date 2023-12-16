import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  SForm,
  Btn,
  HighlightedSpan,
  HighlightedSpanContainer,
  ForgotPassword,
  ErrorMessage,
} from './AuthForm.styles'
import AuthInput from '../AuthInput/AuthInput'
import OutsideProvidersAuth from '../OutsideProvidersAuth/OutsideProvidersAuth'
import AuthModal from '../AuthModal/AuthModal'
import { getMessageFromErrorCode } from '@/utils/getMessageFromAuthError'
import { InputTypes, AuthFormInputs, AuthMethods } from '@/types/authTypes'

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
  error: string
  setError: (arg0: string) => void
  isLinkSent?: boolean
  setIsLinkSet?: (arg0: boolean) => void
}

const AuthForm = ({
  title,
  inputs,
  btnText,
  setAuthMethod,
  onSubmit,
  schema,
  error,
  setError,
  isLinkSent,
  setIsLinkSet,
}: AuthFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInputs>({ resolver: yupResolver(schema) })

  const renderLink = (title: string, setAuthMethod: (method: AuthMethods) => void) => {
    const linkText =
      title === 'Log In'
        ? { main: 'New to Language Bridge?', action: 'Sign up', method: AuthMethods.Login }
        : title === 'Sign Up'
        ? { main: 'Already have an account?', action: 'Log In', method: AuthMethods.Signup }
        : { main: 'Return to', action: 'Log In', method: AuthMethods.Login }

    return (
      <>
        {linkText.main}{' '}
        <HighlightedSpan onClick={() => setAuthMethod(linkText.method)}>
          {linkText.action}
        </HighlightedSpan>
      </>
    )
  }

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

        <HighlightedSpanContainer>{renderLink(title, setAuthMethod)}</HighlightedSpanContainer>

        <AuthModal
          title="Error!"
          type="error"
          content={<ErrorMessage>{getMessageFromErrorCode(error)}</ErrorMessage>}
          onOk={() => setError('')}
          isVisible={error ? true : false}
        />
        <AuthModal
          title="Link was sent!"
          type="info"
          content="Please, check your inbox for a password reset link."
          onOk={() => (setIsLinkSet ? setIsLinkSet(false) : undefined)}
          isVisible={isLinkSent ?? false}
        />
      </SForm>
    </>
  )
}

export default AuthForm
