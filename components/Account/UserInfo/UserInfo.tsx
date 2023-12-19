import { auth } from '@/firebase/config'
import { UserAvatar, ProfileContainer } from './UserInfo.styles'

const UserInfo = () => {
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

export default UserInfo
