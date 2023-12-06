import { IconsContainer, ProvidersHeading } from './OutsideProvidersAuth.styles'
import googleIcon from '@/public/icons/socials/google.svg'
import Image from 'next/image'

const OutsideProvidersAuth = () => {
  return (
    <article>
      <ProvidersHeading>Or continue with</ProvidersHeading>
      <IconsContainer>
        <Image src={googleIcon} alt="Icon to sign in with google" width={33} height={33} />
      </IconsContainer>
    </article>
  )
}

export default OutsideProvidersAuth
