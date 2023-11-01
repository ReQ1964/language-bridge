import { useState, useEffect } from 'react';
import BurgerMenu from '@/components/Navigation/BurgerMenu/BurgerMenu';
import BurgerIcon from '@/components/Navigation/BurgerIcon/BurgerIcon';
import Logo from '@/components/Reusable/Logo/Logo';
import LanguagePicker from '../LanguagePicker/LanguagePicker';
import menu_account from '@/public/icons/navigation/menu_account.svg';
import S from './TopNavbar.styles';

const TopNavbar = ({ storyIsOpen }: { storyIsOpen?: boolean }) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(storyIsOpen || false);
	}, [storyIsOpen]);

	const toggleNavigationLinks = () => {
		setIsOpen((prevState) => !prevState);
	};

	return (
		<>
			<S.Navbar>
				<BurgerIcon
					handleIconChange={toggleNavigationLinks}
					isOpen={isOpen || storyIsOpen || false}
				/>
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
			<BurgerMenu isOpen={isOpen || storyIsOpen || false} />
		</>
	);
};

export default TopNavbar;
