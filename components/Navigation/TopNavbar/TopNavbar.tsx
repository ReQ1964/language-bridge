import BurgerMenu from '@/components/Navigation/BurgerMenu/BurgerMenu';
import Logo from '@/components/Reusable/Logo/Logo';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import menu_account from '@/public/icons/navigation/menu_account.svg';
import S from './TopNavbar.styles';
import Image from 'next/image';

export const TopNavbar = () => {
	return (
		<S.Navbar>
			<BurgerMenu />
			<Logo />
			<S.RightContainer>
				<S.AccountIcon
					src={menu_account}
					width={34}
					height={34}
					alt="Icon to go to the account page"
				/>
				<LanguagePicker />
			</S.RightContainer>
		</S.Navbar>
	);
};
