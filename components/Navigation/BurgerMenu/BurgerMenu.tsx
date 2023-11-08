import { UnorderedList, ListItem, NextLink } from './BurgerMenu.styles'
import routePages from '@/config/routePages'
import capitalizeWord from '@/utils/capitalizeWord'

const BurgerMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div>
      <UnorderedList isOpen={isOpen}>
        {routePages.map((page) => (
          <ListItem key={page.name}>
            <NextLink href={page.path}>{capitalizeWord(page.name)}</NextLink>
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  )
}

export default BurgerMenu
