import BurgerMenu from '@/components/Navigation/BurgerMenu/BurgerMenu';
import menu_account from '@/public/icons/navigation/menu_account.svg';
import Logo from '@/components/Reusable/Logo/Logo';
import S from './TopNavbar.styles';
import Image from 'next/image';

export const TopNavbar = () => {
	return (
		<S.Navbar>
			<BurgerMenu />
			<Logo />
			<Image
				src={menu_account}
				width={32}
				height={32}
				alt="Icon to go to the account page"
			/>
		</S.Navbar>
	);
};
