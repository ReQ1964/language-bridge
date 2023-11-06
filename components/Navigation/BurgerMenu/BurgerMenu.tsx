import S from './BurgerMenu.styles';
import routePages from '@/config/routePages';
import capitalizeWord from '@/utils/capitalizeWord';

const BurgerMenu = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<div>
			<S.UnorderedList isOpen={isOpen}>
				{routePages.map((page) => (
					<S.ListItem key={page.name}>
						<S.NextLink href={page.path}>{capitalizeWord(page.name)}</S.NextLink>
					</S.ListItem>
				))}
			</S.UnorderedList>
		</div>
	);
};

export default BurgerMenu;
