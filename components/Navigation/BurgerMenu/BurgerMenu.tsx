import S from './BurgerMenu.styles';

const BurgerMenu = ({ isOpen }: { isOpen: boolean }) => {
	const pages = [
		{ name: 'home', path: '/' },
		{ name: 'contact', path: '/contact' },
		{ name: 'about', path: '/about' },
		{ name: 'texts', path: '/texts' },
	];

	const capitalizeWord = (word: string) =>
		word.charAt(0).toUpperCase() + word.slice(1);

	return (
		<div>
			<S.UnorderedList isOpen={isOpen}>
				{pages.map((page) => (
					<S.ListItem key={page.name}>
						<S.NextLink href={page.path}>{capitalizeWord(page.name)}</S.NextLink>
					</S.ListItem>
				))}
			</S.UnorderedList>
		</div>
	);
};

export default BurgerMenu;
