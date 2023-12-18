import { auth } from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { NextComponentType, NextPage } from 'next'
import { useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LoadingIcon from '@/components/Reusable/LoadingIcon/LoadingIcon'

const withRouteProtection = (
  Component: NextComponentType,
  redirectRoute: string,
  requireAuth: boolean
) => {
  const Auth: NextPage = (props) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useLayoutEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (requireAuth ? !user : user) {
          router.replace(redirectRoute)
        } else {
          setIsLoading(false)
        }
      })
    })

    if (isLoading) {
      return <LoadingIcon fullscreen />
    }
    return <Component {...props} />
  }

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps
  }

  return Auth
}

export default withRouteProtection
