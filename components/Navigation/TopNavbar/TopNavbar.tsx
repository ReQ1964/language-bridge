import BurgerMenu from '@/components/Navigation/BurgerMenu/BurgerMenu';
import Logo from '@/components/Reusable/Logo/Logo';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import menu_account from '@/public/icons/navigation/menu_account.svg';
import S from './TopNavbar.styles';

export const TopNavbar = ({ storyIsOpen }: { storyIsOpen?: boolean }) => {
	return (
		<S.Navbar>
			<BurgerMenu storyIsOpen={storyIsOpen || false} />
			<Logo />
			<S.RightContainer>
				<S.AccountIcon
					src={menu_account}
					width={29}
					height={29}
					alt="Icon to go to the account page"
				/>
				<LanguagePicker />
			</S.RightContainer>
		</S.Navbar>
	);
};
