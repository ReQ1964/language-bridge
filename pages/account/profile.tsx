import withRouteProtection from '@/utils/withRouteProtection'
import { ProfileSection } from '@/components/Account/Profile/DailyAnnouncement/DailyAnnouncement.styles'
import DailyAnnouncement from '@/components/Account/Profile/DailyAnnouncement/DailyAnnouncement'
import BackNavigationBar from '@/components/Reusable/BackNavigationBar/BackNavigationBar'
import DataTiles from '@/components/Account/Profile/DataTiles/DataTiles'

const ProfilePage = () => {
  return (
    <ProfileSection>
      <BackNavigationBar currentPageName="My Profile" />
      <DailyAnnouncement wordsQuantity={10} textsQuantity={10} />
      <DataTiles />
    </ProfileSection>
  )
}

export default withRouteProtection(ProfilePage, '/auth', true)
