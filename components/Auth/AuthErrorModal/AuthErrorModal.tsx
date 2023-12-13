import { Modal } from 'antd'
import { useEffect } from 'react'
import { getMessageFromErrorCode } from '@/utils/getMessageFromAuthError'
import { ErrorMessage } from '../AuthForm/AuthForm.styles'

type AuthErrorModalProps = {
  errorCode: string
  setErrorCode: (arg0: string) => void
}

const AuthErrorModal = ({ errorCode, setErrorCode }: AuthErrorModalProps) => {
  const [modal, contextHolder] = Modal.useModal()

  useEffect(() => {
    if (errorCode) {
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
  }, [errorCode, modal, setErrorCode])

  return contextHolder
}

export default AuthErrorModal
