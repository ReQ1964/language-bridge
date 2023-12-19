import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './AccountOptions.stories'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'

const { Default } = composeStories(stories)

vi.mock('next/router', () => require('next-router-mock'))

describe('AccountOptions Component', () => {
  beforeEach(() => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
  })

  it('should render all the list items', () => {
    expect(screen.getByText('Profile')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
    expect(screen.getByText('Sign Out')).toBeInTheDocument()
  })

  it('should navigate to profile page when settings option is clicked', async () => {
    mockRouter.push('/account')
    await userEvent.click(screen.getByText('Profile'))

    expect(mockRouter).toMatchObject({
      pathname: '/account/profile',
    })
  })

  it('should navigate to profile settings page when settings option is clicked', async () => {
    mockRouter.push('/account')
    await userEvent.click(screen.getByText('Settings'))

    expect(mockRouter).toMatchObject({
      pathname: '/account/settings',
    })
  })
})
