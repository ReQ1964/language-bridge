import { useRouter } from 'next/router'

const useBackNavigation = () => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return { goBack }
}

export default useBackNavigation
