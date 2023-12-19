import withRouteProtection from '@/utils/withRouteProtection'
import useBackNavigation from '@/hooks/useBackNavigation'

const ProfilePage = () => {
  const { goBack } = useBackNavigation()

  return <div onClick={goBack}>ProfilePage</div>
}

export default withRouteProtection(ProfilePage, '/auth', true)
