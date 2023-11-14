// textsList.test.js
import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './TextsList.stories'

const { Default } = composeStories(stories)

const sampleTexts = [
  {
    image: 'path-to-image-1',
    imageAlt: 'Image Alt Text 1',
    title: 'Sample Story 1',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 1.',
  },
  {
    image: 'path-to-image-2',
    imageAlt: 'Image Alt Text 2',
    title: 'Sample Story 2',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 2.',
  },
  {
    image: 'path-to-image-3',
    imageAlt: 'Image Alt Text 3',
    title: 'Sample Story 3',
    snippet: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit 3.',
  },
]

describe('TextsList', () => {
  it('should render TextsList component with sample texts', () => {
    render(
      <ThemesProvider>
        <Default texts={sampleTexts} />
      </ThemesProvider>
    )

    const headingElement = screen.getByText(/popular texts/i)
    expect(headingElement).toBeInTheDocument()

    sampleTexts.forEach((text) => {
      const titleElement = screen.getByText(text.title)
      const snippetElement = screen.getByText(text.snippet)
      const imageElement = screen.getByAltText(text.imageAlt)

      expect(titleElement).toBeInTheDocument()
      expect(snippetElement).toBeInTheDocument()
      expect(imageElement).toBeInTheDocument()
    })
  })
})
