import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import * as stories from './BurgerIcon.stories'

const { Burger, Close } = composeStories(stories)

const mockHandleIconChange = vi.fn()

describe('BurgerIcon', () => {
  it('should render BurgerIcon with menu_burger when isOpen is true', () => {
    render(<Burger handleIconChange={mockHandleIconChange} isOpen={true} />)
    const menuCloseIcon = screen.getByAltText(/icon to close the navigation bar/i)
    expect(menuCloseIcon).toBeInTheDocument()
  })

  it('should render BurgerIcon with menu_close when isOpen is false', () => {
    render(<Close handleIconChange={mockHandleIconChange} isOpen={false} />)
    const menuBurgerIcon = screen.getByAltText(/icon to open the navigation bar/i)
    expect(menuBurgerIcon).toBeInTheDocument()
  })

  it('should call handleIconChange when clicked', async () => {
    render(<Close handleIconChange={mockHandleIconChange} isOpen={false} />)
    const menuBurgerIcon = screen.getByAltText(/icon to open the navigation bar/i)

    await userEvent.click(menuBurgerIcon)
    expect(mockHandleIconChange).toHaveBeenCalled()
  })
})
