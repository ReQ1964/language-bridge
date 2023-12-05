import { auth } from '@/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { NextComponentType, NextPage } from 'next'
import { useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LoadingIcon from '@/components/Reusable/LoadingIcon/LoadingIcon'

const withAuth = (Component: NextComponentType) => {
  const Auth: NextPage = (props) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)

    useLayoutEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          router.replace('/account')
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

export default withAuth
