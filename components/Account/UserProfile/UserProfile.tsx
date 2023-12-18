import { auth } from '@/firebase/config'
import { UserAvatar, ProfileContainer } from './UserProfile.styles'

const UserProfile = () => {
  const currentUserName = auth.currentUser?.displayName
  const currentUserFirstLetter = currentUserName?.charAt(0).toUpperCase()
  return (
    <ProfileContainer>
      <UserAvatar>
        <p>{currentUserFirstLetter}</p>
      </UserAvatar>
      <p>{currentUserName}</p>
    </ProfileContainer>
  )
}

export default UserProfile
