import { Input, Typography } from 'antd'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import capitalizeWord from '@/utils/capitalizeWord'
import { ErrorMessage } from '../AuthForm/AuthForm.styles'
import { InputTypes } from '@/types/Auth/InputTypes'
import { AuthFormInputs } from '@/types/Auth/AuthFormInputs'

type AuthInputProps = {
  control: Control<AuthFormInputs>
  name: InputTypes
  type: string
  errors: FieldErrors<AuthFormInputs>
}

const AuthInput = ({ control, name, type, errors }: AuthInputProps) => {
  return (
    <div>
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
              status={errors[name] ? 'error' : ''}
              autoComplete="true"
            />
            {errors[name] && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
          </>
        )}
      ></Controller>
    </div>
  )
}

export default AuthInput
