import withRouteProtection from '@/utils/withRouteProtection'
import UserProfile from '@/components/Account/UserProfile/UserProfile'
import AccountOptions from '@/components/Account/AccountOptions/AccountOptions'

const AccountPage = () => {
  return (
    <section>
      <UserProfile />
      <AccountOptions />
    </section>
  )
}

export default withRouteProtection(AccountPage, '/auth', true)
