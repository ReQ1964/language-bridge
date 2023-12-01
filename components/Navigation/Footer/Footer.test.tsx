import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './Footer.stories'

const { Default } = composeStories(stories)

describe('Footer', () => {
  beforeEach(() => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
  })
  it('should render contact information', () => {
    expect(screen.getByText('Contact Information')).toBeInTheDocument()
    expect(screen.getByText('+48 523453331')).toBeInTheDocument()
    expect(screen.getByText('info@languagebridge')).toBeInTheDocument()
    expect(screen.getByText('Warsaw, Rick Astley Street')).toBeInTheDocument()
  })

  it('should render social media icons', () => {
    expect(screen.getByTestId('facebook-icon')).toBeInTheDocument()
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument()
    expect(screen.getByTestId('twitter-icon')).toBeInTheDocument()
  })

  it('should render bottom section', () => {
    expect(screen.getByText('2023 Language Bridge. All Rights Reserved')).toBeInTheDocument()
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })
})
