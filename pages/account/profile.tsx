import withRouteProtection from '@/utils/withRouteProtection'
import DailyAnnouncement from '@/components/Account/Profile/DailyAnnouncement/DailyAnnouncement'
import BackNavigationBar from '@/components/Reusable/BackNavigationBar/BackNavigationBar'

const ProfilePage = () => {
  return (
    <section>
      <BackNavigationBar currentPageName="My Profile" />
      <DailyAnnouncement wordsQuantity={10} textsQuantity={10} />
    </section>
  )
}

export default withRouteProtection(ProfilePage, '/auth', true)
