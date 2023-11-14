import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './SingleText.stories'

const { Default } = composeStories(stories)

const mockText = {
  image: 'example-image.png',
  imageAlt: 'Image Alt Text',
  title: 'Sample Story',
  snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
}

describe('SingleText', () => {
  beforeEach(() => {
    render(
      <ThemesProvider>
        <Default
          title={mockText.title}
          snippet={mockText.snippet}
          image={mockText.image}
          imageAlt={mockText.imageAlt}
        />
      </ThemesProvider>
    )
  })

  it('should render with provided props', () => {
    expect(screen.getByText(mockText.title)).toBeInTheDocument()
    expect(screen.getByText(mockText.snippet)).toBeInTheDocument()
    expect(screen.getByAltText(mockText.imageAlt)).toBeInTheDocument()
  })

  it('should render "Start reading" button and LanguageLevelIcon', () => {
    expect(screen.getByRole('button', { name: /start reading/i })).toBeInTheDocument()
    expect(screen.getByAltText('Level: a1')).toBeInTheDocument()
  })
})
