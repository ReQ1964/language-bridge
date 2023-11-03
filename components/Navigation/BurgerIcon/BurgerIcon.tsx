import menu_burger from '@/public/icons/navigation/menu_burger.svg';
import menu_close from '@/public/icons/navigation/menu_close.svg';
import S from './BurgerIcon.styles';

const BurgerIcon = ({
	handleIconChange,
	isOpen,
}: {
	handleIconChange: Function;
	isOpen: boolean;
}) => {
	const nextImage = (src: string, alt: string) => (
		<S.NextImage
			src={src}
			width={28}
			height={28}
			alt={alt}
			onClick={handleIconClick}
		/>
	);

	const handleIconClick = () => {
		handleIconChange();
	};

	return (
		<>
			{isOpen
				? nextImage(menu_close, 'Icon to close the navigation bar')
				: nextImage(menu_burger, 'Icon to open the navigation bar')}
		</>
	);
};

export default BurgerIcon;
