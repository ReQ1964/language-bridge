import withRouteProtection from '@/utils/withRouteProtection'
import useBackNavigation from '@/hooks/useBackNavigation'
import DailyAnnouncement from '@/components/Account/Profile/DailyAnnouncement/DailyAnnouncement'

const ProfilePage = () => {
  const { goBack } = useBackNavigation()

  return (
    <section>
      <p onClick={goBack}> Back</p>
      <DailyAnnouncement wordsQuantity={10} textsQuantity={10} />
    </section>
  )
}

export default withRouteProtection(ProfilePage, '/auth', true)
