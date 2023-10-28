import { useState } from 'react'
import BurgerIcon from '@/components/Navigation/BurgerIcon/BurgerIcon'
import BurgerMenu from '@/components/Navigation/BurgerMenu/BurgerMenu'
import Logo from '@/components/Reusable/Logo/Logo'
import LanguagePicker from '@/components/Navigation/LanguagePicker/LanguagePicker'
import menu_account from '@/public/icons/navigation/menu_account.svg'
import S from './TopNavbar.styles'

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNavigationLinks = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <S.Navbar>
        <BurgerIcon handleIconChange={toggleNavigationLinks} isOpen={isOpen} />
        <Logo />
        <S.RightContainer>
          <S.AccountIcon
            src={menu_account}
            width={29}
            height={29}
            alt='Icon to go to the account page'
          />
          <LanguagePicker />
        </S.RightContainer>
      </S.Navbar>
      <BurgerMenu isOpen={isOpen} />
    </>
  )
}

export default TopNavbar
