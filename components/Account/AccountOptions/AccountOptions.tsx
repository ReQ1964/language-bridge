import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/config'
import { SettingOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Option, OptionsList } from './AccountOptions.styles'
import { useRouter } from 'next/router'

const AccountOptions = () => {
  const router = useRouter()

  const SignOut = () => () => signOut(auth)

  const GoToProfilePage = () => {
    router.push('/account/profile')
  }

  const GoToProfileSettings = () => {
    router.push('/account/settings')
  }

  return (
    <OptionsList>
      <Option onClick={GoToProfilePage}>
        <UserOutlined />
        <p>Profile</p>
      </Option>
      <Option onClick={GoToProfileSettings}>
        <SettingOutlined />
        <p>Settings</p>
      </Option>
      <Option onClick={SignOut}>
        <LogoutOutlined />
        <p>Sign Out</p>
      </Option>
    </OptionsList>
  )
}

export default AccountOptions
