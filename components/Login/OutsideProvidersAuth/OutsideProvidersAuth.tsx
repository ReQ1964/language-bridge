import { useState, useEffect } from 'react'
import { IconsContainer, ProvidersHeading } from './OutsideProvidersAuth.styles'
import { ErrorMessage } from '../AuthForms.styles'
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth'
import { auth } from '@/firebase/config'
import { Modal } from 'antd'
import googleIcon from '@/public/icons/socials/google.svg'
import Image from 'next/image'
import { getMessageFromErrorCode } from '@/utils/getMessageFromAuthError'

const OutsideProvidersAuth = () => {
  const provider = new GoogleAuthProvider()
  const [loginError, setLoginError] = useState('')
  const [modal, contextHolder] = Modal.useModal()

  const modalConfig = {
    title: 'Error!',
    content: <ErrorMessage>{loginError}</ErrorMessage>,
    centered: true,
  }

  const showModal = () => {
    modal.error(modalConfig)
  }

  const signInWithGoogle = () => {
    signInWithRedirect(auth, provider)
  }

  useEffect(() => {
    getRedirectResult(auth).catch((error) => {
      setLoginError(getMessageFromErrorCode(error.code))
      showModal()
    })
  })

  return (
    <article>
      <ProvidersHeading>Or continue with</ProvidersHeading>
      <IconsContainer>
        <Image
          src={googleIcon}
          alt="Icon to sign in with google"
          width={33}
          height={33}
          onClick={signInWithGoogle}
        />
      </IconsContainer>
      {contextHolder}
    </article>
  )
}

export default OutsideProvidersAuth
