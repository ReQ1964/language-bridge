import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './Hero.stories'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'

const { Default } = composeStories(stories)

vi.mock('next/router', () => require('next-router-mock'))

describe('Hero', () => {
  beforeEach(() => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
  })

  it('should render hero section with content', () => {
    expect(screen.getByText('Studying Online is now much easier')).toBeInTheDocument()
    expect(
      screen.getByText("Learn everyday language in context. Let's connect and bridge the gap!")
    ).toBeInTheDocument()
    expect(screen.getByAltText('Two people talking online')).toBeInTheDocument()
  })

  it('should redirect to account page when the login button is clicked', async () => {
    const btn = screen.getByText('Login')
    await userEvent.click(btn)

    expect(mockRouter).toMatchObject({
      pathname: '/account',
    })
  })
})
