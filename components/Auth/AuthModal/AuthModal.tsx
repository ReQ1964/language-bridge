import { Modal } from 'antd'
import { ReactElement, useEffect } from 'react'

type AuthModalTypes = {
  title: string
  type: 'info' | 'error' | 'warning' | 'confirm'
  content: string | ReactElement
  onOk: () => void
  isVisible: boolean
}

const AuthModal = ({ title, type, content, onOk, isVisible }: AuthModalTypes) => {
  const [modal, contextHolder] = Modal.useModal()

  useEffect(() => {
    if (isVisible) {
      modal[type]({
        title,
        content,
        centered: true,
        onOk,
      })
    }
  }, [title, type, content, isVisible, onOk, modal])

  return contextHolder
}

export default AuthModal
