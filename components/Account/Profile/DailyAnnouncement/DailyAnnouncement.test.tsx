import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './DailyAnnouncement.stories'

const { Default } = composeStories(stories)

describe('DailyAnnouncement Component', () => {
  it('should render DailyAnnoucement component with the right props', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
    const textsCount = screen.getByText(/2 texts/)
    expect(textsCount).toBeInTheDocument()

    const wordsCount = screen.getByText(/600 words/)
    expect(wordsCount).toBeInTheDocument()
  })
})
