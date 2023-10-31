import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './BurgerMenu.stories'

const { Open, Close } = composeStories(stories)

describe('BurgerMenu', () => {
  const linkTexts = ['Home', 'Contact', 'About', 'Texts']

  it('should render the menu with links and be in view when isOpen is true', () => {
    render(
      <ThemesProvider>
        <Open />
      </ThemesProvider>
    )

    linkTexts.forEach((text) => {
      const link = screen.getByText(text)
      expect(link).toBeInTheDocument()
    })

    const menu = screen.getByRole('list')
    expect(menu).toHaveStyle(`transform: translateY(130%)`)
  })

  it('should render the menu with links and be out of view when isOpen is false', () => {
    render(
      <ThemesProvider>
        <Close />
      </ThemesProvider>
    )

    linkTexts.forEach((text) => {
      const link = screen.getByText(text)
      expect(link).toBeInTheDocument()
    })

    const menu = screen.getByRole('list')
    expect(menu).toHaveStyle(`transform: translateY(-40%)`)
  })

  it('should check if links have correct paths', () => {
    render(
      <ThemesProvider>
        <Open />
      </ThemesProvider>
    )

    linkTexts.forEach((text) => {
      const link = screen.getByText(text)
      if (text === 'Home') {
        expect(link).toHaveAttribute('href', '/')
      } else {
        expect(link).toHaveAttribute('href', `/${text.toLowerCase()}`)
      }
    })
  })

  it('should capitalize the first letter of each menu item', () => {
    render(
      <ThemesProvider>
        <Open />
      </ThemesProvider>
    )

    linkTexts.forEach((text) => {
      const link = screen.getByText(text)
      expect(link.textContent).toBe(text)
      expect(link.textContent?.charAt(0)).toMatch(/[A-Z]/)
    })
  })
})
