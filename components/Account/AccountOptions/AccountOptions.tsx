import { signOut } from 'firebase/auth'
import { auth } from '@/firebase/config'
import { SettingOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Option, OptionsList } from './AccountOptions.styles'

const AccountOptions = () => {
  const SignOut = () => () => signOut(auth)

  return (
    <OptionsList>
      <Option>
        <UserOutlined />
        <p>Profile</p>
      </Option>
      <Option>
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
