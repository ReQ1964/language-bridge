import { useState } from 'react';
import menu_burger from '@/public/icons/navigation/menu_burger.svg';
import menu_close from '@/public/icons/navigation/menu_close.svg';
import S from './BurgerMenu.styles';

const BurgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navigationVisibilityHandler = () => {
		setIsOpen((prevState) => !prevState);
	};

	const pages = [
		{ name: 'home', path: '/' },
		{ name: 'contact', path: '/contact' },
		{ name: 'about', path: '/about' },
		{ name: 'texts', path: '/texts' },
	];

	const capitalizeWord = (word: string) =>
		word.charAt(0).toUpperCase() + word.slice(1);

	const nextImage = (src: string, alt: string) => (
		<S.NextImage
			src={src}
			width={34}
			height={34}
			alt={alt}
			onClick={navigationVisibilityHandler}
		/>
	);
	return (
		<div>
			{isOpen
				? nextImage(menu_close, 'Icon to close the navigation bar')
				: nextImage(menu_burger, 'Icon to open the navigation bar')}

			<S.UnorderedList isOpen={isOpen}>
				{pages.map((page) => (
					<li key={page.name}>
						<S.NextLink href={page.path}>{capitalizeWord(page.name)}</S.NextLink>
					</li>
				))}
			</S.UnorderedList>
		</div>
	);
};

export default BurgerMenu;
