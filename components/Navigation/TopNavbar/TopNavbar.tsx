import { useState } from 'react'
import BurgerIcon from '@/components/Navigation/BurgerIcon/BurgerIcon'
import BurgerMenu from '@/components/Navigation/BurgerMenu/BurgerMenu'
import Logo from '@/components/Reusable/Logo/Logo'
import LanguagePicker from '@/components/Navigation/LanguagePicker/LanguagePicker'
import menu_account from '@/public/icons/navigation/menu_account.svg'
import { Navbar, RightContainer, AccountIcon } from './TopNavbar.styles'
import { useRouter } from 'next/router'

const TopNavbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavigationLinks = () => {
    setIsOpen((prevState) => !prevState)
  }

  const redirectToAccountPage = () => {
    router.push('/account')
  }

  return (
    <>
      <Navbar>
        <BurgerIcon handleIconChange={toggleNavigationLinks} isOpen={isOpen} />
        <Logo />
        <RightContainer>
          <AccountIcon
            src={menu_account}
            width={29}
            height={29}
            alt="Icon to go to the account page"
            onClick={redirectToAccountPage}
          />
          <LanguagePicker />
        </RightContainer>
      </Navbar>
      <BurgerMenu isOpen={isOpen} />
    </>
  )
}

export default TopNavbar
