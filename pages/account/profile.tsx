import withRouteProtection from '@/utils/withRouteProtection'

const ProfilePage = () => {
  return <div>ProfilePage</div>
}

export default withRouteProtection(ProfilePage, '/auth', true)
