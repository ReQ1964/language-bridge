import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './BackNavigationBar.stories'
import ThemesProvider from '@/theme/ThemesProvider'
import mockRouter from 'next-router-mock'
vi.mock('next/router', () => require('next-router-mock'))
import userEvent from '@testing-library/user-event'

const { Default } = composeStories(stories)

describe('BackNavigationBar Component', () => {
  beforeEach(() => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
  })

  it('should render BackNavigationBar with the right page name', () => {
    const pageName = screen.getByText(Default.args.currentPageName ?? '')
    expect(pageName).toBeInTheDocument()
  })
  it('should navigate back on icon click', async () => {
    mockRouter.push('/')
    mockRouter.push('/testPage')

    const navIcon = screen.getByTestId('navIcon')
    await userEvent.click(navIcon)

    // ?
  })
})
