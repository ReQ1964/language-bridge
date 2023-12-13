import { Modal } from 'antd'
import { ReactElement, useEffect } from 'react'

type AuthModalTypes = {
  title: string
  content: string | ReactElement
  onOk: () => void
  isVisible: boolean
}

const AuthModal = ({ title, content, onOk, isVisible }: AuthModalTypes) => {
  const [modal, contextHolder] = Modal.useModal()

  useEffect(() => {
    if (isVisible) {
      modal.info({
        title,
        content,
        centered: true,
        onOk,
      })
    }
  }, [isVisible, modal, title, content, onOk])

  return contextHolder
}

export default AuthModal
