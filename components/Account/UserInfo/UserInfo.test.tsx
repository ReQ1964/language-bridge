import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './UserInfo.stories'

const { Default } = composeStories(stories)

describe('UserInfo Component', () => {
  vi.mock('@/firebase/config', () => ({
    auth: {
      currentUser: {
        displayName: 'John Doe',
      },
    },
  }))

  it('should render the username according to the database fetched username', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )

    const p = screen.getByText(/john/i)
    expect(p).toBeInTheDocument()
  })
})
