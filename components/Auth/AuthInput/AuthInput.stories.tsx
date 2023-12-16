import type { Meta, StoryFn } from '@storybook/react'
import AuthInput from './AuthInput'
import { useForm } from 'react-hook-form'
import { AuthFormInputs } from '@/types/authTypes'

const meta: Meta<typeof AuthInput> = {
  component: AuthInput,
  argTypes: {
    type: {
      options: ['text', 'password'],
      control: { type: 'radio' },
    },
  },
}

const Template: StoryFn = (args) => {
  const {
    control,
    formState: { errors },
  } = useForm<AuthFormInputs>()

  return <AuthInput control={control} name="email" type="text" errors={errors} {...args} />
}

export default meta

export const ExampleInput = Template.bind({})
