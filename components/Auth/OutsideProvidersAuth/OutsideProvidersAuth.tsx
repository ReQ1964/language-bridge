import { useState, useEffect } from 'react'
import { IconsContainer, ProvidersHeading } from './OutsideProvidersAuth.styles'
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth'
import { auth } from '@/firebase/config'
import googleIcon from '@/public/icons/socials/google.svg'
import Image from 'next/image'
import AuthModal from '../AuthModal/AuthModal'
import { ErrorMessage } from '../AuthForm/AuthForm.styles'
import { getMessageFromErrorCode } from '@/utils/getMessageFromAuthError'

const OutsideProvidersAuth = () => {
  const provider = new GoogleAuthProvider()
  const [errorCode, setErrorCode] = useState('')

  const signInWithGoogle = () => {
    signInWithRedirect(auth, provider)
  }

  useEffect(() => {
    getRedirectResult(auth).catch((error) => {
      setErrorCode(error.code)
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
      <AuthModal
        title="Error!"
        type="error"
        content={<ErrorMessage>{getMessageFromErrorCode(errorCode)}</ErrorMessage>}
        onOk={() => setErrorCode('')}
        isVisible={errorCode ? true : false}
      />
    </article>
  )
}

export default OutsideProvidersAuth
