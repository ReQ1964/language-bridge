import withRouteProtection from '@/utils/withRouteProtection'
import UserInfo from '@/components/Account/UserInfo/UserInfo'
import AccountOptions from '@/components/Account/AccountOptions/AccountOptions'

const AccountPage = () => {
  return (
    <section>
      <UserInfo />
      <AccountOptions />
    </section>
  )
}

export default withRouteProtection(AccountPage, '/auth', true)
